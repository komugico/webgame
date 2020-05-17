from django.urls import path
from . import views

app_name = "othello"

urlpatterns = [
    path("", views.GameView.as_view(), name="game"),
    path("get/logs/", views.GameView.ajax_getLogs, name="get_logs"),
    path("get/chats/", views.GameView.ajax_getChats, name="get_chats"),
    path("post/log/", views.GameView.ajax_postLog, name="post_log"),
    path("post/chat/", views.GameView.ajax_postChat, name="post_chat"),
]