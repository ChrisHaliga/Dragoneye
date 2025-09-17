# Auth0 Setup for Dragoneye

## Quick Setup Guide

### 1. Create Auth0 Account & Application

1. Go to [Auth0.com](https://auth0.com) and create a free account
2. Create a new Single Page Application (SPA)
3. Note down your:
   - Domain (e.g., `your-app.us.auth0.com`)
   - Client ID
   - Create an API and note the Audience/Identifier

### 2. Configure Auth0 Application Settings

In your Auth0 application settings:

**Allowed Callback URLs:**
```
https://localhost:62251
```

**Allowed Logout URLs:**
```
https://localhost:62251
```

**Allowed Web Origins:**
```
https://localhost:62251
```

**Allowed Origins (CORS):**
```
https://localhost:62251
```

### 3. Update Environment Files

Update the following files with your Auth0 credentials:

**Frontend: `dragoneye.client/src/environments/environment.ts`**
```typescript
export const environment = {
  production: false,
  apiUrl: 'https://localhost:7147',
  auth: {
    domain: 'YOUR_AUTH0_DOMAIN', // e.g., 'your-app.us.auth0.com'
    clientId: 'YOUR_AUTH0_CLIENT_ID',
    redirectUri: 'https://localhost:62251',
    audience: 'YOUR_AUTH0_AUDIENCE' // Your API identifier
  }
};
```

**Backend: `Dragoneye.Server/appsettings.json`**
```json
{
  "Auth0": {
    "Domain": "YOUR_AUTH0_DOMAIN",
    "Audience": "YOUR_AUTH0_AUDIENCE"
  }
}
```

### 4. Test the Integration

1. Start both client and server
2. Try to access editing features - you should be redirected to Auth0 login
3. Test the auth endpoints:
   - `GET /api/AuthTest/public` - should work without auth
   - `GET /api/AuthTest/private` - requires authentication
4. Test protected features after login:
   - Try saving a note - should work and show your username
   - Try editing a culture - should work
   - Try accessing `/edit/home` - should work

**Testing Auth Failures:**
- Open browser dev tools and look at network requests
- Requests to protected endpoints should include `Authorization: Bearer <token>` header
- If not logged in, requests to protected endpoints should return 401 Unauthorized

### 5. What's Protected

**Frontend:**
- Edit homepage (`/edit/home`) - requires login
- Floating notes button - only visible when authenticated
- Floating culture edit button - only visible when authenticated

**Backend:**
- Culture creation (`POST /api/cultures`)
- Culture updates (`PUT /api/cultures/{id}`)
- Culture deletion (`DELETE /api/cultures/{id}`)
- Homepage updates (`PUT /api/homepage`)
- Note creation/updates (`POST /api/notes`)
- Note deletion (`DELETE /api/notes/{pageId}`)
- Get all notes (`GET /api/notes`)
- Auth test private endpoint (`GET /api/AuthTest/private`)

### 6. How It Works

- Users click login button in navbar
- Redirected to Auth0 for authentication
- On success, redirected back with JWT token
- JWT token automatically included in API requests via HTTP interceptor
- Protected routes/endpoints check for valid JWT

Simple and effective MVP setup with minimal configuration required!