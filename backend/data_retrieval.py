import requests
import json
import time


def refresh():
    #authcode
    #we use the refresh url to get the new access token
    refreshURL = 'https://www.strava.com/oauth/token?client_id=89361&client_secret=4a5ec7c37ec0e2381f2bb695d931242cff11edbb&refresh_token=c5246811c4f2f0c60ff41831355892a639a6b4c0&grant_type=refresh_token'
    response = requests.post(refreshURL)
    response = json.loads(response.text)
    accessToken = response['access_token']
    return accessToken





def getActivities(accessToken):
    seconds = time.time()
    past30ActivitiesURL = "https://www.strava.com/api/v3/athlete/activities?before={}&page=2&per_page=30".format(seconds)
    headers = {
    'Authorization': "Bearer {}".format(accessToken),
    }

    activitiesResponse = requests.get(past30ActivitiesURL,headers=headers)
    return json.loads(activitiesResponse.text)



activitiesResponse = getActivities(refresh())
print(activitiesResponse)

