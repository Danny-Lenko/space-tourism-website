# Space tourism website

![Design preview for the Space tourism website coding challenge](./assets/preview.jpg)

## Welcome! 👋
## Table of contents

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- CSS utility classes
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

1) the Utility Classes "gap" property to use between flex and grid elements (html customizable variable)

```css
.flex {
   display: flex;
   gap: var(--gap, 1.6rem);
}
.grid {
   display: grid;
   gap: var(--gap, 1.6rem);
}
```

2) the .flow class to add space on top of children
```html
<div class="flow" style="flex-basis: 100%; --flow-space: 4rem">
</div>
```
```css
.flow > *:not(:first-child) {
  margin-top: var(--flow-space, 1rem);
}
```

3) "a" button with modern css properties
```html
<a href="#" class="ff-bel fs-32 uppercase bg-white txt-dark large-button">Explore</a>
```
```css
.large-button {
  display: grid;
  place-items: center;
  padding: 0 2em;
  aspect-ratio: 1;
  text-decoration: none;
  border-radius: 50%;
}
```
4) added an animated glow around the button
```css
.large-button::after {
  content: '';
  background: rgba(255, 255, 255, .15);
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 500ms linear, transform 750ms ease-in-out;
}
.large-button:hover::after,
.large-button:focus::after {
  opacity: 1;
  transform: scale(1.5);
}
```

5) use of aria-selected property to add styles to active button
```html
<div class="tab-list underline flex" style="--gap: 14rem">
    <button aria-selected="true" class="uppercase">Moon</button>
    <button aria-selected="false" class="uppercase">Mars</button>
    <button aria-selected="false" class="uppercase">Europa</button>
</div>
```
```css
.underline > .active,
.underline > [aria-selected="true"] {
  color: rgb(255, 255, 255);
  border-color: rgb(255, 255, 255);
}
```

6) the mobile-first grid-container based layout settings
```css
body {
  min-height: 100vh;
   display: grid;
   grid-template-rows: min-content 1fr;
}

/* grid-container settings */
.grid-container {
  display: grid;
}
@media (min-width: 720px) {
  .grid-container {
      column-gap: var(--container-gap, 4rem);
      grid-template-columns: minmax(3rem, 1fr) repeat(2, minmax(0, 60rem)) minmax(3rem, 1fr);
  }
  
  .grid-container > *:first-child {
      grid-column: 2;
  }

  .grid-container > *:last-child {
      grid-column: 3;
  }
}
```
7) the clamp property (used on the bigest font-size)
```css
:root {
  --fs-150: clamp(8rem, 8vw + 1rem, 15rem);
}
```

8) the glassmorphism settings applied on mobile navigation background along with its browsers support
```css
.primary-navigation {

  background: hsl( var(--clr-dark) / .95 );
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.5rem);
  -webkit-backdrop-filter: blur(1.5rem);
}
@supports (backdrop-filter: blur(1rem)) {
  .primary-navigation {
      background: hsl( var(--clr-white) / .02);
      backdrop-filter: blur(1.5rem);
      -webkit-backdrop-filter: blur(1.5rem);
  }
}
```

9) the script to toggle burger menu using attribute change
```html
<ul id="primary-navigation" data-visible="false" class="primary-navigation underline-indicators flex">
```

```js
const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    
    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
    } else {
        nav.setAttribute("data-visible", false);
    }
})
```

```css
.primary-navigation[data-visible="true"] {
    transform: translateX(0);
}
```

10) for accessibility reasons the way to hide unnecessary info (aria-hidden)
```html
<li><a href="#"><span aria-hidden="true">01</span>Destination</a></li>
```

11) for accessibility reasons the way to skip rigth to the main content avoiding tabing through the navigation (.)
```html
  <a class="skip-to-content" href="#main">Skip to content</a>
```
```css
 .skip-to-content {
  position: absolute;
  z-index: 999;
  background: hsl( var(--clr-white) );
  color: hsl( var(--clr-dark) );
  padding: .5em 1em;
  margin-inline: auto;
  transform: translateY(-100%);
  transition: transform 250ms ease-in;
}
.skip-to-content:focus {
  transform: translateY(0);
}
```

12) the use of webp format
```html
<picture>
  <source srcset="assets/crew/image-douglas-hurley.png" type="image/webp">
  <img src="assets/crew/image-douglas-hurley.png" alt="Douglas Hurley">
</picture>
```

13) a single line to set the focus on the current element
```js
   tabs[tabIndex].focus();
```

14) the way to fetch an element's attributes by clicking on it
```js
function changeTabPanel(e) {
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");

    console.log(targetPanel);
}
```


### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [Grid Attack](https://codingfantasy.com) - This helped me practice CSS GRID. Challenging and interactive game aimed at learning the css grid properties' application.
- [Glassmorphism Generator](https://hype4.academy/tools/glassmorphism-generator) - This may be handy if you need to apply the glassmorphism effect. Except the generator, they have articles on this topic.
- [Attribute Selection](https://stackoverflow.com/questions/64312576/how-to-select-an-element-with-attribute-role) - the first answer in article contains the syntax of DOM attribute selection as well as the link to the detailed article on MDN Web Docs.

- [Git + GitHub](https://www.youtube.com/watch?v=RGOj5yH7evk) - the basic git commands (Youtube).
- [The Markdown Guide](https://www.markdownguide.org/) - for more help with writing markdown (Article).

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.
