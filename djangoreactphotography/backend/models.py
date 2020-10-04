from django.db import models
from sorl.thumbnail import ImageField


class Photo(models.Model):

    image = models.ImageField(upload_to="photos/")
    name = models.CharField(max_length=1000, null=True, blank=True)
    caption = models.TextField(max_length=2000, null=True, blank=True)
    date_taken = models.DateField(null=True, blank=True)
    location = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.name