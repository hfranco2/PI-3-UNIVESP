from enum import IntEnum
import uuid
from django.db import models

# Create your models here.

def choices(em):
    return [(e.value, e.name) for e in em]

class Status(IntEnum):
    Criado = 1
    Efetuado = 2
    Entregue = 3

class Produto(models.Model):
    id = models.AutoField(primary_key=True)
    codigo = models.CharField(max_length=35)
    nome = models.CharField(max_length=65)
    ingredientes = models.TextField()
    descricao = models.TextField()
    valor = models.DecimalField(max_digits=12, decimal_places=2)

    def publish(self):
        self.save()

    def __str__(self):
        return self.nome

class MetodosPagamento(models.Model):
    id = models.AutoField(primary_key=True)
    descricao = models.TextField()

    def publish(self):
        self.save()

    def __str__(self):
        return self.descricao

class Pedido(models.Model):
    id = models.AutoField(primary_key=True)
    codigo = models.CharField(max_length=35)
    pago = models.BooleanField()
    
    metodoPagamento = models.ForeignKey(
        MetodosPagamento, on_delete=models.RESTRICT
    )
    nomeCliente = models.CharField('Nome do Cliente',max_length=65)
    telefone = models.CharField(max_length=35)
    endereco = models.CharField(max_length=255)
    horarioPedido = models.DateTimeField()
    statusPedido = models.IntegerField(choices= choices(Status))
    observacao = models.TextField()
    entrega = models.BooleanField()

    @property
    def valorTotal(self):
        self.itensList = ItemPedido.objects.filter(pedido = self)
        self.valorTotal = 0
        for item in self.itensList:
            self.valorTotal += item.quantidade * item.produto.valor

    def publish(self):
        self.save()

    def __str__(self):
        return self.nomeCliente + '|' + self.horarioPedido.date

class ItemPedido(models.Model):
    id = models.AutoField(primary_key=True)
    codigo = models.CharField(max_length=35)
    quantidade = models.DecimalField(max_digits=8, decimal_places=1)
    observacao = models.TextField()
    produto = models.ForeignKey(Produto, on_delete=models.RESTRICT)
    pedido = models.ForeignKey(Pedido, on_delete=models.RESTRICT)

    def publish(self):
        self.save()

    def __str__(self):
        return self.produto + '|'+ self.pedido

