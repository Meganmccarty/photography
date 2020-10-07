from django.contrib import admin
from django.urls import path
from rest_framework import routers
from .api import PhotoViewSet

router = routers.DefaultRouter()
router.register('api/photos', PhotoViewSet)

urlpatterns = router.urls