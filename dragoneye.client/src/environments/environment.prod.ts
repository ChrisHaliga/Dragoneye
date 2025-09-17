export const environment = {
  production: true,
  apiUrl: 'https://your-production-api-url.com',
  auth: {
    domain: 'YOUR_AUTH0_DOMAIN', // Replace with your Auth0 domain
    clientId: 'YOUR_AUTH0_CLIENT_ID', // Replace with your Auth0 client ID
    redirectUri: 'https://your-production-url.com', // Your production app URL
    audience: 'YOUR_AUTH0_AUDIENCE' // Replace with your Auth0 API identifier
  }
};