# Caden Mullen Painting Website

A professional website for Caden Mullen Painting, featuring an Irish heritage-inspired design with dark green, gold, and cream color palette.

## Features

- **Irish Heritage Design**: Dark green (#1B4332), gold (#D4AF37), and cream (#FAF9F6) color scheme
- **Medieval Serif Typography**: Cinzel for headings, Crimson Text for body
- **Responsive Layout**: Works beautifully on desktop, tablet, and mobile
- **Smooth Animations**: Parallax effects, fade-in elements, and hover interactions
- **Portfolio Gallery**: Showcase before & after work
- **Contact Form**: Built-in form for quote requests
- **Sticky Navigation**: Easy navigation that stays accessible

## Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name it: `cadenmullenpainting` (or any name you prefer)
4. Make it **Public**
5. Do NOT initialize with README (we already have files)
6. Click "Create repository"

### Step 2: Upload Your Files

You have two options:

#### Option A: Upload via GitHub Website (Easiest)
1. In your new repository, click "uploading an existing file"
2. Drag and drop these files:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Scroll down and click "Commit changes"

#### Option B: Use Git Command Line
```bash
git init
git add .
git commit -m "Initial commit - Caden Mullen Painting website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/cadenmullenpainting.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. In your repository, click "Settings"
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select:
   - **Branch**: main
   - **Folder**: / (root)
4. Click "Save"
5. Wait 1-2 minutes for deployment

### Step 4: Access Your Site

Your site will be live at:
```
https://YOUR-USERNAME.github.io/cadenmullenpainting/
```

## Customization Guide

### Update Contact Information

Edit `index.html` and find the contact section (around line 225):
```html
<a href="tel:555-123-4567">(555) 123-4567</a>
<a href="mailto:info@cadenmullenpainting.com">info@cadenmullenpainting.com</a>
<span>Central Pennsylvania</span>
```

Replace with your actual phone, email, and service area.

### Add Real Photos

Replace the placeholder portfolio images by:
1. Adding your images to the repository
2. Update the portfolio items in `index.html` (around line 155):
```html
<div class="portfolio-image">
    <img src="path-to-your-image.jpg" alt="Description">
</div>
```

### Change Colors

Edit `styles.css` at the top (lines 1-10):
```css
:root {
    --green-dark: #1B4332;  /* Main dark green */
    --gold: #D4AF37;        /* Gold accent */
    --cream: #FAF9F6;       /* Background cream */
    /* ... */
}
```

### Update Business Name or Tagline

Search for "Caden Mullen" in `index.html` and replace with your preferred text.

## File Structure

```
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # Interactive features
└── README.md       # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

Consider adding:
- Gallery lightbox for portfolio images
- Google Maps integration
- Customer testimonials section
- Blog/news section
- Mobile hamburger menu
- Backend for contact form submissions

## Credits

Fonts from Google Fonts:
- Cinzel (headers)
- Crimson Text (body)

## License

This website template is provided as-is for Caden Mullen Painting.

---

**Need help?** Contact your web developer or open an issue on GitHub.
