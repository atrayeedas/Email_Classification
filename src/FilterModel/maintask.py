from flask import *
from flask_cors import CORS
import json
import pickle

model = pickle.load(open("./Email_Model.pkl", "rb"))
cv = pickle.load(open("./Vectorizer.pkl", "rb"))

app = Flask(__name__)
CORS(app)


"""@app.route("/")
def start():
    return render_template("index.html")"""


@app.route("/spamcheck", methods=["POST", "GET"])
def spamcheck():
    print(request.get_data().decode())
    dict = json.loads(request.get_data().decode())
    test_val = cv.transform([dict])
    pred = model.predict(test_val)
    result = "Spam!" if pred == 1 else "Not Spam!"
    print(result)

    return {"ServerMessage": result}


if __name__ == "__main__":
    app.run(debug=True, port=5000)
