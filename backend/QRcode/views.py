from pdb import runcall
from rest_framework.views import APIView
from rest_framework.response import Response

from . import models
from Account.models import Profile

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

import qrcode


# Create your views here.
class QRmakeView(APIView):
    def post(self, request):
       
        qrcode_ = qrcode.QRCode(
            version=1,
            box_size = 10,
        )
        print(type(qrcode_))
        making = 'data없음'
        qrcode_.add_data(making)
        img = qrcode_.make_image()
        qrlink = 'qr1.png'
        img.save(qrlink)

        return Response({"qrcode":"makeQR"})

class QRsaveView(APIView):

    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):

        print(request.data)

        qrcode = models.QRcode(
            is_null = False,
            qr_url = request.data['qr_url'],
            text = request.data['text'])

        qrcode.save()

        profile = Profile.objects.get(user=request.user)
        print(profile)
        profile.qrcode = qrcode
        profile.save()
        
        return Response({"message":"save"})

# {"qr_url":"url","text":"text"}
