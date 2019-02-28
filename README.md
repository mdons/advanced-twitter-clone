
## Do
* Make at least 7 custom elements represent the the twitter areas outlined in red.
* Put borders on your elements so you can see where they are. Maybe make them different colors.
* Probably have a custom element for the left, middle and right section
* Style it as well as you have time for
* We are just trying to get practice making custom elements and using them together, it doesn't have to look perfect

https://docs.google.com/document/d/1w9YYn8WCq4GKGZzhZkr64RZ4e1I4o14hsXDYAUgKp1I/edit?usp=sharing

1. Find and remove the sample text
  "ACA class was so awesome today."
  "I just checked out that new restaurant, it was okay"
2. Create three folders underneath the "src" folder titled:
  "LeftComponent"
  "MiddleComponent"
  "RightComponent"
  And add "index.js" files to each of them. 
  Additionally, add <component-name>.css files to each folder and import them into the respective index files
  ex. leftComponent.css
3. Import all three components into the "App.js" file and place them in between the `<div>` tags. Add a className
  of "app" to the `<div>` and flex/grid these components so you have three even columns
4. In the LeftComponent folder "index.js" file, create a parent `<div className="left">` with two child divs
  `<div className="left-top">` and `<div className="left-bottom">`. Use the LeftComponent.css file to create 
  two equal rows. Give the top row an orange border and the bottom row a red border. 
5. Do the same thing for MiddleComponent except make the rows match up with the image in the link above.
  For example, 10 and 90%. Give these purple and blue borders.
6. Finally, do the same thing for RightComponent except make the rows match up with the image in the link above.
  For example, 60 and 40%. Give these yellow and pink borders.
7. Now, create a navComponent folder with an "index.js" and a "navComponent.css" file inside. In the index file,
  render one div with a width of 100% and a height of 10vh. Add a black border. Import this component into the "App.js" and restructure 
  the components in that file so that this (navComponent) sits on top. Adjust the heights of the other components as 
  necessary.

At this point, your app should look like this:
https://docs.google.com/document/d/19jDW-esg91kZBtU2rIGPPbUdWvGY6-xVHGQhj2L9XEo/edit?usp=sharing

Now fill it in with images, etc to make it look as close to the original twitter image as possible. 

## Think about this
* What is http://localhost:3000/
* What is making the 2 sentences show up on the page.
* Is there any difference between how much effort is needed to write the code with plain javascript vs the React way?
* How is the React code getting into our webpage in the first place?
* What is the point of writing the code one way or the other?
* Is it easier to create a webpage with html or javacript?
* How do we include javascript from another file into our html page.
* What is in the script file Main.js What looks odd about it?
