from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Player(models.Model):
    """ othello_player：プレイヤー情報
    
        user (django.contrib.auth.models.User): ユーザー情報
        rating (models.IntegerField): レート（default=0）
    """
    user = models.ForeignKey(User, related_name="player_user", on_delete=models.CASCADE)
    rating = models.IntegerField(default = 0)

class Game(models.Model):
    """ othello_game：ゲーム情報
    
        player1 (othello.models.Player): プレイヤー１の情報
        player2 (othello.models.Player): プレイヤー２の情報
        status (models.IntegerFiled): 対局状況（"0=waiting", "1=ongame", "2=finished", "3=cancelled", or nulll）
        winner (models.IntegerField): 勝者（"0=player1", "1=player2", or null）
        firstPlayer (models.IntegerField): 先攻プレイヤー（"0=player1", "1=player2", or null）
        lastUpdated (models.DateTimeField): 最終更新時のタイムスタンプ（auto_now_add=True）
    """
    CHOICES_STATUS = ((0, "waiting"), (1, "ongame"), (2, "finished"), (3, "cancelled"))
    CHOICES_PLAYER = ((0, "player1"), (1, "player2"))

    player1 = models.ForeignKey("Player", related_name="game_player1", on_delete=models.SET_NULL, null=True)
    player2 = models.ForeignKey("Player", related_name="game_player2", on_delete=models.SET_NULL, null=True)
    status = models.IntegerField(choices=CHOICES_STATUS, null=True)
    winner = models.IntegerField(choices=CHOICES_PLAYER, null=True)
    firstPlayer = models.IntegerField(choices=CHOICES_PLAYER, null=True)
    lastUpdated = models.DateTimeField(auto_now_add = True)

class Log(models.Model):
    """ othello_log：棋譜

        game (othello.models.game): ゲーム情報
        player (othello.models.Player): 手番を行ったプレイヤー
        turn (models.IntegerField): 何手目か
        isPass (models.BooleanField): パスかどうか
        isSurrender (models.BooleanField): 降参かどうか
        posX (models.IntegerFiled): X座標（0~7 or null）
        posY (models.IntegerFiled): Y座標（0~7 or null）
        stones (models.CharField): 操作後の盤面情報（"E=なし", "W=白", or "b=黒"）
        flips (models.CharField): 石をひっくり返す順序("0=返さない", or "1~6: 返す順番")
        timestamp (models.DateTimeField): 棋譜追加時のタイムスタンプ（auto_now=True）
    """
    
    game = models.ForeignKey("Game", related_name="log_game", on_delete=models.CASCADE)
    player = models.ForeignKey("Player", related_name="log_player", on_delete=models.SET_NULL, null=True)
    turn = models.IntegerField(null=False)
    isPass = models.BooleanField(null=False)
    isSurrender = models.BooleanField(null=False)
    posX = models.IntegerField()
    posY = models.IntegerField()
    stones = models.CharField(max_length=64)
    flips = models.CharField(max_length=64)
    timestamp = models.DateTimeField(auto_now=True)

class Chat(models.Model):
    """ othello_chat：チャット
    
        game (othello.models.Game): ゲーム情報
        speaker (django.contrib.auth.models.User): 発言者のユーザー情報
        message (models.CharField): 発言内容（max_length=256）
        timestamp (models.DateTimeField): 発言時のタイムスタンプ（auto_now=True）
    """
    game = models.ForeignKey("Game", related_name="chat_game", on_delete=models.CASCADE)
    speaker = models.ForeignKey(User, related_name="chat_speaker", on_delete=models.SET_NULL, null=True)
    message = models.CharField(max_length=256)
    timestamp = models.DateTimeField(auto_now=True)