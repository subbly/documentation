---
layout: page
title: REST api documentation
permalink: /rest-api/
---
## Get started

### How to call a REST API

**Base URL**: `http://my.awesome-shop.com/api/v1`

Subbly REST API use JSON format.

**Response base**
{% highlight json %}
{
    "headers": {
        "status": {
            "code": 200,
            "message": "OK"
        }
    },
    "response": {
        ...
    },
}
{% endhighlight %}

## List of versions

| Name | Description |
|------|-------------|
| [`/v1`]({{ '/rest-api/v1/services' | prepend: site.baseurl }}) | Version 1 |
