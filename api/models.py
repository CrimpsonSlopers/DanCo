from django.db import models

# Create your models here.


class Landing(models.Model):
    description = models.CharField(max_length=50, null=False, unique=True)
    cover_image = models.ImageField(default="default.jpg", upload_to="covers")
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.description


class AboutUs(models.Model):
    headline = models.CharField(max_length=50, null=False, unique=True)
    body1 = models.TextField(max_length=1000, null=False)
    body2 = models.TextField(max_length=1000, null=False)

    def __str__(self):
        return self.headline


class Product(models.Model):
    name = models.CharField(max_length=50, null=False, unique=True)
    description = models.TextField(max_length=500, null=False)
    cover_image = models.ImageField(default="default.jpg", upload_to="products")
    url = models.URLField(unique=True)

    def __str__(self):
        return self.name


class UpcomingEvents(models.Model):
    name = models.CharField(max_length=50, null=False, unique=True)
    location = models.CharField(max_length=100, null=True)
    date = models.CharField(max_length=100, null=True)
    cover_image = models.ImageField(default="default.jpg", upload_to="upcoming_events")
    url = models.URLField(unique=True)

    def __str__(self):
        return self.name
