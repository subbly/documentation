---
layout: page
title: Frontage Templating - Query Helpers
permalink: /frontage/query-helpers/
back_url: /frontage/
---



## Query Helper

### Is user login

Boolean 

    {% highlight html %}
    {% raw %}
{{#isUserLogin}}
<div class="account">
  <em>Welcome</em>, 
  <a href="{{url 'signin'}}">Sign in</a>
</div>
{{else}}
<div class="account">
  hello <a href="{{url 'account'}}">{{user.email}}</a>
</div>
{{/isUserLogin}}
    {% endraw %}
    {% endhighlight %}
    
### Products

Loop through products.

    {% highlight html %}
    {% raw %}
    <ul>
  {{#products with {
      "includes": [ "images" ]
    , "order_by": [
          ["position", "asc"]
      ]}
  }}
  <li>
    <h3>{{name}}</h3>
  </li>
  {{/products}}
</ul>
    {% endraw %}
    {% endhighlight %}


Returns all products that match query (see [Filter Results](/core-api/#filter-results) for more options)

Defaults settings query products with `status`  different from draft and hidden.

Inside product's loop you have acces to context helpers as default image, etc.

    {% highlight html %}
    {% raw %}
    <img src="{{image this}}" alt="" />
    {% endraw %}
    {% endhighlight %}

will return the product's first image

