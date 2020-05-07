---
name: ResNet is Awesome
title: ResNet is Awesome
tools: [Python, TensorFlow, Keras, Flask, Docker, Google Cloud Run, Flutter]
image: "/assets/images/projects/resnet/ex.png"
description: A web app demonstrating ResNet50 
external_url: 
date: 2020-05-07
comments: true
---

{% include elements/figure.html image="/assets/images/projects/resnet/ex.png" caption="Upload an image to this web app and ResNet50 will classify it" %}

ResNet50 is a deep learning model that is trained on the ImageNet dataset. This model is imported from TensorFlow/Keras. The published front-end web app was designed in Flutter using the Dart programming language. The back-end is run by a Flask web server, containerized in Docker, and run stateless on the Google Gloud Run compute platform.

Upload an image to see what the model predicts, and let me know your thoughts!

