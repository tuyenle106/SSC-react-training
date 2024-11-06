# React Base Project

A modern React application template built with TypeScript, Vite, Redux Toolkit, and React Router.

## Structure

**src/**<br>
├── **api/** # API clients and services<br>
│ └── axiosClient.ts # Axios instance configuration<br>
│<br>
├── **components/**<br>
│ ├── **GlobalStyles/** # Global styles configuration<br>
│ ├── **layouts/** # Layout components<br>
│ │ ├── **DefaultLayout/** # Main layout structure<br>
│ │ └── **components/** # Header, Footer, Nav components<br>
│ └── **ui/** # Reusable UI components<br>
│<br>
├── **constants/** # Application constants<br>
│ ├── **index.ts** # Constants barrel file<br>
│ └── ...<br>
│<br>
├── **pages/** # Page components<br>
│ └── ...<br>
│<br>
├── **routes/** # Routing configuration<br>
│ └── **index.ts** # Route definitions<br>
│<br>
├── **store/** # Redux store setup<br>
│ ├── **slices/** # Redux slices<br>
│ │ └── ...<br>
│ └── **store.ts** # Store configuration<br>
│<br>
├── **types/** # TypeScript type definitions<br>
│ └── ...<br>
│<br>
├── **App.tsx** # Root component<br>
└── **main.tsx** # Application entry point<br>

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
