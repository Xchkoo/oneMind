from my_app import app, config


app.run(host=config.HOST, port=config.PORT, debug=True)
