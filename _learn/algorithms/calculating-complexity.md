---
title: Calculating Complexity
description: "Calculating Complexity Tutorial. GATE Computer Science Algorithms."
serial: 3
subject: algorithms
---

We care about the memory space and the time consumed by an algorithm while execution. Hence, we want to calculate the memory and time taken by an algorithm. The fancy words for them are **space complexity** and **time complexity**.

Nowadays, we have memories getting cheaper and cheaper, and our time is getting more valuable. Hence, We prefer the algorithm which takes less time. <br><br>We usually are ready to spend more memory (while designing an algorithm) if we can same even little amount of time. 
{: .alert .alert-info}

In the previous chapter, we've learned that *"to do priory algorithms, we determine the **order of magnitude** of a statement (which is nothing but the number of time the statement is getting executed)."*


## Example 1

{% highlight c %}

main () {
    x = y + z; // order of magnitude = 1
}
{% endhighlight %}

The time complexity of above program is **O(1) = O(c) = constant.**

This is because no matter what happens the code will execute for constant time. There is no input according to which the execution time can vary.

We mention constant values as 1 or c (for constant), because we are trying to find time complexity on the basis of input, so we can ignore the constant and just mention is as 1.
{: .alert .alert-warning}

***

## Example 2

{% highlight c %}

main () {
    for (int i = 0; i < n; i++) {   // n+1
        x = y + z;                  // n
    }
}
{% endhighlight %}

The code inside the for loop will execute for **n times.**
the parameters in for loop will run as:
- int i: **0 = 1 time**
- i < n: **n + 1 times**
- i++: **n times**

The total time = (n + 1) + n + 1. After removing constatnts approcimaterly it will run for n times 
The time complexity of above program is **O(n).**

It's also called linear time complexity (because 2n + 2 is linear equation).

From now on we shall ignore the constant vlaues from the equation.
{: .alert .alert-warning}

If the the time complexity is suppose 2n + 1, and one option in exam is *a) 2n+1* and another option is *b)n*, you should select *a) 2n+1* as it is mor e accurate and *b)n* is approximate. But normally in GATE exams, exact time complexity is not asked.
{: .alert .alert-info}

***

## Example 3

{% highlight c %}

main () {
    for (int i = 0; i < 10; i++) {   // n+1 times
        x = y + z;                  // n times
    }
}
{% endhighlight %}

The code inside the for loop will execute for **10 times.**
No matter what happers the loop will only run for 10 times i.e. for constant time.

Hence, the time complexity of above program is **O(1).**

***

## Example 4

{% highlight c %}

main () {
    for (int i = 0; i < n; i++) {  
        x = y + z;                
    }

    for (int i = 0; i < n; i++) 
        for (int j = 0; j < n; j++) 
            x = y + z;                
    
}
{% endhighlight %}

The first loop will run for *n times*.

In second structure the is a nester loop inside outer loop. 

It's also called linear time complexity (because 2n + 2 is linear equation).
The inner loop will run for eavery value of *i* or every iteration of outer loop. Hence this will run for n*n = *n^2 times.*

Hence the total time = *n^2 + n,* which is approximately *n^2.*

Hence the time complecity of above code is **O(n^2).**

## Example 5

{% highlight c linenos %}

main () {
    i = 0;
    while (i < n) {  
        x = x + 2;
    }
}
{% endhighlight %}

The code inside the while loop will execute for *n/2 times.*
Hence the time complexit is *n/2.* If we remove constant (1/2) then the time complexity is n.

Hence, the time complexity of above program is **O(n).**

In above case, no matter what you add in *x* inside the loop, the number of times loop will get execute is depends upon input or *n*. Adding higher values will just execute loop faster (by skipping some numbers) but it will always depends upon *n*. Hence the time complexity is in order of *n*.</br>
No matter what you add in *x* at line 4, the time complexity will be O(n).
{: .info}

***

## Example 6

{% highlight c linenos %}

main () {
    while (1 < n) {  
        n--;
    }
}
{% endhighlight %}

The code inside the while loop will execute for *n times.*

