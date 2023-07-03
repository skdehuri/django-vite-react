from django.http import HttpResponse
from django.views.generic import TemplateView


class TodoHome(TemplateView):
    template_name = 'todo/index.html'
