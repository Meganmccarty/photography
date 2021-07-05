from django.contrib import admin
from backend.models import Photo, Category, Message

@admin.register(Photo)
class PhotoAdmin(admin.ModelAdmin):
    list_display = ('name', 's3_image_url', 'category', 'caption', 'date_taken', 'location', 'show', 'order')
    fields = [
        's3_image_url',
        'name',
        'caption',
        'alt_text',
        'date_taken',
        'category',
        'subcategory',
        'location',
        'show',
        'order',
        ('alamy_url', 'fine_art_america_url'),
    ]

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('category_name', 'slug', 'category_image', 'category_image_alt', 'order')
    fields = [
        'category_name',
        'slug',
        'category_image',
        'category_image_alt',
        'order'
    ]

@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'message')