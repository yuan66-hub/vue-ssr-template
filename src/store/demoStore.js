import { defineStore } from 'pinia'


export const useContentStore = defineStore('content', {
    state: () => ({ content: 'node数据' }),
    getters: {},
    actions: {
      async getDemoData(content) {
          try {
               const res = await fetch('http://localhost:3000/mock/data', {
                method: "post",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    content
                })
            })
            const data = await res.json()
            this.content = data.data.content
          } catch (error) {
            this.content = 'node 错误数据'
          }
      },
    },
})