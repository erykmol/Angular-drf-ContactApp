from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length = 30, blank=True)
    email = models.EmailField()
    subject = models.CharField(max_length = 50)
    message = models.TextField()
