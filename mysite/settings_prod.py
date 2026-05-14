from .settings import * # noqa

DEBUG = False
DJANGO_VITE["default"]["dev_mode"] = False
SECRET_KEY = os.environ.get('SECRET_KEY')
