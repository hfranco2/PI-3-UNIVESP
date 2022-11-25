from django.urls import path, include
from .views import (
    PedidoView, PedidoIdView, ItemPedidoView, ItemPedidoIdView
)

urlpatterns = [
    path('pedido', PedidoView.as_view()),
    path('pedido/<int:pedido_id>/', PedidoIdView.as_view()),
    path('item', ItemPedidoView.as_view()),
    path('item/<int:pedido_id>/', ItemPedidoIdView.as_view()),
]
