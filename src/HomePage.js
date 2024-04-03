import React, { useState } from 'react';
import  { getCurrentUser } from 'aws-amplify/auth';
import { decodeJWT,fetchUserAttributes} from 'aws-amplify/auth';
import  { Amplify }  from 'aws-amplify';
import awsconfig from './aws-exports';
// import { Authenticator } from '@aws-amplify/ui-react';
Amplify.configure(awsconfig);
function HomePage() {
  const [apiResponse, setApiResponse] = useState('');
  

  const handleButtonClick = async () => {
    try {
      const apiUrl = 'https://avjqt4mslj.execute-api.us-east-1.amazonaws.com/dev/';

// Headers to be included in the request
  const headers = {
      "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      // "Access-Control-Allow-Headers": "Content-Type, Authorization, x-api-key",
      'Content-Type': 'application/json', // Assuming JSON content type
      'Authorization': 'eyJraWQiOiJLbFZnSnNid2R1XC9UNDg3WDZma2k3bXRSQUhCamYwcVltXC9ZTmRKWHdkUjA9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJhZjVkMTA3OS0yZDdlLTRhYWItYjVmZS1mMDgxOTY3NzU2MDkiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfUW9CdG9OS01pIiwiY29nbml0bzp1c2VybmFtZSI6ImFmNWQxMDc5LTJkN2UtNGFhYi1iNWZlLWYwODE5Njc3NTYwOSIsIm9yaWdpbl9qdGkiOiI5YmEwZDc2Zi1kOGVlLTQ0MmUtOWRkZS1hNzkyOWQ0MWU0YmQiLCJhdWQiOiIzZTRzMWxncHM3ZjhyN2pocThxdDByOGE5ayIsImV2ZW50X2lkIjoiOGM3ZWE4NWYtYzdiYy00YjU3LWJhM2MtMjA2NGI1MTcyZDE0IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3MTE2Mzc5MDcsImV4cCI6MTcxMTY0MTUwNywiaWF0IjoxNzExNjM3OTA3LCJqdGkiOiJkNmMzZWU2OC1kZWFhLTRhNWMtOWI0Mi0wMjA4Yzk2ZjJhNjciLCJlbWFpbCI6Imxpa2hpdGhhLmdhanVsYUB5b3R0YXRlY2hwb3J0cy5jb20ifQ.tEhItRbJIRXw_Zt6ESTqjr19cUQvezYDeksLqKuvZcGfQ2Fabcr-NTvZyutqkGd_tHaXRx16LiHmEf0UOG0kHstT749qBzKdUMWVOh4b1v5pyzXHnWnFS7FpsI71p6sz2ieP2FSeNMqOu4zypLPZR9eB7zOulZk_qNmLsLkBZxl7uugnIgsOyL72f6rkgEZXX-LGs-Q49_M3LZGIcWSOZIEhFdjvO436gx7990UZbVNwZUnVPcWrBe4FYB_ZkQqvJab8M5RHVymkUx5MxLphosp857TnFHIO9AsIUXMSeMpSvy9Zp614X8V2JL5B8uP9O4ZOj07JUji40u3tq8EvCA', // Replace with your Cognito auth token
      'x-api-key': 'H5gryuqekI2eVd33ygjn69bL1F7Ua0Gw4ZvQhw30' // Replace with your API key
  };

  // Fetch API request
  fetch(apiUrl, {
      method: 'GET',
      mode: 'cors',
      headers: headers
  })
  .then(response => {
      if (response.ok) {
          // const data1 = response.json();
          // setApiResponse(data1);
          console.log("inif")
          return response.json(); // Assuming response is JSON
      }
      throw new Error('Network response was not ok.');
  })
  .then(data => {
      setApiResponse(data);
      console.log(data); // Handle data from the response
  })
  .catch(error => {
      console.error('There was a problem with the fetch operation:', error); // Handle errors
  });
    //   const test = decodeJWT();
    //   console.log(test)
    //   const test = await Amplify.getConfig().Auth.Cognito.userAttributes();
    //   console.log(test)
    //   const test1 = fetchUserAttributes()
    //   console.log(test1)
    // //   const user = await Auth.currentAuthenticatedUser();
    //   const user = await getCurrentUser();
    //   console.log("user",user)
    //   if (user) {
        // User is authenticated, you can access the authentication token
        // const authToken = "eyJraWQiOiJLbFZnSnNid2R1XC9UNDg3WDZma2k3bXRSQUhCamYwcVltXC9ZTmRKWHdkUjA9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJhZjVkMTA3OS0yZDdlLTRhYWItYjVmZS1mMDgxOTY3NzU2MDkiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfUW9CdG9OS01pIiwiY29nbml0bzp1c2VybmFtZSI6ImFmNWQxMDc5LTJkN2UtNGFhYi1iNWZlLWYwODE5Njc3NTYwOSIsIm9yaWdpbl9qdGkiOiJjZjQ5NWFhNy1kMTRkLTRlN2MtOTVhOS01OTUwZTY4Y2E5Y2EiLCJhdWQiOiIzZTRzMWxncHM3ZjhyN2pocThxdDByOGE5ayIsImV2ZW50X2lkIjoiNzgyZTI5MTgtYjJkNi00NDMwLWFjNTMtOWJhNmQ3NjE4NGVlIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3MTE1MzA5MzksImV4cCI6MTcxMTUzNDUzOSwiaWF0IjoxNzExNTMwOTM5LCJqdGkiOiI2MmJlYzU3Ny1mNjAzLTQ4MTAtOTczZS02YjVmZDE1YjAxMDciLCJlbWFpbCI6Imxpa2hpdGhhLmdhanVsYUB5b3R0YXRlY2hwb3J0cy5jb20ifQ.q0IkRq-tgWzvWY6TY1wgYwCUntYVrmAOk_mnNPgwnhxAvuc1vUKDUZ1ywvakAx8Y2CBp8MT9jgV-_Rqs3jIvGJoZ8mikDFOOn7I0iWAQYp9qgWRkZdNVEk97d77chhO1r3JUzJmZvMZK5ZokIZsALHS1Pfo2hDh4dp6Uggdktgd0nqyKKxLVhfQRvNEwxlb0lkUvf0pra2r-BcQ2XTuwmC4AyZQ6GplajWmcuHrX-6hvWV8PZz8-574WbX1RUE1WiG6DwaPLfaQ4ModtifcpOf5kM7S98no95gZcuKv5TwP5EVN5cbLSsLIB2d_C0AHXUdvRKlxa6VWM64_QPL61fQ";
        // console.log('Authentication Token:', authToken);
        // // return authToken;
        // // const authToken = user.signInUserSession.accessToken.jwtToken;
        // const apiKey = 'H5gryuqekI2eVd33ygjn69bL1F7Ua0Gw4ZvQhw30'; // Replace with your API key
        // const response = await fetch('https://avjqt4mslj.execute-api.us-east-1.amazonaws.com/dev/', {
        //     method: 'GET',
        //     headers: {
        //     'Content-Type': 'application/json', 
        //     'Authorization': authToken,
        //     'x-api-key': apiKey,
        //     },
        // });
        // console.login(response)
        
    //   } 
    //   else {
    //     console.log('No user is currently signed in.');
    //     return null;
    //   }
      
    } catch (error) {
      console.error('Error fetching API:', error);
      // Handle error
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Call API</button>
      <div>{apiResponse}</div>
    </div>
  );
}

export default HomePage;
