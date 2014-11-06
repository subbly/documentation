---
layout: page
title: REST api documentation
permalink: /rest-api/v1/services/
back_url: /rest-api
---
## Get started



## List of services

| Name | Description |
|------|-------------|
| [`/orders`]({{ '/rest-api/v1/services/orders' | prepend: site.baseurl }}) | Order service |
| [`/products`]({{ '/rest-api/v1/services/products' | prepend: site.baseurl }}) | Product service |
| [`/users`]({{ '/rest-api/v1/services/users' | prepend: site.baseurl }}) | User service |
| [`/settings`]({{ '/rest-api/v1/services/settings' | prepend: site.baseurl }}) | Setting service |

## Common params

### Relationships

You can use `includes` parameter to ask some relationships. `includes` must be an array.  
Example: `http://my.awesome-shop.com/api/v1/users?includes[]=addresses&includes[]=orders`

### Debug

If the app run in debug mode, you can ask an Api service with debug informations.  
Example: `http://my.awesome-shop.com/api/v1/users?debug=true`
