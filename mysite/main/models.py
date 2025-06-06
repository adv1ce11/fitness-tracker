from django.utils import timezone
from django.db import models
from django.urls import reverse
 
# Create your models here.
class Category(models.Model):
      category = models.CharField(u'Категорія',
      max_length=250, help_text=u'Максимум 250 сим.')
      slug = models.SlugField(u'Слаг')
      objects = models.Manager()

class Meta:
        verbose_name = u'Категорія для публікації'
        verbose_name_plural = u'Категорії для публікацій'
def __str__(self):
        return self.category
def get_absolute_url(self):
    try:
         url = reverse('articles-category-list',
                       kwargs={'slug': self.slug})
    except:
         url = "/"
         return url


class Article(models.Model):
      title = models.CharField(
          u'Заголовок',
          max_length=250,
          help_text=u'Максимум 250 символів'
      )
      description = models.TextField(
          blank=True,
          verbose_name=u'Опис'
      )
      pub_date = models.DateTimeField(
          u'Дата публікації',
          default=timezone.now
      )
      slug = models.SlugField(
          u'Слаг',
          unique_for_date='pub_date'
      )
      main_page = models.BooleanField(u'Головна', default=True,
 
      help_text=u'Показувати на головній сторінці ')
      category = models.ForeignKey(Category,
      related_name='articles', blank=True, null=True,
      verbose_name=u'Категорія',on_delete=models.CASCADE)
 
      objects = models.Manager()
 
      class Meta:
          ordering = ['-pub_date']
          verbose_name = u'Publication'
          verbose_name_plural = u'Publications'
 
      def __str__(self):
          return self.title
 
      def get_absolute_url(self):
          try:
              url = reverse(
                  'news-detail',
                  kwargs={
                      'year': self.pub_date.strftime("%Y"),
                      'month': self.pub_date.strftime("%m"),
                      'day': self.pub_date.strftime("%d"),
                      'slug': self.slug,
                  }
              )
          except:
              url = "/"
          return url
 
 
class ArticleImage(models.Model):
      article = models.ForeignKey(
          Article,
          verbose_name=u'Стаття як покрашити себе',
          related_name='images',
          on_delete=models.CASCADE
      )
      image = models.ImageField(
          u'Фото',
          upload_to='photos'
      )
      title = models.CharField(
          u'Заголовок',
          max_length=250,
          help_text=u'Максимум 250 символів',
          blank=True
      )
 
      class Meta:
          verbose_name = u'Стаття як покращити себе '
          verbose_name_plural = u'Статті як покращити себе'
 

      def __str__(self):
          return self.title
 
      @property
      def filename(self):
          return self.image.name.rsplit('/', 1)[-1]
