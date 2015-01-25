---
layout: page
title: Frontage Templating - Control Structures
permalink: /frontage/control-structures/
back_url: /frontage/
---



## Control Structures

`if/else` and `unless` control structures are implemented as regular Handlebars helpers

### IF/ELSE

You can use the if helper to conditionally render a block. If its argument returns false, null, "" or [] (a "falsy" value), Handlebars will not render the block.

**Example**

    {% highlight html %}
    {% raw %}
{{#if isActive}}
  This part will be shown if it is active
{{else}}
  This part will not show if isActive is true
{{/if}}
    {% endraw %}
    {% endhighlight %}


### UNLESS

You can use the unless helper as the inverse of the if helper. Its block will be rendered if the expression returns a falsy value.

    {% highlight html %}
    {% raw %}
{{#unless isActive}}
  This part will not show if isActive is true
{{/unless}}
    {% endraw %}
    {% endhighlight %}


---

##Iterators: EACH

You can iterate over a list using the built-in each helper. Inside the block, you can use {{this}} or {{.}} to reference the element being iterated over.

**Example**

    {% highlight php %}
    {% raw %}
<?php
$model = 
[
    "genres" => 
    [
        "Hip-Hop"
      , "Rap"
      , "Techno"
      , "Country"
    ]
  , 'cars' => 
    [
      [
          'category' => 'Foreign'
        , 'count' => 4
        , 'list' => 
          [
              'Toyota'
            , 'Kia'
            , 'Honda'
            , 'Mazda'
          ]
      ]
    , [
          'category' => 'WTF'
        , 'count' => 1
        , 'list' => 
          [
            'Fiat'
          ]
      ]
    , [
          'category' => 'Luxury'
        , 'count' => 2
        , 'list' => 
          [
              'Mercedes Benz'
            , 'BMW'
          ]
      ]
    , [
          'category' => 'Rich People Shit'
        , 'count' => 3
        , 'list' => 
          [
              'Ferrari'
            , 'Bugatti'
            , 'Rolls Royce'
          ]
      ]
    ]
];
    {% endraw %}
    {% endhighlight %}
    {% highlight html %}
    {% raw %}
<h2>All genres:</h2>
{{#each genres}}
    {{.}}
{{/each}}

{{#each cars}}
    <h3>{{category}}</h3>
    Total: {{count}}
    <ul>
        {{#each list}}
            {{.}}
        {{/each}}
    </ul>
{{/each}}
    {% endraw %}
    {% endhighlight %}


### EACH/ELSE

You can optionally provide an {{else}} section which will display only when the list is empty.

    {% highlight html %}
    {% raw %}
<h2>All genres:</h2>
{{#each genres}}
    {{.}}
{{else}}
  No genres found!
{{/each}}
    {% endraw %}
    {% endhighlight %}



#### {{@INDEX}} and {{@KEY}}

When looping through items in each, you can optionally reference the current loop index via {{@index}}

    {% highlight html %}
    {% raw %}
{{#each array}}
  {{@index}}: {{this}}
{{/each}}
    {% endraw %}
    {% endhighlight %}

    {% highlight html %}
    {% raw %}
{{#each object}}
  {{@key}}: {{this}}
{{/each}}
    {% endraw %}
    {% endhighlight %}



## Change Context: WITH

You can shift the context for a section of a template by using the built-in with block helper.

    {% highlight php %}
    {% raw %}
<?php
$model = [
    "genres" => 
    [
        "Hip-Hop"
      , "Rap"
      , "Techno"
      , "Country"
    ]
  , "other_genres" => 
    [
      "genres" => 
      [
          "Hip-Hop"
        , "Rap"
        , "Techno"
        , "Country"
      ]
  ]
];
    {% endraw %}
    {% endhighlight %}

    {% highlight html %}
    {% raw %}
<h2>All genres:</h2>
{{#with other_genres}}
    {{#each genres}}
        {{.}}
    {{/each}}
{{/with}}
    {% endraw %}
    {% endhighlight %}
