# Content Search Engine For Cloud Storage
Built on Node v16.0 

## Docker Setup
Use docker compose for quick testing 

Add your dropbox API token in **docker-compose.yml** file and run:
```
docker-compose up
```

## Setup
ubuntu specific dependencies
```
sudo apt install poppler-utils tesseract-ocr
```
install dependencies
```
npm install
```
set environment
```
ELASTIC_NODE="<elastic_node_url>"
DROPBOX_TOKEN="<dropbox_accesstoken"
REDIS_URL="<redis_server_url>
```
start application 
```
npm start
```

## API endpoint
```
GET localhost:3000/api/search?q=keyword
```
sample output
```json
[
	{
		"url": "https//dropbox.com/home/fileOne.txt",
		"filename": "fileOne.txt"
	},
	{
		"url": "https//dropbox.com/home/fileTwo.txt",
		"filename": "fileTwo.pdf"
	},

]
```
