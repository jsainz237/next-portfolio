# Next Portfolio
Portfolio 2.0 made with [Next.js](https://nextjs.org/)

If you're viewing this on my website, you can see the full repository [here](https://github.com/jsainz237/next-portfolio).

### Styling and Design 🎨
[Styled Components](https://styled-components.com/) along with [React Bootstrap](https://react-bootstrap.github.io/) is used for all the frontend styling. 

The reason I decided to go with Styled Components rather than another choice,like Scss for example, is because of the ability to implement javascript within the styled components. This helps a lot with implementing scroll based styling.
### 3D Elements 🌎
Whenever I started working on this project, I discovered [three.js](https://threejs.org/) and knew I wanted to implement it in my site somehow.

There are a couple 3D elements within my site, particularly the floating logo and rotating globe. I used [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) and [React Spring/Three](https://github.com/pmndrs/react-spring#readme) to bring these elements to life.

The 3D logo you see is a model I created in blender by taking my svg logo and simply extruding into a GLTF model. And the globe you see near the contact section is simply a sphere with a 4k image wrapped around it.

### Markdown Pages ✍🏻
Using webpack and [Storybook's Marksy](https://github.com/storybookjs/marksy) I'm able to create pages on my site from markdown files. In fact, if you're reading this on my website, it's just the README for this projects repository.

I plan to use this a bit more in the future, possibly in part with Next's dynamic routing options.

### Custom Hooks 🪝
I made a couple custom hooks to make a few things I implemented a bit easier and less repetitive.

###### **useInterpolateScroll** [(view full code)](https://github.com/jsainz237/next-portfolio/blob/main/_utils/hooks/useInterpolateScroll.ts):
Given a range of values, interpolate the value based on the current scroll position.

```typescript
const interpolateScroll = () => {
    const maxScrollY = document.body.offsetHeight - window.innerHeight;
    const yVal = range(inputRange ?? [0, maxScrollY], outputRange, window.scrollY);

    set(clampFn(yVal, ...outputRange));
}
```

###### **useScreenSize** [(view full code)](https://github.com/jsainz237/next-portfolio/blob/main/_utils/hooks/useScreenSize.ts): 
Change state based on the screen size determined by the same breakpoints from Bootstrap. Also returns the current breakpoint string value.

```typescript
export const useScreenSize = (map: ScreenSizeMap): [any, Breakpoint] => {
    const [val, set] = useState<any>(map.default);
    const [bp, setBp] = useState<Breakpoint>('xxl');
    ...
    return [val, bp];
}
```



