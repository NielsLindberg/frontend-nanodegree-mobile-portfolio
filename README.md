# Udacity Optimization Project.
This project is a part of the fronend web developer nanodegree @ Udacity.com. The goal of the project is to achieve a mobile/computer pagespeed insight score of above 90 aswell as reduce any jank on the website through javascript optimizations. This readme describes the approach / found issues / proposed solutions for reaching those goals.

To view the resulting site go to <a href="http://nielslindberg.github.io/dist" target="_blank">nielslindberg.github.io/dist</a>

To view the site pre build optimizations such as minified code etc. go to <a href="http://nielslindberg.github.io/src" target="_blank">nielslindberg.github.io/src</a>

To compare with the old site that was delivered by Udacity go to <a href="http://nielslindberg.github.io/old" target="_blank">nielslindberg.github.io/old</a>

## Found Issues
The following issues are structued in the order of 1. What is the issue, 2. What do I plan to do about it, 3. What did i do about it.

### Pagespeed Insights
To run pagespeed insights i simply added my github.io page as a remote and did a force push to that repo since I didn't have anything important on there to begin with.

#### Mobile / Computer
The same issues are prevalent for Computer and Mobile, with the emphasis on render blocking being higher for mobile. However since we want to tackle both 'must reads' and recommendations of the pagespeed insights there is no difference in the issues we want to fix for the two types of viewports.

##### Picture Optimizaton
The source pictures are way to large and could be minified in order to reduce the load requirements for them.

> Add a grunt build tool to the project and include grunt tools to optimize pictures.

In the grunt build i first reduce the size of the pizzaria picture to width 150px which is safely larger than the natural 110 needed. Afterwards all pictures are compressed via grunt-imagemin

#### Render Blocking
There are several render blocking js/css files adding to the load time of the page.
> Determine what parts of the page is critical and should be rending blocking.
> If any of the current render blocking contents are not part of the critical content.
> Either delay the read of thoose contents, read them asynchronously or embed any critical properties directly in the HTML.

Since the CSS is relatively simple, the easiest solution was just to include it directly in the HTML file as suggested in one of the project webcasts. To not ruin the structured development process the css and js are being embedded in the build process so that development still is being done in the respective css and js files. For consistency the already embedded javascript has been moved to its own js file which is then embedded in the build process.

#### Use cache storaging.
All ressources are being requested on every load.
> Determine the minimum longevity of all ressources and create cache storaging rules that takes advantage of this.

Getting scores of 96/100 and 97/100 without implementing caching, so i deemed it not worthwhile doing.

### Pizza Scroll Jank

#### To many pizzaas
200 pizzas are being calculated and updated even though the screen at my viewport only have space for 32.
> Calculate how many pizzas should be created based on screen height.

The resulting calculation is stored in the variable: numberOfPizzas

#### Repeated calculations
> When updating the positions of the pizza's parts of the calculations that
> are not specific to the pizzas are being done inside the pizza.item loop

I created an OOP approach to that allowed me to not only move some of the calculations outside each pizza loop but also outside the scroll event and into the actual initial creation of the pizzas.

index % 5 is moved to the load part of RAIL, document.scrollTop / 1250 is moved outside the pizza.item loop but still resides inside the animate part of RAIL (is scroll an animation or a response?).

#### Forced reflow
In the pizza update loop we are reading and writing to the CSSOM at the
same time in every part of the loop causing a massive amount of recalculate styles & layout.

> Seperate CSSOM reads & writes into different loops, or reevaluate whether or not all the reads & writes are neccesarry.

Since i created an OOP model i could have saved the left positions on the objects and retrieve it through that in order to not read the CSSOM but an even better solution is just to perform a translate on the pizza's since that only results in composite being activated.

### Pizza Resize Jank

#### Generally bad logical coding
Coding should aim to be the shortest logical path to the result (while keeping the critical rendering path in mind). Alof of the code in the
pizza resizing function is not the logical shortest path and the detours that are taken does nothing to improve the critical rendering path.
> Redo the code so that its execution path is shorter.

Deleted most of the code, kept the switch case selector and updated a newSize variable with case dependent percentage width.
That percentage with is then added to the style.width attribute of all the pizza elements.
