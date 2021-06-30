from rest_framework import serializers
from backend.models import Photo, Category

# photo serializer

class PhotoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Photo
        fields = [
            'id',
            'image',
            's3_image_url',
            'name',
            'caption',
            'alt_text',
            'date_taken',
            'location',
            'category',
            'show',
            'order',
            'alamy_url',
            'fine_art_america_url',
        ]

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = [
            'id',
            'category_name',
            'slug',
            'category_image',
            'category_image_alt',
            'order'
        ]