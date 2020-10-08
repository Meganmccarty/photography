from rest_framework import serializers
from backend.models import Photo

# photo serializer

class PhotoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Photo
        fields = [
            'image',
            'name',
            'caption',
            'alt_text',
            'date_taken',
            'location',
            'show',
            'alamy_url',
            'fine_art_america_url',
        ]