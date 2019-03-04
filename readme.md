# Remove.bg API test

Testing out the (Remove.bg)[https://www.remove.bg/api] API. 

# Installation steps
Follow this to get setup
- Run ```npm i``` to install required modules
- Remove.bg API key. Place this into .env file as ```API_KEY=YOUR_API_KEY```
- Run ```node server```
- Output image is save as ```no-bg.png```

# Conversion options from API
Modify the ```FormData``` to get different endpoints.
- ```image_file``` converts from local file
- ```image_file_b64``` converts from base64 buffer
- ```image_url``` converts from image URL