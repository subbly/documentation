---
layout: page
title: User addresses services
permalink: /rest-api/v1/services/user-addresses/
back_url: /rest-api/v1/services
---

## List of methods

- [GET `/users/:user_uid/user-addresses`](#get-users-useruid-useraddresses)




## GET `/users/:user_uid/user-addresses`

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
    "user-addresses": [
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
