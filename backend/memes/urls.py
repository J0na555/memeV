from django.urls import path
from .views import meme_list, vote_memes

urlpatterns = [
    path('api/memes/',meme_list, name='meme-list'),
    path('api/memes/<id>/vote/', vote_memes, name='vote-memes'),
    # path('api/leaderboard'), optional
]