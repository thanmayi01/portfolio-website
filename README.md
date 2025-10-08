# Thanmayi Kondreddy - Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing my skills, projects, education, and experience.

## 🚀 Features

- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Clean and professional design with gradient accents
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **React Components**: Modular and maintainable code structure
- **Sections**:
  - About Me
  - Skills (Frontend, Backend, Database, Cloud & DevOps)
  - Education
  - Experience
  - Projects
  - Contact Information

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript (ES6+)
- **Build Tool**: Vite
- **Styling**: CSS3 with modern features (Grid, Flexbox, Gradients)
- **Icons**: React Icons
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/thanmayi01/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 🏗️ Build for Production

To create an optimized production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## 🚀 Deploy to Vercel

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Sign up/Login to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up or log in with your GitHub account

2. **Import Your Repository**:
   - Click on "Add New" → "Project"
   - Select "Import Git Repository"
   - Choose your GitHub repository: `thanmayi01/portfolio-website`

3. **Configure Build Settings**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Deploy**:
   - Click "Deploy"
   - Wait for the deployment to complete
   - Your site will be live at: `https://your-project-name.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy**:
```bash
vercel
```

4. **Deploy to Production**:
```bash
vercel --prod
```

### Method 3: GitHub Integration (Automatic Deployments)

1. **Connect Repository to Vercel**:
   - In Vercel dashboard, import your GitHub repository
   - Vercel will automatically detect it's a Vite project

2. **Automatic Deployments**:
   - Every push to `main` branch will automatically trigger a new deployment
   - Pull requests will get preview deployments

3. **Custom Domain (Optional)**:
   - Go to Project Settings → Domains
   - Add your custom domain and follow DNS configuration instructions

## 📁 Project Structure

```
portfolio-website/
├── public/
├── src/
│   ├── App.jsx          # Main React component with all sections
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

## 🎨 Customization

### Update Content

Edit `src/App.jsx` to update:
- Personal information
- Skills
- Projects
- Education
- Experience
- Contact information

### Update Styling

Edit `src/index.css` to customize:
- Colors and gradients
- Typography
- Layout and spacing
- Responsive breakpoints

### Update Meta Information

Edit `index.html` to update:
- Page title
- Meta description
- Favicon

## 📞 Contact

- **Email**: thanmayikondreddy01@gmail.com
- **LinkedIn**: [linkedin.com/in/thanmayi-kondreddy](https://linkedin.com/in/thanmayi-kondreddy)
- **GitHub**: [github.com/thanmayi01](https://github.com/thanmayi01)
- **Phone**: +1 202-399-6901
- **Location**: Washington DC

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspired by modern portfolio websites
- Built with React and Vite
- Icons from React Icons

---

**Note**: After deployment, your portfolio will be accessible at your Vercel URL. You can also configure a custom domain for a more professional look.

For any issues or questions, feel free to reach out!
