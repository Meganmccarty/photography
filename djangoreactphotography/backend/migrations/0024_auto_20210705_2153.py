# Generated by Django 3.1.2 on 2021-07-05 21:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0023_auto_20210705_2147'),
    ]

    operations = [
        migrations.RenameField(
            model_name='category',
            old_name='order',
            new_name='category_order',
        ),
    ]
