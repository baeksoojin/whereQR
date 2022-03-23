from django.db import models
from django.contrib.auth.models import User
from phonenumber_field.modelfields import PhoneNumberField
from QRcode.models import QRcode

# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    qrcode = models.ForeignKey(QRcode, on_delete=models.SET_NULL, null=True)
    address = models.URLField(max_length=255)
    PhoneNumber = PhoneNumberField(null = True,blank = False, unique = True)