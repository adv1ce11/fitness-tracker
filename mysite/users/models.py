from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    email = models.EmailField(unique=True, verbose_name='Електронна пошта')
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username'] # Email is now the primary identifier

    def __str__(self):
        return self.email