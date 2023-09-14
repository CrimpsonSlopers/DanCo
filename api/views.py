from rest_framework import generics

from api.models import *
from api.serializers import *


class AboutUsView(generics.ListAPIView):
    queryset = AboutUs.objects.all()
    serializer_class = AboutUsSerializer


class ProductView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class UpcomingEventsView(generics.ListAPIView):
    queryset = UpcomingEvents.objects.all()
    serializer_class = UpcomingEventsSerializer
