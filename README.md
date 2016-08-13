# Udacity Optimizstion Project.
This project is a part of the fronend web developer nanodegree @ Udacity.com. The goal of the project is to achieve a mobile/computer pagespeed insight score of above 90 aswell as reduce any jank on the website through javascript optimizations. This readme describes the approach / found issues / proposed solutions for reaching those goals.

# Found Issues

## Pagespeed Insights
To run pagespeed insights i simply added my github.io page as a remote and did a force push to that repo since I didn't have anything important on there to begin with.

### Mobile / Computer
The same issues are prevalent for Computer and Mobile, with the emphasis on render blocking being higher for mobile. However since we want to tackle both must reads and recommendations of the pagespeed insights there is no difference in the issues we want to fix for the two medias.

#### Picture Optimizaton
The source pictures are way to large and could be minified in order to reduce the load requirements for them.
```
Add a grunt build tool to the project and include grunt tools to optimize pictures.
```

### Render Blocking
There are several render blocking js/css files adding to the load time of the page.
```
Determine what parts of the page is critical and should be rending blocking. If any of the current render blocking contents are not part of the critical content. Either delay the read of thoose contents, read them asynchronously or embed any critical properties directly in the HTML.
```

### Use cache storaging.
All ressources are being requested on every load.
```
Determine the minimum longevity of all ressources and create cache storaging rules that takes advantage of this.
```