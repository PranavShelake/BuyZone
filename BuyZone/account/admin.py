from django.contrib import admin
from .models import account, Order

@admin.register(account)
class AccountAdmin(admin.ModelAdmin):
    list_display = ('user', 'phone_number', 'is_admin')
    search_fields = ('user__username', 'user__email', 'phone_number')
    list_filter = ('is_admin',)
    readonly_fields = ('user', 'security_code')

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('user', 'product', 'quantity', 'order_date', 'status')
    search_fields = ('user__username', 'product__title')
    list_filter = ('status', 'order_date')
