# [RFC] Content Search Engine For Cloud Storage

## Setup
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
		url: "https//dropbox.com/home/fileOne.txt",
		filename: "fileOne.txt"
	},
	{
		url: "https//dropbox.com/home/fileTwo.txt",
		filename: "fileTwo.pdf"
	},

]
```