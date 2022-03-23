from django.urls import path, include
from . import views

urlpatterns = [
    path('makeQR/',views.QRmakeView.as_view()),
    path('saveQR/',views.QRsaveView.as_view()),
]