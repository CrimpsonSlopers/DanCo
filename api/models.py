from django.db import models

# Create your models here.

class Landing(models.Model):
    description = models.CharField(max_length=20, null=False, unique=True)
    cover_image = models.ImageField(default='default.jpg', upload_to='covers')
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.description

class AboutUs(models.Model):
    headline = models.CharField(max_length=20, null=False, unique=True)
    body = models.TextField(max_length=1000, null=False)
    cover_image = models.ImageField(default='default.jpg', upload_to='about_us')

    def __str__(self):
        return self.headline

class Product(models.Model):
    name = models.CharField(max_length=20, null=False, unique=True)
    description = models.TextField(max_length=500, null=False)
    cover_image = models.ImageField(default='default.jpg', upload_to='products')
    url = models.URLField(unique=True)

    def __str__(self):
        return self.name

class UpcomingEvents(models.Model):
    name = models.CharField(max_length=20, null=False, unique=True)
    description = models.TextField(max_length=500, null=False)
    cover_image = models.ImageField(default='default.jpg', upload_to='upcoming_events')
    url = models.URLField(unique=True)

    def __str__(self):
        return self.name
