# Pragmateam code challenge server (NodeJS)

Please refer to the provided document for the code challenge requirements. 

## Available scripts

- `npm start` - Start the application (Port 8081)


# Pragmateam code challenge client (Angular)

Please refer to the provided document for the code challenge requirements.

## Available scripts

- `npm start` - Start the application (Port 4200)
- `npm test` - Runs available tests



01. Highlight of improvement
API call was looping for each an every products in products list. I have added new backend API endpoint
to send list of IDs and take list of temperature objects. Frontend code added to read that . Now we only need to send one API call. That will reduct bandwidth usage and faster. 

02.  What I improve more next if I have time

Enhancement
    * Need to integrate security to validate frontend request with token at http header.
    
    * Ensure https://temperature-sensor-service.herokuapp.com API response it properly validated.
    
    * Mapped HTTP codes properly for success,error and etc (404,409,500,200,201 ....)
    
    * How to manage too much calls when network packet block and network queue and release calls. Then there will be same call duplicate since FE send the call in every time span (2000 ms). If pool has same call then we can send same object as response. 
    
    * Imlpement a Util to consume rest data from temperature-sensor-service
Test 
	* Validate api request body in case of empty.
    * Validate https://temperature-sensor-service.herokuapp.com response. 

03. Questions you would ask and your own answers and assumptions
	What are the none function requirments I have tested and missed from my test cases.

04. Desicions of approach I took
When I look at the code I could see that both FE and BE call multiple calls to consume data from APIs.
From backend perspective we are unalbe to handle it we do not have authoroty to change third party API. So we must have to call one by one and collect respones as one list.
But fronend we can modify and send list of ids unless sending one id and consume response and then send another id. I have modified both node backend and angular front for that.

05. Any other notes. 

	
	

