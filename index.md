---
layout: page
---
{%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}

## Hola!!

Welcome to codingBBQ, my playground and abode for all my programming activities.

#### Latest article
{% assign post = site.posts.first %}
<ul>
    <li>
        <h4>
            <a href="{{ post.url | relative_url }}">
                {{ post.title | escape }}
            </a>
        </h4>
        <span>{{ post.date | date: date_format }}</span>
    </li>
</ul>


---
<br />
#### Recent articles

<ul>
    {%- for post in site.posts offset : 1 limit : 5 -%}
    <li>
    <h4>
        <a href="{{ post.url | relative_url }}">
        {{ post.title | escape }}
        </a>
    </h4>
    <span>{{ post.date | date: date_format }}</span>
    </li>
    <br />
    {%- endfor -%}
</ul>

---
<br />
[Read all the articles](/articles/)