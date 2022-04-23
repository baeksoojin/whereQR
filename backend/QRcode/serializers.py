from rest_framework import  serializers
from .models import QRcode

class QrSerializer(serializers.ModelSerializer):
    class Meta:
        model = QRcode
        fields = '__all__'