
const axios = require('axios');

const BASE_URL = 'http://localhost:5000';

// Retrieve all books
async function getAllBooks() {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching books:', error.message);
  }
}

// Retrieve a book by ISBN
async function getBookByISBN(isbn) {
  try {
    const response = await axios.get(`${BASE_URL}/isbn/${isbn}`);
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching book by ISBN:', error.message);
  }
}

// Retrieve books by author
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(
      `${BASE_URL}/author/${encodeURIComponent(author)}`
    );
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching books by author:', error.message);
  }
}

// Retrieve books by title
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(
      `${BASE_URL}/title/${encodeURIComponent(title)}`
    );
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching books by title:', error.message);
  }
}

module.exports = {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle
};
