from django.contrib.auth.admin import User
from django.db import models
from django.contrib.auth.models import User

class Memes(models.Model):
    id = models.AutoField(primary_key = True)
    title = models.CharField(max_length = 20)
    url = models.CharField(max_length= 255)
    # upvotes = models.IntegerField(default= 0)
    # downvotes= models.IntegerField(default = 0)
    created_at = models.DateField(auto_now_add= True)

    def upvotes(self):
        return self.votes.filter(vote_type= 'UP').count()
    
    def downvotes(self):
        return self.votes.filter(vote_type= 'DOWN').count()


    # class Meta:
    #     ordering = ['upvotes', 'downvotes', 'title']

    # def __str__(self):
    #     return self.title

class vote(models.Model):
    VOTE_TYPES = [
        ('UP', 'Upvote'),
        ('DOWN', 'Downvote')
    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    meme = models.ForeignKey(Memes, related_name= 'votes' , on_delete= models.CASCADE)

    class Meta:
        unique_together = ('user', 'meme')