# GitHub Copilot Instructions

This is a Django 4.2 + React 18 / Vite 4 + TypeScript project. Django serves HTML templates that load React bundles compiled by Vite via `django-vite`.

## Stack

- **Backend:** Django 4.2, Python 3.10+, Poetry
- **Frontend:** React 18, Vite 4, TypeScript 5, SWC
- **Database:** SQLite (dev), PostgreSQL (prod)
- **Containers:** Docker + Docker Compose
- **Package managers:** Poetry (Python), pnpm (Node)

## Project Structure

```
mysite/          # Django project config (settings, urls, wsgi)
pages/           # Django app — landing pages + Vite demo
todo/            # Django app — todo skeleton (no models yet)
frontend/src/
  main.tsx                    # Entry point → "main" bundle (pages app)
  components/todo/main.tsx    # Entry point → "todo" bundle (todo app)
static/dist/     # Vite build output — never edit manually
```

## Key Conventions

- **Two Vite bundles:** `main` (pages app) and `todo` (todo app). New entry points must be registered in `vite.config.ts` and referenced in Django templates via `{% vite_asset %}`.
- **Settings:** `settings.py` (base), `settings_local.py` (dev/SQLite), `settings_prod.py` (prod/PostgreSQL). Never hard-code secrets.
- **Migrations:** Always commit migration files after model changes.
- **Templates:** Place in `<app>/templates/<app>/` to avoid name collisions.
- **TypeScript:** Strict mode on. Use `.tsx` for JSX files. Avoid `any`.
- **Dependencies:** `poetry add` for Python, `pnpm add` for Node.

## Dev Setup

Both servers must run simultaneously:

```bash
poetry run python manage.py runserver   # Django on :8000
pnpm dev                                 # Vite HMR on :3000
```

## What NOT to Do

- Do not edit `static/dist/` manually — always rebuild with `pnpm build`.
- Do not commit `.env`, `settings_local.py`, or `temp_db.sqlite3`.
- Do not add secrets to tracked files.
- Do not break the dual-server dev setup.
