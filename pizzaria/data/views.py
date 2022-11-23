from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import Pedido, ItemPedido
from .serializers import PedidoSerializer, ItemPedidoSerializer

# Create your views here.

class PedidoView(APIView):
    def post(self, request, *args, **kwargs):
        
        serializer = PedidoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PedidoIdView(APIView):
    def get(self, request, pedido_id, *args, **kwargs):
        try:
            pedido_instance = Pedido.objects.get(id = pedido_id)
        except:
            return Response(
                {"res": "Object with todo id does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = PedidoSerializer(pedido_instance)
        return Response(serializer.data, status=status.HTTP_200_OK)

class PedidoClienteView(APIView):
    def get(self, request, nome_cliente, *args, **kwargs):
        try:
            pedido_instance = Pedido.objects.get(nomeCliente = nome_cliente)
        except:
            return Response(
                {"res": "Object with todo id does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = PedidoSerializer(pedido_instance)
        return Response(serializer.data, status=status.HTTP_200_OK)