---
layout: page
title: Settings services
permalink: /rest-api/v1/services/settings/
back_url: /rest-api/v1/services
---

## List of methods

- [GET `/settings`](#get-settings)
- [PUT&#124;PATCH `/settings`](#putpatch-settings)




## GET `/settings`

_Get the settings list_

### Params

{% highlight text %}
No params
{% endhighlight %}

### Response example

{% highlight json %}
{
  "response": {
    "settings": [
      {
        "subbly.shop_name": "My awesome shop",
        "setting_key": "setting_value"
      },
      ...
    ]
  }
}
{% endhighlight %}

### HTTP Codes

> 200: OK



## PUT|PATCH `/settings`

_Update setting values_

### Params

{% highlight text %}
settings[setting_key]   mixed   The new value for the setting_key
{% endhighlight %}

### Request example

{% highlight json %}
{
  "settings": {
    "subbly.shop_name": "My first shirt shop",
    "subbly.contact_email": "hello@bestshirtsever.com"
  }
}
{% endhighlight %}

### Response example

{% highlight json %}
{
  "headers": {
    "status": {
      "code": 200,
      "message": "Settings updated"
    },
    ...
  },
  "response": null
}
{% endhighlight %}

### HTTP Codes

> 200: OK
> 400: Request error
