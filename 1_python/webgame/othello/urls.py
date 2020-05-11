from django.urls import path
from . import views

app_name = "othello"

urlpatterns = [
    path("", views.GameView.as_view(), name="game"),
]