Hence, the time complexity of above program is **O(n).**

In above code, if you write *(n-2)* or *(n-3)* or *(n - any_constant)* at line n, the time complexity will be still O(n).
{: .note}

***

## Example 7

{% highlight c linenos %}

main () {
    while (1 < n) {  
        n++;
    }
}
{% endhighlight %}

Above code is **not an algorithm,** because algorithm should terminate at some point of time.

***

## Example 8

{% highlight c linenos %}

main () {
    i = 1;
    while (i < n) {  
        i = i * 2;
    }
}
{% endhighlight %}

- Let's analyze this code
    - First value of *i = 1*
    - After that when we get into the loop *i* becomes $2, 2^2, 2^3, ...$
    - This loop stops when i becomes equal to n, say $2^k$.
    - $2^k = n$
    - $log_22^k = log_2n$
    - $k\times log_22 = log_2n$
    - $k = log_2n$
- Hence the loop will run for $k$ or $lon_2n$ times.
- Hence, the time complexity of above program is **$O(log_2n)$.**

Similarly if we were multiplying *i* with any other integer in place of 2 say m then the time complexity would have been $log_mn$
{: .info}

***

## Example 9

{% highlight c linenos %}

main () {
    i = n;
    while (i > 1) {  
        i = i / 2;
    }
}
{% endhighlight %}

- Let's analyze this code
    - First value of *i = n*
    - After that when we get into the loop *i* becomes $\frac{n}{2} ,\ \frac{n}{2^2},\ \frac{n}{2^3},\ ... 1$
    - This loop stops when i becomes equal to 1, say $\frac{n}{2^k}$.
    - $\frac{n}{2^k} = 1$
    - $n = 2^k$
    - $log_2n = log_22^k$
    - $log_2n = k \times log_22$
    - $k = log_2n$
- Hence the loop will run for $k$ or $lon_2n$ times.
- Hence, the time complexity of above program is **$O(log_2n)$.**

Similarly if we were dividing *i* with any other integer in place of 2 say m then the time complexity would have been $log_mn$
{: .info}

Observe that as the time complexity of addition and multiplication is same which is linear, similarly time complexity of multiplication and division is also same which is **logarithmic.**
{: .note}

***

## Example 10

{% highlight c linenos %}

main () {
    i = 2;
    while (i < n) {  
        i = i^2
    }
}
{% endhighlight %}

- Here *i* goes like = $2,\ 2^2,\ 2^{2^{2}},\ 2^{2^{3}},\ 2^{2^{4}} ... 2^{2^{k}}$
- Loop goes until $2^{2^{k}} = n$
    - $2^{2^{k}} = n$
    - $log_22^{2^{k}} = log_2n$
    - $2^k = log_2n$
    - $log_22^k = log_2log_2n$
    - $k = log_2log_2n$
- Hence, the time complexity of above program is **$O(log_2log_2n)$.**

Here we have base = 2 for both inner and outer log. The inner base is came from the initial i value which is 2, and the outer base value is came form the exponent value (line 4).<br/><br/>If we would have initialized i = 3 at line 2 and write i = i^4 at line 4, then out time complexity would have been $O(log_4log_3n)$
{: .info}

## 11

{% highlight c linenos %}

main () {
    i = 2;
    while (i < n) {  
        i = i^15
        i = i^2
    }
}
{% endhighlight %}

- The time complexity of above program is **$O(log_{30}log_2n)$.**
    - Because $\(2^{15}\)^2 = 2^{30}$

## 12

{% highlight c linenos %}

main () {
    i = 2;
    while (i < n^2) {  
        i = i^2
    }
}
{% endhighlight %}

- The time complexity of above program is *$log_2log_2n^2$.
    - $= log_22 \times log_2n$
    - $= log_22 + log_2log_2n$
- Hence (after removing constant), the time complexity of above program is **$O(log_2log_2n)$.**

## 13

{% highlight c linenos %}

main () {
    while (n > 2) {  
        n = n^(1/2);
    }
}
{% endhighlight %}

- The time complexity of above program is **$O(log_2log_2n)$.**

