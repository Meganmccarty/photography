# Generated by Django 3.1.2 on 2021-07-05 21:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0024_auto_20210705_2153'),
    ]

    operations = [
        migrations.RenameField(
            model_name='photo',
            old_name='order',
            new_name='photo_order',
        ),
    ]
