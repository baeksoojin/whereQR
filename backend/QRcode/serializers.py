from rest_framework import  serializers
from .models import QRcode

class QrSerializer(serializers.ModelSerializer):

    count = serializers.SerializerMethodField()

    class Meta:
        model = QRcode
        fields = ('id','key','count','title')

    def get_count(self, obj):
        
        return obj.count
