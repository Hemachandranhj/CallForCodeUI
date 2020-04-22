
## Application flow

Application flow comprises of two stages
1. Elderly/Vulnerable users requesting for help
2. Volunteers actioning those help

### Application flow

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

![Acknowledgement](https://github.com/Hemachandranhj/CallForCodeUI/blob/master/assets/acknowledgement.jpg)

