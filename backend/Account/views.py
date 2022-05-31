from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token

from . import models

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

#  {"email" : "email3@naver.com", "password" : "pw","nickname":"nickname3","address" : "address","phonenumber":"82010111111"}

class SignupView(APIView):
    def post(self, request):
        user = models.User()
        user.email = request.data['email']
        user.nickname=request.data['nickname']
        user.password=request.data['password']
        user.save()

        profile = models.Profile(user=user)
        profile.address = request.data['address']
        profile.PhoneNumber = request.data['phonenumber']
        profile.save()
        return Response({"email": request.data['email']})

class LoginView(APIView):
    def post(self, request):
        print(request.data['email'])
        print(request.data['password'])
        user = models.User.objects.get(email=request.data['email'], password=request.data['password'])
        print(user)

        if user is not None:
            token = Token.objects.create(user=user)
            print(token)
            return Response({
                "message": "login : success",
                "token": token.key})
        else:
            return Response(status=401)


class DataView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, format = None):
        content = {
            'user': str(request.user),  # Account.models.User instance.
            'auth': str(request.auth),  # None
        }
        print(content)
        return Response(content)

class LogoutView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    
    def post(self, request):
        
        token = Token.objects.get(user=request.user)
        token.delete()
        return Response({"Token": "null"})
       
