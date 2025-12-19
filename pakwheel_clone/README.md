# 🚗 PakWheels Clone - Next.js Application

A modern, responsive clone of Pakistan's leading automotive marketplace **PakWheels**, built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**.

![Next.js](https://img.shields.io/badge/Next.js-15.5.9-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0--rc-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=flat-square&logo=tailwind-css)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Pages & Routes](#pages--routes)
- [Components](#components)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## 🎯 Overview

This project is a feature-rich clone of the **PakWheels** website, Pakistan's largest automotive classifieds platform. It provides users with an intuitive interface to browse featured cars, view detailed car specifications, and complete purchase transactions through a streamlined checkout process.

---

## ✨ Features

### 🏠 **Homepage**
- **Responsive Navigation Bar** with multi-language support (English/Urdu)
- **User Authentication Links** (Sign In/Sign Up)
- **Mobile App Download** promotion via SMS
- **Quick Access Menu** to Used Cars, New Cars, Bikes, Auto Store, Videos, Forums, and Blogs
- **Post an Ad** call-to-action button

### 🎨 **Hero Section**
- **Dual Selling Options**:
  - **Post Your Ad**: Free ad posting in 3 easy steps with verified buyer offers
  - **Sell It For Me**: Dedicated sales expert service with secure transactions
- **Clear Value Propositions** with checkmark-highlighted benefits
- **Action Buttons** for immediate user engagement

### 🚘 **Featured Cars Section**
- **Dynamic Car Listings** with 4 popular models:
  - Toyota Corolla (PKR 59.7 - 75.5 lacs)
  - Suzuki Alto (PKR 23.3 - 30.5 lacs)
  - Honda City (PKR 46.5 - 58.5 lacs)
  - Honda Civic (PKR 86.6 - 99.0 lacs)
- **Interactive Car Cards** with:
  - High-quality car images
  - Price ranges in Pakistani Rupees
  - Star ratings (★★★☆☆)
  - User review counts
  - Hover animations (scale-up effect)
- **Category Tabs**: Popular, Upcoming, Newly Launched
- **View All Cars** link for extended browsing

### 🔍 **Individual Car Detail Pages**
Each car has a dedicated detail page featuring:
- **Comprehensive Vehicle Information**:
  - High-resolution car images
  - Complete specifications (Engine, Doors, Transmission, Fuel Type)
  - Performance metrics (Average, Driven kilometers, Condition rating)
  - Suspension type details
- **Action Buttons**:
  - Book a Test Drive
  - Request Bank Finance
  - Visit Place
  - Car Inspection
- **Pricing Display** with prominent "Make Payment" CTA
- **Responsive Layout** optimized for all devices

### 📝 **Checkout & Forms**
- **Multi-Step Purchase Form** with:
  - Email validation
  - CNIC number input
  - Card number collection
  - Address details
  - "Place Your Order" submission
- **Clean, Centered Layout** with red-bordered input fields
- **Smooth Navigation** to thank you page

### 🎉 **Thank You Page**
- **Order Confirmation** message
- **Post-purchase Experience** optimization

### 🦶 **Footer**
- **Professional Footer** with:
  - Developer credits (Muhammad Asad)
  - Copyright notice (2024)
  - Social media integration
  - Responsive design

---

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15.5.9 | React framework with server-side rendering |
| **React** | 19.0.0-rc | UI component library |
| **TypeScript** | 5.x | Type-safe JavaScript |
| **Tailwind CSS** | 3.4.1 | Utility-first CSS framework |
| **ESLint** | 8.x | Code linting and quality |
| **PostCSS** | 8.x | CSS transformations |

---

## 📁 Project Structure

```
pakwheel_clone/
├── public/
│   ├── images/
│   │   └── mobile.jpeg
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   └── app/
│       ├── cars/
│       │   ├── car1/
│       │   │   └── page.tsx          # Toyota Corolla details
│       │   ├── car2/
│       │   │   └── page.tsx          # Suzuki Alto details
│       │   ├── car3/
│       │   │   └── page.tsx          # Honda City details
│       │   └── car4/
│       │       └── page.tsx          # Honda Civic details
│       ├── components/
│       │   ├── Navbar.tsx            # Navigation component
│       │   ├── Hero.tsx              # Hero section component
│       │   ├── Feature.tsx           # Featured cars component
│       │   └── Footer.tsx            # Footer component
│       ├── Forms/
│       │   └── page.tsx              # Checkout form
│       ├── Thankyou/
│       │   └── page.tsx              # Order confirmation
│       ├── fonts/
│       ├── favicon.ico
│       ├── globals.css               # Global styles
│       ├── layout.tsx                # Root layout
│       └── page.tsx                  # Homepage
├── .eslintrc.json
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🚀 Installation

### Prerequisites
- **Node.js** (v18.x or higher)
- **npm** or **yarn** or **pnpm**

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/pakwheel_clone.git
   cd pakwheel_clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 💻 Usage

### Development
```bash
npm run dev
```
Starts the development server on `http://localhost:3000` with hot-reload enabled.

### Production Build
```bash
npm run build
```
Creates an optimized production build.

### Start Production Server
```bash
npm run start
```
Runs the production build locally.

### Linting
```bash
npm run lint
```
Checks code quality using ESLint.

---

## 🗺️ Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero section and featured cars |
| `/cars/car1` | Toyota Corolla detail page |
| `/cars/car2` | Suzuki Alto detail page |
| `/cars/car3` | Honda City detail page |
| `/cars/car4` | Honda Civic detail page |
| `/Forms` | Checkout form for car purchase |
| `/Thankyou` | Order confirmation page |

---

## 🧩 Components

### **Navbar**
- Responsive navigation with PakWheels logo
- Multi-category menu (Used Cars, New Cars, Bikes, etc.)
- Language toggle (English/Urdu)
- Authentication buttons
- Mobile app download link

### **Hero**
- Dual-column layout for selling options
- Call-to-action buttons
- Feature highlights with checkmarks

### **Feature**
- Grid layout for car cards
- Category tabs (Popular/Upcoming/Newly Launched)
- Interactive hover effects
- Star ratings and review counts
- Direct links to car detail pages

### **Footer**
- Developer attribution
- Copyright information
- Social media icons
- Centered, professional design

---

## 📸 Screenshots

> **Note**: Add screenshots of your application here to showcase the UI/UX

---

## 🔮 Future Enhancements

- [ ] **Backend Integration** with database (MongoDB/PostgreSQL)
- [ ] **User Authentication** (NextAuth.js)
- [ ] **Search & Filter** functionality
- [ ] **Advanced Car Comparison** tool
- [ ] **Real-time Chat** for buyer-seller communication
- [ ] **Payment Gateway** integration (Stripe/JazzCash)
- [ ] **Admin Dashboard** for car listings management
- [ ] **Wishlist & Favorites** feature
- [ ] **Mobile App** (React Native)
- [ ] **SEO Optimization** with Next.js metadata
- [ ] **Blog Section** with CMS integration
- [ ] **Multi-language Support** (i18n)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Muhammad Asad**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- **PakWheels** for design inspiration
- **Next.js Team** for the amazing framework
- **Vercel** for deployment platform
- **Tailwind CSS** for styling utilities

---

## 📞 Support

For support, email your.email@example.com or create an issue in the repository.

---

<div align="center">

**Made with ❤️ by Muhammad Asad**

⭐ Star this repo if you find it helpful!

</div>
