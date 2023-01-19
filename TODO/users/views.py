from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from .models import User
from .serializers import UserModelSerializer
from rest_framework import mixins
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer


class UserCustomViewSet(GenericViewSet, mixins.UpdateModelMixin, mixins.RetrieveModelMixin, mixins.ListModelMixin):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer


