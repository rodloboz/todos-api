# TODOS API

A simple API for learning and training purposes.

## Basic Usage

**BASE URL** `https://shrouded-river-51602.herokuapp.com/`

### Get /todos
Lists all todos.

**HTTP Request**
```
GET https://shrouded-river-51602.herokuapp.com/todos
````
**Response**
```
[
    {
        "completed": false,
        "_id": "5e4262cc8de5a600044b3ff2",
        "title": "Create Express.js API",
        "createdAt": "2020-02-11T08:16:12.462Z",
    },
    {
        "completed": true,
        "_id": "5e4264508de5a600044b3ff3",
        "title": "OOP in Ruby",
        "createdAt": "2020-02-11T08:22:40.415Z",
    }
]
```

### Get /todos/:todoId
Lists an existing todo

**HTTP Request**

```
GET https://shrouded-river-51602.herokuapp.com/todos/<todoId>
```

**URL Parameters**
| Field        | Type | Description|
| -----------  |:-------------:| -----------|
| todoId      | String | The id of the todo to get |

**Response**
```
{
    "completed": true,
    "_id": "5e4264508de5a600044b3ff3",
    "title": "OOP in Ruby",
    "createdAt": "2020-02-11T08:22:40.415Z",
}
```


### Post /todos
Creates a todo

**HTTP Request**

```
POST https://shrouded-river-51602.herokuapp.com/todos
```

**Request Body Fields**
| Field        | Type | Description|
| -----------  |:-------------:| -----------|
| Title      | String | The title of the todo |
| Completed | Boolean | The state of the todo |

The data to be inserted has to be provided as a JSON-Object.

**Response**
```
{
    "completed": true,
    "_id": "5e4264508de5a600044b3ff3",
    "title": "OOP in Ruby",
    "createdAt": "2020-02-11T08:22:40.415Z",
}
```

### Patch /todos/:todoId
Updates an existing todo

**HTTP Request**

```
PATCH https://shrouded-river-51602.herokuapp.com/todos/<todoId>
```

**URL Parameters**
| Field        | Type | Description|
| -----------  |:-------------:| -----------|
| todoId      | String | The id of the todo to update |

**Request Body Fields**
| Field        | Type | Description|
| -----------  |:-------------:| -----------|
| Title      | String | The title of the todo |
| Completed | Boolean | The state of the todo |

The data to be inserted has to be provided as a JSON-Object.

**Response**
```
{
    "completed": false,
    "_id": "5e4262cc8de5a600044b3ff2",
    "title": "OOP in Ruby",
    "createdAt": "2020-02-11T08:16:12.462Z",
}
```

### Delete /todos/:todoId
Deletes an existing todo

**HTTP Request**

```
DELETE https://shrouded-river-51602.herokuapp.com/todos/<todoId>
```

**URL Parameters**
| Field        | Type | Description|
| -----------  |:-------------:| -----------|
| todoId      | String | The id of the todo to delete |

**Response**
```
{
    "n": 1,
    "ok": 1,
    "deletedCount": 1
}
```
