from django.contrib import admin
from django.urls import path
from django.conf.urls import include, url
from rest_framework import routers
from .api import PhotoViewSet
from backend import views

router = routers.DefaultRouter()
#router.register('photos', PhotoViewSet)

urlpatterns = [
    url(r'^api/', include(router.urls)),
    url(r'^api/photos/$', views.PhotoList.as_view()),
    url(r'^api/photos/(?P<category>.+)/$', views.PhotoList.as_view()),
    url(r'^api/categories/$', views.CategoryList.as_view()),
    url(r'^api/messages/$', views.MessageList.as_view())
]