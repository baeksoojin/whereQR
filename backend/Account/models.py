from django.db import models
from django.contrib.auth.models import User
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    address = models.URLField(max_length=255)
    PhoneNumber = PhoneNumberField(null = True,blank = False, unique = True)