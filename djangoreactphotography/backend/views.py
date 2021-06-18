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
    queryset = Photo.objects.filter(show=True).order_by('order')
    serializer_class = PhotoSerializer

"""
@api_view(['GET'])
def api_login(self, request):
    if request.method == 'GET':
        print(request.user)
        if request.user.is_authenticated():
             content = {'message': 'Authenticated'}
             return Response(content, status=200)
        else:
             content = {'message': 'Unauthenticated'}
             return Response(content, status=401)
"""

"""
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def api_login(request):
    username = request.data['username']
    password = request.data['password']
    user = authenticate(request, username='user', password='T3$7!ng123!')
    if user is not None:
        login(request, user)
        return Response(status=status.HTTP_200_OK)
    return Response(status=status.HTTP_400_BAD_REQUEST)

"""

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
