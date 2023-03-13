from flask import Flask
import json
app = Flask(__name__)

from flask_cors import CORS,cross_origin
cors = CORS(app)

allActivities = []

def queryAllActivities():
    with open('./importedData.json') as f:
        data = json.load(f)
    print(data)
    return data


@app.route('/getAllActivities')
@cross_origin()
def getAllActivities():
    response = json.dumps(queryAllActivities())
    return response
    


@app.route('/getSummitCounts')
@cross_origin()
def getSummutCounts():
    summitHistory = {
        'green': [False,True,False,False,True,False,True,True,True,False,True,False,True,False,False,False,True,True,False,True,False,True,False,False,False,False,True,False],
        'sobo':[False,False,False,False,False,False,True,False,True,False,True,False,True,False,False,True,False,True,False,False,False,True,False,True,False,False,False,True],
        'bear':[False,False,False,False,True,False,False,True,False,False,True,False,False,False,False,True,True,True,False,False,False,False,False,False,False,False,True,False],
    }

    response = json.dumps(summitHistory)
    return response
    

if(__name__ == "__main__"):
    app.run(debug=True)

