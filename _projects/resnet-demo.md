---
name: ResNet Demo
title: ResNet Demo
tools: [Python, TensorFlow, Keras, Flask, Docker, Google Cloud Run, Flutter]
image: "/assets/images/projects/resnet/ex.png"
description: A web app demonstrating ResNet50 
external_url: 
date: 2020-05-07
comments: true
---

<figure class="figure w-100" style="text-align:center;">
		<img src="/assets/images/projects/resnet/ex.png" class="figure-img img-fluid rounded" alt="Upload an image to this web app and ResNet50 will classify it" >
			<figcaption class="figure-caption text-center"> Upload an image to this web app and ResNet50 will classify it </figcaption>
</figure>

{%- assign service_data = site.data.social-media["github"] -%}    
<a class="social mx-1"  href="https://github.com/btphan95/resnet50-frontend"
   style="color: #6c757d"
   onMouseOver="this.style.color='#000000'"
   onMouseOut="this.style.color='#6c757d'">
  <i class="{{ service_data.icon }} fa-1x"></i>
  Source on Github
</a>


[<img src="https://img.shields.io/badge/live-demo-blueviolet?style=for-the-badge&logo=appveyor?">](http://resnet.surge.sh)


A web app demoing ResNet50, built using the [Flutter](https://flutter.dev/) UI toolkit.

ResNet50 is a deep learning model trained on the ImageNet dataset. This model is [imported from TensorFlow / Keras](https://keras.io/api/applications/resnet/#resnet50-function). 

The model is served over a [Flask](https://flask.palletsprojects.com/en/1.1.x/) web server and then powered by a stateless [Docker container](https://www.docker.com/resources/what-container) on [Google Cloud Run](https://cloud.google.com/run).

Feedback is greatly appreciated!

A huge thanks to [Felix Blaschke](https://github.com/felixblaschke) for the Particle background and [Rodolfo Hernandez](https://github.com/rjcalifornia) for the image upload concept via Flutter.

