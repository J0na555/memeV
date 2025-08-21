from django.db import models

class Memes(models.Model):
    id = models.AutoField(primary_key = True)
    title = models.CharField(max_length = 20)
    url = models.CharField(max_length= 255)
    upvotes = models.IntegerField(default= 0)
    downvotes= models.IntegerField(default = 0)
    created_at = models.DateField(auto_now_add= True)

    class Meta:
        ordering = ['upvotes', 'downvotes', 'title']

    def __str__(self):
        return self.title
