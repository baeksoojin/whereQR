from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token

from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from . import models

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

# {"name" : "nana", "password" : "pw"}

class SignupView(APIView):
    def post(self, request):
        user = User.objects.create_user(
            username=request.data['name'],
            password=request.data['password'])
        profile = models.Profile(user=user)

        user.save()
        profile.save()
        return Response({"name": request.data['name']})

class LoginView(APIView):
    def post(self, request):
        user = authenticate(username=request.data['name'], password=request.data['password'])
        if user is not None:
            token = Token.objects.create(user=user)
            return Response({
                "message": "login : success",
                "Token": token.key})
        else:
            return Response(status=401)


class UserView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, format = None):
        content = {
            'user': str(request.user),  # `django.contrib.auth.User` instance.
            'auth': str(request.auth),  # None
        }
        print(content)
        token = Token.objects.get(user=request.user)
        return Response({"token":token.key})

class LogoutView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    
    def post(self, request):
        
        token = Token.objects.get(user=request.user)
        token.delete()
        return Response({"Token": "null"})
       
