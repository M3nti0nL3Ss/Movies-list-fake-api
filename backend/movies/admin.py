from django.contrib import admin
from .models import MovieApi

class MovieApiAdmin(admin.ModelAdmin):
	list_display = ('name',)
	list_filter = ('name',)

admin.site.register(MovieApi,MovieApiAdmin)