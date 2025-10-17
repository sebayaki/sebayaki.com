# sebayaki.com

A minimal portfolio site showcasing on-chain experiments and side projects.

## 🎨 Design Philosophy

- **Minimal**: Clean, distraction-free interface
- **Modern**: Smooth animations and transitions
- **Responsive**: Works beautifully on all devices
- **Fast**: Static HTML/CSS/JS for blazing performance

## 🚀 Featured Projects

### 01 — Signet

Feature your cast on the on-chain spotlight ✨  
Each feature mints 100 SIGNET tokens.

[Visit Signet →](https://signet.sebayaki.com)

## 📦 Deployment

This site is built for GitHub Pages deployment.

### Deploy to GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Set source to `main` branch and `/ (root)` directory
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Custom Domain Setup

1. Add a `CNAME` file with your domain:

   ```
   sebayaki.com
   ```

2. Configure DNS:

   - Add an `A` record pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add a `CNAME` record pointing to `yourusername.github.io`

3. Enable HTTPS in repository settings

## 🛠️ Tech Stack

- Pure HTML5
- CSS3 with modern features (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript (ES6+)
- No build tools required

## 📝 Adding New Projects

Edit `index.html` and add a new project in the `.project-list` section:

```html
<article class="project" data-project="project-name">
  <div class="project-content">
    <div class="project-number">02</div>
    <div class="project-info">
      <h3 class="project-title">
        Project Name
        <span class="badge">Live Now</span>
      </h3>
      <p class="project-description">Your project description here.</p>
      <a
        href="https://project.sebayaki.com"
        class="project-link"
        target="_blank"
        rel="noopener"
      >
        Visit Project
        <svg
          class="link-arrow"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M1 11L11 1M11 1H1M11 1V11"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </div>
  </div>
  <div class="project-image">
    <div class="image-wrapper">
      <img
        src="https://project.sebayaki.com/og-image.png"
        alt="Project Screenshot"
        loading="lazy"
      />
    </div>
  </div>
</article>
```

## 🎯 Features

- Smooth scroll animations
- Intersection Observer for lazy loading
- Parallax effects on project images
- Responsive grid layout
- Custom scrollbar styling
- Hover effects and transitions
- Mobile-optimized design

## 📄 License

MIT License - feel free to use this design for your own portfolio!

---

Built with ♥ by sebayaki
On-chain experiments, just for fun
