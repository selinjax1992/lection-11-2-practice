import iziToast from 'izitoast';
import { fetchAllPosts } from './mockapi.js';
import { createNewPost } from './mockapi.js';
import { deletePostById } from './mockapi.js';
import { createPostCardTemplate } from './render-functions.js';

const refs = {
  postsList: document.querySelector('.js-posts-list'),
  form: document.querySelector('.js-post-form'),
};

const renderPost = () => {
  fetchAllPosts()
    .then(({ data }) => {
      const createGallery = data
        .map(post => createPostCardTemplate(post))
        .join('');
      refs.postsList.innerHTML = createGallery;
    })
    .catch(error => {
      console.log(error);
    });
};

renderPost();

const onFormSubmit = event => {
  event.preventDefault();
  const formData = {
    [event.target.elements.post_title.name]:
      event.target.elements.post_title.value.trim(),
    [event.target.elements.post_body.name]:
      event.target.elements.post_body.value.trim(),
  };

  const formDataValues = Object.values(formData);
  if (formDataValues.includes('')) {
    iziToast.error({
      message: 'Усі поля мають бути заповненими!!!',
      position: 'topRight',
      title: 'Error',
    });
    return;
  }

  createNewPost(formData)
    .then(response => {
      console.log(response);
      iziToast.success({
        message: 'Пост додано!',
        position: 'topRight',
      });
      event.target.reset();
      renderPost();
    })
    .catch(err => {
      console.log(err);
    });
};
refs.form.addEventListener('submit', onFormSubmit);

const onPostListClick = event => {
  const deleteBtnEl = event.target.closest('button[data-delete]');

  if (deleteBtnEl === null) {
    return;
  }
  const postId = deleteBtnEl.dataset.postId;
  deletePostById(postId)
    .then(() => {
      iziToast.success({
        message: 'Пост видалено!',
        position: 'topRight',
      });
      renderPost();
    })
    .catch(err => console.log(err));
};
refs.postsList.addEventListener('click', onPostListClick);
