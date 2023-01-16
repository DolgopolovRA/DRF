from django.db import models
from users.models import User


class Project(models.Model):
    name = models.CharField(max_length=50)
    repo = models.CharField(max_length=256)
    users = models.ManyToManyField(User)

    def __str__(self):
        return self.name


class ToDo(models.Model):
    project = models.OneToOneField(Project, on_delete=models.CASCADE)
    text = models.TextField()
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    is_active = models.BooleanField()
