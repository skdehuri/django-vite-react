# django-vite-react

### This project uses a hybrid archtechture model where django is used as backend and we serve react bundles in the django template pages where it is required in the frontend side.

## How to run the project
1. Create a .env file and copy all the content from .env.example
2. Create a settings_local.py file inside mysite directory and copy all the content from settings_local.example file
3. You can use existing DATABASES config using pg_service config otherwise create your own database config in the settins_local.py file.
4. Create poetry environment and run poetry install to install all the python package dependencies (Assuming poetry package is installed)
5. Run npm/pnpm install to install all the frontend dependencies (Assuming node and npm/pnmp is installed) 
6. Run the django local server using python manage.py runserver
8. Run the vite local server using pnpm install
