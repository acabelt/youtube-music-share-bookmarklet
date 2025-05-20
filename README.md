# YouTube Music Share

A simple and efficient way to share your favorite YouTube Music tracks as markdown files for your Astro.js blog.

## Features

- One-click bookmarklet to extract YouTube Music track information
- Generates properly formatted markdown with frontmatter
- Automatic slug generation for filenames
- Simple copy-paste workflow
- No server-side components required
- Works on both YouTube and YouTube Music
- Clean, user-friendly interface
- Visual feedback when copying to clipboard

## Quick Start

### Option 1: Drag and Drop (Recommended)

1. Open `test.html` in your browser
2. Drag the "YouTube Music Share" button to your bookmarks bar
3. When on a YouTube Music page, click the bookmarklet
4. The markdown content will be copied to your clipboard
5. Paste it into a new `.md` file in your Astro.js content directory

### Option 2: Manual Installation

1. Create a new bookmark in your browser
2. Name it "YouTube Music Share"
3. Copy the contents of `bookmarklet.js` as the URL
4. When on a YouTube Music page, click the bookmarklet

## Development

This project consists of:

- `bookmarklet.js` - The main bookmarklet code
- `test.html` - Local testing page with installation instructions
- `scope.md` - Project scope and development details

## Example Output

```markdown
artist-song-name.md
---
title: "Artist - Song Name (Official Audio)"
url: https://www.youtube.com/watch?v=dQw4w9WgXcQ
date: 2025-05-20
---
```

## License

MIT
