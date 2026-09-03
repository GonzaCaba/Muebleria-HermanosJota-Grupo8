# Agent and Team Collaboration Guide

This document defines the development framework, engineering conventions, and GitHub workflow for **Grupo 8 (Hermanos Jota E-Commerce)**. Both human team members and AI coding assistants must strictly adhere to these guidelines.

---

## 1. Project Overview & Tech Stack

- **Project:** Hermanos Jota - Artisanal Furniture E-Commerce (Sprint 1 & Sprint 2).
- **Core Philosophy:** Pure client-side web fundamentals. No frontend frameworks (React, Vue, Angular), no build pipelines, and no backend dependencies.
- **Technologies:**
  - **HTML5:** Strictly semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<figure>`, `<label>`).
  - **CSS3:** Mobile First architecture, responsive breakpoints via CSS Flexbox and CSS Grid. All design tokens sourced from [DESIGN.md](file:///home/enzo/Documentos/ITBA/Sprint_1_2/trabajo_grupo_8/DESIGN.md).
  - **JavaScript (Vanilla ES6+):** Client-side state management, DOM manipulation, asynchronous data simulation (`setTimeout` / `async-await`), and event handling.

---

## 2. Directory Structure

Maintain a clean, predictable repository layout:

```text
trabajo_grupo_8/
├── .gitignore
├── AGENTS.md
├── DESIGN.md
├── README.md
├── index.html              <-- Main landing page (MUST remain at root for static hosting)
├── pages/
│   ├── contacto.html       <-- Contact form & workshop location
│   ├── producto.html       <-- Single product dynamic detail view
│   └── productos.html      <-- Full catalog with filters / search
├── assets/
│   ├── images/             <-- Furniture photography & logo.svg
│   └── icons/              <-- SVG or UI glyphs
├── css/
│   └── styles.css          <-- Unified CSS variables (:root) & core styles
└── js/
    ├── data/
    │   └── productos.js    <-- Array of product objects
    ├── cart.js             <-- Simulated shopping cart (localStorage)
    ├── catalogo.js         <-- Dynamic rendering for productos.html
    ├── contacto.js         <-- Form validation and DOM feedback
    ├── detalle.js          <-- Dynamic single product renderer (URLSearchParams)
    └── index.js            <-- Featured products renderer for index.html
```

---

## 3. Design System & Tokens

Always inspect and use tokens defined in [DESIGN.md](file:///home/enzo/Documentos/ITBA/Sprint_1_2/trabajo_grupo_8/DESIGN.md):

- **Palette:**
  - Primary: `#A0522D` (Siena Tostado - CTAs, main titles)
  - Surface Background: `#F5E6D3` (Alabastro Cálido - warm canvas)
  - Surface Containers: `#FAF4EB` (Soft Warm Cream - card backgrounds)
  - Secondary: `#87A96B` (Verde Salvia - badges, sustainability, success)
  - Tertiary: `#D4A437` (Vara de Oro - brass accents, premium highlights)
  - Soft Accent: `#C47A6D` (Rosa Polvoriento)
  - Text Primary: `#2A2118` (Espresso Charcoal - body and high contrast text)
- **Typography:**
  - Titles / Headlines: `Playfair Display`, serif.
  - Body / UI Controls: `Inter`, sans-serif.
- **Component Geometry:**
  - Default borders: `rounded-md` (`0.5rem`).
  - Cards and dialogs: `rounded-lg` (`1.0rem`).
  - Avoid sharp `0px` rectilinear corners.

---

## 4. GitHub Projects Workflow

All tasks originate from and must be tracked in the **GitHub Projects** board.

### Column Progression:

1. **Backlog:**
   - Pending cards or user stories awaiting assignment.
   - Tasks must have clear acceptance criteria before work begins.

2. **In Progress:**
   - When a contributor starts working on a card:
     - Assign self to the task / issue.
     - Move the card to **In Progress**.
     - Create a dedicated branch off `main` (never work directly on `main`).

3. **In Review:**
   - Work is complete, verified locally, and committed.
   - Push branch to remote and open a Pull Request (PR) targeted at `main`.
   - Link the PR to the GitHub Project issue/card using keywords (e.g., `Closes #12`).
   - Move the card to **In Review** and request at least one peer review.

4. **Done:**
   - Once the PR receives approval and merges into `main`, move the card to **Done**.

---

## 5. Git & Branching Conventions

- **Branch Naming:**
  - `feature/<short-description>`: New functionality or UI layout (e.g., `feature/catalog-grid`).
  - `fix/<short-description>`: Bug fixes or layout corrections (e.g., `fix/nav-mobile-overflow`).
  - `chore/<short-description>`: Config, dependencies, or structural cleanup (e.g., `chore/project-gitignore`).
  - `docs/<short-description>`: Documentation changes (e.g., `docs/update-readme`).

- **Commit Messages (Conventional Commits):**
  - Use format: `<type>(<scope>): <subject>`
  - Types: `feat`, `fix`, `docs`, `style`, `refactor`, `chore`, `test`.
  - Examples:
    - `feat(catalog): add async product rendering with setTimeout`
    - `style(hero): apply design tokens for typography and spacing`
    - `fix(cart): persist cart count in localStorage across pages`
  - **Rule:** Never include "Co-Authored-By" or AI attribution lines in commits.

---

## 6. Rules for AI Coding Assistants

When interacting with this codebase, all AI agents must observe:

1. **No External Frameworks:** Do not introduce React, Tailwind CLI/PostCSS, Vite, Webpack, or external UI libraries unless explicitly instructed. Keep all solutions in pure HTML, CSS, and Vanilla JS.
2. **Mobile First by Default:** Write base CSS rules for mobile screens first, using `@media (min-width: 768px)` and `@media (min-width: 1024px)` for larger breakpoints.
3. **Accessibility First:** Ensure color contrast conforms to WCAG AA, form inputs have matching `<label>` elements with `for` attributes, and interactive elements are keyboard focusable.
4. **Preserve Static Hosting Compatibility:** Never move `index.html` into a subfolder. Keep all asset and navigation links relative (e.g., `./pages/productos.html` or `../assets/images/...`).
5. **Code Style:** Clean indentation (2 spaces), clear variable names, and maintain existing comments and documentation intact.
