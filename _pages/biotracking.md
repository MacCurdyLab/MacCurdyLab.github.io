---
layout: page
title: Biotracking
permalink: /biotracking
subtitle: 

news: true # includes a list of news items
selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page
---

### Terrestrial Autonomous Acoustic Recorder

<div style="display: flex;">
    <div style="flex: 2;padding-right: 30px;">
        Like the marine application above, terrestrial acoustic signals can be used to assess wildlife behavior, including abundance, and spatio-temporal patterns. Synchronized recorders permit arrival-time based estimates of position. 
    </div>
    <div style="flex: 1; margin-left: auto;">
        <img src="/assets/img/biotracking/b1.jpg" alt="Image Description" style="width: 300px; height: 300px; object-fit: cover;">
    </div>
</div>
<br/><br/>

### Autonomous Ocean-bottom Acoustic Recorder ("popup")

<div style="display: flex;">
    <div style="flex: 2;padding-right: 30px;">
        Marine animals have evolved to utilize acoustic communication; marine animal scientists can exploit natural vocalizations to learn about wildlife behavior without ever interacting with (tagging) the animal. We led a team of engineers at the Cornell Lab of Ornithology who designed a fleet (>200) of underwater recording systems that have been deployed throughout the world's oceans. After deployment, these recorders sit on the ocean floor, recording according to a schedule, and can do so for more than a year. When commanded to resurface, the "popup" releases an anchor and floats back to the surface for retrieval, after which its data can be read.
    </div>
    <div style="flex: 1; margin-left: auto;">
        <img src="/assets/img/biotracking/b2.jpg" alt="Image Description" style="width: 300px; height: 300px; object-fit: cover;">
    </div>
</div>
<br/><br/>

### Software-defined Tags

<div style="display: flex;">
    <div style="flex: 2;padding-right: 30px;">
        Existing wildlife monitoring devices (tags) are special-purpose custom designed tools that are built specifically for a particular user or experiment. This makes them slow to produce, expensive, and difficult to adapt to new study scenarios or technological changes. Instead, we have recently designed and built a software-defined tag that is very lightweight (300mg) and is solar-powered, allowing an indefinite lifetime. This tag can be adapted for use with existing tracking receivers (OOK), data telemetry receivers (ASK,FSK,FM), or with time-of-arrival receivers.
    </div>
    <div style="flex: 1; margin-left: auto;">
        <img src="/assets/img/biotracking/b3.jpg" alt="Image Description" style="width: 300px; height: 300px; object-fit: cover;">
    </div>
</div>
<br/><br/>


### Energy Harvesting

<div style="display: flex;">
    <div style="flex: 2;padding-right: 30px;">
        Free-flying organisms can carry a small percentage of their body mass as additional payload; for birds the widely-used guideline is 3%. This means that roughly half of all bird species can carry no more than 1 gram of added payload, which imposes a very tight mass budget on the design of any systems added to them in order to monitor their behavior. The mass-specific energy density of electro-chemical batteries has improved slowly over the years, but there is currently no battery than can provide sufficient energy storage per gram to enable multi-year tag lifetimes, a duration which has significant behavioral relevance. For this reason, we have investigated and developed various forms of energy harvesting as a supplement to tag batteries, focusing on vibration harvesting (for nocturnal animals) and solar harvesting. Because the exact amount of energy that will be harvested during the tag's deployment cannot be known a priori, this work also incorporates energy-aware computing to manage the energy stored on the tag.
    </div>
    <div style="flex: 1; margin-left: auto;">
        <img src="/assets/img/biotracking/b4.jpg" alt="Image Description" style="width: 300px; height: 300px; object-fit: cover;">
    </div>
</div>
<br/><br/>


### Time-of-arrival Tracking


<div style="display: flex;">
    <div style="flex: 2;padding-right: 30px;">
        Location information is a requirement common to many applications, and though GPS is now a ubiquitous technology, the size, cost and energy consumption of GPS receivers limit their use. For example, fewer than 15 percent of bird species are large enough to carry currently available GPS trackers, which require a relatively heavy battery. To address this limitation, we designed and built an alternative radio-frequency locating system that uses pseudorandom-encoded transmissions from very small mobile units (tags) to locate mobile transmitters using a matched filter detector approach based on time-of-arrival. This method uses 1000x less energy at the tag than GPS, is capable of tracking several hundred transmitters simultaneously with no operator intervention, has high spatiotemporal resolution (+/- 10 m, 1 second position updates), and uses tags (Fig 5.A) that are inexpensive (<$50), long-lived (years), and lightweight ( less than 1 gram)
    </div>
    <div style="flex: 1; margin-left: auto;">
        <img src="/assets/img/biotracking/b5.jpg" alt="Image Description" style="width: 300px; height: 300px; object-fit: cover;">
    </div>
</div>
<br/><br/>

