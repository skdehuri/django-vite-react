from .settings import * # noqa

DEBUG = False
DJANGO_VITE_DEV_MODE = False
SECRET_KEY = os.environ.get('SECRET_KEY')
