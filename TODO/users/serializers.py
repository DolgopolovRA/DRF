from rest_framework.serializers import HyperlinkedModelSerializer
from .models import User


class UserModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('user_name', 'email', 'first_name', 'last_name')

class UserModelSerializerV2(HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = "__all__"
