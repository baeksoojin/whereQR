from distutils.command.upload import upload
from django.db import models

from Account.models import Profile


# Create your models here.
class QRcode(models.Model):
    key = models.TextField(null=False)
    is_null = models.BooleanField(default=True)
    qr_url = models.TextField(max_length=255)
    text = models.TextField(null = True)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, null=True)
    qr_img = models.ImageField(upload_to = "qrcode/images", null = True)
    title = models.CharField(max_length=20,null=False)
