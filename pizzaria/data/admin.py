from django.contrib import admin
from .models import MetodosPagamento, Produto

# Register your models here.

admin.site.register(MetodosPagamento)
admin.site.register(Produto)
