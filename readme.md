# Documentation

<br>
<br>

- Ensure the Authorization header is included for authenticated routes.
- Fields such as title and description are mandatory; otherwise, a 400 error is returned.

<br>
<br>
<br>

# 1 Authentication:

This endpoint allows users to register and get Authentication token.

## HTTP Method

GET

## HTTP Route

```bash
/token
```

## Request Body

<table border="1" width='100%'>
    <thead>
        <tr bgColor="gray">
            <td>Parameter</td>
            <td>Type</td>
            <td>Required</td>
        </tr>
    </thead>
    <tr>
        <td>firstName</td>
        <td>String</td>
        <td>true</td>
    </tr>
    <tr>
        <td>lastName</td>
        <td>String</td>
        <td>true</td>
    </tr>
    <tr>
        <td>email</td>
        <td>String</td>
        <td>true</td>
    </tr>
    <tr>
        <td>gender</td>
        <td>String</td>
        <td>true</td>
    </tr>
    <tr>
        <td>language</td>
        <td>String</td>
        <td>true</td>
    </tr>
</table>

## Example Request Body

```
    {
        "email" : "",
        "firstName": "",
        "lastName": "",
        "gender": "",
        "language": ""
    }
```

## Response

<table border="1" width='100%'>
    <thead>
        <tr bgColor="gray">
            <td>Status Code</td>
            <td>Description</td>
        </tr>
    </thead>
    <tr>
        <td>200</td>
        <td>user registered successfully.</td>
    </tr>
    <tr>
        <td>400</td>
        <td>Bad request</td>
    </tr>
    <tr>
        <td>403</td>
        <td>User already exists</td>
    </tr>
    <tr>
        <td>500</td>
        <td>Internal server error</td>
    </tr>
</table>

## Example Response Body

```
{
    "token": "",
    "message": ""
}
```

<br>
<br>
<br>

# 2 Get users:

This endpoint is used to fetch all the registered users.

## HTTP Method

GET


## HTTP Route

```bash
/token
```

## Response

<table border="1" width='100%'>
    <thead>
        <tr bgColor="gray">
            <td>Status Code</td>
            <td>Description</td>
        </tr>
    </thead>
    <tr>
        <td>200</td>
        <td>user fetched successfully.</td>
    </tr>
    <tr>
        <td>500</td>
        <td>Internal server error</td>
    </tr>
</table>

## Example Response Body

```
{
    "users": [
        {
            "email": "navganabhishek90@gmail.com",
            "firstName": "Abhishek",
            "lastName": "Navgan",
            "gender": "male",
            "language": "Marathi, Hindi, English"
        }
    ],
    "message": "Users retrieved successfully"
}
```

<br>
<br>
<br>

# 3. Create a New Todo:

This endpoint allows users to create a new todo item.

## HTTP Method

POST


## HTTP Route

```bash
/tasks
```

## Request Headers

<table border="1" width='100%'>
    <thead>
        <tr bgColor="gray">
            <td>Header</td>
            <td>Type</td>
            <td>Required</td>
            <td>Description</td>
        </tr>
    </thead>
    <tr>
        <td>Authorization</td>
        <td>String</td>
        <td>true</td>
        <td>Bearer token for user authentication.</td>
    </tr>
</table>

## Request Body

<table border="1" width='100%'>
    <thead>
        <tr bgColor="gray">
            <td>Parameter</td>
            <td>Type</td>
            <td>Required</td>
            <td>Description</td>
        </tr>
    </thead>
    <tr>
        <td>Ttile</td>
        <td>String</td>
        <td>true</td>
        <td>Title of the task.</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>String</td>
        <td>true</td>
        <td>Description of the task.</td>
    </tr>
</table>

## Example Request Body

```
    {
        "title": "Complete Assignment",
        "description": "Finish the React project assignment by today."
    }
```

## Response

<table border="1" width='100%'>
    <thead>
        <tr bgColor="gray">
            <td>Status Code</td>
            <td>Description</td>
        </tr>
    </thead>
    <tr>
        <td>201</td>
        <td>Todo created successfully.</td>
    </tr>
    <tr>
        <td>400</td>
        <td>Bad request</td>
    </tr>
    <tr>
        <td>500</td>
        <td>Internal server error</td>
    </tr>
