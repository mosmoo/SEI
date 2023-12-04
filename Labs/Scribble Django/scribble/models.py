from django.db import models
# Create your models here.

class Post(models.Model):
    author = models.CharField(max_length=100)
    title = models.CharField(max_length=200)
    body = models.TextField()

    def __str__(self):
        return self.title

class Comment(models.Model):
    author = models.CharField(max_length=100)
    body = models.TextField()
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')

    def __str__(self):
        return f"Comment by {self.author} on {self.post.title}"
  
