# Generated by Django 3.2.4 on 2021-07-13 14:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_auto_20210713_1833'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='timeStamp',
        ),
        migrations.AddField(
            model_name='post',
            name='Timestamp',
            field=models.CharField(default=13, max_length=50),
            preserve_default=False,
        ),
    ]
