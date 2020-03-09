## Frontend Developer Challenge
This is a simple challenge to test your skills on building UI with React and consuming APIs.
It's a basic CRUD API. It requires a JWT token header which can be obtained on the `/auth` endpoint with the user/pwd `test/test`. The idea of this challenge is not to frighten you, if you get stuck on something we're right here to help! Just call!


## API
- `https://pland-api.herokuapp.com`

## Endpoints
- `/auth`- Used to obtain an access token
**Method:** POST
**Entry:** json
**Entry Format:**
```json
{
    "username": "test", // only user available
    "password": "test"  // only user available
}
```
**Returns:** json
**Return Format:**
```json
{
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NzY4MjI0ODUsImlhdCI6MTU3NjgyMDY4NSwibmJmIjoxNTc2ODIwNjg1LCJpZGVudGl0eSI6OTk5OTk5fQ.oOR_Y9KcWcIy4ddY4B-NfdX-y54d3HZMmICjhVgsFkw"
}
```
---
-  `/api/v1.0/places/` - Lists all registered places
**Method:** GET
**Entry:** none
**Requires: access_token from */auth* on *header***
```json
{"Authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NzY4MjI0ODUsImlhdCI6MTU3NjgyMDY4NSwibmJmIjoxNTc2ODIwNjg1LCJpZGVudGl0eSI6OTk5OTk5fQ.oOR_Y9KcWcIy4ddY4B-NfdX-y54d3HZMmICjhVgsFkw"}
```
**Returns:** json
**Return Format:**
```json
{
    "places": [
        {
	    "id": example_id, //as int
	    "name": "Example Name",
	    "slug": "Example Slug",
            "city": "Example City",
            "state": "Example State",
            "created_at": "Thu, 19 Dec 2019 10:35:57 GMT", //as timestamp,
            "updated_at": "" // same as created_at
        },
        {
            ...
        },
    ]
}
```
---
-  `/api/v1.0/places/new` - Register a new Place
**Method:** POST
**Entry:** json
**Entry Format:**
```json
{
    "name": "Example Name",  //required
    "slug": "example_slug",  //required, spaces not allowed
    "city": "Example City",  //required
    "state": "Example State" //required
}
```
**Requires: access_token from */auth* on *header***
```json
{"Authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NzY4MjI0ODUsImlhdCI6MTU3NjgyMDY4NSwibmJmIjoxNTc2ODIwNjg1LCJpZGVudGl0eSI6OTk5OTk5fQ.oOR_Y9KcWcIy4ddY4B-NfdX-y54d3HZMmICjhVgsFkw"}
```
**Returns:** json
**Return Format:**
```json
{
    "place": {
	"id": example_id, // as int
        "name": "Example Name",
	"slug": "Example Slug",
        "city": "Example City",
        "state": "Example State",
        "created_at": "Thu, 19 Dec 2019 10:35:57 GMT", //as timestamp,
        "updated_at": "" // same as created_at
    }
}
```
---
-  `/api/v1.0/places/edit` - Changes data in specific place
**Method:** PUT
**Entry:** json
**Entry Format:**
```json
{
    "id": place_id_to_change, // as int
    "fields": {
        "field_to_change": { //name, slug, city or state
           "current_value": "current_value_of_field", //current_value to ensure correct model instance
           "new_value": "new_value_of_field"
        },
        "other_field": {
            ...
        }
    }
}
```
**Requires: access_token from */auth* on *header***
```json
{"Authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NzY4MjI0ODUsImlhdCI6MTU3NjgyMDY4NSwibmJmIjoxNTc2ODIwNjg1LCJpZGVudGl0eSI6OTk5OTk5fQ.oOR_Y9KcWcIy4ddY4B-NfdX-y54d3HZMmICjhVgsFkw"}
```
**Returns:** json
**Return Format:**
```json
{
    "place": {
	"id": example_id, // as int
        "name": "Example Name",
	"slug": "Example Slug",
        "city": "Example City",
        "state": "Example State",
        "created_at": "Thu, 19 Dec 2019 10:35:57 GMT", //as timestamp,
        "updated_at": "time of change" // same as created_at
    }
}
```
-  `/api/v1.0/places/_slug` - Fetch specific Place by slug
**Method:** GET
**Entry:** change _slug with the required slug on URL
**Requires: access_token from */auth* on *header***
```json
{"Authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NzY4MjI0ODUsImlhdCI6MTU3NjgyMDY4NSwibmJmIjoxNTc2ODIwNjg1LCJpZGVudGl0eSI6OTk5OTk5fQ.oOR_Y9KcWcIy4ddY4B-NfdX-y54d3HZMmICjhVgsFkw"}
```
**Returns:** json
**Return Format:**
```json
{
    "place": [
        {
	    "id": example_id, //as int
	    "name": "Example Name",
	    "slug": "Example Slug",
            "city": "Example City",
            "state": "Example State",
            "created_at": "Thu, 19 Dec 2019 10:35:57 GMT", //as timestamp,
            "updated_at": "" // same as created_at
        }
    ]
}
```
---
-  `/api/v1.0/places/search/_name` - Search for Places with name like _name
**Method:** GET
**Entry:** change _name with the required name on URL
**Requires: access_token from */auth* on *header***
```json
{"Authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NzY4MjI0ODUsImlhdCI6MTU3NjgyMDY4NSwibmJmIjoxNTc2ODIwNjg1LCJpZGVudGl0eSI6OTk5OTk5fQ.oOR_Y9KcWcIy4ddY4B-NfdX-y54d3HZMmICjhVgsFkw"}
```
**Returns:** json
**Return Format:**
```json
{
    "places": [
        {
	    "id": example_id, //as int
	    "name": "Example Name",
	    "slug": "Example Slug",
            "city": "Example City",
            "state": "Example State",
            "created_at": "Thu, 19 Dec 2019 10:35:57 GMT", //as timestamp,
            "updated_at": "" // same as created_at
        },
        {
            ...
        },
    ]
}
```
---
## Error Handling
All possible errors will be returned with the appropriate status_code on response, and all of them will be on the following format:
```json
{
    "error_message": "Error Description"
}
```
---
## Evaluation
-   Project structure, architecturing and organization
-   Programming good practices
-   VCS practices
---
## Delivery
You must **fork** this repository and commit the solution in the **solution** folder. Your repository must be public. After that, send the repository link by email to **[giovani.souza@pland.com.br](mailto:giovani.souza@pland.com.br)**.

