from backend.models import Photo, Category
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import PhotoSerializer, CategorySerializer

# Photo viewset
# allows us to create a CRUD api without specifying methods for functionality

class PhotoViewSet(viewsets.ModelViewSet):

    queryset = Photo.objects.filter(show=True).order_by('order')
    permission_classes = [permissions.IsAdminUser]
    serializer_class = PhotoSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    permission_classes = [permissions.IsAdminUser]
    serializer_class = CategorySerializer