// Utilities
import {defineStore} from 'pinia'

export const useAppStore = defineStore('books', {
  state: () => ({
    listBooks: [
      {
        name: "You don't know javascript",
        author: "Kyle Simpson",
        coverImage: '',
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
    editListBook(payload) {
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
      return Promise((resolve, reject) => {
        try {
          this.listBooks = this.listBooks.filter((book) => book.id !== id)
        } catch (e) {
          console.log("error in add books", e)
          reject(e)
        }
      })
    }
  }
})
