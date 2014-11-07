---
layout: page
title: Product services
permalink: /core-api/services/product/
back_url: /core-api/
---
## List of methods

- [`newProduct`](#newproduct)
- [`all`](#all)
- [`find`](#find)
- [`searchBy`](#searchby)
- [`create`](#create)
- [`update`](#update)


## newProduct

{% highlight php %}
<?php
$product = Subbly::api('subbly.product')->newProduct();
{% endhighlight %}

Return a new `Subbly\Model\Product` instance.


## all

{% highlight php %}
<?php
$product = Subbly::api('subbly.product')->all();
{% endhighlight %}

Return a `Subbly\Model\Product` collection.


## find

{% highlight php %}
<?php
$sku  = 'A_PRODUCT_SKU';
$product = Subbly::api('subbly.product')->find($sku);
{% endhighlight %}

Return a `Subbly\Model\Product` model.


## searchBy

{% highlight php %}
<?php
$product = Subbly::api('subbly.product')->searchBy(array(
    'sku' => 'p123',
));
{% endhighlight %}

Return a `Subbly\Model\Product` collection.


## create

{% highlight php %}
<?php
$product = Subbly\Model\Product;
$product->name = 'An awesome product';
...
Subbly::api('subbly.product')->create($product);

// or
Subbly::api('subbly.product')->create(array(
    'name' => 'An awesome product',
    ...
));
{% endhighlight %}

### Events

`subbly.product:creating`: Fired before the product creation  
`subbly.product:created`: Fired when the product is created


## update

{% highlight php %}
<?php
$sku = 'PRODUCT_SKU';

$product = Subbly::api('subbly.product')->find($sku);
$product->name = 'A very awesome product';
Subbly::api('subbly.product')->update($product);
// or
Subbly::api('subbly.product')->update($sku, array(
    'name' => 'A very awesome product',
));
{% endhighlight %}

### Events

`subbly.product:updating`: Fired before the product updating  
`subbly.product:updated`: Fired when the product is updated
