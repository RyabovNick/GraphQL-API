# GraphQL-API

https://www.apollographql.com

`npm init -y`

`npm install --save graphql apollo-server-express express`

```
query {
  hello
}
```

`@playlyfe/gql` - для синтаксиса

`npm install -D @babel/core @babel/preset-env babel-watch @playlyfe/gql`

.babelrc

```js
{
  "presets": ["@babel/preset-env"]
}
```

package.json

```json
"scripts": {
    "dev": "babel-watch index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

Будет смотреть и автоматические перезагружать при изменениях (возможно также для этого использовать nodemon)
