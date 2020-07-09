from rest_framework import viewsets
from .models import MovieApi
from .serializers import MovieApiSerializer
from rest_framework import permissions

class MovieApiViewSet(viewsets.ModelViewSet):
	queryset = MovieApi.objects.all()
	serializer_class = MovieApiSerializer
	permission_classes = (permissions.AllowAny, )