import express, { Router } from 'express'
import path from 'path'
const app = express()
import { createApp } from '../app.js'
import { renderToString } from 'vue/server-renderer'
import { createRouter,createMemoryHistory } from 'vue-router'
import routes from '../routers/index.js';
import { createPinia } from 'pinia'

const pinia = createPinia()
app.use(express.static(path.resolve(process.cwd(), "client_build")));

app.use(express.json())
// 模拟一个请求
app.post('/mock/data', (req, res) => {
  res.send({
    code: "OK",
    data: req.body,
  })
})
const router = createRouter({
  history: createMemoryHistory(),
  routes:routes,
})
app.get("*",  async (req, res) => {
  // 坑 ---[Vue Router warn]: No match found for location with path "/favicon.ico"
  if(req.url ==='/favicon.ico'){
    res.send('')
    return 
  }
  const app =createApp()
  app.use(pinia)
  app.use(router)
  router.push(req.url) // 请求 url
  router.isReady().then(async () => {
    // 处理请求
    const content = await renderToString(app)
    // <script src="/bundle.js"></script>
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>Vue SSR Example</title>
        </head>
        <body>
          <div id="app">${content}</div>
          <script> window.__pinia=${JSON.stringify(pinia.state.value)}</script>
          <script src="/bundle.js"></script>
        </body>
      </html>
    `);
  }).catch(()=>{
    res.send(
      `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>Vue SSR Example</title>
        </head>
        <body>
          <div id="app">
            <h1>出错了</h1>
          </div>
          <script src="/bundle.js"></script>
        </body>
      </html>
      `
    )
  })
})



app.listen(3000, () => {
  console.log("listen server on  3000")
})
