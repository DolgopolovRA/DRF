from rest_framework.serializers import HyperlinkedModelSerializer
from rest_framework import serializers
from .models import Project, ToDo
from users.serializers import UserModelSerializer


class ProjectModelSerializer(HyperlinkedModelSerializer):
    users = serializers.StringRelatedField(many=True)

    class Meta:
        model = Project
        fields = "__all__"


class ToDoModelSerializer(HyperlinkedModelSerializer):
  
    class Meta:
        model = ToDo
        fields = "__all__"
