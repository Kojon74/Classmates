from flask import Flask

app = Flask(__name__)


@app.route("/")
def index():
    return


@app.route("/post-question")
def postQuestion():
    return "Question"


@app.route("/post-answer")
def postAnswer():
    return "Answer"


if __name__ == "__main__":
    app.run(debug=True)