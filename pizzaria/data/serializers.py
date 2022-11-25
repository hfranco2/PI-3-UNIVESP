from rest_framework import serializers
from .models import Pedido, ItemPedido

class PedidoSerializer(serializers.ModelSerializer):
    valorTotal = serializers.DecimalField(max_digits=12, decimal_places=2)
    class Meta:
        model = Pedido
        fields = '__all__'

class ItemPedidoSerializer(serializers.RelatedField):
    class Meta:
        model = ItemPedido
        fields = '__all__'        