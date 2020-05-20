---
name: greenr
title: Introducing greenr
tools: [Python, PyTorch, FastAI, Starlette, Docker, Heroku, Google Cloud Platform]
image: "/assets/images/projects/greenr/logo.png"
description: Find dandelions in your grass using this deep learning app
external_url: 
date: 2020-04-25
comments: true
---
<figure class="figure w-100">
	<p style="text-align:center;">
		<img src="/assets/images/projects/greenr/logo.png" class="figure-img img-fluid rounded" alt="find dandelions in your grass using this deep learning app" >
			<figcaption class="figure-caption text-center"> find dandelions in your grass using this deep learning app! </figcaption>
	</p>
</figure>


{%- assign service_data = site.data.social-media["github"] -%}    
<a class="social mx-1"  href="https://github.com/btphan95/greenr"
   style="color: #6c757d"
   onMouseOver="this.style.color='#000000'"
   onMouseOut="this.style.color='#6c757d'">
  <i class="{{ service_data.icon }} fa-1x"></i>
  Source on Github
</a>


greenr is a web app to let users upload an image to classify it as a dandelion or grass.

[<img src="https://img.shields.io/badge/live-demo-brightgreen?style=for-the-badge&logo=appveyor?">](http://34.68.160.231)

Click the badge above to run the demo.

greenr is powered by a deep learning model created in FastAI. If you are interested in learning how I  created an image dataset from Google Images and trained a dandelions and grass classifier in FastAI, check out this [Github repo](https://github.com/btphan95/greenr-train/) that links to a notebook outlining my process. [FastAI](http://34.68.160.231) is a deep learning library built on top of PyTorch that makes it extremely to get started with deep learning.

To deploy greenr onto the web, I utilized 
* [Flask](https://flask.palletsprojects.com/en/1.1.x/) as the back-end to serve the model as an endpoint, 
* [Flask-CORS](https://flask-cors.readthedocs.io/) to enable Cross Origin Resource Sharing (CORS), 
* [Docker](https://www.docker.com/) to containerize the server, and 
* [Heroku](https://www.heroku.com/) [(https://greenr.herokuapp.com/)](https://greenr.herokuapp.com/) and [Google Cloud Platform](http://cloud.google.com/) [(http://34.68.160.231)](http://34.68.160.231) (for redundancy) to host the container and serve the app.