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
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    codigo = models.CharField(max_length=35)
    nome = models.CharField(max_length=65)
    ingredientes = models.TextField()
    descricao = models.TextField()
    valor = models.DecimalField(max_digits=12, decimal_places=2)

class MetodosPagamento(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    descricao = models.TextField()

class Pedido(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    codigo = models.CharField(max_length=35)
    pago = models.BooleanField()
    valorTotal = models.DecimalField(max_digits=12, decimal_places=2)
    metodoPagamento = models.ForeignKey(
        MetodosPagamento, on_delete=models.DO_NOTHING
    )
    nomeCliente = models.CharField(max_length=65)
    telefone = models.CharField(max_length=35)
    endereco = models.CharField(max_length=255)
    horarioPedido = models.DateTimeField()
    status = models.IntegerField(max_length=35, choices= choices(Status))
    observacao = models.TextField()
    entrega = models.BooleanField()

class ItemPedido(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    codigo = models.CharField(max_length=35)
    quantidade = models.DecimalField(max_digits=8, decimal_places=1)
    observacao = models.TextField()
    produto = models.ForeignKey(Produto, on_delete=models.DO_NOTHING)
    pedido = models.ForeignKey(Pedido, on_delete=models.DO_NOTHING)

