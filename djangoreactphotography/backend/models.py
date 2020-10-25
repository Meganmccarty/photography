from django.db import models
from sorl.thumbnail import ImageField


class Photo(models.Model):

    CATEGORY = (
        ('Animals', 'Animals'),
        ('Arthropods', 'Arthropods'),
        ('Autumn', 'Autumn'),
        ('Architecture', 'Buildings and Architecture'),
        ('Butterflies', 'Butterflies'),
        ('Landscapes', 'Landscapes and Nature'),
        ('Other', 'Other'),
        ('Pets', 'Pets'),
        ('Plants', 'Plants and Flowers'),
        ('Spring', 'Spring'),
        ('Sunsets', 'Sunsets'),
        ('Weather', 'Weather'),
        ('Winter', 'Winter'),
    )

    name = models.CharField(max_length=1000, null=True, blank=True)
    caption = models.TextField(max_length=2000, null=True, blank=True)
    alt_text = models.TextField(max_length=2000, null=True, blank=True)
    date_taken = models.DateField(null=True, blank=True)
    location = models.CharField(max_length=100, null=True, blank=True)
    category = models.CharField(max_length=100, choices=CATEGORY, blank=True, default='')
    show = models.BooleanField(default=True)
    alamy_url = models.URLField(null=True, blank=True)
    fine_art_america_url = models.URLField(null=True, blank=True)

    def generate_filename(self, filename):
        name = "%s/%s" % (self.category.lower(), filename)
        return name
    
    image = models.ImageField(upload_to=generate_filename)

    def __str__(self):
        return self.name