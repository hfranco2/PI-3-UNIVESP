# Generated by Django 4.1.3 on 2022-11-25 01:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0012_alter_itempedido_codigo_alter_pedido_codigo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='itempedido',
            name='codigo',
            field=models.CharField(blank=True, default='ddc6ea9a-1361-4e4e-83c0-3d03888d5d71', max_length=40),
        ),
        migrations.AlterField(
            model_name='pedido',
            name='codigo',
            field=models.CharField(blank=True, default='9d96d7f9-4048-44c7-a5e7-83c9bff469d2', max_length=40),
        ),
    ]