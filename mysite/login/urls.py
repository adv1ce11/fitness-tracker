#login/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('login/login.html', views.login, name='login'),
    path('authenfication',views.authenfication, name="authenfication"),
]