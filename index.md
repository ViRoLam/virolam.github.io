---
layout: default
title: Home
---
# Welcome

This is my research notebook where I explore how to improve the world through the lens of effective altruism and rationalist thought. My focus is on high-impact factors ([general factors](/general_factors/), spanning neuroscience (g, p, working memory), synthetic biology, longevity, human genome editing, ethics, animal sufffering, and consciousness (especially non-dual Advaita Vedanta).

- Latest posts
{% for post in site.posts limit:5 %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}

- Browse by [topics](/topics/) • [notes](/notes/) • [literature](/lit/)
