# Generated by Django 3.1.2 on 2021-07-01 19:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0020_auto_20210701_1941'),
    ]

    operations = [
        migrations.AddField(
            model_name='photo',
            name='subcategory',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
