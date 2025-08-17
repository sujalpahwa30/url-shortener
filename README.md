# URL Shortener

A modern, full-stack URL shortener application built with Next.js 15, TypeScript, MongoDB, and styled with Tailwind CSS and DaisyUI.

![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=flat-square&logo=mongodb)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=flat-square&logo=tailwind-css)

## 🚀 Features

- **URL Shortening**: Convert long URLs into short, shareable links
- **URL Management**: View and manage all your shortened URLs
- **URL Redirection**: Automatic redirection from short URLs to original URLs
- **Modern UI**: Clean and responsive design with Tailwind CSS and DaisyUI
- **TypeScript**: Full type safety throughout the application
- **MongoDB Integration**: Persistent storage with Mongoose ODM
- **Server Actions**: Modern Next.js server-side functionality

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4.x, DaisyUI 5.x
- **Backend**: Next.js API Routes, Server Actions
- **Database**: MongoDB with Mongoose ODM
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB Atlas](https://www.mongodb.com/atlas) account or local MongoDB instance

## ⚡ Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/sujalpahwa30/url-shortner.git
cd url-shortner
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory and add your MongoDB connection string:

```env
MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/url-shortener?retryWrites=true&w=majority
```

**Note**: Replace the connection string with your actual MongoDB Atlas connection string or local MongoDB URL.

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── shorten/       # URL shortening endpoint
│   │   └── urls/          # URLs management endpoint
│   ├── serverActions/     # Server actions
│   ├── urls/              # URLs management page
│   │   └── [id]/          # Dynamic route for URL redirection
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── config/
│   └── db.ts              # Database connection
├── models/
│   └── Url.ts             # URL data model
├── repositories/
│   └── UrlRepository.ts   # Data access layer
└── services/
    └── UrlShortenerService.ts # Business logic
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## 📱 Usage

### Shortening a URL

1. Navigate to the home page
2. Enter the URL you want to shorten in the input field
3. Click the "Shortener" button
4. Your shortened URL will be generated and stored

### Managing URLs

1. Click on "View All URLs" from the home page
2. See all your shortened URLs with their original counterparts
3. Click on any shortened URL to be redirected to the original URL

### API Endpoints

#### POST `/api/shorten`
Shorten a new URL

**Request Body:**
```json
{
  "originalUrl": "https://example.com/very-long-url"
}
```

**Response:**
```json
{
  "shortUrl": "abc123",
  "originalUrl": "https://example.com/very-long-url"
}
```

#### GET `/api/urls`
Get all shortened URLs

## 🌐 Database Schema

The application uses a simple MongoDB schema:

```typescript
{
  originalUrl: String,    // The original long URL
  shortUrl: String,       // The generated short identifier
  timestamps: true        // createdAt and updatedAt fields
}
```

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your environment variables in Vercel dashboard
4. Deploy automatically on every push to main branch

### Deploy on Other Platforms

This Next.js application can be deployed on any platform that supports Node.js:

- [Netlify](https://netlify.com)
- [Railway](https://railway.app)
- [Heroku](https://heroku.com)
- [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform)

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGODB_URI` | MongoDB connection string | Yes |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Issues

If you encounter any issues or have suggestions, please [open an issue](https://github.com/sujalpahwa30/url-shortner/issues) on GitHub.

## 👨‍💻 Author

**Sujal Pahwa**
- GitHub: [@sujalpahwa30](https://github.com/sujalpahwa30)

---

⭐ Star this repository if you found it helpful!
