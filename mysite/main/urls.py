# main /urls.py
from django.contrib import admin
from django.urls import path
from . import views
from .views import (HomePageView, ArticleDetail,
 ArticleList, ArticleCategoryList)

urlpatterns = [
   path('', views.home, name='main'),
   path(r'', HomePageView.as_view()),
   path(r'articles', ArticleList.as_view(), name='articles-list'),
   path(r'articles/category/<slug>', ArticleCategoryList.as_view(),
name='articles-category-list'),
      path(r'articles/<year>/<month>/<day>/<slug>', ArticleDetail.as_view(),
name='news-detail'),
]