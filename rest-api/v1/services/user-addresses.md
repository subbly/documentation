---
layout: page
title: User addresses services
permalink: /rest-api/v1/services/user-addresses/
back_url: /rest-api/v1/services
---

## List of methods

- [GET `/user-addresses/:user_uid`](#get-user-addressesuseruid)




## GET `/user-addresses/:user_uid`

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
