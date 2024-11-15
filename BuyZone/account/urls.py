from django.contrib import admin
from django.urls import path
from account.views import login_page, register, reset_password, verification,logout_page,verify_email
# from home.views import success  make sure you will cinnect here scuucs path
from django.contrib.auth.decorators import login_required

app_name = 'account'

urlpatterns = [
    path('login_page/', login_page, name='login_page'),
    path('logout_page/', logout_page, name='logout_page'),
    path('register/', register, name='register'),
    path('verify_email/', verify_email, name='verify_email'),
    path('reset_password/<id>/', reset_password, name='reset_password'),
    # path('', login_required(success, login_url='login_page'), name='success'),    
    path('verification/', verification, name='verification'),

]