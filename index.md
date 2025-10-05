---
layout: default
title: Home
---
# Welcome

This is my ongoing research notebook: long-form essays, structured notes, and literature highlights across neuroscience (g, p, working memory), synthetic biology, human genome editing, ethics & animal welfare, and consciousness (non-dual Advaita Vedānta).

- Latest posts
{% for post in site.posts limit:5 %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}

- Browse by [topics](/topics/) • [notes](/notes/) • [literature](/lit/)
