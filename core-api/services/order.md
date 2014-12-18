---
layout: page
title: Order services
permalink: /core-api/services/order/
back_url: /core-api/
---
## List of methods

- [`newOrder`](#newOrder)
- [`all`](#all)
- [`find`](#find)
- [`searchBy`](#searchby)
- [`create`](#create)
- [`update`](#update)



## newOrder

{% highlight php %}
<?php
$order = Subbly::api('subbly.order')->newOrder();
{% endhighlight %}

Return a new `Subbly\Model\Order` instance.


## all

{% highlight php %}
<?php
$options = array(
    'includes' => array(),
    'order_by' => array(),
    'limit'    => null,
    'offset'   => null,
);

$orders = Subbly::api('subbly.order')->all($options);
{% endhighlight %}

Return a `Subbly\Model\Order` collection.


## find

{% highlight php %}
<?php
$id      = 'A_USER_UID';
$options = array(
    'includes' => array(),
    'order_by' => array(),
);
$order   = Subbly::api('subbly.order')->find($id, $options);
{% endhighlight %}

Return a `Subbly\Model\Order` model.


## searchBy

{% highlight php %}
<?php
$searchQuery = array(

);
// OR
$searchQuery = 'query';

$options = array(
    'includes' => array(),
    'order_by' => array(),
    'limit'    => null,
    'offset'   => null,
);

$statementsType = nulll; // null|or|and

$orders = Subbly::api('subbly.order')->searchBy($searchQuery, $options, $statementsType);
{% endhighlight %}

Return a `Subbly\Model\Order` collection.


## create

{% highlight php %}
<?php
use Subbly\Model\Order;

$order = new Order;
$order->status = Order::STATUS_DRAFT;
Subbly::api('subbly.order')->create($order);

// or
Subbly::api('subbly.order')->create(array(
    'status' => Order::STATUS_DRAFT,
));
{% endhighlight %}

### Events

`subbly.order:creating`: Fired before the order creation  
`subbly.order:created`: Fired when the order is created


## update

{% highlight php %}
<?php
$order_id = 1;

$order = Subbly::api('subbly.order')->find($order_id);
$order->status = Order::STATUS_WAITING;
Subbly::api('subbly.order')->update($order);
// or
Subbly::api('subbly.order')->update($order_id, array(
    'status' => Order::STATUS_WAITING,
));
{% endhighlight %}

### Events

`subbly.order:updating`: Fired before the order updating  
`subbly.order:updated`: Fired when the order is updated
