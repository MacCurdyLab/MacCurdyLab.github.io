---
layout: page
permalink: /people/
title: People
description: 
nav: true
nav_order: 7
---

<!-- Carousel -->
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    {% for i in (0..3) %}
      <li data-target="#carouselExampleIndicators" data-slide-to="{{ i }}" class="{% if i == 0 %}active{% endif %}"></li>
    {% endfor %}
  </ol>
  <div class="carousel-inner">
    {% for i in (1..4) %}
      <div class="carousel-item {% if forloop.first %}active{% endif %}">
        <img src="/assets/img/people/carousel/{{ i }}.jpg" class="d-block w-100" alt="Image {{ i }}">
      </div>
    {% endfor %}
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

<!-- People Section -->
<div class="container mt-5">
  {% for person in site.data.people %}
  <div class="row mb-4">
    <div class="col-md-3">
      <img src="/assets/img/people/current/{{ person.image }}" class="img-fluid rounded" alt="{{ person.name }}">
    </div>
    <div class="col-md-9">
      <h3>{{ person.name }}</h3>
      <h5>{{ person.position }}</h5>
      <p>{{ person.description }}</p>
    </div>
  </div>
  {% endfor %}


<!-- Alumni Section -->
    <h2>Alumni</h2>
  {% for alumni in site.data.alumni %}
  <div class="row mb-4">
    <div class="col-md-3">
      <img src="/assets/img/people/alumni/{{ alumni.image }}" class="img-fluid rounded" alt="{{ alumni.name }}">
    </div>
    <div class="col-md-9">
      <h3>{{ alumni.name }}</h3>
      <p>{{ alumni.description }}</p>
    </div>
  </div>
  {% endfor %}
</div>
