from rest_framework import serializers
from .models import Pedido, ItemPedido, MetodosPagamento, Produto


class MetodosPagamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = MetodosPagamento
        fields = '__all__'

class ProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produto
        fields = '__all__'   

class PedidoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Pedido
        fields = '__all__'

    valorTotal = serializers.SerializerMethodField('valorTotal')
    metodoPagamento_obj = serializers.SerializerMethodField('getMetodoPagamento')
    # itens = serializers.SerializerMethodField('getItens')

    def getItens(self, obj):
        itemList = ItemPedido.objects.get(pedido = obj)
        return ItemPedidoSerializer(itemList, many =True).data

    def getMetodoPagamento(self, obj):
        prod = MetodosPagamento.objects.get(id= obj.metodoPagamento.id)
        return MetodosPagamentoSerializer(prod).data

    def valorTotal(self, obj):
        itensList = ItemPedido.objects.filter(pedido = obj)
        valorTotal = 0
        for item in itensList:
            valorTotal += item.quantidade * item.produto.valor

        return valorTotal

class ItemPedidoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = ItemPedido
        fields = '__all__'        

    produto_obj = serializers.SerializerMethodField('getProduto')

    def getProduto(self, obj):
        prod = Produto.objects.get(id= obj.produto.id)
        return ProdutoSerializer(prod).data