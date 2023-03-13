from flask import Flask
import json
app = Flask(__name__)
import dbaccess
from flask_cors import CORS,cross_origin
cors = CORS(app)
from flask import request
#first start server, then 
#open -a Google\ Chrome --args --disable-web-security --/

allActivities = []

def queryAllActivities(currentSportType):

    return dbaccess.readAllAthleteActivities(currentSportType)


    #commenting the following out and switching to db
    with open('./importedData.json') as f:
        data = json.load(f)
    return data




@app.route('/getAllActivities')
@cross_origin()
def getAllActivities():
    currentSportType = request.args.get('currentSportType')
    print(currentSportType)
    response = json.dumps(queryAllActivities(currentSportType))
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

