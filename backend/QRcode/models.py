from django.db import models

# Create your models here.
class QRcode(models.Model):
    is_null = models.BooleanField(default=True)
    qr_url = models.TextField(max_length=255)
    text = models.TextField(null = True)

