from pdb import runcall
from rest_framework.views import APIView
from rest_framework.response import Response

from . import models
from Account.models import Profile

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

import qrcode
from datetime import datetime
import re

# Create your views here.
class QRmakeView(APIView):
    def post(self, request):

        qrcode_o = models.QRcode()
       
        qrcode_ = qrcode.QRCode(
            version=1,
            box_size = 10,
        )

        key = str(datetime.now())
        key = re.sub(r'[^0-9]', '', key)
        qrcode_.add_data('qrdataview/'+key)
        qrcode_o.key = key

        img = qrcode_.make_image()
        qrlink = "static/qrcode"+key+".png"
        img.save(qrlink)
        qrcode_o.qr_url = qrlink
        
        qrcode_o.save()

        return Response({"qrcode":"makeQR"})

class QRsaveView(APIView):

    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):

        print(request.data)

        qrcode =  models.QRcode.objects.get(key = request.data['key'])
        
        qrcode.is_null = False
        qrcode.text = request.data['text']

        profile = Profile.objects.get(user = request.user)
        qrcode.profile = profile
        qrcode.save()

        return Response({"message":"save"})

# {"qr_url":"url","text":"text"}
