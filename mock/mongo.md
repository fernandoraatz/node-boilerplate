## Mongo DB

Criando banco:

```css
use posts

```

Criando Coleção

```js
db.createCollection("todos")

```

Inserindo Todo:

```js
db.todos.insert ({
       "title": "Estudar Node",
       "description": "Estudar os traquejos do Node",
       "isChecked": false,
       "image": "image/path"
})
```
