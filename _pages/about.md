---
layout: about
title: about
permalink: /
subtitle: 


news: true # includes a list of news items
selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page
---

<!-- Title and Subtitle -->
<div class="page-title">Matter Assembly Computation Lab</div>
<div class="page-subtitle">CU Boulder, College of Engineering</div>



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

<br/>
<br/>
<!-- About the Lab Section -->
## About the Lab

<br/>
Hi everyone, thanks for your interest in the Matter Assembly Computation Lab! Our research in the MACLab is motivated by the observation that designing robots, and electromechanical systems, is difficult, time-consuming, and requires a great deal of experience. Practitioners need to be skilled in mechanical, electrical, and computer engineering. Instead, what if making a robot could be as easy as specifying the behaviors or capabilities you want, asking software tools to design the robot, and then printing the robot? This is the overall inspiration for what we’re trying to do in the MACLab.

In support of this general goal we work in several research subareas:

- **Design automation for multimaterial fabrication**
- **Multimaterial simulation**
- **Fabrication automation** (which involves making new 3D printers and control software)
- **3D-printable material development and testing**