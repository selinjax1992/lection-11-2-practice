import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{a as i,i as a}from"./assets/vendor-wPsJSEoT.js";const l=()=>i.get("https://6ad7688495e98f36aef26841.mockapi.io/posts"),n=t=>i.post("https://6ad7688495e98f36aef26841.mockapi.io/posts",t),p=t=>i.delete(`https://6ad7688495e98f36aef26841.mockapi.io/posts/${t}`),m=({id:t,post_title:s,post_body:e})=>`<li class="posts-list-item" data-id="${t}">
    <button class="post-delete-btn" type="button" data-delete data-post-id="${t}">
      <svg class="post-delete-icon" width="18" height="18">
        <use href="/lection-11-2-practice/images/icons.svg#icon-trash"></use>
    </svg>
    </button>
    <h3 class="posts-list-item-title">${s}</h3>
    <p class="posts-list-item-text">${e}</p>
  </li>`,r={postsList:document.querySelector(".js-posts-list"),form:document.querySelector(".js-post-form")},c=()=>{l().then(({data:t})=>{const s=t.map(e=>m(e)).join("");r.postsList.innerHTML=s}).catch(t=>{console.log(t)})};c();const d=t=>{t.preventDefault();const s={[t.target.elements.post_title.name]:t.target.elements.post_title.value.trim(),[t.target.elements.post_body.name]:t.target.elements.post_body.value.trim()};if(Object.values(s).includes("")){a.error({message:"Усі поля мають бути заповненими!!!",position:"topRight",title:"Error"});return}n(s).then(o=>{console.log(o),a.success({message:"Пост додано!",position:"topRight"}),t.target.reset(),c()}).catch(o=>{console.log(o)})};r.form.addEventListener("submit",d);const u=t=>{const s=t.target.closest("button[data-delete]");if(s===null)return;const e=s.dataset.postId;p(e).then(()=>{a.success({message:"Пост видалено!",position:"topRight"}),c()}).catch(o=>console.log(o))};r.postsList.addEventListener("click",u);
//# sourceMappingURL=02-posts.js.map
