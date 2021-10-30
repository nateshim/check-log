from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from peewee import DoesNotExist
from playhouse.shortcuts import model_to_dict

from table import Table

table = Blueprint('tables', __name__, url_prefix='/tables')

@table.route('/')
@login_required
def get_users_tables():
    try:

        tables = [model_to_dict(table) for table in current_user.tables]
        return jsonify(tables)
    except DoesNotExist:
        return jsonify(message="Error getting tables."), 500

@table.route('/', methods=["POST"])
@login_required
def add_table(user_id):
    body = request.get_json()
    table = Table.create(**body, user=current_user.user_id)
    table_dict = model_to_dict(table)
    return jsonify(table_dict), 201