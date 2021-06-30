from django.db import models
from sorl.thumbnail import ImageField
from django.template.defaultfilters import slugify

class Category(models.Model):
    CATEGORY = (
        ('Animals', 'Animals'),
        ('Architecture', 'Architecture'),
        ('Arthropods', 'Arthropods'),
        ('Autumn', 'Autumn'),
        ('Butterflies', 'Butterflies'),
        ('Caterpillars', 'Caterpillars'),
        ('Landscapes', 'Landscapes'),
        ('Pets', 'Pets'),
        ('Plants and Flowers', 'Plants and Flowers'),
        ('Spring', 'Spring'),
        ('Sunsets and Skies', 'Sunsets and Skies'),
        ('Water', 'Water'),
        ('Weather', 'Weather'),
        ('Winter', 'Winter'),
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