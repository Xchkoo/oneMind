from flask import Flask


app = Flask(__name__,
            static_folder='../dist/static',
            template_folder='../dist')

app.config['SECRET_KEY'] = 'hard to guess string'
app.config['JSON_AS_ASCII'] = False


from my_app import views
