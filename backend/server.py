from flask import Flask
import json
app = Flask(__name__)

from flask_cors import CORS

CORS(app, resources={r"*": {"origins": "*"}})


allActivities = []

def queryAllActivities():
    with open('./importedData.json') as f:
        data = json.load(f)
    print(data)
    return data


@app.route('/getAllActivities')
def getAllActivities():
    return json.dumps(queryAllActivities())
    


if(__name__ == "__main__"):
    app.run(debug=True)

