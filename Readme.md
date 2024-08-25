MERN Ecommerce Website
This is a full-featured ecommerce application built with the MERN stack. The application includes almost all the functionalities you would expect in a real-world ecommerce application.

Features
User Features:
Register, Login, and Logout
Reset Password
Update Profile
Admin Features:
Manage Products: CRUD operations (Create, Read, Update, Delete)
Manage Users: Delete User
Manage Orders: Update Order Status
Manage Reviews: View and Delete Reviews

Installation
1. Install Dependencies:
For Backend:
npm install
For Frontend:
cd frontend
npm install --legacy-peer-deps
Note: The --legacy-peer-deps flag is used because some dependencies may be deprecated.

2. Environment Variables:
Make sure to create a config.env file in the backend/config directory and add the following variables:

PORT=
DB_URI=
STRIPE_API_KEY=
STRIPE_SECRET_KEY=
JWT_SECRET=
JWT_EXPIRE=
COOKIE_EXPIRE=
SMPT_SERVICE=
SMPT_MAIL=
SMPT_PASSWORD=
SMPT_HOST=
SMPT_PORT=
CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
Fill each field with your respective information.

Running the Application
For Backend:
npm run dev
For Frontend:
npm start

Screenshots
Here are some screenshots to give you an overview of the application:

    Home page
    ![Screenshot1](<Screenshot (62).png>)

    Products    
    ![Screenshot2](screenshots/Screenshot%20(63).png)

    Admin Dashboard
    ![Screenshot7](<Screenshot (72).png>)

    Create Product
    ![Screenshot6](<Screenshot (73).png>) 

    Cart
    ![Screenshot5](<Screenshot (64).png>)

    Shipping
    ![Screenshot4](<Screenshot (65).png>) 

    Order Summary
    ![Screenshot3](<Screenshot (66).png>)

    card Info
    ![Screenshot10](<Screenshot (67).png>)

    Profile page
    ![Screenshot8](<Screenshot (71).png>) 
