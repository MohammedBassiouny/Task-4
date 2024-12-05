# Advanced Blog Template

A modern, responsive blog template built with Bootstrap 5 and optimized for performance and accessibility.

## Features

- Semantic HTML5 structure
- Responsive design using Bootstrap 5
- Performance optimized loading
- Accessibility compliant
- Dark mode support
- Newsletter subscription form
- Contact form
- Back to top button
- Lazy loading images
- Performance optimized animations

## Getting Started

1. Clone the repository
2. Open `index.html` in your web browser
3. Customize the content and styling as needed

## Project Structure

```
├── index.html          # Main HTML file with inline critical CSS
├── README.md          # Project documentation
```

## Technical Details

### Performance Optimizations

- Critical CSS inlined for faster first paint
- Non-critical CSS loaded asynchronously
- Images set to lazy load by default
- JavaScript deferred loading
- Throttled scroll event handling
- Preloaded critical assets
- Optimized animations with `prefers-reduced-motion` support

### Accessibility Features

- Semantic HTML structure
- ARIA labels where needed
- Proper heading hierarchy
- Keyboard navigation support
- High contrast focus states
- Screen reader friendly

### Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design works on mobile devices
- Dark mode support based on system preferences

## Customization

### Changing Colors

The template uses CSS variables for easy customization. Modify the values in the `:root` selector:

```css
:root {
    --primary-color: #0d6efd;
    --secondary-color: #6c757d;
    --background-color: #f8f9fa;
    --text-color: #212529;
}
```

### Adding New Features

1. Follow the existing HTML structure
2. Use Bootstrap components for consistency
3. Maintain accessibility standards
4. Test performance impact of new features

## Best Practices

- Keep the HTML semantic and accessible
- Maintain responsive design principles
- Optimize images before adding them
- Test across different devices and browsers
- Ensure forms have proper validation and feedback

## License

This project is open source and available under the MIT License.