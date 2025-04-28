from django.db import models

# Create your models here.


class FormData(models.Model):
    username = models.CharField(max_length=100)
    option1 = models.BooleanField(default=False)
    option2 = models.BooleanField(default=False)
    option3 = models.BooleanField(default=False)
    college_year = models.CharField(max_length=20)
    selected_number = models.CharField(max_length=10)

    def __str__(self):
        return self.username
