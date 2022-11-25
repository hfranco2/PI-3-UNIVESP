# Generated by Django 4.1.3 on 2022-11-25 00:25

import data.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0005_rename_statuspedido_pedido_status'),
    ]

    operations = [
        migrations.RenameField(
            model_name='pedido',
            old_name='nomeCliente',
            new_name='nomeDoCliente',
        ),
        migrations.RemoveField(
            model_name='pedido',
            name='horarioPedido',
        ),
        migrations.RemoveField(
            model_name='pedido',
            name='observacao',
        ),
        migrations.AddField(
            model_name='pedido',
            name='hora',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='pedido',
            name='observacoes',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='itempedido',
            name='codigo',
            field=models.CharField(blank=True, default='4557241d-84eb-4d49-8615-b2910901e944', max_length=40),
        ),
        migrations.AlterField(
            model_name='itempedido',
            name='observacao',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='itempedido',
            name='quantidade',
            field=models.DecimalField(decimal_places=1, default=1, max_digits=8),
        ),
        migrations.AlterField(
            model_name='pedido',
            name='codigo',
            field=models.CharField(blank=True, default='eeaa37f6-9faf-4ea9-bc22-fb38f1bd7df7', max_length=40),
        ),
        migrations.AlterField(
            model_name='pedido',
            name='entrega',
            field=models.BooleanField(blank=True),
        ),
        migrations.AlterField(
            model_name='pedido',
            name='metodoPagamento',
            field=models.ForeignKey(default=data.models.Pedido.get_default_MetodosPagamento, on_delete=django.db.models.deletion.RESTRICT, to='data.metodospagamento'),
        ),
        migrations.AlterField(
            model_name='pedido',
            name='pago',
            field=models.BooleanField(blank=True),
        ),
        migrations.AlterField(
            model_name='pedido',
            name='status',
            field=models.IntegerField(blank=True, choices=[(1, 'Criado'), (2, 'Efetuado'), (3, 'Entregue')], default=data.models.Status['Criado']),
        ),
        migrations.AlterField(
            model_name='produto',
            name='codigo',
            field=models.CharField(max_length=40),
        ),
        migrations.AlterField(
            model_name='produto',
            name='descricao',
            field=models.TextField(blank=True, null=True),
        ),
    ]
