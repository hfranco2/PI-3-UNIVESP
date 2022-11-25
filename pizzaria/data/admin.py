from django.contrib import admin
from .models import MetodosPagamento, Produto, Pedido, ItemPedido

# Register your models here.

admin.site.register(MetodosPagamento)
admin.site.register(Produto)
admin.site.register(Pedido)
admin.site.register(ItemPedido)

