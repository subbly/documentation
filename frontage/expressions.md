---
layout: page
title: Frontage Templating - Expressions
permalink: /frontage/expressions/
back_url: /frontage/
---

### <a name="expressions"></a>Expressions

Handlebars expressions are the basic unit of a Handlebars template. You can use them alone in a {{mustache}}, pass them to a Handlebars helper, or use them as values in hash arguments.


The simplest Handlebars expression is a simple identifier:
    {% highlight html %}
    {% raw %}
{{title}}

-> I'm Title
    {% endraw %}
    {% endhighlight %}

Handlebars nested expressions which are dot-separated paths.

    {% highlight html %}
    {% raw %}
{{product.name}}

-> My Product Name
    {% endraw %}
    {% endhighlight %}

Handlebars nested expressions in an array.

    {% highlight html %}
    {% raw %}
{{product.0.name}}

-> Product #1's Name
    {% endraw %}
    {% endhighlight %}


Handlebars also allows for name conflict resolution between helpers and data fields via a this reference:

    {% highlight html %}
    {% raw %}
{{./name}} or {{this/name}} or {{this.name}}
    {% endraw %}
    {% endhighlight %}


Handlebars expressions with a helper. In this case we're using the upper helper

    {% highlight html %}
    {% raw %}
{{#upper title}}

-> I'M TITLE
    {% endraw %}
    {% endhighlight %}


Nested handlebars paths can also include ../ segments, which evaluate their paths against a parent context.

    {% highlight html %}
    {% raw %}
{{#each posts}}
  <a href="/posts/{{../permalink}}/{{id}}">{{title}}</a>
  {{content}}
{{/each}}
    {% endraw %}
    {% endhighlight %}


Handlebars HTML-escapes values returned by a {{expression}}. If you don't want Handlebars to escape a value, use the "triple-stash", {{{ }}}

    {% highlight html %}
    {% raw %}
{{{foo}}}
    {% endraw %}
    {% endhighlight %}


