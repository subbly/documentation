---
layout: page
title: Settings services
permalink: /rest-api/v1/services/settings/
back_url: /rest-api/v1/services
---

## List of methods

- [GET `/settings`](#get-settings)
- [PUT&#124;PATCH `/settings/:setting_key`](#putpatch-settingssettingkey)




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



## PUT|PATCH `/settings/:setting_key`

_Update a setting value_

### Params

{% highlight text %}
mixed   value   The new value for the setting
{% endhighlight %}

### Response example

{% highlight json %}
{
  "response": {

  }
}
{% endhighlight %}

### HTTP Codes

> 200: OK
> 400: Request error
