import random

from othello import models as M
from othello.backend.othello_ctrl import Board

class DBControll(object):
    @staticmethod
    def choice2index(choices, item):
        for idx, choice in enumerate(choices):
            if item == choice[1]:
                return idx
        return None

    @staticmethod
    def getPlayer(user):
        if len(M.Player.objects.filter(user=user)) == 0:
            player = M.Player(user=user)
            player.save()
        player = M.Player.objects.get(user=user)
        return player
    
    @staticmethod
    def getGame(gameId):
        if len(M.Game.objects.filter(id=gameId)) == 1:
            return M.Game.objects.get(id=gameId)
        else:
            return None

    @staticmethod
    def getLatestLog(game):
        if (len(M.Log.objects.filter(game=game)) > 0):
            return M.Log.objects.filter(game=game).order_by("timestamp").last()
        else:
            return None
    
    @staticmethod
    def getLogs(game):
        if (len(M.Log.objects.filter(game=game)) > 0):
            return M.Log.objects.filter(game=game).order_by("turn")
        else:
            return []

    @staticmethod
    def getLogsDict(game):
        logs = []
        for log in DBControll.getLogs(game):
            logs.append({
                "player_username": log.player.user.username,
                "turn": log.turn,
                "isPass": log.isPass,
                "isSurrender": log.isSurrender,
                "posX": log.posX,
                "posY": log.posY,
                "stones": Board.convert_stone_str_to_2d(log.stones),
                "flips": Board.convert_flip_str_to_2d(log.flips),
                "timestamp": log.timestamp,
            })
        return logs

    @staticmethod
    def createRoom(user):
        player = DBControll.getPlayer(user)
        game = M.Game(
            player1=player,
            player2=None,
            status=DBControll.choice2index(M.Game.CHOICES_STATUS, "waiting"),
            winner=None,
            firstPlayer=None
        )
        game.save()
        return game
    
    @staticmethod
    def joinRoom(user, gameId):
        player = DBControll.getPlayer(user)
        game = DBControll.getGame(gameId)
        if game:
            if game.status == DBControll.choice2index(M.Game.CHOICES_STATUS, "waiting"):
                game.player2 = player
                game.status = DBControll.choice2index(M.Game.CHOICES_STATUS, "ongame")
                game.firstPlayer = random.choice(M.Game.CHOICES_PLAYER)[0]
                game.save()
                return game
        else:
            return None