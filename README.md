# Library Service

## Deploy
```bash
$ docker-compose up -d
```

## GraphQL Playground
```bash
http://127.0.0.1:3000/graphql
```

## Query

### Create Author
```graphql
mutation{
  createAuthor(createAuthorInput:{
    name:"Pedro Robles"
  }){
    id
    name
  }
}
```

### Get Authors
```graphql
query{
  authors{
    id,
    name
  }
}
```

### Get Author
```graphql
query {
  author(id: "66711355619cbf901120afeb") {
    id
    name
  }
}
```

### Update Author
```graphql
mutation{
  updateAuthor(updateAuthorInput:{
    id:"66711355619cbf901120afeb"
    name:"dr gato"
  }){
    id
    name
  }
}
```

### Delete Author
```graphql
mutation{
  removeAuthor(id:"6671157397e046fe2f0093fd"){
    id
    name
  }
}
```

### Assign Author to Book
```graphql
mutation{
  asignAuthorstoBook(assignAuthorsToBookInput:{
    bookId:"667127257129ccbe5cdf5c97",
    authorIds:[
      "6671157497e046fe2f0093fe"
      "6671246d6c1fa477504772db"
    ]
  }){
    id
    title
    authors{
      id
      name
    }
  }
}
```

### Create Book
```graphql
mutation {
  createBook(
    createBookInput: {
      title: "La Vaca"
      publishedDate: "2024-06-18"
      authors: ["6671157497e046fe2f0093fe", "6671246d6c1fa477504772db"]
    }
  ) {
    id
    title
    publishedDate
    authors{
      name
    }
  }
}

```

### Get Books
```graphql
query {
  books{
    id
    title
    authors{
      id
      name
    }
  }
}
```

### Update Book
```graphql
mutation UpdateBook {
  updateBook(updateBookInput: {
    id: "66711b7567b0db03c2bafe14",
    title: "actgualizad",
    publishedDate: "2023-06-18"
  }) {
    id
    title
    publishedDate
  }
}
```

### Delete Book
```graphql
mutation {
  removeBook(id: "66711d53557b6a6e666b6344") {
    id
    title
  }
}
```

### Get Book
```graphql
query{
  book(id:"66711b7567b0db03c2bafe14"){
    id
    title
    publishedDate
  }
}
```