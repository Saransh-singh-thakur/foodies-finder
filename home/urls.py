from django.contrib import admin
from django.urls import path, include
from foodies_finder import views
from home import views as home_views


urlpatterns = [
  path('',home_views.homepage),
   path('form/', home_views.form_view, name='form'),
 
]
