from django.test import TestCase
from django.urls import reverse
import json

from .models import Pedido, ItemPedido, MetodosPagamento, Produto


# Create your tests here.

class ProdutoModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        Produto.objects.create(nome='Marguerita', valor=40.00)

    def test_str_is_nome(self):
        produto = Produto.objects.get(id=1)
        expected_object_name = produto.nome
        self.assertEquals(expected_object_name, str(produto))

    def test_nome_max_lenth(self):
        produto = Produto.objects.get(id=1)
        max_length = produto._meta.get_field('nome').max_length
        self.assertEquals(max_length, 65)

class MetodosPagamentoModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        MetodosPagamento.objects.create(descricao='A vista')

    def test_str_is_nome(self):
        metodoPagamento = MetodosPagamento.objects.get(id=1)
        expected_object_name = metodoPagamento.descricao
        self.assertEquals(expected_object_name, str(metodoPagamento))

class PedidoModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        Produto.objects.create(nome='Marguerita', valor=40.00)
        Produto.objects.create(nome='Peperoni', valor=50.00)
        metodoPag = MetodosPagamento.objects.create(descricao='A vista')
        Pedido.objects.create(nomeDoCliente='João da Silva', telefone='09986634532', endereco='Rua dos bobos, 70, Centro', metodoPagamento=metodoPag, pago=False, entrega=False)

    def test_str_is_nome(self):
        pedido = Pedido.objects.get(id=1)
        name = pedido.nomeDoCliente
        hora = pedido.hora.strftime("%d/%m/%Y, %H:%M:%S")
        expected_object_name = name + ' | ' + hora
        self.assertEquals(expected_object_name, str(pedido))

    def test_nome_max_lenth(self):
        pedido = Pedido.objects.get(id=1)
        max_length = pedido._meta.get_field('nomeDoCliente').max_length
        self.assertEquals(max_length, 65)

    def test_valor_total(self):
        pedido = Pedido.objects.get(id=1)
        self.assertEquals(pedido.valorTotal, 0) 
        produto1 = Produto.objects.get(id=1)
        item1 = ItemPedido.objects.create(pedido=pedido, produto=produto1, quantidade=1)    
        self.assertEquals(pedido.valorTotal, 40)
        produto2 = Produto.objects.get(id=2)
        item2 = ItemPedido.objects.create(pedido=pedido, produto=produto2, quantidade=1)
        self.assertEquals(pedido.valorTotal, 90)