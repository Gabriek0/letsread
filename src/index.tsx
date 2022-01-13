import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from "miragejs";

createServer({
  models: {
    post: Model,
  },

  seeds(server) {
    server.db.loadData({
      posts: []
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/posts', () => {
      return this.schema.all('post');
    })

    this.post('/posts', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('post', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
