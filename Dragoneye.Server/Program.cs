using Dragoneye.Server.Services;
using Dragoneye.Server.Models;
using Microsoft.Azure.Cosmos;
using Azure.Identity;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Configure CosmosDB settings
builder.Services.Configure<CosmosDbSettings>(
    builder.Configuration.GetSection("CosmosDb"));

// Register CosmosClient as singleton with DefaultAzureCredential
builder.Services.AddSingleton<CosmosClient>(serviceProvider =>
{
    var cosmosDbSettings = builder.Configuration.GetSection("CosmosDb").Get<CosmosDbSettings>();
    
    if (cosmosDbSettings == null)
    {
        throw new InvalidOperationException("CosmosDb configuration section is missing from appsettings.json");
    }
    
    return new CosmosClient(
        cosmosDbSettings.EndpointUri, 
        new DefaultAzureCredential(), 
        new CosmosClientOptions() 
        { 
            SerializerOptions = new CosmosSerializationOptions 
            { 
                PropertyNamingPolicy = CosmosPropertyNamingPolicy.CamelCase 
            } 
        });
});

// Register Cosmos DB services
builder.Services.AddSingleton<ICosmosDbService<PageNote>>(serviceProvider =>
{
    var cosmosClient = serviceProvider.GetRequiredService<CosmosClient>();
    var cosmosDbSettings = builder.Configuration.GetSection("CosmosDb").Get<CosmosDbSettings>();
    
    if (cosmosDbSettings == null)
    {
        throw new InvalidOperationException("CosmosDb configuration section is missing from appsettings.json");
    }
    
    return new CosmosDbService<PageNote>(cosmosClient, cosmosDbSettings.DatabaseName, cosmosDbSettings.ContainerName);
});

builder.Services.AddScoped<IPageNotesCosmosService, PageNotesCosmosService>();

// Register initialization service
builder.Services.AddScoped<CosmosDbInitializationService>();

// Add CORS policy for development
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularDev", policy =>
    {
        policy.WithOrigins("https://localhost:62251", "http://localhost:62251", "http://localhost:4200", "https://localhost:4200")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

// Register our custom services
builder.Services.AddSingleton<PageService>();
builder.Services.AddTransient<NavigationService>();
builder.Services.AddTransient<ICultureService, CultureService>();

var app = builder.Build();

app.UseDefaultFiles();
app.MapStaticAssets();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseCors("AllowAngularDev");
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

// Initialize Cosmos DB database and container on startup
using (var scope = app.Services.CreateScope())
{
    try
    {
        var initService = scope.ServiceProvider.GetRequiredService<CosmosDbInitializationService>();
        await initService.InitializeAsync();
        
        var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
        logger.LogInformation("Cosmos DB initialized successfully");
    }
    catch (Exception ex)
    {
        var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
        logger.LogError(ex, "Failed to initialize Cosmos DB. The application will continue but may not function properly.");
    }
}

app.Run();
