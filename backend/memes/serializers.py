from dataclasses import field
from rest_framework import serializers
from .models import Memes

class MemeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Memes
        fields = ['id', 'title', 'url', 'upvotes', 'downvotes']
        read_only_fields = ['upvotes', 'downvotes']

        