from flask import render_template, jsonify
from my_app import app
import time


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/api/time-now')
def time_now():
    return jsonify({time: time.localtime(time.time())})
