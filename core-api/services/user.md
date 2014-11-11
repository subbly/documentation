---
layout: page
title: User services
permalink: /core-api/services/user/
back_url: /core-api/
---
## List of methods

- [`newUser`](#newuser)
- [`authenticate`](#authenticate)
- [`all`](#all)
- [`find`](#find)
- [`searchBy`](#searchby)
- [`create`](#create)
- [`update`](#update)



## newUser

{% highlight php %}
<?php
$user = Subbly::api('subbly.user')->newUser();
{% endhighlight %}

Return a new `Subbly\Model\User` instance.


## authenticate

{% highlight php %}
<?php
$credentials   = array(
    'login'    => 'jon.snow@subbly.com',
    'password' => 'hodor123',
);
$authenticated = Subbly::api('subbly.user')->authenticate($credentials);
{% endhighlight %}


## all

{% highlight php %}
<?php
$users = Subbly::api('subbly.user')->all();
{% endhighlight %}

Return a `Subbly\Model\User` collection.


## find

{% highlight php %}
<?php
$uid  = 'A_USER_UID';
$user = Subbly::api('subbly.user')->find($uid);
{% endhighlight %}

Return a `Subbly\Model\User` model.


## searchBy

{% highlight php %}
<?php
$users = Subbly::api('subbly.user')->searchBy(array(
    'firstname' => 'jon',
    'lastname'  => 'Snow',
    'email'     => '',
));
{% endhighlight %}

Return a `Subbly\Model\User` collection.


## create

{% highlight php %}
<?php
$user = Subbly\Model\User;
$user->firstname = 'jon';
$user->lastname  = 'Snow';
Subbly::api('subbly.user')->create($user);

// or
Subbly::api('subbly.user')->create(array(
    'firstname' => 'jon',
    'lastname'  => 'Snow',
));
{% endhighlight %}

### Events

`subbly.user:creating`: Fired before the user creation  
`subbly.user:created`: Fired when the user is created


## update

{% highlight php %}
<?php
$user_uid = 'USER_UID';

$user = Subbly::api('subbly.user')->find($user_uid);
$user->firstname = 'jon jon';
Subbly::api('subbly.user')->update($user);
// or
Subbly::api('subbly.user')->update($user_uid, array(
    'firstname' => 'jon jon',
));
{% endhighlight %}

### Events

`subbly.user:updating`: Fired before the user updating  
`subbly.user:updated`: Fired when the user is updated
