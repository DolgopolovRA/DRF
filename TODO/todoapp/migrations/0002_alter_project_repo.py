# Generated by Django 4.1.4 on 2023-01-16 12:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todoapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='repo',
            field=models.CharField(max_length=256),
        ),
    ]
