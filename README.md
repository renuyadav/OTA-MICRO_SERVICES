Online Travel Portal micro-services demo
A demo to showcase micro-services built using NodeJs, Express & external third party api's(Amadeus node sdk) to get flights real time data
This repository Currently, has two main micro-services
1. api-aggregator - this microservice has external dependency on amadeus node sdk to get real time data. In future any other gds can also be added here. I will not be exposing this service to outer world. It will get data from third party service and feed in into my system. 

2. Flight - It has three more microservices for the booking functionaility
# Search : A micro-service which has basic flight search functionality, this will api-aggregator to get fligts data based on itenary
# Availability : This micro service will get real time price and availaibity of flights after checking with airlines, again it will fetch data from api-aggregator
# Order : final step is order


