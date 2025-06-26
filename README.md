# Saksham Mishra - Portfolio Website

![Portfolio Screenshot](Screenshot%202025-06-26%20231829.png)

A dynamic, interactive portfolio website showcasing skills, projects, and experience in both hardware and software development. Built with modern web technologies and featuring engaging animations and user interactions.

## 🌟 Features

### Interactive Elements
- **Animated Entry**: VHS distortion effect with door opening animation
- **Dynamic Background**: Vanta.js animated network background
- **Typewriter Effects**: Animated text typing for hero section and experience
- **Interactive Dashboard**: Floating navigation panel with smooth transitions
- **Skills Showcase**: Interactive hardware/software skill carousel with marquee effects
- **Project Gallery**: Hover effects with focus/blur animations
- **Responsive Design**: Mobile-friendly layout with adaptive components

### Visual Design
- **Gradient Background**: Animated gradient with smooth color transitions
- **Custom Cursor**: Custom cursor design for enhanced UX
- **Modern Typography**: Multiple Google Fonts (Bebas Neue, Orbitron, Pacifico)
- **Smooth Animations**: CSS animations and transitions throughout
- **Professional Layout**: Clean, modern design with proper spacing

### Content Sections
- **Hero Section**: Animated introduction with call-to-action buttons
- **Experience**: Personal background and educational journey
- **Skills**: Interactive hardware and software skill showcase
- **Projects**: Portfolio projects with hover effects
- **Contact**: Contact form and social media links

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup and structure
- **CSS3**: Advanced styling with animations and responsive design
- **JavaScript (ES6+)**: Interactive functionality and animations
- **Bootstrap 5.3.3**: Responsive grid system and components

### Libraries & APIs
- **Vanta.js**: Animated background effects
- **Font Awesome 6.0.0**: Icon library
- **Google Fonts**: Typography (Bebas Neue, Orbitron, Pacifico, Tiny5)

### External Services
- **Google Drive**: Resume hosting
- **Social Media Integration**: LinkedIn, GitHub, Email links

## 📁 Project Structure

```
Portfolio_website/
├── assets/                 # Images, GIFs, and media files
│   ├── *.gif              # Animated assets
│   ├── *.jpg              # Project and skill images
│   ├── *.png              # Icons and logos
│   └── icons8-cursor-60.png
├── public_pages/          # Additional pages (if any)
├── index.html            # Main HTML file
├── main.css              # Stylesheet with animations
├── index.js              # JavaScript functionality
├── README.md             # Project documentation
├── LICENSE.md            # License information
└── theme_script.txt      # Theme configuration
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs entirely client-side

### Installation
1. Clone or download the repository
2. Open `index.html` in your web browser
3. The website will load with the animated entry sequence

### Local Development
For development purposes, you can use any local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 🎨 Customization

### Colors and Themes
- Modify the gradient colors in `main.css` (lines 8-12)
- Update Vanta.js background colors in `index.js` (lines 70-71)
- Customize button and link colors throughout the CSS

### Content Updates
- **Personal Information**: Update the hero text and bio in `index.html`
- **Skills**: Add/remove skill images in the assets folder and update HTML
- **Projects**: Modify project sections in the HTML file
- **Contact Links**: Update social media and contact information

### Animations
- Adjust animation timing in CSS keyframes
- Modify typewriter speed in JavaScript
- Customize Vanta.js background parameters

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers (1920x1080 and above)
- Tablets (768px - 1024px)
- Mobile devices (320px - 767px)

Key responsive features:
- Flexible grid layouts
- Adaptive typography
- Mobile-friendly navigation
- Touch-optimized interactions

## 🔧 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️ Internet Explorer (not supported)

## 📄 License

This project is licensed under the terms specified in the [LICENSE.md](LICENSE.md) file.

## 👤 About the Developer

**Saksham Mishra**
- Electronics and Communication Engineering student at IIIT Delhi
- Passionate about both hardware and software development
- Skills include IoT development, web development, game development, and programming
- Experienced with Arduino, ESP8266, C++, Java, Python, and web technologies

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome. Feel free to:
- Report bugs or issues
- Suggest improvements
- Share ideas for new features
