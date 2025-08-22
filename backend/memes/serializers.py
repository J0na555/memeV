from dataclasses import field
from rest_framework import serializers
from .models import Memes

class MemeSerializer(serializers.ModelSerializer):
    upvotes = serializers.SerializerMethodField()
    downvotes = serializers.SerializerMethodField()
    
    class Meta:
        model = Memes
        fields = ['id', 'title', 'url', 'created_at', 'upvotes', 'downvotes']
    
    def get_upvotes(self, obj):
        return obj.upvotes()
    
    def get_downvotes(self, obj):
        return obj.downvotes()

