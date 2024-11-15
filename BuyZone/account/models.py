from django.db import models
from django.contrib.auth.models import User
from product.models import Product

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    order_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(
        max_length=20,
        choices=[('Pending', 'Pending'), ('Shipped', 'Shipped'), ('Delivered', 'Delivered')],
        default='Pending'
    )

    def __str__(self):
        return f"Order {self.id} by {self.user.username}"

class account(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='account')
    profile_picture = models.ImageField(upload_to='profile_pics/', blank=True, null=True)
    security_code = models.CharField(max_length=10, unique=True)
    phone_number = models.CharField(max_length=15, blank=True)  # Consider adding unique constraint

    is_admin = models.BooleanField(default=False)
    wishlist = models.ManyToManyField(Product, blank=True, related_name='wishlist')
    in_cart = models.ManyToManyField(Product, blank=True, related_name='in_cart')
    order_history = models.ManyToManyField(Order, blank=True, related_name='order_history')  # New field for products in cart

    def __str__(self):
        return self.user.email if self.user.email else str(self.user)

    class Meta:
        verbose_name = 'account'
        verbose_name_plural = 'accounts'
