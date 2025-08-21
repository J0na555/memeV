from math import e
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Memes
from .serializers import MemeSerializer

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
        return Response(serializer.error, status= status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def vote_memes(request, pk, action):
    try:
        meme= Memes.objects.get(id=pk)
    except meme.DoesNotExist:
        return Response({'error': 'Meme Not Found'}, status= status.HTTP_404_NOT_FOUND)
    
    if action == 'upvotes':
        meme.upvotes += 1
        if meme.upvotes > 0:
            meme.downvotes -= 1
    elif action == 'downvotes':
        meme.downvotes += 1
        if meme.upvotes > 0:
            meme.upvotes -= 1
    else:
        return Response({'error':'Invalid Action'}, status=status.HTTP_400_BAD_REQUEST)

    meme.save()
    serializer = MemeSerializer(meme)
    return Response(serializer.data)
