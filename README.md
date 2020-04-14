# Serverless with Lambda function send email with SES AWS

```bash
# Install Serverless Framework global
npm install -g serverless

# Create .env file
touch .env

# Config env variables to send mail with SES (Simple Email Service) AWS
MAIL_HOST=
MAIL_PORT=
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_FROM=
REGION=

# Create a queue in AWS and get ARN queue and config SQS_ARN in .env file https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-create-queue.html

# Deploy lambda function (go to lambda function folder before run below command)
sls deploy --stage dev
sls deploy --stage stg
sls deploy --stage prod
```
