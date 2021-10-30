from flask import Flask, g
from flask_cors import CORS
from flask_login import LoginManager

from db import DATABASE, initialize
from log import Log
from table import Table
from user import User
from resources.logs import log
from resources.users import user
from resources.tables import table

DEBUG = True
PORT = 8000

login_manager = LoginManager()

app = Flask(__name__)

app.secret_key = 'doctorssayimtheillestcauseimsufferingfromrealness'

login_manager.init_app(app)

@login_manager.user_loader
def load_user(user_id):
    try:
        return User.get_by_id(user_id)
    except:
        return None

@app.before_request
def before_request():
    g.db = DATABASE
    g.db.connect()

@app.after_request
def after_request(response):
    g.db.close()
    return response

@app.route('/')
def index():
    return 'Welcome to Check Log!'

app.register_blueprint(log)
app.register_blueprint(table)
app.register_blueprint(user)

CORS(app, origins=['http://localhost:3000'], supports_credentials=True)

if __name__ == '__main__':
    initialize([Log, Table, User])
    app.run(debug=DEBUG, port=PORT)