# Special Combo Hamper - Premium Gift Website

A beautiful, modern, and elegant single-page website for selling premium gift hampers. Built with pure HTML, CSS, and JavaScript featuring a luxury pastel pink theme with smooth animations and a fully responsive design.

![Website Preview](https://github.com/user-attachments/assets/76d760f4-9e8d-4a85-9ae3-1b280b55dd58)

## 🎨 Features

### Design
- **Luxury Color Scheme**: Pastel pink + white + soft gold accents
- **Premium Typography**: Playfair Display for headings, Poppins for body text
- **Fully Responsive**: Mobile-first design that works on all devices
- **Modern Layout**: CSS Grid and Flexbox for flexible layouts
- **Glassmorphism Effects**: Beautiful frosted glass effects on cards

### Animations & Effects
- ✨ Smooth page loading animation
- 🎯 Scroll reveal animations for sections
- 🖱️ Interactive hover effects with 3D tilt
- 🌊 Parallax effect on hero section
- 💫 Button ripple effects on click
- 📊 Scroll progress indicator
- 🎭 Gradient shimmer animations
- ⚡ Smooth scrolling behavior

### Sections
1. **Hero Section** - Eye-catching header with product name and price
2. **Product Gallery** - 4 beautiful image cards with zoom effects
3. **Features Section** - 4 key features with icons:
   - Premium Quality
   - Beautiful Packaging
   - Perfect for Celebrations
   - 7 Days Return Policy
4. **Offer Highlight** - Special pricing and terms
5. **Call to Action** - WhatsApp order button
6. **Footer** - Clean footer with social links

## 🚀 Quick Start

### Viewing the Website

1. Clone the repository:
```bash
git clone https://github.com/maviyaattar/Gift_hamper.git
cd Gift_hamper
```

2. Open `index.html` in your web browser:
```bash
# On Linux/Mac
open index.html

# On Windows
start index.html

# Or use a local server (recommended)
python -m http.server 8000
# Then visit http://localhost:8000
```

### File Structure
```
Gift_hamper/
├── index.html          # Main HTML structure
├── style.css           # All styles and animations
├── script.js           # Interactive features
└── README.md          # Documentation
```

## 💻 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with:
  - CSS Variables for theming
  - Flexbox & Grid layouts
  - Animations & Transitions
  - Media queries for responsiveness
- **JavaScript (ES6+)** - Interactive features:
  - Intersection Observer API for scroll reveals
  - Event listeners for interactions
  - DOM manipulation
  - Performance optimization with debouncing

### External Resources
- [Google Fonts](https://fonts.google.com/) - Playfair Display & Poppins
- [Font Awesome](https://fontawesome.com/) - Icons
- [Unsplash](https://unsplash.com/) - Placeholder images

## 🎯 Customization

### Changing Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-pink: #ffc0cb;
    --soft-pink: #ffe4e9;
    --light-pink: #fff5f7;
    --gold: #d4af37;
    /* ... */
}
```

### Updating Content
Edit `index.html` to change:
- Product name and price
- Feature descriptions
- Contact information
- Social media links

### WhatsApp Integration
Update the phone number in the WhatsApp link (line ~179 in index.html):
```html
href="https://wa.me/919999999999?text=Your%20message"
```
Replace `919999999999` with your actual WhatsApp number (include country code).

### Adding Images
Replace the Unsplash URLs in `index.html` with your own product images:
```html
<img src="path/to/your/image.jpg" alt="Description">
```

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

## 🎨 Design Philosophy

This website embodies a **luxury gifting brand aesthetic** with:
- Clean, spacious layouts
- Soft, elegant color palette
- Smooth, professional animations
- Premium typography choices
- High-quality visual hierarchy

## 🔧 Performance Optimizations

- Debounced scroll events
- Efficient CSS animations
- Optimized JavaScript execution
- Lazy loading considerations
- Minimal external dependencies

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

Created by [maviyaattar](https://github.com/maviyaattar)

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

**Note**: Remember to replace placeholder images and contact information with your actual content before deploying to production.