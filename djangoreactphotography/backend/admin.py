from django.contrib import admin
from backend.models import Photo

@admin.register(Photo)
class PhotoAdmin(admin.ModelAdmin):
    list_display = ('name', 'caption', 'date_taken', 'location', 'show')
    fields = [
        'image',
        'name',
        'caption',
        'alt_text',
        'date_taken',
        'location',
        'show',
        ('alamy_url', 'fine_art_america_url'),
    ]