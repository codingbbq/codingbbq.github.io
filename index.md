---
layout: page
---

{% assign post = site.posts.first %}
<div class="col-md-8 p-lg-5 mx-auto my-5">
    <h1 class="display-4 font-weight-normal">
        <a href="{{ post.url | relative_url }}">
            {{ post.title | escape }}
        </a>
    </h1>
    <p class="lead font-weight-normal">
        {{ post.excerpt | escape }}
    </p>
    <a class="btn btn-outline-secondary" href="{{ post.url | relative_url }}">Read more</a>
</div>

{% for i in (1..3) %}
  {% assign offset = forloop.index0 | times: 2 %}
  <div class="row mb-4">
    {% for post in site.posts limit:2 offset:offset %}
        <div class="col-sm-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">
                        <a href="{{ post.url | relative_url }}">
                        {{ post.title | escape }}
                        </a>
                    </h5>
                    <p class="card-text">
                        {{ post.excerpt | escape }}
                    </p>
                    <a href="{{ post.url | relative_url }}" class="btn btn-primary">Read more</a>
                </div><!-- card-body -->
                <div class="card-footer">
                    <small class="text-muted">{{ post.date | date_to_long_string  }}</small>
                </div>
            </div>
        </div>
        
    {% endfor %}
  </div>
{% endfor %}

[Read all the articles](/articles){: .btn .btn-primary .btn-lg .btn-block}