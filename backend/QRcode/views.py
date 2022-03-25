from pdb import runcall
import phonenumbers
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

#사용자가 구매한 QR코드 스티커의 제공형태
class QRmakeView(APIView):
    def post(self, request):

        qrcode_o = models.QRcode()
       
        qrcode_ = qrcode.QRCode(
            version=1,
            box_size = 10,
        )

        key = str(datetime.now())
        key = re.sub(r'[^0-9]', '', key)
        qrcode_.add_data(key)
        qrcode_o.key = key

        img = qrcode_.make_image()
        qrlink = "static/qrcode"+key+".png"
        img.save(qrlink)
        qrcode_o.qr_url = qrlink
        
        qrcode_o.save()

        return Response({"qrcode":"makeQR","key":key})

#사용자는 웹앱을 통해 qrcode에 적힌 key코드로 해당 큐얼코드에 로그인후 데이터 등록
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

# {"key":"20220325031516263584","text":"text"}

# 사용자가 qrcode scan -> qrcode에 들어있던 key값을 활용해 qrcode data를 보여줌.
class QRdataView(APIView):

    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):

        key = request.GET['key'] #parameter를 받을 때, request.GET 사용.
        
        qrcode = models.QRcode.objects.get(key = key)

        memo = qrcode.text
        address = qrcode.profile.address
        phonenumber = str(qrcode.profile.PhoneNumber)

        data = {
            "memo" : memo,
            "address" : address,
            "phonenumber" : phonenumber }

        return Response(data)




