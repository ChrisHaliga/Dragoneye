export const environment = {
  production: false,
  apiUrl: 'https://localhost:7147',
  auth: {
    domain: 'dev-czez0gt6kknfxpso.us.auth0.com', // Replace with your Auth0 domain
    clientId: 'BbggPGhrKJXfDlEev83KopcR7S8PQ5U6', // Replace with your Auth0 client ID
    redirectUri: 'https://localhost:62251', // Your app URL
    audience: 'dragoneye' // Replace with your Auth0 API identifier
  }
};