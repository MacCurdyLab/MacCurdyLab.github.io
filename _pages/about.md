---
layout: about
title: about
permalink: /
subtitle: <a href='#'>Affiliations</a>. Address. Contacts. Moto. Etc.

news: true # includes a list of news items
selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page
---

<!-- Carousel -->
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    {% for i in (0..12) %}
      <li data-target="#carouselExampleIndicators" data-slide-to="{{ i }}" class="{% if i == 0 %}active{% endif %}"></li>
    {% endfor %}
  </ol>
  <div class="carousel-inner">
    {% for i in (1..13) %}
      <div class="carousel-item {% if forloop.first %}active{% endif %}">
        <img src="/assets/img/carousel/{{ i }}.jpg" class="d-block w-100" alt="Image {{ i }}">
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