from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import ToDo, Project
from .serializers import ProjectModelSerializer, ToDoModelSerializer
from .filters import ProjectFilter
from rest_framework.pagination import LimitOffsetPagination
from rest_framework import status
from rest_framework.response import Response


class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class ToDoLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    filterset_class = ProjectFilter


"""     pagination_class = ProjectLimitOffsetPagination
 """


class ToDoModelViewSet(ModelViewSet):

    def destroy(self, request, *args, **kwargs):
        obj = self.get_object()
        obj.is_active = False
        obj.save()
        return Response()

    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer
    filterset_fields = ['project']
    """ pagination_class = ToDoLimitOffsetPagination """
