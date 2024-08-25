MERN Ecommerce Website
This application consists almost all the features present in the real ecommerce application some of them are
Register, Login and logout
For user and admin- Reset password and profile
For Admin options like- CRUD operations for product,user,order,review

Install dependecies:
For backend - npm install 
For frontend - cd frontend npm install --legacy-peer-deeps(as some dependcies are deprycted)

Env variables
Make Sure to Create a config.env file in backend/config directory and add appropriate variables in order to use the app.

Essential Variables 
PORT= DB_URI = STRIPE_API_KEY= STRIPE_SECRET_KEY= JWT_SECRET= JWT_EXPIRE= COOKIE_EXPIRE= SMPT_SERVICE = SMPT_MAIL= SMPT_PASSWORD= SMPT_HOST= SMPT_PORT= CLOUDINARY_NAME= CLOUDINARY_API_KEY= CLOUDINARY_API_SECRET= fill each field with your info respectively

Then just run both frontend and backend:
For backend- npm run dev
For frontend- npm start

![alt text](<Screenshot (62).png>)