---
layout: page
title: Automated Synthesis of Pneumatic Bending Soft Actuators
permalink: /automated-synthesis
subtitle: 

news: true # includes a list of news items
selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page
---

### Highlights
- We present an automated method for the discovery of pneumatic bending soft actuators​
- We incentivize the discovery of actuators which are simultaneously compliant and forceful using custom fitness functions
- We fabricate bending soft actuator and compare its performance to published results

<div class="row">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/re_9QF8w0bk" title="YouTube Video Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
</div>
<br><br>

### An Expressive Representation
Our method hinges on a compact, expressive representation of actuator geometry. All the designs below are generated using the same computational network topology - only network weights and biases are modified to achieve the breadth of morphologies below!

<div class="row">
        <img src="/assets/img/automated-synthesis/as1.png" alt="Image Description" class="img-fluid custom-img">
</div>

<style>
.custom-img {
    height: auto; /* Reset height to auto for responsiveness */
    width: 100%; /* Ensure image takes full width of its container */
}
</style>

<br><br>

### Results
We compare the performance of a selection of automatically designed actuators in simulation, along with a empirical performance of a fabricated sample, with a selection of published results. While the automatically discovered actuator is not Pareto-dominant, it shows similar performance to related results while requiring no human design effort. All designs were discovered using 300 core-hours of compute time.

<div class="row">
        <img src="/assets/img/automated-synthesis/as2.png" alt="Image Description" class="img-fluid custom-img">
</div>

<style>
.custom-img {
    height: auto; /* Reset height to auto for responsiveness */
    width: 100%; /* Ensure image takes full width of its container */
}
</style>
