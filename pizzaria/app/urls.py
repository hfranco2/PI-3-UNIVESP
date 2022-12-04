from django.urls import path, include
from .views import (
    PedidoView, PedidoDetail, ItemPedidoView, ItemPedidoDetail,
    MetodosPagamentoView, MetodosPagamentoDetail, ProdutoView, ProdutoDetail,
    getAllItens, getAllPedidos, getPedidosEntregues, getPedidosCriados, getPedidosEfetuados
)

urlpatterns = [
    path('pedido', PedidoView.as_view()),
    path('pedido/<int:id>', PedidoDetail.as_view()),
    path('pedido/all', getAllPedidos),
    path('pedido/criados', getPedidosCriados),
    path('pedido/efetuados', getPedidosEfetuados),
    path('pedido/entregues', getPedidosEntregues),
    path('item', ItemPedidoView.as_view()),
    path('item/<int:id>', ItemPedidoDetail.as_view()),
    path('item/pedido/<int:id>', getAllItens),
    path('metodopagamento', MetodosPagamentoView.as_view()),
    path('metodopagamento/<int:id>', MetodosPagamentoDetail.as_view()),
    path('produto', ProdutoView.as_view()),
    path('produto/<int:id>', ProdutoDetail.as_view()),
]