</table>

## Example Response Body

```
{
    "data": {
        "id": "b2f9d410-3b9b-4234-a8e2-cc83fb9842f6",
        "title": "Complete Assignment",
        "description": "Finish the React project assignment by today.",
        "completed": false,
        "createdAt": "2025-01-20T12:45:00.000Z"
    },
    "message": "Todo created successfully"
    }
```


<br>
<br>
<br>

# 4. fetch all Todos:

This endpoint allows users to fetch all todos.

## HTTP Method

GET


## HTTP Route

```bash
/tasks
```

## Request Search Params

<table border="1" width='100%'>
    <thead>
        <tr bgColor="gray">
            <td>param</td>
            <td>Required</td>
            <td>Description</td>
        </tr>
    </thead>
    <tr>
        <td>page</td>
        <td>true</td>
        <td>page number.</td>
    </tr>
    <tr>
        <td>limit</td>
        <td>false</td>
        <td>todos per page.</td>
    </tr>
    <tr>
        <td>sort</td>
        <td>false</td>
        <td>sorting order. (true for ascending) -> default</td>
    </tr>
</table>

## Request Headers

<table border="1" width='100%'>
    <thead>
        <tr bgColor="gray">
            <td>Header</td>
            <td>Type</td>
            <td>Required</td>
            <td>Description</td>
        </tr>
    </thead>
    <tr>
        <td>Authorization</td>
        <td>String</td>
        <td>true</td>
        <td>Bearer token for user authentication.</td>
    </tr>
</table>

## Response

<table border="1" width='100%'>
    <thead>
        <tr bgColor="gray">
            <td>Status Code</td>
            <td>Description</td>
        </tr>
    </thead>
    <tr>
        <td>404</td>
        <td>Todos not found.</td>
    </tr>
    <tr>
        <td>200</td>
        <td>success</td>
    </tr>
    <tr>
        <td>500</td>
        <td>Internal server error</td>
    </tr>
</table>

## Example Response Body

```
    {
        "data": [{
            "id": "b2f9d410-3b9b-4234-a8e2-cc83fb9842f6",
            "title": "Complete Assignment",
            "description": "Finish the React project assignment by today.",
            "completed": false,
            "createdAt": "2025-01-20T12:45:00.000Z"
        }]
        "message": "Todo Fetched successfully"
    }
```


<br>
<br>
<br>

# 5. fetch single Todo:

This endpoint allows users to fetch single todo.

## HTTP Method

GET


## HTTP Route

```bash
/tasks/:id
```

## Request Params

<table border="1" width='100%'>
    <thead>
        <tr bgColor="gray">
            <td>param</td>
            <td>Description</td>
        </tr>
    </thead>
    <tr>
        <td>id</td>
        <td>ID of the Todo to be fetched</td>
    </tr>
</table>

## Request Headers

<table border="1" width='100%'>
    <thead>
        <tr bgColor="gray">
            <td>Header</td>
            <td>Type</td>
            <td>Required</td>
            <td>Description</td>
        </tr>
    </thead>
    <tr>
        <td>Authorization</td>
        <td>String</td>
        <td>true</td>
        <td>Bearer token for user authentication.</td>
    </tr>
</table>

## Response

<table border="1" width='100%'>
    <thead>
        <tr bgColor="gray">
            <td>Status Code</td>
            <td>Description</td>
        </tr>
    </thead>
    <tr>
        <td>403</td>
        <td>Unauthorized.</td>
    </tr>
    <tr>
        <td>404</td>
        <td>Todos not found.</td>
    </tr>
    <tr>
        <td>200</td>
        <td>success</td>
    </tr>
    <tr>
        <td>500</td>
        <td>Internal server error</td>
    </tr>
</table>

## Example Response Body

```
    {
        "data": {
            "id": "b2f9d410-3b9b-4234-a8e2-cc83fb9842f6",
            "title": "Complete Assignment",
            "description": "Finish the React project assignment by today.",
            "completed": false,
            "createdAt": "2025-01-20T12:45:00.000Z"
        }
        "message": "Todo Fetched successfully"
    }
```


<br>
<br>
<br>

