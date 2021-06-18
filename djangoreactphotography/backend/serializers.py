from rest_framework import serializers
from backend.models import Photo

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