# GEMINI.md

## Project Overview

This is a React application built with Vite, TypeScript, and Tailwind CSS. It appears to be a corporate gifting website for a company called "Reethigifts". The application uses `react-router-dom` for routing and includes analytics with `react-ga4`. The codebase is structured with components, sections, hooks, and schemas.

## Building and Running

To get started with this project, follow these steps:

1.  **Install dependencies:**
    ```bash
    pnpm install
    ```

2.  **Start the development server:**
    ```bash
    pnpm dev
    ```

3.  **Build for production:**
    ```bash
    pnpm build
    ```

4.  **Lint the code:**
    ```bash
    pnpm lint
    ```

5.  **Preview the production build:**
    ```bash
    pnpm preview
    ```

## Development Conventions

*   **Styling:** The project uses Tailwind CSS for styling.
*   **State Management:** The project uses React hooks for state management. A custom hook `useFormPopup` is used to manage a form popup.
*   **Routing:** The project uses `react-router-dom` for routing.
*   **Linting:** The project uses ESLint for linting.
*   **Path Aliases:** The project uses the path alias `@/*` to refer to the `src/*` directory.
*   **Analytics:** The project uses `react-ga4` for analytics.
