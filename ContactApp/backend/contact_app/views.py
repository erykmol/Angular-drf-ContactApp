from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ContactSerializer
from .models import Contact
from ratelimit.decorators import ratelimit
from rest_framework import status
from django.http import HttpResponse, HttpResponseForbidden #, HTTP_201_CREATED, HTTP_400_BAD_REQUEST
from django.utils.decorators import method_decorator
from ratelimit.exceptions import Ratelimited
from rest_framework.response import Response
from ratelimit.mixins import RatelimitMixin


# @method_decorator(, name='perform_create')
class ContactViewSet(RatelimitMixin, viewsets.ModelViewSet):
    ratelimit_key = 'ip'
    ratelimit_rate = '5/10m'
    ratelimit_method = 'POST'
    ratelimit_block = True

    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    
    def perform_create(self, serializer, *args, **kwargs):
        # serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            # counter+=1
            print("adsadsdasdasd")
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
def handler403(request, exception=None):
    if isinstance(exception, Ratelimited):
        return HttpResponse('Sorry you are blocked', status=429)
    return HttpResponseForbidden('Forbidden')