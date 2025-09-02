# CodexHub Website Builder Frontend

This is the main frontend application for the CodexHub Website Builder platform - a comprehensive React application that enables users to create, manage, and deploy multiple web projects through an intuitive chat interface.

## 🎯 Application Purpose

The frontend serves as the central hub for the CodexHub platform, providing:

- **Project Creation Interface** - Form-based project initialization with API key management
- **AI-Powered Chat Interface** - Interactive chat system for building websites through natural language
- **Project Management** - View and manage multiple website projects
- **Real-time Preview** - Live preview of website changes as they're being built
- **Task Monitoring** - Track the status of website building tasks

## 🏗️ Application Architecture

### Core Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/             # shadcn/ui component library
│   ├── chat/           # Chat interface components
│   ├── forms/          # Form components
│   └── layout/         # Layout and navigation components
├── pages/              # Main application pages
│   ├── Home.tsx        # Landing page with project creation
│   ├── ChatInterface.tsx # Main chat interface for building
│   └── ErrorPage.tsx   # Error handling page
├── contexts/           # React context providers
│   └── ApiKeyContext.tsx # API key management
├── hooks/              # Custom React hooks
├── services/           # API service layer
└── lib/                # Utility functions and helpers
```

### Key Technologies

- **React 18** - Modern React with concurrent features
- **TypeScript** - Full type safety throughout the application
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Accessible component library built on Radix UI

## 🚀 Core Features

### 1. Project Creation & Management

The application starts with a **Home page** (`src/pages/Home.tsx`) that provides:

- **Website Builder Form** - Input fields for project requirements
- **API Key Management** - Secure storage and validation of CodexHub API keys
- **Project Initialization** - Creates new project instances
- **Task Tracking** - Monitors build and deployment status

### 2. AI Chat Interface

The main **Chat Interface** (`src/pages/ChatInterface.tsx`) provides:

- **Natural Language Input** - Users describe website requirements in plain English
- **Real-time Chat** - Interactive conversation with the AI builder
- **Website Preview** - Live iframe preview of the website being built
- **Task Management** - Monitor and track building progress
- **Message History** - Persistent chat history per project

### 3. API Key Context

The **ApiKeyContext** (`src/contexts/ApiKeyContext.tsx`) manages:

- **Secure Storage** - API keys stored in localStorage with encryption
- **Global Access** - Available throughout the application
- **Validation** - Ensures API keys are properly set before use
- **Persistence** - Maintains keys across browser sessions

### 4. Service Layer

The application includes several service modules:

- **Agent Service** - Communicates with CodexHub AI agents
- **Project Service** - Manages project lifecycle operations
- **Deployment Service** - Handles website deployment processes

## 🔄 Application Flow

### 1. Initial Setup
```
User visits Home page → Enters API key → Creates project → Redirected to Chat Interface
```

### 2. Website Building Process
```
User types request → AI processes request → Creates/updates website → Updates preview → User sees changes
```

### 3. Task Lifecycle
```
Task Created → Pending → In Progress → Completed → Website Updated
```

## 🎨 UI/UX Features

### Design System
- **Modern Interface** - Clean, professional design with gradient accents
- **Responsive Layout** - Works seamlessly on desktop and mobile devices
- **Dark/Light Themes** - Built-in theme switching capability
- **Accessibility** - WCAG compliant components via Radix UI

### Component Library
- **47+ UI Components** - Comprehensive set of pre-built components
- **Consistent Styling** - Unified design language across the application
- **Interactive Elements** - Smooth animations and transitions
- **Form Components** - Advanced form handling with validation

## 🔧 Configuration & Setup

### Environment Variables
```bash
# API Configuration
VITE_CODEXHUB_API_URL=https://api.codexhub.ai
VITE_GITHUB_REPO_URL=https://github.com/codexhubai/test-gh-pages.git

# Build Configuration
VITE_BASE_URL=./  # For subfolder deployment
```

### Development Commands
```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Run linting
bun run lint
```

## 🔌 Integration Points

### CodexHub Backend
- **AI Agent Communication** - Sends prompts and receives responses
- **Project Management** - Creates and manages website projects
- **Task Monitoring** - Tracks build and deployment progress

### GitHub Integration
- **Repository Management** - Works with GitHub repositories
- **Automatic Deployment** - Integrates with GitHub Pages
- **Version Control** - Tracks changes and manages branches

### Local Storage
- **API Key Persistence** - Stores user authentication
- **Chat History** - Maintains conversation context
- **Project Data** - Caches project information locally

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Desktop** - Full-featured interface with side-by-side chat and preview
- **Tablet** - Adaptive layout with collapsible panels
- **Mobile** - Touch-optimized interface with mobile-first design

## 🚀 Performance Features

- **Code Splitting** - Route-based code splitting for faster loading
- **Lazy Loading** - Components loaded on demand
- **Optimized Bundles** - Vite handles tree-shaking and minification
- **Caching** - React Query provides intelligent data caching

## 🔒 Security Features

- **API Key Encryption** - Secure storage of sensitive credentials
- **Input Validation** - Comprehensive validation of user inputs
- **XSS Protection** - Built-in protection against cross-site scripting
- **Secure Communication** - HTTPS-only API communication

## 🧪 Testing & Quality

- **TypeScript** - Compile-time error checking
- **ESLint** - Code quality and consistency
- **Component Testing** - Unit tests for critical components
- **Integration Testing** - End-to-end workflow testing

## 📚 Additional Resources

- **Component Documentation** - See individual component files for usage examples
- **API Documentation** - Refer to service files for integration details
- **Styling Guide** - Tailwind CSS classes and custom utilities
- **Deployment Guide** - GitHub Pages deployment workflow

---

This frontend application is part of the larger CodexHub Website Builder platform, designed to provide an intuitive and powerful interface for creating websites through AI-powered conversations. For more information about the overall platform, see the main project README.

**Built with CodexHub.ai website's builder** 🚀
