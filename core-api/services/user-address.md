---
layout: page
title: User address services
permalink: /core-api/services/user-address/
back_url: /core-api/
---

## List of methods

- [`newUserAddress`](#newuseraddress)
- [`find`](#find)
- [`findByUser`](#findByUser)
- [`create`](#create)
- [`update`](#update)



## newUserAddress

{% highlight php %}
<?php
$user = Subbly::api('subbly.user_address')->newUserAddress();
{% endhighlight %}

Return a new `Subbly\Model\UserAddress` instance.


## find

{% highlight php %}
<?php
$uid  = 'A_USERADDRESS_UID';
$user = Subbly::api('subbly.user_address')->find($uid, $options);
{% endhighlight %}

Return a `Subbly\Model\UserAddress` model.
