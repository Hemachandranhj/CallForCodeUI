# Helping People in need

[![Slack](https://img.shields.io/badge/Join-Slack-blue)](https://callforcode.org/slack) [![Website](https://img.shields.io/badge/View-Website-blue)](https:/https://assistanceportal.eu-gb.cf.appdomain.cloud/)

## Contents

1. [Short description](#short-description)
1. [Demo video](#demo-video)
1. [The architecture](#the-architecture)
1. [Long description](#long-description)
1. [Project roadmap](#project-roadmap)
1. [Getting started](#getting-started)
1. [Live demo](#live-demo)
1. [Built with](#built-with)
1. [Contributing](#contributing)
1. [Authors](#authors)

## Short description

### What's the problem?

During pandemic, there are many elderly/vulnerable people who need help. There are many volunteers who are ready to help but they dont whom to help

### How can technology help?

Allow elderly/vulnerable to request for help which can be serviced by Volunteers.

### The idea

Providing a web portal for Volunteers to find people who need help and for elderly people who has less exposure to digital technology requesting for help using text messages.

## Demo video

[![Watch the video](https://github.com/Hemachandranhj/CallForCodeUI/blob/master/assets/Helpingpeople.jpg)](https://youtu.be/Z-7oJPo3yyI)

## The architecture

![Video transcription/translation app](https://github.com/Hemachandranhj/CallForCodeUI/blob/master/assets/Architecture.PNG)

1. Elderly/Vulnerable users sends a text message for assistance to Twilio Programmable phone numbers.
2. Text message is forwarded to the NodeJS Web Service using Twilio Web hooks.
3. Web Service validates the request, Understand whether the request is essential/non essentials by invoking Watson Assistant API.
4. Request is stored in Mongo DB
5. Volunteers login to the portal, Picks a request and text message is sent to the Elderly/Vulnerable that assistance is on the way.

Both Web Portal and Web service is protected using IBM APP Id.

## Long description

[More detail is available here](https://github.com/Hemachandranhj/CallForCodeNode/blob/master/README.md)

## Project roadmap

![Roadmap](https://github.com/Hemachandranhj/CallForCodeUI/blob/master/assets/Roadmap.PNG)

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

What things you need to install the software and how to install them

1.NodejS
2.Web Service set up and running locally.Follow the steps mentioned [here](DESCRIPTION.md)

### Installing

Follow the steps below to get the development env running


```node
npm install
npm run ng serve
Server running at http://localhost:4200/
```

To send SMS, Go the folder Utility/TwilioIntegration and run the below steps

```node
npm install
node twilioconnector.js "Need Bread and Pasta#Claret#Liverpool"
Message Sent
```


## Live demo

You can find a running system to test at [assistanceportal.eu-gb.cf.appdomain.cloud](https://assistanceportal.eu-gb.cf.appdomain.cloud/)

## Built with

* [NodeJS](https://nodejs.org/en/) - Web service 
* [AngularJS](https://angularjs.org/) - Web portal
* [Twilio](https://www.twilio.com/) - Programable SMS
* [WatsonAssistant](https://cloud.ibm.com/docs/assistant?topic=assistant-api-overview) - Understand the message intent
* [App ID](https://maven.apache.org/) - Secure web portal and web service
* [MongoDB](https://www.mongodb.com/) - Database used

## Contributing

Please reach out to authors.

## Authors

* **Ganesh Durai** 
* **Hemachandran Harimoorthy** 
* **Jayaraman Kumar** 
* **Prabakaran Kuppusamy** 
