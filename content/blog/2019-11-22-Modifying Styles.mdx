---
title: "Modifying styles"
cover: ""
category: "Programming"
date: "2019-11-22"
tags:
    - programming
    - blog
    - gatsbyjs
---

Gatsby advanced starter doesn’t come with any UI frameworks. In order to do some styling, we have to do install some stuffs.

From the GatsbyJS official [docs](https://www.gatsbyjs.org/docs/theme-ui/), there are a few CSS libraries and frameworks explained. This blog will be based on `Theme UI`. Why? There are a couple of reasons.



## 1) Lots of sites seems to based on `CSS-in-JS`, at least in starters.

I don’t know anything about *Web Development*. This is my hobby project. For this purpose, beginner friendly frameworks with lots of resources to learn from would be prioritized. So far, based on what I have seen from other starter source codes, `Theme-UI` seems to be a winner. In fact, I really like how I can use `rhythm`, a great tool for readilibity, from `Typography.js` and it is included in `Theme-UI`. `TailwindCSS` and `Bulma` seem to great, but they are basically CSS classes which I have to learn on top of Gatsby. Right now, I just want to focus on the core first.



## 2) There are more overhead coming if I want to use other stuffs.

`Theme-UI` seems to be using just minimal CSS stuffs. Which is greate! As mentioned above, I would like to focus on simple working core. Fancy styling for each button, breadcrumbs, navigation, etc can wait.



## Let’s start custominzing the site!

Installing the necessary components can be found [here](https://www.gatsbyjs.org/docs/theme-ui/).

The blog was previously set up in a way that hardcoded colors for links were used. `<a>` tag colors were chosen at each component file. Time to put them at one place now.

Made the following code available at `src/gatsby-plugin-theme-ui/index.jsx`

```jsx
export default {
    
    hover: "#6166DC",
    unaccent: "#bbb",
    black: "#000",
    navColor: "#CECECE",
    background: "#FAFAFA"

}
```



Now when I practice `CSS-in-JS`, I canget the color. For example, when using `emotion`,



```jsx
...
...
const ArticleLink = styled(Link)`
	...
	color: ${p => p.theme.black);
	...
	
`;
```



all thanks to react context being used with `Theme UI`.



Then make it available in `Layout` component.



```jsx{10}
..
import { globalStyles } from "../styles"

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout-container">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        <Global styles={globalStyles} /> // Added for style
        <NavBar/>
        {children}
      </div>
    );
  }
}

```



Since layout is used everywhere, global style is used at the layout component. 

Also fonts are changed in the global style file.



```jsx
import { css } from "@emotion/core";

export const globalStyles = css`

    @font-face {
        font-family: "-apple-system", "BlinkMacSystemFont", "San Francisco",
        "Helvetica Neue", "Helvetica", "Ubuntu", "Roboto", "Noto", "Segoe UI",
        "Arial", "playfair_regular", sans-serif;
        font-weight: 400;
        font-style: normal;
    }
    
    @font-face {
        font-family: "PlayfairDisplay-Regular";
        src: url("src/fonts/PlayfairDisplay-Regular.ttf");
    }
    
    ...
    
    body {
        font-family: "-apple-system", "BlinkMacSystemFont", "San Francisco",
          "Helvetica Neue", "Helvetica", "Ubuntu", "Roboto", "Noto", "Segoe UI",
          "Arial", sans-serif;
        font-size: 1.6rem;
        margin: 0;
        font-weight: 400;
        height: 100%;
    }
    
    ...
    
`;
```



`PlayfairDisplay-Regular` was downloaded from [google fonts](https://fonts.google.com/specimen/Playfair+Display).

As of writing, I am learning how to set up styles from [Novela Theme](https://novela.narative.co/). They are amazing. I wanted to set up separate components for markdown design but figured that it’s for `MDX` file. So for the moment, I will set design in css file for posts.



```css
// src/templates/post.css 

...

blockquote > p {
  font-family: PlayfairDisplay-Regular;
  font-size: 2.5rem;
}

...

```



So for the moment, I do think it’s good enough!