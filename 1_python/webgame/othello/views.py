from django.shortcuts import render
from django.views import generic

# Create your views here.
class GameView(generic.TemplateView):
    template_name = "othello/game.html"