from django.urls import path, include
from . import views

urlpatterns = [
    path('makeQR/',views.QRmakeView.as_view()),
    path('saveQR/',views.QRsaveView.as_view()),
    path('data/',views.QRdataView.as_view()),
    path('userqr/',views.UserQrView.as_view()),
]