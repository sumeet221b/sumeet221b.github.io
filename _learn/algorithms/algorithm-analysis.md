---
title: Algorithm Analysis
description: "Algorithms Analysis Tutorial. GATE Computer Science Algorithms."
serial: 2
subject: algorithms
---

Suppose you have a problem and for solving that, we have two different algorithms. But we can't use both of them right? So, which one should we use?

We perform **algorithm analysis** to decide which algorithm is better. We say, an algorithm is better if it uses less resources. Resources can be like **memory space** and **time**. Analysis tells us which algorithm consume how much resources.

# Analysis Types

We can classify analysis techniques into two broad categories
1. A priory analysis
2. A posterior analysis

Don't worry about the stragnge names, they're just old latin phrases used as names here.

Let's see what's the difference betwen those two is:

|A priory analysis|A posterior analysis|
|-|-|
|Done prior to the execution of algorithm.|Done after the execution of algorithm.|
|It's independent of software, compiler, and programming language used.|It's dependent on software, compiler and programming langauge used.|
|Credit is given to the programmer.|Credit is given to the software, hardware.|
|Output will be same on any system.|Output will differ on system to system.|
|Gives approximate result. For example, output of analysis can be "This algorithm takes double space as of input provided"|Givex exact result. For example, output of analysis can be "This algorithm takes 4 bytes of memory"|

## A Priory Analysis

Most of the time (and in GATE exam), we use apriory analysis. Some of you may think *"Why use apriory analysi even if it gives approximate results?"*

Because we don't want analysus result dependent on system/software/programming language. 

**For example**, suppose we're doing a posterior analysus for an algorithm. That algorithm contains multiplication operation somewhere. Suppose one system has special processor for multiplication and another machine does multiplication by doing repeated additions. Then in this aposterior analysys, the first machine would win! As you can see, the output is different on different machines.

By **approximate result** we mean that, the results represented in forms of
- At most, i.e. result of analysis will tell that *"algorithm will take at most x resources in some specific cases".*
- At least, i.e. result of analysis will tell that *"algorithm will take at least x amount resources in some specific cases".*
- On an average, i.e. result of analysis will tell that *"algorithm will take at most x resources on an average".*

Typically, we want to know about the maximum, i.e. "at most" resource algorithm will consume. So that we can know about the **worst case** which will help to decide which algorithm is best.
{: .alert .alert-success}

To do priory algorithms, we determine the **order of magnitude** of a statement. Don't worry, it's just fancy term for **number of time the statement is getting executed**.