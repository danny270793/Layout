# @danny270793/layout

A React layout component library with iOS safe area support for building mobile-first applications with Capacitor.

## Features

- 🎯 **Simple API** - Easy-to-use layout components for headers, content, and footers
- 📱 **iOS Safe Areas** - Built-in support for notches and home indicators
- 🎨 **Tailwind CSS** - Styled with Tailwind for easy customization
- 📦 **TypeScript** - Full type safety out of the box
- ⚡ **Lightweight** - Minimal dependencies, optimized bundle size

## Installation

```bash
npm install @danny270793/layout
```

## Usage

```tsx
import { Layout } from '@danny270793/layout'

function App() {
  return (
    <Layout>
      <Layout.Header className="bg-blue-500">
        <h1>App Bar</h1>
      </Layout.Header>

      <Layout.Content className="bg-white">
        <h1>Main Content</h1>
        <p>Your app content goes here</p>
      </Layout.Content>

      <Layout.Footer className="bg-gray-800">
        <h1>Footer</h1>
      </Layout.Footer>
    </Layout>
  )
}
```

## Components

### Layout

The main container component that wraps your entire layout.

```tsx
<Layout className="custom-class">
  {/* Your layout components */}
</Layout>
```

### Layout.Header

A sticky header component that respects iOS safe areas (notches).

```tsx
<Layout.Header className="bg-blue-500">
  <h1>Header Content</h1>
</Layout.Header>
```

**Features:**
- Sticky positioning at the top
- Automatic iOS safe area padding (top, left, right)
- Customizable with className prop

### Layout.Content

The main content area of your application.

```tsx
<Layout.Content className="p-4">
  <p>Your main content</p>
</Layout.Content>
```

**Features:**
- Automatic iOS safe area padding (left, right)
- Scrollable content area
- Customizable with className prop

### Layout.Footer

A sticky footer component that respects iOS safe areas (home indicator).

```tsx
<Layout.Footer className="bg-gray-800">
  <nav>Footer Navigation</nav>
</Layout.Footer>
```

**Features:**
- Sticky positioning at the bottom
- Automatic iOS safe area padding (bottom, left, right)
- Customizable with className prop

## iOS Safe Area Classes

The library uses custom CSS classes for iOS safe area support:

- `ios-safe-top` - Adds padding for top safe area (notch)
- `ios-safe-bottom` - Adds padding for bottom safe area (home indicator)
- `ios-safe-left` - Adds padding for left safe area
- `ios-safe-right` - Adds padding for right safe area

## Tailwind CSS Configuration

This library uses Tailwind CSS. Make sure you have Tailwind configured in your project:

```bash
npm install -D tailwindcss @tailwindcss/vite
```

## TypeScript Support

This library is written in TypeScript and includes type definitions out of the box.

```tsx
import type { ReactNode } from 'react'
import { Layout } from '@danny270793/layout'

interface AppProps {
  title: string
}

function App({ title }: AppProps): ReactNode {
  return (
    <Layout>
      <Layout.Header>{title}</Layout.Header>
      <Layout.Content>Content</Layout.Content>
    </Layout>
  )
}
```

## Development

### Building

```bash
npm run build
```

### Linting

```bash
npm run lint
```

### Local Development

```bash
npm run dev
```

## Peer Dependencies

- React ^19.1.1

## License

[MIT](https://github.com/danny270793/Layout/blob/main/license.md)

## Repository

[https://github.com/danny270793/layout](https://github.com/danny270793/layout)

## Author

**Danny Vaca**
- Email: danny270793@gmail.com
- Website: [https://danny270793.github.io/#/](https://danny270793.github.io/#/)