# 6. Update single:

This endpoint allows users to Update todo.

## HTTP Method

PUT


## HTTP Route

```bash
/tasks/:id
```

## Request Params

<table border="1" width='100%'>
    <thead>
        <tr bgColor="gray">
            <td>param</td>
            <td>Description</td>
        </tr>
    </thead>
    <tr>
        <td>id</td>
        <td>ID of the Todo to be Updated</td>
    </tr>
</table>

## Request Headers

<table border="1" width='100%'>
    <thead>
        <tr bgColor="gray">
            <td>Header</td>
            <td>Type</td>
            <td>Required</td>
            <td>Description</td>
        </tr>
    </thead>
    <tr>
        <td>Authorization</td>
        <td>String</td>
        <td>true</td>
        <td>Bearer token for user authentication.</td>
    </tr>
</table>


## Request Body

<table border="1" width='100%'>
    <thead>
        <tr bgColor="gray">
            <td>Parameter</td>
            <td>Type</td>
            <td>Required</td>
            <td>Description</td>
        </tr>
    </thead>
    <tr>
        <td>Ttile</td>
        <td>String</td>
        <td>false</td>
        <td>Title of the task.</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>String</td>
        <td>false</td>
        <td>Description of the task.</td>
    </tr>
    <tr>
        <td>Completed</td>
        <td>String</td>
        <td>false</td>
        <td>State of the Task</td>
    </tr>
</table>

## Example Request Body

```
    {
        "title": "",
        "description": "",
        "completed": true | false
    }
```

## Response

<table border="1" width='100%'>
    <thead>
        <tr bgColor="gray">
            <td>Status Code</td>
            <td>Description</td>
        </tr>
    </thead>
    <tr>
        <td>403</td>
        <td>Unauthorized.</td>
    </tr>
    <tr>
        <td>404</td>
        <td>Todos not found.</td>
    </tr>
    <tr>
        <td>200</td>
        <td>success</td>
    </tr>
    <tr>
        <td>500</td>
        <td>Internal server error</td>
    </tr>
</table>

## Example Response Body

```
    {
        "data": {
            "id": "b2f9d410-3b9b-4234-a8e2-cc83fb9842f6",
            "title": "Complete Assignment",
            "description": "Finish the React project assignment by today.",
            "completed": false,
            "createdAt": "2025-01-20T12:45:00.000Z"
        }
        "message": "Todo Fetched successfully"
    }
```


<br>
<br>
<br>

# 7. Delete Todo:

This endpoint allows users to fetch single todo.

## HTTP Method

DELETE


## HTTP Route

```bash
/tasks/:id
```

## Request Params

<table border="1" width='100%'>
    <thead>
        <tr bgColor="gray">
            <td>param</td>
            <td>Description</td>
        </tr>
    </thead>
    <tr>
        <td>id</td>
        <td>ID of the Todo to be fetched</td>
    </tr>
</table>

## Request Headers

<table border="1" width='100%'>
    <thead>
        <tr bgColor="gray">
            <td>Header</td>
            <td>Type</td>
            <td>Required</td>
            <td>Description</td>
        </tr>
    </thead>
    <tr>
        <td>Authorization</td>
        <td>String</td>
        <td>true</td>
        <td>Bearer token for user authentication.</td>
    </tr>
</table>

## Response

<table border="1" width='100%'>
    <thead>
        <tr bgColor="gray">
            <td>Status Code</td>
            <td>Description</td>
        </tr>
    </thead>
    <tr>
        <td>403</td>
        <td>Unauthorized.</td>
    </tr>
    <tr>
        <td>404</td>
        <td>Todos not found.</td>
    </tr>
    <tr>
        <td>200</td>
        <td>success</td>
    </tr>
    <tr>
        <td>500</td>
        <td>Internal server error</td>
    </tr>
</table>

## Example Response Body

```
    {
        "data": {
            "id": "b2f9d410-3b9b-4234-a8e2-cc83fb9842f6",
            "title": "Complete Assignment",
            "description": "Finish the React project assignment by today.",
            "completed": false,
            "createdAt": "2025-01-20T12:45:00.000Z"
        }
        "message": "task Deleted successfully"
    }
```

<br>
<br>
<br>