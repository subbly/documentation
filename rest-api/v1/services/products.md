---
layout: page
title: Products services
permalink: /rest-api/v1/services/products/
back_url: /rest-api/v1/services
---

## List of methods

- [GET `/products`](#get-products)
- [GET `/products/:sku`](#get-productssku)
- [GET `/products/search`](#get-productssearch)
- [POST `/products`](#post-products)
- [PUT&#124;PATCH `/products/:sku`](#putpatch-productssku)




## GET `/products`

_Get the products list_

### Params

{% highlight text %}
integer   limit        Limit of elements to return
integer   offset       Offset
array     includes[]   Relationships to includes (available values: "options", "images", "categories").
{% endhighlight %}

### Response example

{% highlight json %}
{
  "response": {
    "products": [
      {
        "sku": "p123",
        "status": "draft"
        "name": "An awesome product",
        "description": "An awesome product description",
        "price": 99.99,
        "sale_price": null, # null or double
        "quantity": 2,
        "created_at": "2014-10-21T11:59:46+0000",
        "updated_at": "2014-10-21T11:59:46+0000"
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



## GET `/products/:sku`

_Get product data_

### Params

{% highlight text %}
No params
{% endhighlight %}

### Response example

{% highlight json %}
{
  "response": {
    "product": {
      "sku": "p123",
      "status": "draft"
      "name": "An awesome product",
      "description": "An awesome product description",
      "price": 99.99,
      "sale_price": null, # null or double
      "quantity": 2,
      "created_at": "2014-10-21T11:59:46+0000",
      "updated_at": "2014-10-21T11:59:46+0000"
    }
  }
}
{% endhighlight %}

### HTTP Codes

> 200: OK  
> 404: Product not found



## GET `/products/search`

_Search one or many products_

### Params

{% highlight text %}
integer   limit        Limit of elements to return
integer   offset       Offset
string    q            The search query
array     includes[]   Relationships to includes (available values: "options", "images", "categories").
{% endhighlight %}

### Response example

{% highlight json %}
{
  "response": {
    "products": [
      {
        "sku": "p123",
        "status": "draft"
        "name": "An awesome product",
        "description": "An awesome product description",
        "price": 99.99,
        "sale_price": null, # null or double
        "quantity": 2,
        "created_at": "2014-10-21T11:59:46+0000",
        "updated_at": "2014-10-21T11:59:46+0000"
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



## POST `/products`

_Create a new product_

### Params

{% highlight text %}
string    product[status]        The product status
string    product[sku]           The product sku
string    product[name]          The product name
string    product[description]   The product description
double    product[price]         The product price
double    product[sale_price]    The product sale_price (optional)
integer   product[quantity]      The product quantity
{% endhighlight %}

### Response example

{% highlight json %}
{
  "response": {
    "product": {
      "sku": "p123",
      "status": "draft"
      "name": "An awesome product",
      "description": "An awesome product description",
      "price": 99.99,
      "sale_price": null, # null or double
      "quantity": 2,
      "created_at": "2014-10-21T11:59:46+0000",
      "updated_at": "2014-10-21T11:59:46+0000"
    }
  }
}
{% endhighlight %}

### HTTP Codes

> 200: OK  
> 400: Request error



## PUT|PATCH `/products/:sku`

_Edit a product_

### Params

{% highlight text %}
string    product[status]        The product status
string    product[sku]           The product sku
string    product[name]          The product name
string    product[description]   The product description
double    product[price]         The product price
double    product[sale_price]    The product sale_price (optional)
integer   product[quantity]      The product quantity
{% endhighlight %}

### Response example

{% highlight json %}
{
  "response": {
    "product": {
      "sku": "p123",
      "status": "draft"
      "name": "An awesome product",
      "description": "An awesome product description",
      "price": 99.99,
      "sale_price": null, # null or double
      "quantity": 2,
      "created_at": "2014-10-21T11:59:46+0000",
      "updated_at": "2014-10-21T11:59:46+0000"
    }
  }
}
{% endhighlight %}

### HTTP Codes

> 200: OK  
> 400: Request error  
> 404: Product not found
