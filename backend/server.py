from flask import Flask
import json
app = Flask(__name__)
import dbaccess
from flask_cors import CORS,cross_origin
cors = CORS(app)
from flask import request
import random
import gpxparser
#first start server, then 
#open -a Google\ Chrome --args --disable-web-security --/

allActivities = []

def queryAllActivities(currentSportType, currentAthleteId, currentActivityType):

    return dbaccess.readAllAthleteActivities(currentSportType,currentAthleteId, currentActivityType)


    #commenting the following out and switching to db
    with open('./importedData.json') as f:
        data = json.load(f)
    return data




@app.route('/getAllActivities')
@cross_origin()
def getAllActivities():
    currentSportType = request.args.get('currentSportType')
    currentAthleteId = request.args.get('currentAthleteId')
    currentActivityType = request.args.get('currentActivityType')
    print(currentSportType)
    response = json.dumps(queryAllActivities(currentSportType, currentAthleteId, currentActivityType))
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
    

@app.route('/uploadActivityFile', methods=['POST'])
def upload_file():
    print(request.files.keys())
    uploaded_file = request.files['gpxfile']
    print(uploaded_file)
    uploaded_file.save('./uploadedFiles/' + uploaded_file.filename)
    results = gpxparser.parsefile(uploaded_file.filename)

    finalResult =  {
    'name' : results[0],
    "image": "https://dgalywyr863hv.cloudfront.net/pictures/athletes/43290018/17643007/5/large.jpg",
    'athleteName': 'Ishwar Choudhary',
    'distance': results[1],
    'moving_time': results[3],
    'start_data_local': 'default date return',
    'map': results[4],
    'total_elevation_gain': results[2],
    'type': 'Run'
    }

    return json.dumps([finalResult])


if(__name__ == "__main__"):
    app.run(debug=True)

