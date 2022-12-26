from django.db import models


class User(models.Model):
    email = models.EmailField(verbose_name='Email', blank=True, unique=True)
    user_name = models.CharField(verbose_name='Логин', max_length=55)
    first_name = models.CharField(verbose_name='Имя', max_length=55)
    last_name = models.CharField(verbose_name='Фамилия', max_length=55)

    class Meta:
        verbose_name = 'пользователь'
        verbose_name_plural = 'пользователи'
