from django.shortcuts import render
from django.http import HttpRequest, HttpResponse
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect
def login(request: HttpRequest) -> HttpResponse:
    return render(request, 'login/login.html')

