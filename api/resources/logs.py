from flask import Blueprint, jsonify, request
from flask_login import login_required
from peewee import DoesNotExist
from playhouse.shortcuts import model_to_dict

from log import Log
from table import Table

log = Blueprint('logs', __name__, url_prefix='/logs')

@log.route('/<int:table_id>')
@login_required
def get_users_logs(table_id):
    try:

        logs = [model_to_dict(log) for log in Table.get_by_id(table_id).logs]
        return jsonify(logs)
    except DoesNotExist:
        return jsonify(message="Error getting logs."), 500

@log.route('/<int:table_id>', methods=["POST"])
@login_required
def add_log(table_id):
    body = request.get_json()
    log = Log.create(**body, table=Table.get_by_id(table_id).id)
    log_dict = model_to_dict(log)
    return jsonify(log_dict), 201