# Aulil Absor's Personal Website & Blog

This is the source code for my personal website and blog. It's a modern full-stack React application built with Vite, React Router, and Tailwind CSS.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## ✨ Features

- 🚀 **Server-Side Rendering (SSR):** For fast initial page loads and good SEO.
- ⚡️ **Vite:** Fast development server with Hot Module Replacement (HMR).
- 📁 **Content Collections:** Blog posts are managed as local Markdown files.
- 🎨 **Tailwind CSS:** For a utility-first styling workflow.
- 🌗 **Dark/Light Mode:** Theme toggling for user preference.
- 📦 **Dockerized:** Ready for containerized deployment.
- 🔒 **TypeScript:** For type safety and better developer experience.
- 🛣️ **React Router:** For file-based routing.

## 🛠️ Tech Stack

- **Framework:** [React](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Routing:** [React Router](https://reactrouter.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Content:** [Content Collections](https://content-collections.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Deployment:** [Docker](https://www.docker.com/)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or later)
- [npm](https://www.npmjs.com/)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/aulilabsor.com.git
    cd aulilabsor.com
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```

### Development

Start the development server:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## 📦 Building for Production

To create a production-ready build, run:

```bash
npm run build
```

This will output the optimized and bundled assets to the `build/` directory.

## 🚢 Deployment

### Docker Deployment

A `Dockerfile` is included for easy containerization.

1.  Build the Docker image:
    ```bash
    docker build -t aulilabsor-com .
    ```
2.  Run the container:
    ```bash
    docker run -p 3000:3000 aulilabsor-com
    ```

The containerized application can be deployed to any platform that supports Docker, such as:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### Manual Deployment

If you prefer to deploy the application manually, you can run the production server.

Make sure to deploy the output of `npm run build`:

```
├── package.json
├── package-lock.json
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

Start the server using `npm start`.

## 📂 Project Structure

A brief overview of the project structure:

```
/
├── app/
│   ├── components/   # Reusable React components
│   ├── content/      # Blog posts (Markdown/MDX)
│   ├── features/     # Feature-specific components and logic
│   ├── lib/          # Shared utilities and data access
│   ├── routes/       # Route components
│   └── app.css       # Global styles
├── public/           # Static assets
├── build/            # Production build output
└── vite.config.ts    # Vite configuration
```