import json
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
from mixer.backend.django import mixer
from django.contrib.auth.models import User as Usr
from .views import ProjectModelViewSet, Project
from .models import Project, ToDo, User


class TestProjectrViewSet(TestCase):
    def test_get_list(self):

        factory = APIRequestFactory()
        request = factory.get('/api/projects/')
        view = ProjectModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_get_detail(self):
        admin = Usr.objects.create_superuser(
            'admin', 'admin@admin.com', 'admin123456')
        testuser = User.objects.create(
            email='123@wer.ru', user_name='tesr', first_name='qwe', last_name='qweqweqwe')
        project = Project.objects.create(name='test', repo='qweasddfg')
        project.users.add(testuser)
        client = APIClient()
        client.login(username='admin', password='admin123456')
        response = client.get(f'/api/projects/{project.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)



class TestUsersViewSet(APITestCase):
    def test_get_list(self):
        admin = Usr.objects.create_superuser('admin', 'admin@admin.com', 'admin123456')
        self.client.login(username='admin', password='admin123456')
        response = self.client.get('/api/users/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)