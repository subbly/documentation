---
layout: page
title: Orders services
permalink: /rest-api/v1/services/orders/
back_url: /rest-api/v1/services
---

## List of methods

- [GET `/orders`](#get-orders)
- [GET `/orders/:id`](#get-ordersid)
- [GET `/orders/search`](#get-orderssearch)
- [POST `/orders`](#post-orders)
- [PUT&#124;PATCH `/orders/:id`](#putpatch-ordersid)




## GET `/orders`

_Get the orders list_

### Params

{% highlight text %}
integer   limit        Limit of elements to return
integer   offset       Offset
array     includes[]   Relationships to includes (available values: "user", "shipping_address", "billing_address", "products").
{% endhighlight %}

### Response example

{% highlight json %}
{
  "response": {
    "orders": [
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



## GET `/orders/:id`

_Get order data_

### Params

{% highlight text %}
No params
{% endhighlight %}

### Response example

{% highlight json %}
{
  "response": {
    "order": {

    }
  }
}
{% endhighlight %}

### HTTP Codes

> 200: OK  
> 404: Order not found



## GET `/orders/search`

_Search one or many orders_

### Params

{% highlight text %}
integer   limit        Limit of elements to return
integer   offset       Offset
string    q            The search query
array     includes[]   Relationships to includes (available values: "user", "shipping_address", "billing_address", "products").
{% endhighlight %}

### Response example

{% highlight json %}
{
  "response": {
    "orders": [
      {

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



## POST `/orders`

_Create a new order_

### Params

{% highlight text %}
string   order[status]   The order status
{% endhighlight %}

### Response example

{% highlight json %}
{
  "response": {
    "order": {

    }
  }
}
{% endhighlight %}

### HTTP Codes

> 200: OK  
> 400: Request error



## PUT|PATCH `/orders/:id`

_Edit a order_

### Params

{% highlight text %}
string   order[status]   The order status
{% endhighlight %}

### Response example

{% highlight json %}
{
  "response": {
    "order": {

    }
  }
}
{% endhighlight %}

### HTTP Codes

> 200: OK  
> 400: Request error  
> 404: Order not found
