// Utilities
import {defineStore} from 'pinia'

export const useBookStore = defineStore('books', {
  state: () => ({
    listBooks: [
      {
        id: 1,
        name: "You don't know javascript",
        author: "Kyle Simpson",
        coverImage: "https://picsum.photos/200/300",
        genre: "scientific",
        pageNumber: "۱۱۴۰"
      }
    ]
  }),
  getters: {
    getListBooks() {
      return this.listBooks
    }
  },
  actions: {
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
