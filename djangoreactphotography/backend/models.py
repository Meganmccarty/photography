from django.db import models
from django.core.mail import send_mail
from django.http import HttpResponse
from django.conf import settings
from sorl.thumbnail import ImageField
from django.template.defaultfilters import slugify

class Category(models.Model):
    CATEGORY = (
        ('Animals', 'Animals'),
        ('Architecture', 'Architecture'),
        ('Insects and Spiders', 'Insects and Spiders'),
        ('Landscapes and Nature', 'Landscapes and Nature'),
        ('Meteorology', 'Meteorology'),
        ('Plants and Flowers', 'Plants and Flowers'),
        ('Seasons', 'Seasons'),
    )

    category_name = models.CharField(max_length=100, choices=CATEGORY)
    slug = models.CharField(max_length=100, blank=True)
    category_image = models.URLField()
    category_image_alt = models.CharField(max_length=100)
    order = models.IntegerField(null=True, blank=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.category_name)
        super(Category, self).save(*args, **kwargs)

    def __str__(self):
        return self.category_name


class Photo(models.Model):
    name = models.CharField(max_length=1000, null=True, blank=True)
    caption = models.TextField(max_length=2000, null=True, blank=True)
    alt_text = models.TextField(max_length=2000, null=True, blank=True)
    date_taken = models.DateField(null=True, blank=True)
    location = models.CharField(max_length=100, null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='photo_category')
    subcategory = models.CharField(max_length=100, null=True, blank=True)
    show = models.BooleanField(default=True)
    order = models.IntegerField(null=True, blank=True)
    alamy_url = models.URLField(null=True, blank=True)
    fine_art_america_url = models.URLField(null=True, blank=True)

    def generate_filename(self, filename):
        name = "%s/%s" % (self.category.lower(), filename)
        return name

    image = models.ImageField(null=True, blank=True, upload_to=generate_filename)
    s3_image_url = models.URLField(default='', null=True, blank=True)

    def __str__(self):
        return self.name

class Message(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.CharField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        created = self.pk is None
        super().save(*args, **kwargs)
        if created:
            res = send_mail(
                'New message from ' + self.name,
                self.message + '\n\nYou can respond to this message by sending your reply to ' + self.email,
                self.email,
                [settings.EMAIL_HOST_USER]
            )
        return HttpResponse('%s'%res)

    def __str__(self):
        return self.name