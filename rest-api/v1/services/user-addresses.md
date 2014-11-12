---
layout: page
title: User addresses services
permalink: /rest-api/v1/services/addresses/
back_url: /rest-api/v1/services
---

## List of methods

- [GET `/users/:user_uid/addresses`](#get-usersuseruidaddresses)
- [POST `/users/:user_uid/addresses`](#post-usersuseruidaddresses)




## GET `/users/:user_uid/addresses`

_Get addresses list of a user_

### Params

{% highlight text %}
integer   limit    Limit of elements to return
integer   offset   Offset
{% endhighlight %}

### Response example

{% highlight json %}
{
  "response": {
    "user_addresses": [
      {
        "uid": "d0ca57e68b1215a008c07208ee7d236f",
        "name": "Home",
        "lastname": "Jon",
        "firstname": "Snow",
        "address1": "rue du chat qui tousse",
        "address2": null,
        "zipcode": "75001",
        "city": "Paris",
        "country": "France",
        "phone_work": null,
        "phone_home": null,
        "phone_mobile": null,
        "created_at": "2014-11-11T16:55:07+0000",
        "updated_at": "2014-11-11T16:55:07+0000"
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
> 404: User not found



## POST `/users/:user_uid/addresses`

_Add a new user address to a user_

### Params

{% highlight text %}
string   user_address[nale]        The address label
string   user_address[firstname]   The address firstname
string   user_address[lastname]    The address lastname
string   user_address[address1]    The first line of the address
string   user_address[address2]    The second line of the address (optional)
string   user_address[zipcode]     The address zip code
string   user_address[city]        The address city
string   user_address[country]     The address country

string   user_address[phone_work]    The address phone of work (optional)
string   user_address[phone_home]    The address phone of home (optional)
string   user_address[phonemobile]   The address mobile phone (optional)
{% endhighlight %}

### Response example

{% highlight json %}
{
  "response": {
    "user_address": {
      "uid": "d0ca57e68b1215a008c07208ee7d236f",
      "name": "Home",
      "lastname": "Jon",
      "firstname": "Snow",
      "address1": "rue du chat qui tousse",
      "address2": null,
      "zipcode": "75001",
      "city": "Paris",
      "country": "France",
      "phone_work": null,
      "phone_home": null,
      "phone_mobile": null,
      "created_at": "2014-11-11T16:55:07+0000",
      "updated_at": "2014-11-11T16:55:07+0000"
    }
  }
}
{% endhighlight %}

### HTTP Codes

> 200: OK  
> 404: User not found  
> 400: Request error
