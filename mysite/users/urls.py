from django.urls import path
from . import views

app_name = "users"

urlpatterns = [
    path('login/', views.user_login, name='login'),  
    path('logout/', views.user_logout, name='logout'),
    path('register/', views.register, name='register'),
    path('profile/', views.profile, name='profile'),
    path('weight_profile/', views.weight_profile, name='weight_profile'),
]