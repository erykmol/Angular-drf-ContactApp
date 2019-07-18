from .models import Contact
from rest_framework import serializers


class ContactSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Contact
        fields = ('name', 'email', 'subject', 'message')