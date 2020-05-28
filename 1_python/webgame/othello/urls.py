from django.urls import path
from . import views

app_name = "othello"

urlpatterns = [
    path("", views.IndexView.as_view(), name="index"),
    path("post/createroom/", views.IndexView.ajax_postCreateRoom, name="post_createroom"),
    path("post/joinroom/<int:gameId>/", views.IndexView.ajax_postJoinRoom, name="post_joinroom"),
    path("post/watchroom/<int:gameId>/", views.IndexView.ajax_postWatchRoom, name="post_watchroom"),
    path("post/cancelmatching/<int:gameId>/", views.IndexView.ajax_postCancelMatching, name="post_cancelmatching"),
    path("get/matchingstatus/<int:gameId>/", views.IndexView.ajax_getMatchingStatus, name="get_matchingstatus"),
    path("game/<int:gameId>/", views.GameView.as_view(), name="game"),
    path("game/<int:gameId>/get/gamestatus/", views.GameView.ajax_getGameStatus, name="game"),
    path("game/<int:gameId>/get/logs/", views.GameView.ajax_getLogs, name="game_get_logs"),
    path("game/<int:gameId>/get/chats/", views.GameView.ajax_getChats, name="game_get_chats"),
    path("game/<int:gameId>/post/log/", views.GameView.ajax_postLog, name="game_post_log"),
    path("game/<int:gameId>/post/chat/", views.GameView.ajax_postChat, name="game_post_chat"),
    path("game/<int:gameId>/post/putstone/", views.GameView.ajax_postPutStone, name="game_post_putstone"),
    path("game/<int:gameId>/post/pass/", views.GameView.ajax_postPass, name="game_post_pass"),
    path("game/<int:gameId>/post/surrender/", views.GameView.ajax_postSurrender, name="game_post_surrender"),
]