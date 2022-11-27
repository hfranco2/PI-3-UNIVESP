from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from rest_framework.decorators import api_view
from .models import Pedido, ItemPedido, MetodosPagamento, Produto
from .serializers import PedidoSerializer, ItemPedidoSerializer, MetodosPagamentoSerializer, ProdutoSerializer

# Create your views here.

class PedidoView(APIView):
    def get(self, request, *arrgs, **kwargs):
        try:
            pedido_instance = Pedido.objects.filter(entrega=False)
        except Exception as ex:
            print(ex)
            return Response(
                {"res": "Nao existem pedidos abertos"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = PedidoSerializer(pedido_instance, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


    def post(self, request, *args, **kwargs):
        
        serializer = PedidoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class PedidoDetail(APIView):
    def get(self, request, id, *args, **kwargs):
        try:
            pedido_instance = Pedido.objects.filter(id = id).first()
        except:
            return Response(
                {"res": "Object with todo id does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = PedidoSerializer(pedido_instance)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, id, *args, **kwargs):
        try:
            pedido_instance = Pedido.objects.filter(id = id).first()
        except:
            return Response(
                {"res": "Object with this id does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = PedidoSerializer(instance=pedido_instance, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id, *args, **kwargs):
        '''
        Deletes the todo item with given todo_id if exists
        '''
        try:
            pedido_instance = Pedido.objects.filter(id = id).first()
        except:
            return Response(
                {"res": "Object with this id does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )

        pedido_instance.delete()
        return Response(
            {"res": "Object deleted!"},
            status=status.HTTP_200_OK
        )

class ItemPedidoView(APIView):

    def post(self, request, *args, **kwargs):
        
        serializer = ItemPedidoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ItemPedidoDetail(APIView):

    def get(self, request, id, *args, **kwargs):
        try:
            pedido_instance = ItemPedido.objects.filter(id=id)
        except:
            return Response(
                {"res": "Object with todo id does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = ItemPedidoSerializer(pedido_instance, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, id, *args, **kwargs):
        try:
            pedido_instance = ItemPedido.objects.filter(id=id)
        except:
            return Response(
                {"res": "Object with this id does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = ItemPedidoSerializer(instance=pedido_instance, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)     


    def delete(self, request, id, *args, **kwargs):
        '''
        Deletes the todo item with given todo_id if exists
        '''
        try:
            pedido_instance = ItemPedido.objects.filter(id=id)
        except:
            return Response(
                {"res": "Object with this id does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )

        pedido_instance.delete()
        return Response(
            {"res": "Object deleted!"},
            status=status.HTTP_200_OK
        )

@api_view(('GET',))
def getAllItens(request, id, *args, **kwargs):
    try:
        pedido_instance = Pedido.objects.get(id=id)
        itens = ItemPedido.objects.filter(pedido = pedido_instance)
    except:
        return Response(
            {"res": "Object with todo id does not exists"},
            status=status.HTTP_400_BAD_REQUEST
        )

    serializer = ItemPedidoSerializer(itens, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(('GET',))
def getAllPedidos(request, *args, **kwargs):
    try:
        pedido_instance = Pedido.objects.all()
    except:
        return Response(
            {"res": "Object with todo id does not exists"},
            status=status.HTTP_400_BAD_REQUEST
        )

    serializer = PedidoSerializer(pedido_instance, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(('GET',))
def getPedidosEntregues(request, *args, **kwargs):
    try:
        pedido_instance = Pedido.objects.filter(entrega = True)
    except:
        return Response(
            {"res": "Object with todo id does not exists"},
            status=status.HTTP_400_BAD_REQUEST
        )

    serializer = PedidoSerializer(pedido_instance, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)    
class MetodosPagamentoView(APIView):
    def get(self, request, *arrgs, **kwargs):
        try:
            instance = MetodosPagamento.objects.all()
        except Exception as ex:
            print(ex)
            return Response(
                {"res": "Nao existem Metodos de Pagamento"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = MetodosPagamentoSerializer(instance, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


    def post(self, request, *args, **kwargs):
        
        serializer = MetodosPagamentoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class MetodosPagamentoDetail(APIView):
    def get(self, request, id, *args, **kwargs):
        try:
            instance = MetodosPagamento.objects.filter(id = id).first()
        except:
            return Response(
                {"res": "Object with todo id does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = MetodosPagamentoSerializer(instance)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, id, *args, **kwargs):
        try:
            instance = MetodosPagamento.objects.filter(id = id).first()
        except:
            return Response(
                {"res": "Object with this id does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = MetodosPagamentoSerializer(instance=instance, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id, *args, **kwargs):
        '''
        Deletes the todo item with given todo_id if exists
        '''
        try:
            instance = MetodosPagamento.objects.filter(id = id).first()
        except:
            return Response(
                {"res": "Object with this id does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )

        instance.delete()
        return Response(
            {"res": "Object deleted!"},
            status=status.HTTP_200_OK
        )

class ProdutoView(APIView):
    def get(self, request, *arrgs, **kwargs):
        try:
            instance = Produto.objects.all()
        except Exception as ex:
            print(ex)
            return Response(
                {"res": "Nao existem Produtos"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = ProdutoSerializer(instance, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


    def post(self, request, *args, **kwargs):
        
        serializer = ProdutoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProdutoDetail(APIView):
    def get(self, request, id, *args, **kwargs):
        try:
            instance = Produto.objects.filter(id = id).first()
        except:
            return Response(
                {"res": "Object with todo id does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = ProdutoSerializer(instance)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, id, *args, **kwargs):
        try:
            instance = Produto.objects.filter(id = id).first()
        except:
            return Response(
                {"res": "Object with this id does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = ProdutoSerializer(instance=instance, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id, *args, **kwargs):
        '''
        Deletes the todo item with given todo_id if exists
        '''
        try:
            instance = Produto.objects.filter(id = id).first()
        except:
            return Response(
                {"res": "Object with this id does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )

        instance.delete()
        return Response(
            {"res": "Object deleted!"},
            status=status.HTTP_200_OK
        )        