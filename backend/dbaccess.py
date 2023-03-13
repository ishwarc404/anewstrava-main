#export PATH=$PATH:/usr/local/mysql/bin
#mysql -u root -p            

import json
from peewee import *
#database name is: ishwarlovestrava

db = MySQLDatabase('ishwarlovestrava', host='localhost', port=3306, user='root', password='password')

class Activity (Model):
    athleteId=TextField()
    activityId=TextField()
    activityFieldName=TextField()
    activityFieldValue=TextField()
    class Meta:
        database=db
        db_table='athleteActivities'

def setupAthleteActivityTable():
    db.connect()
    db.create_tables([Activity])


propertiesToBeRead = ['athlete','id', 'name', 'distance', 'moving_time', 'start_data_local', 'map', 'total_elevation_gain', 'type']

def populateDatabase():
    with open('./importedData.json') as f:
        data = json.load(f)

    for eachActivity in data:
        athlete_id = eachActivity['athlete']['id']
        activity_id = eachActivity['id']
        activity_name = eachActivity['name']
        activity_distance = eachActivity['distance']
        activity_moving_time = eachActivity['moving_time']
        activity_start_date_local = eachActivity['start_date_local']
        activity_map = eachActivity['map']['summary_polyline']
        activity_total_elevation_gain = eachActivity['total_elevation_gain']
        activity_type= eachActivity['type']
        writeToDatabase(athlete_id, activity_id , activity_name ,activity_distance ,activity_moving_time ,activity_start_date_local ,activity_map ,activity_total_elevation_gain,activity_type )


propertiesToBeStored = ['name', 'distance', 'moving_time', 'start_data_local', 'map', 'total_elevation_gain', 'type']

def writeToDatabase(athlete_id, activity_id , activity_name ,activity_distance ,activity_moving_time ,activity_start_date_local ,activity_map ,activity_total_elevation_gain, activity_type ):
    propertyValues = [activity_name ,activity_distance ,activity_moving_time ,activity_start_date_local ,activity_map ,activity_total_elevation_gain, activity_type]
    for index in range(0, len(propertiesToBeStored)):
        # record = Activity(athlete_id,activity_id, propertiesToBeStored[index], propertyValues[index])
        q = Activity.insert(athleteId=athlete_id,activityId=activity_id, activityFieldName=propertiesToBeStored[index], activityFieldValue=propertyValues[index])
        q.execute()


def readAllAthleteActivities(currentSportType):
    allActivities = {}
    if(currentSportType != 'All'):
        rows=Activity.select().where(Activity.activityFieldValue == currentSportType)
        actvityRowIds = []
        for row in rows:
            actvityRowIds.append(row.activityId)
        
        for eachId in actvityRowIds:
            rows = Activity.select().where(Activity.activityId == eachId)
            for row in rows:
                if(row.activityId in allActivities.keys()):
                    allActivities[row.activityId][row.activityFieldName] = row.activityFieldValue
                else:
                    allActivities[row.activityId] = {
                        'name' : row.activityFieldValue, #because if first read, can cause issue later is order is messed up
                        'distance': '',
                        'moving_time': '',
                        'start_data_local': '',
                        'map': '',
                        'total_elevation_gain': '',
                        'type': ''
                    }
        
        allActivitiesReturn = []
        for each in allActivities.keys():
            allActivitiesReturn.append(allActivities[each])
    
        return allActivitiesReturn


    else:
        rows=Activity.select()
        for row in rows:
            if(row.activityId in allActivities.keys()):
                allActivities[row.activityId][row.activityFieldName] = row.activityFieldValue
            else:
                allActivities[row.activityId] = {
                    'name' : row.activityFieldValue, #because if first read, can cause issue later is order is messed up
                    'distance': '',
                    'moving_time': '',
                    'start_data_local': '',
                    'map': '',
                    'total_elevation_gain': '',
                    'type': ''
                }
        
        allActivitiesReturn = []
        for each in allActivities.keys():
            allActivitiesReturn.append(allActivities[each])

        return allActivitiesReturn

def readSingleAthleteActivities():
    pass


#####
# setupAthleteActivityTable()
# populateDatabase()
# print(readAllAthleteActivities('Ride'))