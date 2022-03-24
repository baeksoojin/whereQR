from django.db import models
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
class User(AbstractUser):
    nickname = models.CharField(max_length=100)
    email = models.EmailField(null = False , unique=True)
    password = models.CharField(max_length=50)
    username = None
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    address = models.CharField(max_length=255)
    PhoneNumber = PhoneNumberField(null = True,blank = False, unique = True)