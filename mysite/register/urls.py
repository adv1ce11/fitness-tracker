# register/urls.py
from django.contrib import admin
from django.urls import path
from . import views
from django.conf.urls.static import static


urlpatterns = [
    path('register/register.html',views.register, name='register'),
]
