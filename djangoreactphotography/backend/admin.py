from django.contrib import admin
from backend.models import Photo

@admin.register(Photo)
class PhotoAdmin(admin.ModelAdmin):
    list_display = ('name', 'image', 's3_image_url', 'category', 'caption', 'date_taken', 'location', 'show', 'order')
    fields = [
        'image',
        's3_image_url',
        'name',
        'caption',
        'alt_text',
        'date_taken',
        'category',
        'location',
        'show',
        'order',
        ('alamy_url', 'fine_art_america_url'),
    ]