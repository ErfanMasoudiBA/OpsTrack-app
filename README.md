# Gozareshyar (گزارشیار مهندس)

AI-powered mobile assistant for project reporters and managers, replacing manual reporting and paperwork.

## 🚀 Project Overview

Gozareshyar is a comprehensive reporting solution designed for construction, industrial, and technical companies. It enables engineers and site supervisors to submit audio reports, attach files, and provides managers with AI-generated summaries and insights.

### Key Features

- 🎤 **Audio Report Submission** - Record and convert speech to text using AI
- 📎 **File Attachments** - Support for images, videos, and documents
- 👥 **Role-based Access** - Managers and Reporters with different permissions
- 📊 **AI-powered Summaries** - Automated report analysis and insights
- 📱 **Mobile-first Design** - Native iOS and Android applications
- 🔔 **Real-time Notifications** - Push notifications for new reports

## 🏗️ Architecture

This is a monorepo containing:

- **Frontend** - React Native app with Expo (iOS/Android)
- **Backend** - Node.js + TypeScript + Express API
- **Shared** - Common types, utilities, and configurations

## 🛠️ Tech Stack

### Frontend
- React Native with Expo
- TypeScript
- React Navigation
- React Query for state management

### Backend
- Node.js + Express
- TypeScript
- MongoDB with Mongoose
- JWT Authentication
- OpenAI API (Whisper & GPT)

### Infrastructure
- Cloud Storage (Firebase/S3)
- Push Notifications
- CI/CD with GitHub Actions

## 📁 Project Structure

```
gozareshyar/
├── frontend/          # React Native app (Expo)
├── backend/           # Node.js API server
├── shared/            # Shared types and utilities
├── package.json       # Root workspace configuration
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0
- MongoDB
- Expo CLI

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ErfanMasoudiBA/OpsTrack-app.git
cd OpsTrack-app
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
# Copy example env files
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

4. Start development servers:
```bash
pnpm dev
```

This will start both the backend API server and the Expo development server.

## 📱 Development

### Available Scripts

- `pnpm dev` - Start all development servers
- `pnpm build` - Build all packages
- `pnpm test` - Run all tests
- `pnpm lint` - Lint all packages
- `pnpm type-check` - Type check all packages

### Individual Package Scripts

Each package has its own scripts. Navigate to the package directory and run:

```bash
# Frontend
cd frontend
pnpm start    # Start Expo dev server
pnpm android  # Run on Android
pnpm ios      # Run on iOS

# Backend
cd backend
pnpm dev      # Start development server
pnpm build    # Build for production
```

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Run tests for specific package
pnpm --filter frontend test
pnpm --filter backend test
```

## 📦 Deployment

### Backend Deployment
The backend can be deployed to any Node.js hosting service (Vercel, Railway, Heroku, etc.).

### Frontend Deployment
The React Native app can be built and deployed to app stores using Expo's build service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Erfan Masoudi** - Project Lead & Developer

## 📞 Support

For support and questions, please open an issue in the GitHub repository.

---

Built with ❤️ for the engineering and construction industry.
