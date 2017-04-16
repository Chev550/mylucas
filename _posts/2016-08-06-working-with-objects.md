---
layout: post
title: "Working with Objects"
tags:
- java
---


### Creating New Objects

To create a new object, you use the `new` operator with the name of the class that should be used as a template. The name of the class is followed by parentheses. The parentheses are important and cannot be omitted. They can be empty, or can contain arguments that determine the values of instance variables or other initial qualities of that object.

{% highlight java %}
{% raw %}

String name = new String("Hal Jordan");
URL address = new URL("http://www.java21days.com");
MarsRobot robbie = new MarsRobot();

{% endraw %}
{% endhighlight %}