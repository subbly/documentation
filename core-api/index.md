---
layout: page
title: Core api documentation
permalink: /core-api/
---

## Get started

### How to call a service

{% highlight php %}
<?php

use Subbly\Subbly;

Subbly::api($serviceName)->serviceAction();
// Or
Subbly::api()->service($serviceName)->serviceAction();

// Example
Subbly::api('subbly.user')->all();
{% endhighlight %}


## List of services

| Name | Description |
|------|-------------|
| [`subbly.cart`]({{ '/core-api/services/cart' | prepend: site.baseurl }}) | Cart service |
| [`subbly.order`]({{ '/core-api/services/order' | prepend: site.baseurl }}) | Order service |
| [`subbly.product`]({{ '/core-api/services/product' | prepend: site.baseurl }}) | Product service |
| [`subbly.user`]({{ '/core-api/services/user' | prepend: site.baseurl }}) | User service |
| [`subbly.user_address`]({{ '/core-api/services/user-address' | prepend: site.baseurl }}) | User address service |
| [`subbly.setting`]({{ '/core-api/services/setting' | prepend: site.baseurl }}) | Setting service |  

## Filter results

When asking `all` method you can filter result with `options`:

{% highlight php %}
<?php
$options =  [
    'includes' => [ 'images', 'categories' ]
  , 'limit'    => 2
  , 'offset'   => 0
  , 'order_by' => ['created_at' => 'desc']
    'where'    => [
        ['quantity', '=', 1]
    ]
];
$product = Subbly::api('subbly.product')->all( $options );
{% endhighlight %}

Options include:

* `includes`: a list of relation to include into the query.
* `limit` and `offset`, allow you to set pagination.
* `order_by` an array to set results order.
* `where` to define restrictions on the `products` table.
* `has` to define restrictions on the `products`'s relation' tables. 

## How listen an event

The Subbly services use the [Laravel Events](http://laravel.com/docs/4.2/events) system. It's very simple to use.

{% highlight php %}
<?php

Subbly::events()->listen('subbly.user:creating', function($user) {
    // Do what you want with the $user model.
});
{% endhighlight %}

### Generic service events

`:initializing`: Fired before initialize the service  
`:initialized`: Fired after initialize the service


## Common options

### For collections

* includes
* order_by


## Some helps

* [How to create and register my first service]({{ '/core-api/helps/create-and-register-my-first-service' | prepend: site.baseurl }})
