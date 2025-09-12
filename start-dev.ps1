# Game Design Wiki Development Startup Script

Write-Host "Starting Game Design Wiki Development Environment..." -ForegroundColor Green

# Start the backend API server
Write-Host "Starting .NET Backend API..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-Command", "cd 'Dragoneye.Server'; dotnet run" -WindowStyle Normal

# Wait a moment for the backend to start
Start-Sleep -Seconds 3

# Start the Angular development server
Write-Host "Starting Angular Frontend..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-Command", "cd 'dragoneye.client'; ng serve" -WindowStyle Normal

Write-Host ""
Write-Host "✅ Both applications are starting up!" -ForegroundColor Green
Write-Host ""
Write-Host "Backend API: https://localhost:7154" -ForegroundColor Cyan
Write-Host "Frontend App: https://localhost:62251" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press any key to close this script (applications will continue running)..."
$host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")