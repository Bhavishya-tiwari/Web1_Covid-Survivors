# Generated by Django 3.2.4 on 2021-07-22 11:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_comment_email'),
    ]

    operations = [
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('authorUsername', models.CharField(default='', max_length=50)),
                ('email', models.CharField(max_length=70)),
                ('message', models.TextField()),
                ('Timestamp', models.CharField(max_length=50)),
            ],
        ),
    ]
