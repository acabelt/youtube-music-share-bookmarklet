# YouTube Music Share - Project Scope

## Overview
Create a browser bookmarklet that extracts YouTube Music track information and generates markdown content for easy integration with an Astro.js blog.

## Core Features

1. **Bookmarklet**
   - Extract video title
   - Convert YouTube Music URL to regular YouTube URL
   - Format current date in YYYY-MM-DD
   - Generate markdown with frontmatter
   - Copy result to clipboard

2. **Markdown Format**
   ```markdown
   ---
   title: "[VIDEO_TITLE]"
   url: https://www.youtube.com/watch?v=[VIDEO_ID]
   date: [CURRENT_DATE]
   ---
   ```

## Implementation Details

### Bookmarklet (bookmarklet.js)
- Self-executing anonymous function
- Get current page title and URL
- Transform YouTube Music URL to standard YouTube URL
- Format current date
- Combine into markdown template
- Copy to clipboard
- Provide user feedback

### Testing
- Test page with instructions
- Bookmarklet installation guide
- Sample output preview

## Technical Considerations

1. **Browser Compatibility**
   - Works in modern browsers (Chrome, Firefox, Safari, Edge)
   - Graceful degradation for older browsers

2. **Security**
   - Only runs on youtube.com domains
   - No external dependencies
   - No data collection

3. **Performance**
   - Minimal footprint
   - Fast execution
   - No external requests

## Future Enhancements

1. **UI Improvements**
   - Preview before copying
   - Custom date selection
   - Additional frontmatter fields

2. **Integration**
   - Direct file creation via GitHub API
   - Browser extension version
   - Mobile app companion

## Development Tasks

1. [ ] Create bookmarklet.js with core functionality
2. [ ] Add error handling and validation
3. [ ] Create test page
4. [ ] Document usage instructions
5. [ ] Test across browsers
6. [ ] Create installation guide
7. [ ] Add visual feedback
8. [ ] Document future enhancements
