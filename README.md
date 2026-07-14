# Smart OCR Expense Tracker

A serverless expense tracking application that extracts receipt details using Amazon Textract and stores expenses in DynamoDB. The application provides a simple dashboard for uploading receipts and viewing expense history.

## Features

- Upload receipt images
- OCR using Amazon Textract
- Automatic extraction of:
  - Merchant
  - Total Amount
  - Date
  - Category
- Store expenses in Amazon DynamoDB
- Expense History
- Monthly Expense Summary
- Responsive React UI
- Serverless AWS Backend

## Tech Stack

### Frontend
- React
- Vite
- JavaScript
- CSS

### Backend
- AWS Lambda
- Amazon API Gateway
- Amazon Textract
- Amazon DynamoDB
- Amazon S3
- Amazon SNS

## AWS Services Used

- Amazon S3 – Stores uploaded receipt images
- Amazon Textract – Extracts text from receipts
- AWS Lambda – Processes OCR requests
- Amazon DynamoDB – Stores expense records
- API Gateway – Exposes REST APIs
- Amazon SNS – Sends notifications

## Project Structure

```
smart-ocr-expense-tracker/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   └── main.jsx
│
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## API Endpoints

### POST /ocr

Uploads a receipt image and extracts expense information.

### GET /summary

Returns monthly expense summary including:

- Total Expenses
- Total Receipts
- Category-wise Expenses

## Workflow

1. User uploads receipt.
2. React sends image to API Gateway.
3. API Gateway invokes AWS Lambda.
4. Lambda uploads image to Amazon S3.
5. Amazon Textract extracts receipt details.
6. Lambda stores extracted data in DynamoDB.
7. Expense history and summary are returned to the frontend.

## Installation

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Future Improvements

- User Authentication
- Expense Charts
- PDF Receipt Support
- Expense Filters
- Export Reports
- Budget Tracking
  
## DEPLOY:
https://6a55014f14d11f2e4c3ed274--tangerine-figolla-ed51e2.netlify.app/
