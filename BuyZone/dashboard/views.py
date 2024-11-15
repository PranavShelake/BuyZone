from django.shortcuts import render
from product.models import Category

def home(request):
    # Prefetch products related to each category
    categories = Category.objects.prefetch_related('products').all()
    return render(request, 'home.html', {'categories': categories})

