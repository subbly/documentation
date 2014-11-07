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
        },
        "version": "v1"
    },
    "response": {
        ...
    },
}
{% endhighlight %}

## List of versions

| Name | status | Description |
|------|--------|-------------|
| [`/v1`]({{ '/rest-api/v1/services' | prepend: site.baseurl }}) | devel | Version 1 |

## Some others informations

* Dates are always return into [ISO8601](http://en.wikipedia.org/wiki/ISO_8601) format.
* HTTP response contain the `Etag` header.
