import datetime
from peewee import *

from db import DATABASE
from user import User

class Table(Model):
    name = CharField()
    user = ForeignKeyField(User, backref='tables')
    created_at = DateTimeField(default=datetime.datetime.now)

    class Meta:
        database = DATABASE