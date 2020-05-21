---
title: Why Kaggle Kernels is the Best Way to Share Your Jupyter Notebook
tags: [tech]
style: 
color: 
image: "/assets/images/posts/kaggle-kernels/dandelion.jpg"
description: How I benefitted from a 10-day vipassana meditation retreat.
comments: true
---


<figure class="figure w-100" style="text-align:center;">
		<img src="/assets/images/posts/kaggle-kernels/dandelion.jpg" class="figure-img img-fluid rounded" alt="image source: Pixabay" >
			<figcaption class="figure-caption text-center">  Image source: <a href="https://pixabay.com/photos/dandelion-flower-nature-close-up-3416140/">Pixabay</a></figcaption>
</figure>

## Kaggle Kernels > Paperspace Gradient, Google Cloud, and Binder

Kaggle Kernels is the best way to share your Jupyter notebook easily, powerfully, and for free.

While trying to share a training notebook that I was working on, one of the biggest bottlenecks was finding the right hosting service. I needed a Jupyter notebook that could run decently fast (with a GPU, because deep learning), was easy to set up (I didn’t want to deal with the infrastructure, just let me run my notebook), and was completely free. After trying 4 different services, Google Cloud Platform, Binder, Paperspace gradient, and Kaggle, I ultimately chose Kaggle because it met all of my needs.

[Kaggle Kernels](https://www.kaggle.com/kernels) is a cloud environment where you can run your notebooks. It’s completely free, you only need to sign up for a Kaggle account to create and edit notebooks, every account comes with 1 GPU instance and up to 30 hours/week of use, you don’t need to set up any cloud infrastructure, and it has an amazing community to share your work with.

[Paperspace Gradient](https://gradient.paperspace.com/) similarly lets you run your notebooks on a cloud environment, so you don’t need to set up any infrastructure on your own. Simply press a button to turn on your notebook and you’re rolling. There are free instances of notebooks that can include GPUs. Every notebook instance runs for 6 hours before shutting down. I would have used Paperspace gradient, but on two occasions, my account got locked out because there was a bug on Paperspace’s end. It took two days to get my account back, but that was frustrating. Moreover, recently, Paperspace announced that their free instances won’t be available all the time, meaning there are times when you won’t be able to start up your free instance when there is high demand for it.

[Google Cloud Platform](http://cloud.google.com/) has all kinds of services, from running virtual machines to Kubernetes clusters. When signing up for the very first time, you also get $300 worth of credits to use. While I could spin up a VM to set up a cloud environment or even run run my notebook on AI Platform Notebooks, it didn’t feel easy. There was infrastructure to set up, it wasn’t completely free (after the credits), and I just wanted to run my notebook with a GPU (which GCP restricted for free users).

[Binder](https://mybinder.org/) is a pretty neat way to turn your Github repo of Jupyter notebooks into a cloud environment easily. It basically clones your repo, looks for any Dockerfile or requirements.txt, sets up a contained cloud environment, and opens up JupyterHub, allowing you to run your notebooks in the cloud. It seemed really awesome, but it did not work for me. My notebook required GPU access, and Binder hosts the notebooks with limited compute. I would use Binder if I wanted to share some lightweight notebooks because it was so damn easy to use.

[I ended up putting my notebook on Kaggle Kernels.](https://www.kaggle.com/btphan/greenr-an-image-classifier-in-fastai?scriptVersionId=33945487) Follow along if you want to learn how to create your own image dataset of dandelions and grass, and train a state-of-the-art image classifier, using FastAI! Special thanks for FastAI, Jeremy Howard, and Rachel Thomas for the amazing course and library.
