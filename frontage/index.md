---
layout: page
title: Frontage Templating Engine
permalink: /frontage/
---

## Get started

An easy as ABC template system for Subbly CMS.  

Built on top of a [PHP port](https://github.com/XaminProject/handlebars.php) of [Handlebars.js](http://handlebarsjs.com/), Frontage allow to design your shop without write a single line of PHP. Only HTML/CSS knowledge is required.

### Summary

* [Basic's](#basics) 
* [Routes](#routes)
  * [Reserved Routes](#reserved-routes)
* [Subbly's Variables](#subbly-variables)
* [Expressions]({{ '/frontage/expressions' | prepend: site.baseurl }})
  * [Control Structures]({{ '/frontage/control-structures' | prepend: site.baseurl }})
  * [Natives Helpers]({{ '/frontage/control-structures#built-in' | prepend: site.baseurl }})
* [Subbly's Helpers Reference](#subbly-helpers)
* [Writing your own helpers](#writing-helpers)

### <a name="basics"></a>Basic's

Handlebars templates look like regular HTML, with embedded handlebars expressions.

Handlebars HTML-escapes values returned by a {{expression}}.

    {% highlight html %}
    {% raw %}
<div class="entry">
  <h1>{{title}}</h1>
  <div class="body">
    Hello, my name is {{name}}
  </div>
</div>
    {% endraw %}
    {% endhighlight %}

The string above can be used as is in a HTML file inside you theme folder (ie: */themes/pocket/home.html).

### <a name="routes"></a>Routes

Inside `config/subbly.php`, you can define an array of `url` to `file` pairs. Files are store into the `themes` directory.

    {% highlight php %}
    {% raw %}
'frontendUri' => array(
    '/'                                          => 'index'
  , '/products/{page}/{category}/{subcategory}'  => 'catalog'
  , '/products/{id}-{slug}'                      => 'product'
)
    {% endraw %}
    {% endhighlight %}

In the previous exemple, the URL /products/123-my-product will match to the `/themes/<your theme>/product.html`.

#### <a name="reserved-routes"></a>Reserved Routes

Frontage needs the following routes for its standard operation. You must not override them :

* `login`
* `sign-in`
* `add-to-cart`

### <a name="subbly-variables"></a>Subbly's Variables

Subbly expose a lot of variables, here comes the list : 

### <a name="control-structures"></a>Control Structures

### <a name="natives-helpers"></a>Natives Helpers

### <a name="subbly-helpers"></a>Subbly's Helpers

* [Products](#subbly-helpers-products) 
* [Product](#subbly-helpers-product) 
* [Asset](#subbly-helpers-asset) 
* [Url](#subbly-helpers-url) 

#### <a name="subbly-helpers-products"></a>Products
#### <a name="subbly-helpers-product"></a>Product
#### <a name="subbly-helpers-asset"></a>Url

### <a name="writing-helpers"></a>Writing your own helpers

{% highlight php %}
<?php
namespace Vendor\Package\Helpers;

use \Handlebars\Context;
use \Handlebars\Helper;
use \Handlebars\Template;
use \Subbly\Frontend\Helpers\CustomHelper;

class YourHelper 
    extends CustomHelper
{
  /**
   * Execute the helper
   *
   * @param \Handlebars\Template $template The template instance
   * @param \Handlebars\Context  $context  The current context
   * @param array                $args     The arguments passed the the helper
   * @param string               $source   The source
   *
   * @return mixed
   */
  public function execute( Template $template, Context $context, $args, $source )
  {
    $buffer = '';
    $props  = $this->parseProps( $args, $context );
    $args   = $template->parseArguments( $args );

    if( count( $args ) != 1 )
      return $buffer;

    $themePath = $context->get('themes');

    return $themePath . DS . $args[0]->getString();
  }
}
{% endhighlight %}

`$props` return an array or `false`  
`$args` return an array