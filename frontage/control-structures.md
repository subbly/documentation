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

---  

## <a name="built-in"></a>Subbly Built-in Helpers


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


             