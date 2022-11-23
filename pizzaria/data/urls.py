from django.conf.urls import url
from django.urls import path, include
from .views import (
    PedidoView, PedidoClienteView, PedidoIdView
)

urlpatterns = [
    path('pedido', PedidoView.as_view()),
    path('pedido/<int:pedido_id>/', PedidoIdView.as_view()),
    path('pedido/<string:nome_cliente>/', PedidoClienteView.as_view()),
]
