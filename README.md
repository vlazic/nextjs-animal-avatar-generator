<div align="center">
  <img src="https://raw.githubusercontent.com/roma-lukashik/animal-avatar-generator/e9b435bb28c8ae2dda224678bdda8faad6035373/preview.svg"/>
</div>

<h1 align="center">NextJS Animal Avatar Generator</h1>

<div align="center">
  <strong>This is a fork of the <a href="https://github.com/roma-lukashik/animal-avatar-generator">Animal Avatar Generator</a> library, modified to work with Next.js</strong>
</div>

<div align="center">
  <a href="https://github.com/roma-lukashik/animal-avatar-generator/blob/master/LICENSE">
    <img alt="GitHub license" src="https://img.shields.io/github/license/roma-lukashik/animal-avatar-generator">
  </a>
  <a href="https://www.npmjs.com/package/animal-avatar-generator" target="_blank">
    <img src="https://img.shields.io/npm/v/animal-avatar-generator" alt="Latest Version">
  </a>
  <a href="https://www.npmjs.com/package/animal-avatar-generator" target="_blank">
    <img alt="npm" src="https://img.shields.io/npm/dw/animal-avatar-generator">
  </a>
</div>

<h2>Modifications for Next.js Compatibility</h2>

To make this library compatible with Next.js, the following changes were made:

1. Updated the TypeScript configuration to output CommonJS modules instead of ESM.
2. Adjusted the import syntax for the `avatar` function in the `Avatar.tsx` component file to work with Next.js.

<h2>Usage in Next.js</h2>

In your Next.js project, install the package using npm or yarn:

`npm install https://github.com/vlazic/nextjs-animal-avatar-generator --save`
`yarn add https://github.com/vlazic/nextjs-animal-avatar-generator`

To use the generator in your Next.js components, you can require the library:

`const avatar = require('nextjs-animal-avatar-generator').default;`

Then, you can use the `avatar` function to generate SVG avatars:

```jsx
function Avatar(props) {
  const svg = avatar(props.name, { size: 200 });

  return (
    <div width="200" height="200" dangerouslySetInnerHTML={{ __html: svg }} />
  );
}
```

For the complete list of configuration options, please refer to the original [Animal Avatar Generator](https://github.com/roma-lukashik/animal-avatar-generator) library.

<h2>License</h2>
<a href="https://github.com/roma-lukashik/animal-avatar-generator/blob/master/LICENSE">MIT</a>
