from django.urls import path, include
from .views import index
from app import urls as app_urls

urlpatterns = [
    path('', index),
    path('cozinha', index),
    path('delivery', index),
    path('login', index),
    path('api-auth/', include('rest_framework.urls')),
    path('app/', include(app_urls))
]