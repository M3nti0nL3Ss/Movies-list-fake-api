from .models import MovieApi
from rest_framework import serializers

class MovieApiSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = MovieApi
        fields = ['id', 'name', 'stars', 'genre']
