from rest_framework import serializers

from .models import AboutUs, Product, UpcomingEvents


class AboutUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutUs
        fields = "__all__"


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"


class UpcomingEventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UpcomingEvents
        fields = "__all__"
