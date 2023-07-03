from django.urls import path

from .views import TodoHome

urlpatterns = [
    path("", TodoHome.as_view(), name="todo-home"),
]