Note that the squaring and rooting $(n^{1/2})$ will have same complexity (like addition and subtraction have same complexity).
{: .note}

## 14

{% highlight c linenos %}

main () {
    while (n > 15) {  
        n = n^(1/6);
    }
}
{% endhighlight %}

- The time complexity of above program is **$O(log_6log_{15}n)$.**

## 15

{% highlight c linenos %}

main () {
    i = 2;
    while (i < n>) {  
        i = i^2;
        i = i^15;
        i = i^7;
        i = i^(1/5)
    }
}
{% endhighlight %}

- The time complexity of above program is **$O(log_{14}log_2n)$.**

## 16

{% highlight c linenos %}

main () {
    i = 2;
    for (i = 1; i <= n^2; i++) {
        for (j = n; j > 1; j = j - 2) {
            for (k = 5; k < n^7; k = k^3) {
                x = y+z;
            }
        }
    }
}
{% endhighlight %}

- The time complexity of above program is $n^2 \times \frac{n}{2} \times (log_{3}log_5n^7)$.
- Hence the  time complexity is $n^3 \times (log_{3}log_5n)$.

## 17

{% highlight c linenos %}

main () {
    i = 2;
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= i ; j++) {
            x = y+z;
        }
    }
}
{% endhighlight %}

- In this example the values in condition are dependent.
- The j loop is dependent on i; it will run as many times as the value of i.
- j will run as follows
    - 1 (i = 1)
    - 1, 2 (i = 2)
    - 1, 2, 3 (i = 3)
    - 1, 2, 3, 4 (i = 4)
    - .
    - .
    - .
    - 1, 2, 4, ... n (i = n)
- The time complexity of above program is $\frac{n \times (n + 1)}{2}$.
- Hence the time complexity is $O(n^2)$.


## 18

{% highlight c linenos %}

main () {
    i = 2;
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= n 1; j = j + i) {
            x = y+z;
        }
    }
}
{% endhighlight %}

- In this example the values in condition are dependent.
- The time complexity of above program is $\frac{n}{1} + \frac{n}{2} + \frac{n}{3} ... \frac{n}{n}$
- Hence the time complexity is $O(n log(n))$.

## 19

{% highlight c linenos %}

main () {
    p = 0;
    for (i = 1; i <= n; i *= 2)
        for (j = 1; j <= p; j *= 2)
            q++
}
{% endhighlight %}

- p = $log_2n$
- Second loop will run for $log_2p$
    - $= log_2log_2n$
- Hence the time complexity is $O(log_2log_2n)$.

## 20

{% highlight c linenos %}

main () {
    int i;
    for (i = 1; i <= n; i++)
        for (i = 1; i <= n^2; i++)
            for (i = 1; i <= n^3; i++)
                x = y+z
}
{% endhighlight %}

- Only third loop will run completely, all the other loops will execute once.
- Hence the time complexity is $O(n^3)$.

## 21

{% highlight c linenos %}

main () {
    int i;
    int j = 1
    while(i <= n) {
        j++;
        i = i + j;
    }
}
{% endhighlight %}

- i will run as follows
    - 1 
    - 1 + 2
    - 1 + 2 + 3
    - .
    - .
    - .
    - 1, 2, 4, ... k
- The loop will run until k where $\frac{k \times (k + 1)}{2}$ = n.
    - $= K^2 = N$
- Hence the time complexity is $O(\sqrt{n})$.

## 22

Given that **n is prime** number.

{% highlight c linenos %}
main () {
    int i;
    for (i = 1; i <= n; i++)
        for (j = 1; j <= n; j++)
            x = y+z
}
{% endhighlight %}

- Hence the time complexity is $O(n)$.

## 23

{% highlight c linenos %}
main () {
    for (i = 1; i <= n; i++)
        for (j = 1; j <= i; j++)
            for (k = 1; k <= j; k++)
            x = y+z
}
{% endhighlight %}

- The time complexity is $O(n^3)$.

## 24

{% highlight c linenos %}
main () {
    int i;
    for (i = n, j = 1; i > 1; i /= 2, j++);
}
{% endhighlight %}