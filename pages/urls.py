from django.urls import path

from .views import HomePageView, VitePageView

urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
    path('vite/', VitePageView.as_view(), name='vite'),
]
