# Gentle-Steam-Dearly-Belovd: Visual Novel Game

Guidelines for developing and maintaining this Thai visual novel game project.

## Project Overview

A web-based visual novel game built with vanilla HTML, CSS (Tailwind), and JavaScript. The game features an interactive story interface with modal overlays, Thai language support, and customizable visual elements.

## Code Style

### HTML & Semantics
- Use semantic HTML5 elements appropriately
- Include Thai language declaration: `<html lang="th">`
- Lang attribute in meta tags for accessibility
- Structure: game container → content sections → interactive elements

### CSS & Tailwind
- Use Tailwind CSS utility classes as primary styling approach
- Supplement with custom CSS only when Tailwind falls short or for game-specific effects
- Keep custom CSS in `styles.css` organized by component (prefer comments like `/* Component Name */`)
- Always include viewport meta tag for responsive design: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- Use `overflow: hidden` on body/html to prevent unwanted scrollbars in fullscreen game view

### Typography
- Primary font: **Fahkwang** (Google Fonts, weights: 300, 500, 700) for Thai language support
- Link Google Fonts with preconnect for performance: `<link rel="preconnect" href="https://fonts.googleapis.com">`
- Font family fallback: `'Fahkwang', sans-serif`
- Apply globally via CSS reset: `* { font-family: 'Fahkwang', sans-serif; }`

### JavaScript
- Write vanilla JavaScript (no frameworks) for simplicity
- Use descriptive function names with Thai-based comments for clarity
- Prefer `document.getElementById()` and `classList` for DOM manipulation
- Use semantic naming: `toggleCredit()`, `closeOverlay()` rather than `toggle()`, `close()`

## Architecture

### Key Components

1. **.game-container**: Root element
   - Full viewport height (`height: 100vh`)
   - Background image with fallback color
   - Flexbox layout (center items)
   - Relative positioning for absolute-positioned UI elements

2. **Overlays**: Modal windows (e.g., credit overlay)
   - Positioned absolutely or fixed
   - Toggle visibility with `.active` class and JavaScript
   - Background: semi-transparent to show game behind
   - Close on background click: check `event.target` matches overlay ID

3. **Buttons**: UI interactive elements
   - Position strategically (top-right credit button shown as example)
   - Use appropriate border-radius and transparent backgrounds for consistency
   - Maintain consistent styling with rgba() colors and transitions

## Build & Deployment

- **No build step required**: This is a static HTML/CSS/JS site
- **Testing**: Open `index.html` directly in a browser or serve via `python -m http.server`
- **Assets**: External images hosted on image service (e.g., `img2.pic.in.th`) — ensure URLs remain accessible
- **Fonts**: Loaded from Google Fonts CDN — ensure internet connectivity during development

## Conventions

### File Organization
- `index.html` – Main game container and structure
- `styles.css` – Custom styles supplementing Tailwind
- `script.js` – Game logic and interactivity
- No separation needed for current scope; keep monolithic for simplicity

### Naming Patterns
- **IDs**: Use kebab-case for CSS targeting: `creditOverlay`, `gameContainer`
- **Classes**: Use Tailwind for utility, custom classes in lowercase for semantic markup: `.game-container`, `.credit-btn`
- **JavaScript functions**: Camel case, action-based: `toggleCredit()`, `closeOverlay()`

### Comments Style
- Thai comments for clarity in functions: `// ฟังก์ชัน เปิด-ปิด หน้า Credit`
- English comments for complex logic allowed for international contributor clarity
- Comment component blocks in styles.css: `/* --- Component Name --- */`

### Game-Specific Patterns
- **State via classes**: Use `.active` class to toggle visibility of overlays/modals
- **Event delegation**: For overlay closing, check `event.target.id` matches the overlay
- **Background colors**: Use fallback color (`background-color`) alongside background-image for incomplete loads
- **Image hosts**: External URLs only; document fallback behavior in case URLs break

## Common Development Tasks

### Adding a New Story Scene
1. Create a new div in the game-container
2. Add content divs with Thai text
3. Style with Tailwind + custom CSS if needed
4. Create toggle/show functions in `script.js`

### Modifying Overlays
- Edit `styles.css` for overlay appearance
- Update HTML structure in `index.html`
- Ensure `closeOverlay()` click handler is attached
- Test close-on-background-click behavior

### Updating External Assets
- Replace image URLs in inline styles or CSS
- Test image loading with browser DevTools (Network tab)
- Consider WebP format for performance
