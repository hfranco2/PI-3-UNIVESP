# Generated by Django 4.1.3 on 2022-11-25 00:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0007_alter_itempedido_codigo_alter_pedido_codigo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='itempedido',
            name='codigo',
            field=models.CharField(blank=True, default='6d0707fd-4343-4042-b94e-5f434650fc99', max_length=40),
        ),
        migrations.AlterField(
            model_name='pedido',
            name='codigo',
            field=models.CharField(blank=True, default='612035a8-5199-48bd-b9f2-29e4b316b7d0', max_length=40),
        ),
    ]
