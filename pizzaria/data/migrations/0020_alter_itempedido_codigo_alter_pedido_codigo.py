# Generated by Django 4.1.3 on 2022-11-27 00:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0019_alter_itempedido_codigo_alter_pedido_codigo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='itempedido',
            name='codigo',
            field=models.CharField(blank=True, default='04137eaa-a8ba-41ed-9792-f9a78b66665c', max_length=40),
        ),
        migrations.AlterField(
            model_name='pedido',
            name='codigo',
            field=models.CharField(blank=True, default='10560c69-f79a-4067-ba26-4599498c5795', max_length=40),
        ),
    ]
