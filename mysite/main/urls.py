# main /urls.py
from django.urls import path
from main import views
urlpatterns = [
   path(r'', views.HomePageView.as_view()),
]