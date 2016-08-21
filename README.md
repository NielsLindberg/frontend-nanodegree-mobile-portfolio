# Udacity Optimization Project.
This project is a part of the fronend web developer nanodegree @ Udacity.com. The goal of the project is to achieve a mobile/computer pagespeed insight score of above 90 aswell as reduce any jank on the website through javascript optimizations. This readme describes the approach / found issues / proposed solutions for reaching those goals.

To view the resulting site go to <a href="http://nielslindberg.github.io/dist" target="_blank">nielslindberg.github.io/dist</a>

To view the site pre build optimizations such as minified code etc. go to <a href="http://nielslindberg.github.io/src" target="_blank">nielslindberg.github.io/src</a>

To compare with the old site that was delivered by Udacity go to <a href="http://nielslindberg.github.io/old" target="_blank">nielslindberg.github.io/old</a>

## Found Issues

### Pagespeed Insights
To run pagespeed insights i simply added my github.io page as a remote and did a force push to that repo since I didn't have anything important on there to begin with.

#### Mobile / Computer
The same issues are prevalent for Computer and Mobile, with the emphasis on render blocking being higher for mobile. However since we want to tackle both 'must reads' and recommendations of the pagespeed insights there is no difference in the issues we want to fix for the two types of viewports.

##### Picture Optimizaton
The source pictures are way to large and could be minified in order to reduce the load requirements for them.

> Add a grunt build tool to the project and include grunt tools to optimize pictures.

In the grunt build i first reduce the size of the pizzaria picture to width 150px which is safely larger than the natural 110 needed. Afterwards all pictures in are compressed via grunt-imagemin

#### Render Blocking
There are several render blocking js/css files adding to the load time of the page.
> Determine what parts of the page is critical and should be rending blocking.
> If any of the current render blocking contents are not part of the critical content.
> Either delay the read of thoose contents, read them asynchronously or embed any critical properties directly in the HTML.
Since the CSS is relatively simple, the easiest solution was just to include it directly in the HTML file as suggested in one of the project webcasts. To not ruin the structured development process the css and js are being embedded in the build process so that development still is being done in the respective css and js files. For consistency the already embedded javascript has been moved to its own js file which is then embedded in the build process.

#### Use cache storaging.
All ressources are being requested on every load.
> Determine the minimum longevity of all ressources and create cache storaging rules that takes advantage of this.
Getting scores of 97/100 and 98/100 without implementing caching, so i deemed it not worthwhile doing.