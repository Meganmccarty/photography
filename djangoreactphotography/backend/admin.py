from django.contrib import admin
from backend.models import Photo, Category, Message

@admin.register(Photo)
class PhotoAdmin(admin.ModelAdmin):
    list_display = ('name', 's3_image_url', 'category', 'subcategory', 'caption', 'date_taken', 'location', 'show', 'photo_order')
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
        'photo_order',
        ('alamy_url', 'fine_art_america_url'),
    ]

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('category_name', 'slug', 'category_image', 'category_image_alt', 'category_order')
    fields = [
        'category_name',
        'slug',
        'category_image',
        'category_image_alt',
        'category_order'
    ]

@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'message')