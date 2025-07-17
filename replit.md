# Portfolio Website Application

## Overview

This is a modern, responsive portfolio website built for a web development duo called "WebDev Duo". The application showcases their skills, projects, and services while providing a contact form for potential clients. It's built using a full-stack TypeScript architecture with React on the frontend and Express on the backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- **Favicon and SEO Update (Latest)**: Added custom WebDev Duo favicon with "WD" logo design and improved HTML meta tags with proper title and description
- **Button and Names Update**: Changed "Get In Touch" button to attractive green gradient and updated developer names to Faisal Khan and Harsha Surwase
- **Text Visibility Fix**: Fixed silver/light gray text throughout the site by changing to darker gray colors for better readability
- **Real Project Integration**: Updated projects section with actual user projects:
  - ShopNest: E-commerce application with demo video
  - Real-Time Chat App: Live chat with WebSockets
  - Process Scheduler: CPU scheduling algorithms visualization
- **About Section Update**: Updated developer information to reflect actual users (Faisal Khan and Harsha Surwase)
- **Contact Section Enhancement**: Improved visibility with better background contrast and gradient text
- **Enhanced Form Validation**: Added comprehensive validation to contact form with specific error messages for name (2-50 chars), email (valid format), subject (5-100 chars), and message (10-1000 chars)
- **Visual Enhancements**: Added stunning visual effects including:
  - Glass effect navigation with gradient text logo
  - Floating animations on hero section and skill cards
  - Hover effects with scale transforms and glowing buttons
  - Neon border effects on cards and form elements
  - Image zoom effects on project cards
  - Pulse glow animations on call-to-action buttons
- **Interactive Navigation**: Made "WebDev Duo" logo clickable to scroll to home section
- **Enhanced Styling**: Added CSS animations including shine effects, floating elements, and gradient text effects

## System Architecture

The application follows a monorepo structure with clear separation between client, server, and shared code:

- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for database operations
- **UI Framework**: Tailwind CSS with shadcn/ui component library
- **Deployment**: Built for production with esbuild for server bundling

### Directory Structure
```
├── client/           # React frontend application
├── server/           # Express backend server
├── shared/           # Shared TypeScript types and schemas
├── migrations/       # Database migration files
└── dist/            # Production build output
```

## Key Components

### Frontend Architecture
- **React Router**: Uses Wouter for client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Animations**: Framer Motion for smooth animations and scroll-triggered effects

### Backend Architecture
- **Express Server**: RESTful API with middleware for logging and error handling
- **Data Storage**: Currently using in-memory storage with interfaces designed for easy PostgreSQL migration
- **Input Validation**: Zod schemas shared between client and server
- **Session Management**: Express sessions with PostgreSQL store support

### Database Schema
The application defines two main entities:
- **Users**: Basic user authentication (prepared for future features)
- **Contact Submissions**: Stores contact form submissions with name, email, subject, and message

## Data Flow

1. **Contact Form Submission**:
   - Client validates form data using shared Zod schemas
   - Data is sent via POST to `/api/contact`
   - Server validates and stores submission
   - Success/error feedback provided to user

2. **Contact Submissions Retrieval**:
   - Admin endpoint at GET `/api/contact` to retrieve all submissions
   - Currently no authentication (intended for future admin features)

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: PostgreSQL database driver
- **drizzle-orm**: Type-safe database ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library for smooth UI interactions

### UI and Styling
- **@radix-ui/***: Headless UI primitives for accessibility
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library

### Development Tools
- **vite**: Fast development server and build tool
- **tsx**: TypeScript execution for development
- **esbuild**: Fast bundler for production server builds

## Deployment Strategy

The application is configured for production deployment with:

1. **Build Process**:
   - Frontend: Vite builds React app to `dist/public`
   - Backend: esbuild bundles server code to `dist/index.js`
   - Single production command: `npm run build`

2. **Environment Setup**:
   - Requires `DATABASE_URL` environment variable for PostgreSQL connection
   - Drizzle configuration ready for database migrations
   - Development and production mode handling

3. **Server Configuration**:
   - Express serves static files in production
   - Vite development middleware in development mode
   - Proper error handling and logging middleware

The architecture is designed to be easily deployable to platforms like Replit, Vercel, or traditional hosting providers, with the database configuration ready for services like Neon or other PostgreSQL providers.