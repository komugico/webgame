from django.shortcuts import render
from django.views import generic
from django.http import response

# Create your views here.
class GameView(generic.TemplateView):
    template_name = "othello/game.html"

    @staticmethod
    def ajax_getLogs(request):
        if request.method == "GET":
            return response.JsonResponse({"success": True})

    @staticmethod
    def ajax_getChats(request):
        if request.method == "GET":
            return response.JsonResponse({"success": True})

    @staticmethod
    def ajax_postLog(request):
        if request.method == "POST":
            return response.JsonResponse({"success": True})

    @staticmethod
    def ajax_postChat(request):
        if request.method == "POST":
            return response.JsonResponse({"success": True})