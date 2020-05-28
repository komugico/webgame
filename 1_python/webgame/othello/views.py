import json

from django.shortcuts import render
from django.views import generic
from django.http import response
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin

from . import models as M
from othello.backend.db_ctrl import DBControll as DBC
from othello.backend.othello_ctrl import OthelloControll as OC

# Create your views here.
class IndexView(generic.TemplateView):
    template_name = "othello/index.html"

    @staticmethod
    def ajax_postCreateRoom(req):
        if req.method == "POST":
            game = DBC.createRoom(req.user)
            res = {
                "success": True,
                "gameId": game.id,
                "message": "ルームを作成しました．"
            }
            return response.JsonResponse(res)

    @staticmethod
    @login_required
    def ajax_postJoinRoom(req, gameId):
        if req.method == "POST":
            game = DBC.joinRoom(req.user, gameId)
            if game:
                res = {
                    "success": True,
                    "gameId": game.id
                }
            else:
                res = {
                    "success": False,
                    "message": "そのルームには参加できません．"
                }
            return response.JsonResponse(res)

    @staticmethod
    @login_required
    def ajax_postWatchRoom(request):
        if request.method == "POST":
            return response.JsonResponse({"success": True})

    @staticmethod
    @login_required
    def ajax_postCancelMatching(request):
        if request.method == "POST":
            return response.JsonResponse({"success": True})

    @staticmethod
    @login_required
    def ajax_getMatchingStatus(request):
        if request.method == "GET":
            return response.JsonResponse({"success": True})

class GameView(LoginRequiredMixin, generic.TemplateView):
    template_name = "othello/game.html"

    @staticmethod
    @login_required
    def ajax_getGameStatus(req, gameId):
        if req.method == "GET":
            game = DBC.getGame(gameId)
            if game:
                res = {
                    "success": True,
                    "player1": {"name": game.player1.user.username},
                    "player2": {"name": game.player2.user.username if game.player2 else ""},
                    "gameId": game.id,
                    "firstPlayer": game.firstPlayer
                }
            else:
                res = {
                    "success": False,
                    "message": "ルームが存在しません"
                }
            return response.JsonResponse(res)

    @staticmethod
    @login_required
    def ajax_getLogs(req, gameId):
        if req.method == "GET":
            game = DBC.getGame(gameId)
            if game:
                res = {
                    "success": True,
                    "logs": DBC.getLogsDict(game)
                }
            else:
                res = {
                    "success": False,
                    "message": "ルームが存在しません"
                }
            return response.JsonResponse(res)

    @staticmethod
    @login_required
    def ajax_getChats(request, gameId):
        if request.method == "GET":
            return response.JsonResponse({"success": True})

    @staticmethod
    @login_required
    def ajax_postLog(request, gameId):
        if request.method == "POST":
            return response.JsonResponse({"success": True})

    @staticmethod
    @login_required
    def ajax_postChat(request, gameId):
        if request.method == "POST":
            return response.JsonResponse({"success": True})
    
    @staticmethod
    @login_required
    def ajax_postPutStone(req, gameId):
        if req.method == "POST":
            print("hello1")
            data = json.loads(req.body)
            game = DBC.getGame(gameId)
            player = DBC.getPlayer(req.user)
            log = DBC.getLatestLog(game)
            turn = (log.turn + 1) if log else 1
            board = OC.getBoard(log)
            if OC.putStone(board, game, player, turn, data["posX"], data["posY"]):
                res = {
                    "success": True
                }
            else:
                res = {
                    "success": False,
                    "message": "そこには置けません"
                }
            return response.JsonResponse(res)

    @staticmethod
    @login_required
    def ajax_postPass(request, gameId):
        if request.method == "POST":
            return response.JsonResponse({"success": True})

    @staticmethod
    @login_required
    def ajax_postSurrender(request, gameId):
        if request.method == "POST":
            return response.JsonResponse({"success": True})