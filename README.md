# threads_city

Internal content workflow tool for account authorization, app verification, and approved publishing automation.

## Project Structure

```
PROJECT-III-TIKTOK-AUTH
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   ├── css/
│   │   ├── main.css            # Layout & Base styles
│   │   ├── components.css      # Header, Footer, Bento Cards
│   │   └── animations.css      # Keyframes & Scroll reveals
│   ├── js/
│   │   ├── main.js             # Core logic
│   │   ├── animations.js       # Intersection Observer & GSAP
│   │   └── auth.js             # TikTok API handling
│   ├── public/
│   │   ├── privacy.html        
│   │   ├── terms.html
│   │   └── tiktok-callback.html
│   └── index.html              # Main landing page
├── .gitignore
├── package.json
└── README.md
```

## Build

```bash
npm run build
```

Copies all source files to the `dist/` directory and maps public pages to their deployment paths.
