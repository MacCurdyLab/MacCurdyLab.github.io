---
layout: page
title: Stretching the Boundary- Shell Finite Elements of Pneumatic Soft Actuators
permalink: /shell-finite
subtitle: 

news: true # includes a list of news items
selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page
---

### Highlights

- We simulate the deformation behavior of 12 pneumatic soft actuators using two finite element simulation methods: using traditional volumetric elements, and using dimensionally reduced shell finite elements.
- We compare computational cost of each simulation and present a local accuracy metric for quantifying precision of shell simulations relative to volumetric simulations
- We find that simulations over shell finite elements execute ~7x faster, with acceptable loss in accuracy!



<div class="row">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/ddnvE8hdn08" title="YouTube Video Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
</div>


### Two Simulation Options
We simulate pneumatic soft actuators like the bending actuator show at left using shell finite elements, as well as volumetric finite elements. We then measure the accuracy of shell simulations by computing the local L2 norm of the difference in position between corresponding points on the actuators' outer surfaces.

<div class="row">
    <div class="col">
        <img src="/assets/img/shell-finite/shell-finite1.png" alt="Image Description" class="img-fluid custom-img">
    </div>
</div>

<style>
.custom-img {
    height: auto; /* Reset height to auto for responsiveness */
    width: 100%; /* Ensure image takes full width of its container */
}
</style>
<br>

<div class="row">
    <div class="col-md-4">
        <h3>A Variety of Designs</h3>
        <p>We simulate the behavior of actuators that exhibit bending, extension, twisting, and compound deformation modes.</p>
    </div>
    <div class="col-md-8">
        <img src="/assets/img/shell-finite/shell-finite2.png" alt="Image Description" class="img-fluid custom-img">
    </div>
</div>

<style>
.custom-img {
    height: auto; /* Reset height to auto for responsiveness */
    width: 100%; /* Ensure image takes full width of its container */
}
</style>

<br><br>

<div class="row">
        <embed src="/assets/pdf/2022__Stretching_the_Boundary-_Shell_Finite_Elements_for_Pneumatic_Soft_Actuators.pdf" type="application/pdf" width="100%" height="600px" />
</div>