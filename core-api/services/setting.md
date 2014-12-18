---
layout: page
title: Cart services
permalink: /core-api/services/setting/
back_url: /core-api/
---
## List of methods

- [`all`](#all)
- [`get`](#get)
- [`has`](#has)
- [`update`](#update)
- [`updateMany`](#updateMany)



## all

{% highlight php %}
<?php
$user = Subbly::api('subbly.setting')->all();
{% endhighlight %}

Return a `Subbly\Model\User` collection.


## newUser

{% highlight php %}
<?php
$user = Subbly::api('subbly.user')->newUser();
{% endhighlight %}

Return a new `Subbly\Model\User` instance.
