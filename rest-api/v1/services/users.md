---
layout: page
title: Users services
permalink: /rest-api/v1/services/users/
back_url: /rest-api/v1/services
---

## List of methods

- [GET `/users`](#get-users)
- [GET `/users/:uid`](#get-usersuid)
- [GET `/users/search`](#get-userssearch)
- [POST `/users`](#post-users)
- [PUT&#124;PATCH `/users/:uid`](#putpatch-usersuid)




## GET `/users`

_Get the users list_

### Params

{% highlight text %}
integer   limit        Limit of elements to return
integer   offset       Offset
array     includes[]   Relationships to includes (available values: "addresses", "orders").
{% endhighlight %}

### Response example

{% highlight json %}
{
  "response": {
    "users": [
      {
        "uid": "b42fdf18bbd6291136f3b48b9ab378dd",
        "firstname": "John",
        "lastname": "Snow",
        "email": "john.snow@subbly.com",
        "created_at": "2014-10-21T11:59:46+0000",
        "updated_at": "2014-11-07T12:45:06+0000"
      },
      ...
    ],
    "limit": 50,
    "offset": 0,
    "total": 1288
  }
}
{% endhighlight %}

### HTTP Codes

> 200: OK



## GET `/users/:uid`

_Get user data_

### Params

{% highlight text %}
No params
{% endhighlight %}

### Response example

{% highlight json %}
{
  "response": {
    "user": {
      "uid": "b42fdf18bbd6291136f3b48b9ab378dd",
      "firstname": "John",
      "lastname": "Snow",
      "email": "john.snow@subbly.com",
      "created_at": "2014-10-21T11:59:46+0000",
      "updated_at": "2014-11-07T12:45:06+0000"
    }
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
integer   limit        Limit of elements to return
integer   offset       Offset
string    q            The search query
array     includes[]   Relationships to includes (available values: "addresses", "orders").
{% endhighlight %}

### Response example

{% highlight json %}
{
  "response": {
    "users": [
      {
        "uid": "b42fdf18bbd6291136f3b48b9ab378dd",
        "firstname": "John",
        "lastname": "Snow",
        "email": "john.snow@subbly.com",
        "created_at": "2014-10-21T11:59:46+0000",
        "updated_at": "2014-11-07T12:45:06+0000"
      },
      ...
    ],
    "query": "jon",
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
string   user[firstname]   The user firstname
string   user[lastname]    The user lastname
string   user[email]       The user email
string   user[password]    The user password
{% endhighlight %}

### Response example

{% highlight json %}
{
  "response": {
    "user": {
      "uid": "b42fdf18bbd6291136f3b48b9ab378dd",
      "firstname": "John",
      "lastname": "Snow",
      "email": "john.snow@subbly.com",
      "created_at": "2014-10-21T11:59:46+0000",
      "updated_at": "2014-11-07T12:45:06+0000"
    }
  }
}
{% endhighlight %}

### HTTP Codes

> 200: OK  
> 400: Request error



## PUT|PATCH `/users/:uid`

_Edit a user_

### Params

{% highlight text %}
string   user[firstname]   The user firstname
string   user[lastname]    The user lastname
string   user[email]       The user email
string   user[password]    The user password
{% endhighlight %}

### Response example

{% highlight json %}
{
  "response": {
    "user": {
      "uid": "b42fdf18bbd6291136f3b48b9ab378dd",
      "firstname": "John",
      "lastname": "Snow",
      "email": "john.snow@subbly.com",
      "created_at": "2014-10-21T11:59:46+0000",
      "updated_at": "2014-11-07T12:45:06+0000"
    }
  }
}
{% endhighlight %}

### HTTP Codes

> 200: OK  
> 400: Request error  
> 404: User not found
