from math import e
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Memes, Vote
from .serializers import MemeSerializer
from django.contrib.auth.models import User

@api_view(['GET', 'POST'])
def meme_list(request):
    if request.method == 'GET':
        memes = Memes.objects.all()
        serializer = MemeSerializer(memes, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = MemeSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def vote_memes(request, pk, action):
    try:
        meme = Memes.objects.get(id=pk)
    except Memes.DoesNotExist:
        return Response({'error': 'Meme Not Found'}, status= status.HTTP_404_NOT_FOUND)
    
    # For demo purposes, use a default user (in production, use authentication)
    user, created = User.objects.get_or_create(username='default_user')
    
    if action == 'upvote':
        vote_type = 'UP'
    elif action == 'downvote':
        vote_type = 'DOWN'
    else:
        return Response({'error':'Invalid Action'}, status=status.HTTP_400_BAD_REQUEST)

    # Create or update vote
    vote, created = Vote.objects.get_or_create(
        user=user,
        meme=meme,
        defaults={'vote_type': vote_type}
    )
    
    if not created:
        vote.vote_type = vote_type
        vote.save()

    serializer = MemeSerializer(meme)
    return Response(serializer.data)
