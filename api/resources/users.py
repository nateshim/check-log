from flask import Blueprint, jsonify, request
from flask_bcrypt import check_password_hash, generate_password_hash
from flask_login import login_required, login_user, logout_user
from peewee import DoesNotExist
from playhouse.shortcuts import model_to_dict

from user import User

user = Blueprint('users', __name__, url_prefix='/auth')

@user.route('/register', methods=["POST"])
def register():
    body = request.get_json()
    body['username'] = body['username'].lower()
    try:
        user = User.get(User.username == body['username'])
        return jsonify(message="Username already taken!")
    except DoesNotExist:
        body['password'] = generate_password_hash(body['password'])

        user = User.create(**body)
        login_user(user)

        user_dict = model_to_dict(user, backrefs=True)
        del user_dict['password']

        return jsonify(user_dict), 201

@user.route('/login', methods=["POST"])
def login():
    body = request.get_json()
    body['username'] = body['username'].lower()
    try:
        user = User.get(User.username == body['username'])
        user_dict = model_to_dict(user, backrefs=True)

        if check_password_hash(user_dict['password'], body['password']):
            login_user(user)
            del user_dict['password']
            return jsonify(user_dict), 200
        else:
            return jsonify(message="Username or password is incorrect."), 401
    except DoesNotExist:
        return jsonify(message="Username or password is incorrect."), 401

@user.route('/logout')
@login_required
def logout():
    logout_user()
    return jsonify(message="Successful logout!"), 200