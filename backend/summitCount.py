import requests
import json
import segmentDetailConstant


def segmentCount(segmentID,accessToken):
    segmentURL = "https://www.strava.com/api/v3/segment_efforts?segment_id={}".format(segmentID)
    headers = {
        'Authorization': "Bearer {}".format(accessToken),
    }

    segmentsResponse = requests.get(segmentURL,headers=headers)
    segmentsResponse = json.loads(segmentsResponse.text)
    return len(segmentsResponse)


def authenticate():
    #authcode
    #we use the refresh url to get the new access token
    refreshURL = 'https://www.strava.com/oauth/token?client_id=89361&client_secret=4a5ec7c37ec0e2381f2bb695d931242cff11edbb&refresh_token=c7d75b54c367cd8b11c68aa490c923c40ec633a4&code=a4a7ba98365b6201f13dbe3a6772f821458fc0c7&grant_type=authorization_code'

    # refreshURL = 'https://www.strava.com/oauth/token?client_id=89361&client_secret=4a5ec7c37ec0e2381f2bb695d931242cff11edbb&code=77aa7fcf85eb8a5b52ba625de2e83326729c9ed3&grant_type=authorization_code'
    response = requests.post(refreshURL)
    response = json.loads(response.text)
    print(response)
    accessToken = response['access_token']
    return accessToken



urlathlete = "https://www.strava.com/api/v3/athlete/activities"

# token = authenticate()
# print(token)



def refresh():
    #authcode
    #we use the refresh url to get the new access token
    refreshURL = 'https://www.strava.com/oauth/token?client_id=89361&client_secret=4a5ec7c37ec0e2381f2bb695d931242cff11edbb&refresh_token=c5246811c4f2f0c60ff41831355892a639a6b4c0&grant_type=refresh_token'

    # refreshURL = 'https://www.strava.com/oauth/token?client_id=89361&client_secret=4a5ec7c37ec0e2381f2bb695d931242cff11edbb&code=77aa7fcf85eb8a5b52ba625de2e83326729c9ed3&grant_type=authorization_code'
    response = requests.post(refreshURL)
    response = json.loads(response.text)
    print(response)
    accessToken = response['access_token']
    return accessToken



urlathlete = "https://www.strava.com/api/v3/athlete/activities/8629978597"

token = refresh()
print(token)


headers = {
    'Authorization': "Bearer {}".format(token),
}

segmentsResponse = requests.get(urlathlete,headers=headers)
print(json.loads(segmentsResponse.text))

# refreshURL = 'https://www.strava.com/oauth/token?client_id=89361&client_secret=4a5ec7c37ec0e2381f2bb695d931242cff11edbb&refresh_token=c7d75b54c367cd8b11c68aa490c923c40ec633a4&grant_type=refresh_token'

# # refreshURL = 'https://www.strava.com/oauth/token?client_id=89361&client_secret=4a5ec7c37ec0e2381f2bb695d931242cff11edbb&code=77aa7fcf85eb8a5b52ba625de2e83326729c9ed3&grant_type=authorization_code'
# response = requests.post(refreshURL)
# response = json.loads(response.text)
# print(response)
# accessToken = response['access_token']
# print("SECOND")
# urlathlete = "https://www.strava.com/api/v3/athlete/activities?before=1676602098241&page=1&per_page=200"
# headers = {
#     'Authorization': "Bearer {}".format("6b53a55888a3e7151c53ea6ee078c97df47bb0e7"),
# }

# segmentsResponse = requests.get(urlathlete,headers=headers)
# print(json.loads(segmentsResponse.text))