# CLAUDE.md

This file documents the project for Claude Code and other AI coding assistants.

## Project Overview

**django-vite-react** is a starter template combining Django (backend) with React + Vite (frontend). The frontend is injected into Django templates via `django-vite`. Currently at v0.1.0-alpha.1.

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Django 4.2, Python 3.10+ |
| Frontend | React 18, Vite 4, TypeScript 5, SWC |
| Database (dev) | SQLite3 |
| Database (prod) | PostgreSQL (psycopg2) |
| Package managers | Poetry (Python), pnpm (Node) |
| Containers | Docker + Docker Compose |
| Dev tooling | django-debug-toolbar, ESLint |

## Repository Layout

```
django-vite-react/
├── mysite/                  # Django project config (settings, urls, wsgi, asgi)
├── pages/                   # Django app — simple pages + Vite integration demo
├── todo/                    # Django app — todo example (skeleton, no models yet)
├── frontend/
│   └── src/
│       ├── main.tsx         # Entry point for "pages" bundle
│       ├── App.tsx
│       └── components/
│           └── todo/
│               └── main.tsx # Entry point for "todo" bundle
├── static/dist/             # Vite build output (do not edit manually)
├── Dockerfile
├── docker-compose.yml
├── pyproject.toml           # Python dependencies (Poetry)
├── package.json             # Node dependencies (pnpm)
└── vite.config.ts
```

## Development Setup

### Prerequisites
- Python 3.10+, Poetry
- Node.js (LTS), pnpm
- Docker (optional, for PostgreSQL)

### Install & Run

```bash
# Python dependencies
poetry install

# Node dependencies
pnpm install

# Copy environment file
cp .env.example .env           # sets DJANGO_SETTINGS_MODULE=mysite.settings_local

# Run Django dev server (uses SQLite, port 8000)
poetry run python manage.py migrate
poetry run python manage.py runserver

# Run Vite dev server (HMR, port 3000) — required for frontend hot reload
pnpm dev
```

Both servers must be running simultaneously during frontend development.

### Docker

```bash
docker-compose up --build      # starts web (port 8000) + db (PostgreSQL)
```

## Settings Files

| File | Purpose |
|---|---|
| `mysite/settings.py` | Base settings shared across environments |
| `mysite/settings_local.py` | Local dev — SQLite, debug toolbar, insecure secret key |
| `mysite/settings_local.example` | Template for creating settings_local.py |
| `mysite/settings_prod.py` | Production overrides (PostgreSQL, debug off) |

`DJANGO_SETTINGS_MODULE` in `.env` controls which settings file Django loads.

## Frontend Build

Vite produces **two separate bundles** (code splitting):

| Entry point | Output bundle | Used by |
|---|---|---|
| `frontend/src/main.tsx` | `main` | `pages` app templates |
| `frontend/src/components/todo/main.tsx` | `todo` | `todo` app templates |

Output directory: `static/dist/`  
Base path for static files: `/static/`

In dev mode, `django-vite` points to the Vite dev server (`http://127.0.0.1:3000`) for HMR. In production, it reads `static/dist/manifest.json`.

Build for production:
```bash
pnpm build
poetry run python manage.py collectstatic
```

## Django Apps

### `pages`
- `HomePageView` → `/` — basic landing page
- `VitePageView` → `/vite/` — loads the `main` React bundle

### `todo`
- `TodoHome` → `/todo/` — loads the `todo` React bundle
- Models not yet defined (`todo/models.py` is empty)

## URL Structure

```
/           → pages.HomePageView
/vite/      → pages.VitePageView
/todo/      → todo.TodoHome
/__debug__/ → django-debug-toolbar (dev only)
```

## Testing

```bash
# Backend
poetry run python manage.py test

# No frontend tests configured yet (Vitest/Jest not set up)
```

## Common Tasks

```bash
# Create a new Django app
poetry run python manage.py startapp <appname>

# Make and apply migrations
poetry run python manage.py makemigrations
poetry run python manage.py migrate

# Django shell
poetry run python manage.py shell

# Lint frontend
pnpm lint
```

## Key Conventions

- **Environment config:** Never commit `.env` or `settings_local.py`. Use `.env.example` and `settings_local.example` as templates.
- **Static files:** Never manually edit `static/dist/`. Always rebuild with `pnpm build`.
- **Python style:** Standard Django conventions; no formatter enforced yet.
- **TypeScript:** Strict mode enabled. Use `.tsx` for files with JSX.
- **Dependencies:** Python via `poetry add`, Node via `pnpm add`.
