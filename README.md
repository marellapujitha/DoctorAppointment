# 📅 WhatsApp Appointment Booking System

A simple full-stack application that allows users to book an appointment with a doctor and receive a WhatsApp confirmation using the Twilio Sandbox API.

---

## 🔧 Tech Stack

- **Frontend:** Angular
- **Backend:** Node.js + Express
- **Database:** MongoDB (Mongoose)
- **Messaging:** Twilio WhatsApp Sandbox API

---

## ✅ Features

- 📋 Form to collect user info (Name, WhatsApp number, preferred date & time)
- 📦 Backend API to store and validate bookings
- ❌ Prevents double-booking of time slots
- 📲 Sends WhatsApp confirmation to the user
- 🛡️ Form validations included
- 🧾 Confirmation page shown after successful booking


## Backend Setup (appointment-backend)
📦 Install dependencies
-cd appointment-backend
-npm install
🔐 Configure Twilio and MongoDB
 -Create a .env file or directly edit index.js with:


- TWILIO_ACCOUNT_SID=your_account_sid
- TWILIO_AUTH_TOKEN=your_auth_token
- MONGO_URI=your_mongodb_connection_string
   ##Run server
npm start
Server will run on: http://localhost:2600

## Frontend Setup (whatsappAppointment)
📦 Install dependencies

- cd whatsappAppointment
- npm install
  ## Run Angular app

- ng serve
- Angular app will run on: http://localhost:4200

## WhatsApp Setup
✅ Twilio Sandbox (Development Mode)
Go to: https://www.twilio.com/console/sms/whatsapp/sandbox

Join the sandbox by:

Scanning the QR code

OR sending: join your-code to +14155238886 via WhatsApp

Only numbers that joined the sandbox can receive messages
