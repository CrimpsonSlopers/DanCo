from django.urls import path, re_path
from .views import *

urlpatterns = [
    path("about", AboutUsView.as_view()),
    path("products", ProductView.as_view()),
    path("events", UpcomingEventsView.as_view()),
]
