from django.db import models
from uuid import uuid4
from django import forms
from django.contrib.auth.models import User
# Create your models here.
class Employer(models.Model):
    id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    username = models.CharField(max_length=30, min_length=5)
    created_at = models.DateTimeField(auto_now_add=True)
    email = models.EmailField(max_length=254,**options)
    first_name = models.CharField(max_length = 25)
    last_name = models.CharField(max_length = 25)
    phone = models.BigIntegerField(max_length = 15)
    password = forms.CharField(widget=forms.PasswordInput)

class Employee(Employer):
    user = models.ForeignKey(User, on_delete = models.CASCADE)