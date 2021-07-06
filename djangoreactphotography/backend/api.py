from backend.models import Photo, Category, Message
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import PhotoSerializer, CategorySerializer, MessageSerializer

# Photo viewset
# allows us to create a CRUD api without specifying methods for functionality

class PhotoViewSet(viewsets.ModelViewSet):

    queryset = Photo.objects.filter(show=True).order_by('photo_order')
    permission_classes = [permissions.IsAdminUser]
    serializer_class = PhotoSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    permission_classes = [permissions.IsAdminUser]
    serializer_class = CategorySerializer

class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all().order_by('created_at')
    permission_classes = [permissions.AllowAny]
    serializer_class = MessageSerializer