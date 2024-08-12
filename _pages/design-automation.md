---
layout: page
title: Design Automation
permalink: /design-automation
subtitle: 

news: true # includes a list of news items
selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page
---

The design of soft robots is primarily undertaken by teams of human designers, and their fabrication relies on traditional manufacturing processes like silicone casting. We explore the fabrication of print-in-place soft robots by additive manufacturing. Advanced additive manufacturing eliminates time-consuming manual fabrication steps as well as fabrication constraints inherent in traditional fabrication processes.
Additionally, we discover novel soft robot designs through automated, algorithm-driven processes, which are capable of much broader searches through the rugged design terrain characteristic of the soft robotics field. We envision automated design tools which extend the reach of human design teams, allowing them to more rapidly synthesize complex soft robot designs.

### Evolving Modular Robots with a Generative Encoding

<div style="display: flex;">
    <div style="flex: 2;padding-right: 30px;">
        Designing modular robots that employ heterogeneous modules aligned with a grid can be accomplished via search over the occupancy matrix that specifies the module type in each grid cell. A generative encoding (NEAT) creates a network that yields the module type in each cell when queried with the cell's grid position. Each individual (simulated) robot created in this way participates in an evolutionary competition to pass on parts of its generative encoding to the next generation, with faster individuals more likely to pass on their genes. This approach allows the high-dimensional design space to be explored and yields many qualitatively unique solutions that all move quickly - an approach that aids design discovery.
    </div>
    <div style="flex: 1; margin-left: auto;">
        <img src="/assets/img/design-automation/da1.gif" alt="Image Description" style="width: 300px; height: 300px; object-fit: cover;">
    </div>
</div>
<br/><br/>

### A Seamless Workflow for the Design and Fabrication of Multimaterial Soft Actuators


<div style="display: flex;">
    <div style="flex: 2;padding-right: 30px;">
Learn more about our work in lowering barriers to soft actuator design through creation of novel design tools that allow for interactive GUI-based specification of geometry and material distribution, one-click design evaluation via FEA simulation, and automated generation of design files.
    </div>
    <div style="flex: 1; margin-left: auto;">
        <img src="/assets/img/soft-actuator-synthesis/sas1.png" alt="Image Description" style="width: 300px; height: 300px; object-fit: cover;">
    </div>
</div>
<br/><br/>

### Automated Synthesis of Pneumatic Bending Soft Actuators


<div style="display: flex;">
    <div style="flex: 2;padding-right: 30px;">
        Explore our work in automatically synthesizing pneumatic bending soft actuators which are simultaneously compliant and forceful. The designs automatically discovered by our method are easily fabricated by 3D printing, and we compare their performance to published results in simulation and by experimentation.
    </div>
    <div style="flex: 1; margin-left: auto;">
        <img src="/assets/img/soft-actuator-synthesis/sas2.png" alt="Image Description" style="width: 300px; height: 300px; object-fit: cover;">
    </div>
</div>
<br/><br/>

### A Seamless Workflow for the Design and Fabrication of Multimaterial Soft Actuators

<div style="display: flex;">
    <div style="flex: 2;padding-right: 30px;">
        Learn more about our work in lowering barriers to soft actuator design through creation of novel design tools that allow for interactive GUI-based specification of geometry and material distribution, one-click design evaluation via FEA simulation, and automated generation of design files.
    </div>
    <div style="flex: 1; margin-left: auto;">
        <img src="/assets/img/numerical-simulation/ns1.png" alt="Image Description" style="width: 300px; height: 300px; object-fit: cover;">
    </div>
</div>
<br/><br/>


### Shell Finite Elements for Soft Actuator Simulation

<div style="display: flex;">
    <div style="flex: 2;padding-right: 30px;">
        Learn why we leverage not only traditional volumetric finite element simulations, but also simulations over dimensionally reduced shell finite elements.
    </div>
    <div style="flex: 1; margin-left: auto;">
        <img src="/assets/img/numerical-simulation/ns2.png" alt="Image Description" style="width: 300px; height: 300px; object-fit: cover;">
    </div>
</div>
<br/><br/>

### Multimaterial Simulation
<div style="display: flex;">
    <div style="flex: 2;padding-right: 30px;">
        We apply automated design techniques to soft robots made from rigid plastics, soft and rubbery elastomers, and water-like liquids. Internal to an automated design routine is some prediction of a candidate robot's behavior - this prediction is made using numerical simulation.
        <br/><br/>
        Simulating soft robots is a challenging task, made even more difficult by the geometric complexity of the robots we fabricate. We employ finite element and material point methods to efficiently simulate soft robots, which enables our automated design algorithms to efficiently explore a vast and rugged design space and discover novel soft robot designs.
    </div>
    <div style="flex: 1; margin-left: auto;">
        <img src="/assets/img/numerical-simulation/ns3.gif" alt="Image Description" style="width: 300px; height: 300px; object-fit: cover;">
    </div>
</div>
<br/><br/>

