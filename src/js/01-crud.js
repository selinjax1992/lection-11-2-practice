// Read (GET)

// const getBooks = () => {
//   return fetch('https://6ad7688495e98f36aef26841.mockapi.io/books').then(
//     response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// };
// getBooks()
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

// const getBookById = bookid => {
//   return fetch(
//     `https://6ad7688495e98f36aef26841.mockapi.io/books/${bookid}`
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// };
// getBookById(1)
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

// const addBook = bookInfo => {
//   const fetchOptions = {
//     method: 'POST',
//     body: JSON.stringify(bookInfo),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };
//   return fetch(
//     'https://6ad7688495e98f36aef26841.mockapi.io/books',
//     fetchOptions
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// };

// addBook({
//   title: 'The Great Gatsby',
//   author: 'F. Scott Fitzgerald',
//   genres: ['Fiction', 'Classic'],
//   raiting: 4.5,
// })
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

// const updateBook = (bookInfoforUpdate, bookid) => {
//   const fetchOptions = {
//     method: 'PUT',
//     body: JSON.stringify(bookInfoforUpdate),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };
//   return fetch(
//     `https://6ad7688495e98f36aef26841.mockapi.io/books/${bookid}`,
//     fetchOptions
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// };

// updateBook({ title: 'The Great Gatsby' }, 1)
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

// const deleteBook = bookid => {
//   const fetchOptions = {
//     method: 'DELETE',
//   };
//   return fetch(
//     `https://6ad7688495e98f36aef26841.mockapi.io/books/${bookid}`,
//     fetchOptions
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// };
