# Generated by Django 2.2.3 on 2019-07-18 19:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contact_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='name',
            field=models.CharField(blank=True, max_length=30),
        ),
    ]
