from django.db import models
from genre.models import Genre

class MovieApi(models.Model):
	name = models.CharField(max_length=250)
	stars = models.IntegerField()
	genre = models.ForeignKey(Genre,related_name='genre', on_delete=models.CASCADE)
	def __str__(self):
		return self.name