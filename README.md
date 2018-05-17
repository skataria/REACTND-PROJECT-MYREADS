# MyReads Project
This app allows user to select and categorize books in three different shelves - 'Currently reading', 'Want to read' and 'Read'. User can move books between shelf as needed. It also provides search functionality to search for books and add it to their bookshelf. users can navigate between Bookshelves view and Search view.

## How to Run:

* Download or Run git clone https://github.com/skataria/REACTND-PROJECT-MYREADS.git to clone this repository.
* Install all project dependencies with `npm install`.
* Start the development server with `npm start`.
* App can be seen at: localhost:3000.

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms to use with your app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico 
│   └── index.html 
└── src
    ├── App.css # Styles for app.
    ├── App.js # This is the root of app. Contains static HTML right now.
    ├── App.test.js # Used for testing.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── BookShelves.js # Component to render books for 'currently reading', 'want to read' and 'read' shelves
    ├── ListBooks.js # Component to display a list of books.
    ├── Book.js # Book Component.
    ├── Search.js # Component for search functionality. 
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # It is used for DOM rendering only.
```

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
