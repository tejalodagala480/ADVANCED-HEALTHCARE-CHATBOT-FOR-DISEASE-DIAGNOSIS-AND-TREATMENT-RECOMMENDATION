from django.db import models

# Create your models here.
class userModel(models.Model):
    sno = models.AutoField(primary_key = True)
    name = models.CharField(max_length =50)
    email = models.EmailField()
    phone = models.CharField(db_column="Phone Number", null=True, max_length=11)
    address = models.CharField(max_length=100, null = True)
    password = models.CharField(max_length=20)
    image = models.ImageField(upload_to="media/user/")
    class Meta:
        db_table = "User Details"