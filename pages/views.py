from django.http import HttpResponse
from django.views.generic import TemplateView


class HomePageView(TemplateView):
    template_name = "pages/home.html"


class VitePageView(TemplateView):
    template_name = "pages/vite-app.html"
