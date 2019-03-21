---
title: Web programming projects
layout: default
---

[home]({% link index.md %}) > [programming]({% link _programming/index.md %}) > [web]({% link _programming/web.md %}) > [projects]({% link _programming/web/projects.md  %})
{: .sticky }

# Web development project portfolio

{% for post in site.categories.web %}
{% if post.categories contains 'projects' %}
&nbsp; [{{ post.title | escape }}]({{ post.url | relative_url }}) 
{{ post.date | date: "%b %-d, %Y" }}
{% endif %} 
{% endfor %}

[contact me]({% link collaborate.html %})



