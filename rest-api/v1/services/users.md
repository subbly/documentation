---
layout: page
title: User services
permalink: /rest-api/v1/services/users/
back_url: /rest-api/v1/services
---

## List of methods

- [GET `/users`](#get-users)
- [GET `/users/{uid}`](#get-usersuid)
- [GET `/users/search`](#get-userssearch)
- [POST `/users`](#post-users)
- [PUT&#124;PATCH `/users/{uid}`](#putpatch-usersuid)




## GET `/users`

_Get the users list_

### Params

{% highlight text %}
int    limit        Limit of elements to return
int    offset       Offset
array  includes[]   Relationships to includes (available values: "addresses", "orders").
{% endhighlight %}

### Response example

{% highlight json %}
{
  "response": {
    "users": []
  }
}
{% endhighlight %}

### HTTP Codes

> 200: OK



## GET `/users/{uid}`

_Get user data_

### Params

No params

### Response example

{% highlight json %}
{
  "response": {
    "user": {}
  }
}
{% endhighlight %}

### HTTP Codes

> 200: OK  
> 404: User not found



## GET `/users/search`

_Search one or many users_

### Params

{% highlight text %}
int     limit        Limit of elements to return
int     offset       Offset
string  q            The search query
array   includes[]   Relationships to includes (available values: "addresses", "orders").
{% endhighlight %}

### Response example

{% highlight json %}
{
  "response": {
    "users": [
      {

      },
      ...
    ]
    "query": "jon"
    "limit": 50,
    "offset": 0,
    "total": 1288
  }
}
{% endhighlight %}

### HTTP Codes

> 200: OK  
> 400: Request error



## POST `/users`

_Create a new user_

### Params

{% highlight text %}
string   user[firstname]  The user firstname
string   user[lastname]   The user lastname
string   user[email]      The user email
string   user[password]   The user password
{% endhighlight %}

### Response example

{% highlight json %}
{
  "response": {
    "user": {}
  }
}
{% endhighlight %}

### HTTP Codes

> 200: OK  
> 400: Request error



## PUT|PATCH `/users/{uid}`

_Edit a user_

### Params

{% highlight text %}
string   user[firstname]  The user firstname
string   user[lastname]   The user lastname
string   user[email]      The user email
string   user[password]   The user password
{% endhighlight %}

### Response example

{% highlight json %}
{
  "response": {
    "user": {}
  }
}
{% endhighlight %}

### HTTP Codes

> 200: OK  
> 400: Request error  
> 404: User not found
