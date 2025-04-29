# profile/urls.py
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('profile/profile.html', views.profile, name='profile'),
    path('profile/index.html', views.profile, name='profile'),
]
