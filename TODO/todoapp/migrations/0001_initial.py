# Generated by Django 4.1.4 on 2023-01-16 12:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('repo', models.URLField()),
                ('users', models.ManyToManyField(to='users.user')),
            ],
        ),
        migrations.CreateModel(
            name='ToDo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField()),
                ('created_at', models.DateTimeField()),
                ('updated_at', models.DateTimeField()),
                ('is_active', models.BooleanField()),
                ('project', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='todoapp.project')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='users.user')),
            ],
        ),
    ]