# Game Design Wiki Development Servers
# Start both the .NET backend and Angular frontend

Write-Host "Starting Game Design Wiki Development Environment..." -ForegroundColor Green

# Start the backend API server in the background
Write-Host "Starting .NET Backend API..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd 'Dragoneye.Server'; dotnet run"

# Wait a moment for the backend to start
Start-Sleep -Seconds 3

# Start the Angular development server
Write-Host "Starting Angular Frontend..." -ForegroundColor Yellow
cd dragoneye.client
ng serve

Write-Host "Development servers started!" -ForegroundColor Green
Write-Host "Frontend: http://localhost:4200" -ForegroundColor Cyan
Write-Host "Backend API: https://localhost:7027" -ForegroundColor Cyan