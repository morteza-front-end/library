// Utilities
import {defineStore} from 'pinia'

export const useBookStore = defineStore('books', {
  state: () => ({
    listBooks: [
      {
        id: 1,
        name: "You don't know javascript 0",
        author: "Kyle Simpson",
        coverImage: "https://picsum.photos/200/300",
        genre: "scientific",
        pageNumber: "۱۱۴۰"
      },
      {
        id: 3,
        name: "You don't know javascript 1",
        author: "Kyle Simpson",
        coverImage: "https://picsum.photos/200/300",
        genre: "scientific",
        pageNumber: "۱۱۴۰"
      },
      {
        id: 2,
        name: "You don't know javascript 2",
        author: "Kyle Simpson",
        coverImage: "https://picsum.photos/200/300",
        genre: "scientific",
        pageNumber: "۱۱۴۰"
      },
      {
        id: 4,
        name: "You don't know javascript 3",
        author: "Kyle Simpson",
        coverImage: "https://picsum.photos/200/300",
        genre: "scientific",
        pageNumber: "۱۱۴۰"
      },
    ]
  }),
  getters: {
    allBook() {
      return this.listBooks
    }
  },
  actions: {
    getListBooks(startIndex, endIndex) {
      console.log("startIndex, endIndex=>",startIndex, endIndex)
      return this.listBooks.slice(startIndex, endIndex)
    },
    async addBooks(payload) {
      return new Promise((resolve, reject) => {
        try {
          this.listBooks.push(payload)
          resolve(true)
        } catch (e) {
          console.log("error in add books", e)
          reject(e)
        }
      })
    },
    editBook(payload) {
      return new Promise((resolve, reject) => {
        try {
          this.listBooks = this.listBooks.map((book) => {
            if (book.id === payload.id) {
              book = payload
            }
            return book
          })
          resolve(true)
        } catch (e) {
          console.log("error in add books", e)
          reject(e)
        }
      })
    },
    removeBook(id) {
      return new Promise((resolve, reject) => {
        try {
          this.listBooks = this.listBooks.filter((book) => book.id !== id)
          resolve(true)
        } catch (e) {
          console.log("error in add books", e)
          reject(e)
        }
      })
    }
  }
})
