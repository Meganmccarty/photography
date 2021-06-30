from django.views.generic import View
from django.http import HttpResponse
from django.contrib.auth import authenticate, login
from django.conf import settings
#from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework import viewsets
from rest_framework import status
from rest_framework import generics

from rest_framework import permissions
from .models import Photo
from .serializers import PhotoSerializer

from rest_framework.permissions import IsAuthenticated

import logging
import os

class PhotoList(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = PhotoSerializer

    def get_queryset(self):
        queryset = Photo.objects.filter(show=True).order_by('order')
        category = self.request.query_params.get("category")
        print(category)
        if category is not None:
            queryset = queryset.filter(category__slug=category)
        return queryset

class FrontendAppView(View):
    """
    Serves the compiled frontend entry point (only works if you have run `yarn
    run build`).
    """
    def get(self, request):
        print (os.path.join(settings.REACT_APP_DIR, 'build', 'index.html'))
        try:
            with open(os.path.join(settings.REACT_APP_DIR, 'build', 'index.html')) as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            logging.exception('Production build of app not found')
            return HttpResponse(
                """
                This URL is only used when you have built the production
                version of the app. Visit http://localhost:3000/ instead, or
                run `yarn run build` to test the production version.
                """,
                status=501,
            )
