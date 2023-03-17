from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/play_note")
def play_note():
    note = request.args.get("note")
    # Add code to play the note here
    return "Playing note: " + note

if __name__ == "__main__":
    app.run(debug=True)
