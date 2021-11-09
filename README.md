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
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

the Utility Classes "gap" property to use between flex and grid elements (html customizable variable)

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

the .flow class to add space on top of children
```html
<div class="flow" style="flex-basis: 100%; --flow-space: 4rem">
</div>
```
```css
.flow > *:not(:first-child) {
  margin-top: var(--flow-space, 1rem);
}
```

"a" button with modern css properties
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
added an animated glow around the button
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

use of aria-selected property to add styles to active button
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

The mobile-first grid-container based layout settings
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
the clamp property (used on the bigest font-size)
```css
:root {
  --fs-150: clamp(8rem, 8vw + 1rem, 15rem);
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.
