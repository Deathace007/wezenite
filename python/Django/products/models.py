from django.db import models

# Create your models here.
class Products(models.Model):
    name = models.CharField(max_length=50)
    price = models.FloatField()
    stock = models.IntegerField()

class Offer(models.Model):
    code =  models.CharField(max_length=20)
    desciption = models.CharField(max_length=100)
    discount = models.FloatField()

