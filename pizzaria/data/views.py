from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import Pedido, ItemPedido
from .serializers import PedidoSerializer, ItemPedidoSerializer

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



class PedidoIdView(APIView):
    def get(self, request, pedido_id, *args, **kwargs):
        try:
            pedido_instance = Pedido.objects.filter(id = pedido_id).first()
        except:
            return Response(
                {"res": "Object with todo id does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = PedidoSerializer(pedido_instance)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pedido_id, *args, **kwargs):
        try:
            pedido_instance = Pedido.objects.filter(id = pedido_id).first()
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

    def delete(self, request, pedido_id, *args, **kwargs):
        '''
        Deletes the todo item with given todo_id if exists
        '''
        try:
            pedido_instance = Pedido.objects.filter(id = pedido_id).first()
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



class ItemPedidoIdView(APIView):

    def get(self, request, pedido_id, *args, **kwargs):
        try:
            pedido_instance = ItemPedido.objects.filter(id=pedido_id)
        except:
            return Response(
                {"res": "Object with todo id does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = ItemPedidoSerializer(pedido_instance, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pedido_id, *args, **kwargs):
        try:
            pedido_instance = ItemPedido.objects.filter(id=pedido_id)
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


    def delete(self, request, pedido_id, *args, **kwargs):
        '''
        Deletes the todo item with given todo_id if exists
        '''
        try:
            pedido_instance = ItemPedido.objects.filter(id=pedido_id)
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