
## Application flow

Application flow comprises of two stages
1. Elderly/Vulnerable users requesting for help
2. Volunteers actioning those help

### Elderly/Vulnerable users requesting for help

1. Elderly/Vulnerable users send text message to Twili programmable numbers requesting for help. Message shoule be of format Request#Name#Address

2. A web hook is configured in Twilio and lisening for message arrived event

![Twilio webhook configuration](https://github.com/Hemachandranhj/CallForCodeUI/blob/master/assets/WebHooks.png)

3. Once the message is arrived, message is forwarded to Web Service.

4. Web service validates whether the request is of right format, If its not in right format, It sends the error response as a text message asking them to send in correct format.

5. If is a valid message, It invokes IBM watson Assistant API to understand the Intents

6. Below intents are currently configured in IBM Watson Assistant

![List of Intents](https://github.com/Hemachandranhj/CallForCodeUI/blob/master/assets/WatsonItent1.PNG)

![Intent help content](https://github.com/Hemachandranhj/CallForCodeUI/blob/master/assets/WatsonItent2.PNG)

7. After identification of intent, help request is stored in mongo db and user sent with acknowledgement message

![Acknowledgement](https://github.com/Hemachandranhj/CallForCodeUI/blob/master/assets/InitialSms.jpg)

### Volunteers actioning help

1. Volunteers access the portal [assistanceportal.eu-gb.cf.appdomain.cloud](https://assistanceportal.eu-gb.cf.appdomain.cloud/) and signin

![Home](https://github.com/Hemachandranhj/CallForCodeUI/blob/master/assets/home.PNG)

2. Chooses one of the signin porviders for authentication

![Signin](https://github.com/Hemachandranhj/CallForCodeUI/blob/master/assets/signin.PNG)

3. On sucessful authentication, dashboard screen will be shown

![Dashboard](https://github.com/Hemachandranhj/CallForCodeUI/blob/master/assets/dashboard.PNG)

4. List of help request is displayed as Tiles with color coding based on the Message intent. Blue for Essential item and brown for non essential.Once the user actions a request, button will be change to accepted

![Dashboard](https://github.com/Hemachandranhj/CallForCodeUI/blob/master/assets/dashboard.PNG)

5. Text Notification will be sent to eldely/vulnerable users that volunteer has accepted a request and they will help

![Acceptance](https://github.com/Hemachandranhj/CallForCodeUI/blob/master/assets/acknowledgement.jpg)


## Why we are better?

1. This application can be used for any pandemic/any volunteering events

2. Solution has beend designing considering people with less exposure to digital technologies.

3. There is no such portal exist to connect volunteers and people with needs.





