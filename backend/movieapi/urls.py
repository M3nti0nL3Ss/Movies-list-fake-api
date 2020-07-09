from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from movies.views import MovieApiViewSet
from genre.views import GenreViewSet

router = routers.DefaultRouter()
router.register(r'genre', GenreViewSet)
router.register(r'movieapi', MovieApiViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api/', include('rest_framework.urls', namespace='rest_framework'))
]