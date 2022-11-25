from enum import IntEnum
import uuid
from django.db import models
import uuid

# Create your models here.

def choices(em):
    return [(e.value, e.name) for e in em]

class Status(IntEnum):
    Criado = 1
    Efetuado = 2
    Entregue = 3

class Produto(models.Model):
    id = models.AutoField(primary_key=True)
    codigo = models.CharField(max_length=40)
    nome = models.CharField(max_length=65)
    ingredientes = models.TextField()
    descricao = models.TextField(null=True, blank=True)
    valor = models.DecimalField(max_digits=12, decimal_places=2)

    def publish(self):
        self.save()

    def __str__(self):
        return str(self.nome)

class MetodosPagamento(models.Model):
    id = models.AutoField(primary_key=True)
    descricao = models.TextField()

    def publish(self):
        self.save()

    def __str__(self):
        return str(self.descricao)

class Pedido(models.Model):
    id = models.AutoField(primary_key=True)
    codigo = models.CharField(default=str(uuid.uuid4()), max_length=40, blank=True)
    pago = models.BooleanField(blank=True)
    nomeDoCliente = models.CharField(max_length=65)
    telefone = models.CharField(max_length=35)
    endereco = models.CharField(max_length=255)
    hora = models.DateTimeField(auto_now=True, blank=True)
    status = models.IntegerField(default=Status.Criado, choices= choices(Status), blank=True)
    observacoes = models.TextField(null=True, blank=True)
    entrega = models.BooleanField(blank=True)
    

    def get_default_MetodosPagamento():
        return MetodosPagamento.objects.get(name="Dinheiro")

    metodoPagamento = models.ForeignKey(
        MetodosPagamento, on_delete=models.RESTRICT, default=1
    )
    
    @property
    def valorTotal(self):
        self.itensList = ItemPedido.objects.filter(pedido = self)
        valorTotal = 0
        for item in self.itensList:
            valorTotal += item.quantidade * item.produto.valor

        return valorTotal

    # def __init__(self, *args, **kwargs) -> None:
    #     self.valorTotal = 0
    #     self.itensList = ItemPedido.objects.filter(pedido = self)
    #     for item in self.itensList:
    #         self.valorTotal += item.quantidade * item.produto.valor
    #     super().__init__(*args, **kwargs)

    def publish(self):
        self.save()

    def __str__(self):
        return str(self.nomeDoCliente) + ' | ' + str(self.hora.strftime("%d/%m/%Y, %H:%M:%S"))

class ItemPedido(models.Model):
    id = models.AutoField(primary_key=True)
    codigo = models.CharField(default=str(uuid.uuid4()), max_length=40, blank=True)
    quantidade = models.DecimalField(default=1, max_digits=8, decimal_places=1)
    observacao = models.TextField(null=True, blank=True)
    produto = models.ForeignKey(Produto, on_delete=models.RESTRICT)
    pedido = models.ForeignKey(Pedido, on_delete=models.RESTRICT)

    def publish(self):
        self.save()

    def __str__(self):
        return str(self.produto) + ' | '+ str(self.pedido)

