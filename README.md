# React Base Project

A modern React application template built with TypeScript, Vite, Redux Toolkit, and React Router.

## Structure

**src/**
├── **api/** # API clients and services
│ └── axiosClient.ts # Axios instance configuration
│
├── **components/**
│ ├── **GlobalStyles/** # Global styles configuration
│ ├── **layouts/** # Layout components
│ │ ├── **DefaultLayout/** # Main layout structure
│ │ └── **components/** # Header, Footer, Nav components
│ └── **ui/** # Reusable UI components
│
├── **constants/** # Application constants
│ ├── **index.ts** # Constants barrel file
│ └── ...
│
├── **pages/** # Page components
│ └── ...
│
├── **routes/** # Routing configuration
│ └── **index.ts** # Route definitions
│
├── **store/** # Redux store setup
│ ├── **slices/** # Redux slices
│ │ └── ...
│ └── **store.ts** # Store configuration
│
├── **types/** # TypeScript type definitions
│ └── ...
│
├── **App.tsx** # Root component
└── **main.tsx** # Application entry point

## Features

- ⚡️ **Vite** - Lightning fast build tool
- 🎯 **TypeScript** - Enhanced type safety and developer experience
- 📦 **Redux Toolkit** - State management with Redux made easy
- 🛣 **React Router** - Client-side routing
- 🎨 **SCSS Modules** - Scoped styling with SCSS
- 📏 **ESLint** - Code linting with TypeScript support
- 🔍 **Path Aliases** - Import using `~` prefix


## Installation

1. Clone the repository
2. Install dependencies: `yarn install` / `npm install`
3. Start the development server: `yarn dev` / `npm run dev`
