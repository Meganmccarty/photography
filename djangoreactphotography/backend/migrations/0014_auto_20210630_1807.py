# Generated by Django 3.1.2 on 2021-06-30 18:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0013_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='category',
            field=models.CharField(choices=[('Animals', 'Animals'), ('Architecture', 'Architecture'), ('Arthropods', 'Arthropods'), ('Autumn', 'Autumn'), ('Butterflies', 'Butterflies'), ('Caterpillars', 'Caterpillars'), ('Landscapes', 'Landscapes'), ('Pets', 'Pets'), ('Plants', 'Plants and Flowers'), ('Spring', 'Spring'), ('Sunsets', 'Sunsets and Skies'), ('Water', 'Water'), ('Weather', 'Weather'), ('Winter', 'Winter')], max_length=100),
        ),
        migrations.AlterField(
            model_name='photo',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.category'),
        ),
    ]