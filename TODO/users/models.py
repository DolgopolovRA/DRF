from django.db import models


class User(models.Model):
    email = models.EmailField(verbose_name='Email', blank=True, unique=True)
    user_name = models.CharField(verbose_name='Логин', max_length=55)
    first_name = models.CharField(verbose_name='Имя', max_length=55)
    last_name = models.CharField(verbose_name='Фамилия', max_length=55)
    is_superuser = models.BooleanField(verbose_name='Администратор', default=False)
    is_staff = models.BooleanField(verbose_name='Персрнал', default=False)

    class Meta:
        verbose_name = 'пользователь'
        verbose_name_plural = 'пользователи'

    def __str__(self):
        return self.user_name
