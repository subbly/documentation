---
layout: page
title: Create and register my first service
permalink: /core-api/helps/create-and-register-my-first-service/
back_url: /core-api/
---

## Get started



## TL;DR

### The service

{% highlight php %}
<?php

use Subbly\Model\User;

class MyTestService extends Service
{
    /**
     * Give me an hello world
     *
     * @return string
     */
    public function hello()
    {
        return 'Hello world';
    }

    /**
     * Service name
     */
    public function name()
    {
        return 'my_plugin.test_service';
    }
}

{% endhighlight %}

### Register

{% highlight php %}
<?php

use Subbly\Subbly;

Subbly::events->listen('subbly.container:loaded', function() {
    Subbly::api()->registerService('MyTestService');
});

{% endhighlight %}

### Use it

{% highlight php %}
<?php

use Subbly\Subbly;

$hello = Subbly::api('my_plugin.test_service')->hello();
echo $hello; # => 'Hello world'

{% endhighlight %}
