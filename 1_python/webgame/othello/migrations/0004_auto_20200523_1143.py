# Generated by Django 3.0.3 on 2020-05-23 02:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('othello', '0003_auto_20200523_1002'),
    ]

    operations = [
        migrations.RenameField(
            model_name='log',
            old_name='board',
            new_name='stones',
        ),
    ]
