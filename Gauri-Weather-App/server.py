import requests
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/', methods=['POST'])
def get_weather():
    data = request.get_json()
    lat = data['lat']
    lon = data['lon']

    API_KEY = 'c69a6d8f78c845a1a7d150328231307'
    url = f'https://api.weatherapi.com/v1/current.json?key={API_KEY}&q={lat},{lon}'
    response = requests.get(url)

    if response.status_code == 200:
        weather_data = response.json()

        location = weather_data['location']['name']
        temperature = weather_data['current']['temp_c']
        condition = weather_data['current']['condition']['text']

        weather_response = {
            # 'location': location,
            # 'temperature': temperature,
            # 'condition': condition,
            'weather_data': weather_data
        }
        return jsonify(weather_response)
    else:
        return jsonify({'error': 'Failed to fetch weather information'})


if __name__ == '__main__':
    app.run(host='localhost', port=3300)
