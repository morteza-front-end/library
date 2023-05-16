import {defineStore} from 'pinia'


export const useAuthorsStore = defineStore('authors', {
  state: () => ({
    listAuthors: [
      {
        id: 10,
        fullName: 'Kyle Simpson',
        profilePicture: "https://picsum.photos/150/150"     }
    ]
  }),
  getters: {
    getListAuthors() {
      return this.listAuthors
    }
  },
  actions: {
    addAuthor(payload) {
      return new Promise((resolve, reject) => {
        try {
          this.listAuthors.push(payload)
          resolve(true)
        } catch (e) {
          console.log("error on add authors", e)
          reject(false)
        }
      })
    },
    editAuthor(payload) {
      return new Promise((resolve, reject) => {
        try {
          this.listAuthors = this.listAuthors.map((author) => {
            if (author.id === payload.id) {
              author = payload
            }
            return author
          })
          resolve(true)
        } catch (e) {
          console.log("error on edit authors", e)
          reject(false)
        }
      })
    },
    removeAuthor(id) {
      return new Promise((resolve, reject) => {
        try {
          this.listAuthors = this.listAuthors.filter((author) => author.id !== id)
          resolve(true)
        } catch (e) {
          console.log("error on remove authors", e)
          reject(false)
        }
      })
    }
  }
})
