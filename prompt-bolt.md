Create a YouTube Music-style playlist interface in Astro.js with the following requirements:

1. Create a responsive layout (/src/layouts/PlaylistLayout.astro) that:

- Implements a grid/flex layout system for both mobile (<768px) and desktop views
- Uses CSS custom properties for theming (light/dark mode)
- Follows YouTube Music's visual hierarchy and spacing
- Includes proper ARIA labels and semantic HTML

2. Build a playlist component that:

- Displays an embedded YouTube video player at the top
- Shows a scrollable list of songs below
- Highlights the currently playing song
- Implements hover states and click interactions
- Uses CSS Grid for the song list layout

3. Implement the following functionality:

- YouTube iframe API integration for video control
- Autoplay toggle functionality (with a visible toggle switch)
- LocalStorage integration to persist:
  - Currently playing song
  - Autoplay preference
  - Last playback position

4. Style requirements in /src/styles/global.css:

- Define CSS custom properties for colors, spacing, and transitions
- Include dark mode styles using @media (prefers-color-scheme: dark)
- Add responsive breakpoints for mobile/desktop layouts
- Implement smooth transitions for theme changes

5. Create a data structure for songs:

```typescript
interface Song {
  id: string;
  title: string;
  artist: string;
  thumbnail: string;
  duration: string;
  videoId: string;
}
```

Please provide the complete implementation with proper error handling and loading states.
