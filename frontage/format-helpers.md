---
layout: page
title: Frontage Templating - Format Helpers
permalink: /frontage/format-helpers/
back_url: /frontage/
---



## Format Helpers


### Upper

To format string to uppercase

    {% highlight html %}
    {% raw %}
{{upper title}}
    {% endraw %}
    {% endhighlight %}


### Lower

To format string to lowercase

    {% highlight html %}
    {% raw %}
{{lower title}}
    {% endraw %}
    {% endhighlight %}



### Capitalize

To capitalize the first letter

    {% highlight html %}
    {% raw %}
{{capitalize title}}
    {% endraw %}
    {% endhighlight %}


### Capitalize All Words

To capitalize each words in a string

    {% highlight html %}
    {% raw %}
{{capitalizeAll title}}
    {% endraw %}
    {% endhighlight %}


### Format Date

To format date

    {% highlight html %}
    {% raw %}
{{formatDate date 'Y-m-d H:i:s'}}
    {% endraw %}
    {% endhighlight %}



### Truncate

To truncate a string

    {% highlight html %}
    {% raw %}
{{truncate title 21 '...'}}
    {% endraw %}
    {% endhighlight %}



### Default

To use a default value if  the string is empty

    {% highlight html %}
    {% raw %}
{{default title 'No title'}}
    {% endraw %}
    {% endhighlight %}


### Template Comments
You can use comments in your handlebars code just as you would in your code. Since there is generally some level of logic, this is a good practice.

    {% highlight html %}
    {% raw %}
{{!-- only output this author names if an author exists --}}
    {% endraw %}
    {% endhighlight %}


### Compare

Comparison block helper. It takes 2 parameters, but you can also pass an optional operator hashed argument. If you omit the operator argument it default to ==.

    {% highlight html %}
    {% raw %}
{{#compare status 'sold_out'}}
{{#compare 100 200 '>'}}
    {% endraw %}
    {% endhighlight %}

Operators:

* `==`  equal  
* `===` strictly equal  
* `!=`  different  
* `<`   lower  
* `>`   greatter  
* `<=`  lower or equal  
* `>=`  greater or equal  

### Repeat

Repeat the block `n` times.

    {% highlight html %}
    {% raw %}
{{#repeat 2}}content to repeat, {{/repeat}}
    {% endraw %}
    {% endhighlight %}

### Replace

Replace A by B.

    {% highlight html %}
    {% raw %}
{{#replace 'string' 'chaine'}}Target string to search in.{{/replace}}<br>
{{#replace 'string' name}}Target string to search in.{{/replace}}<br>
{{#replace name 'chaine'}}Target Test PAGE to search in.{{/replace}}
    {% endraw %}
    {% endhighlight %}