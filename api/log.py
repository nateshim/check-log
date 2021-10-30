import datetime
from peewee import *

from db import DATABASE
from table import Table

class Log(Model):
    date = DateTimeField()
    location = CharField()
    party = CharField()
    subject = CharField()
    details = TextField()
    table = ForeignKeyField(Table, backref='logs')
    created_at = DateTimeField(default=datetime.datetime.now)

    class Meta:
        database = DATABASE