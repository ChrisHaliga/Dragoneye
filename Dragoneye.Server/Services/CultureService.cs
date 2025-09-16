using Dragoneye.Server.Models;

namespace Dragoneye.Server.Services
{
    public interface ICultureService
    {
        Task<IEnumerable<CultureSummary>> GetAllCultureSummariesAsync();
        Task<Culture?> GetCultureByIdAsync(string id);
        Task<IEnumerable<CultureSummary>> GetCulturesByAgeAsync(string age);
    }

    public class CultureService : ICultureService
    {
        private readonly ICulturesCosmosService _culturesCosmosService;
        private readonly ILogger<CultureService> _logger;

        public CultureService(ICulturesCosmosService culturesCosmosService, ILogger<CultureService> logger)
        {
            _culturesCosmosService = culturesCosmosService;
            _logger = logger;
        }

        public async Task<IEnumerable<CultureSummary>> GetAllCultureSummariesAsync()
        {
            try
            {
                var cultures = await _culturesCosmosService.GetAllCulturesAsync();
                return cultures.Select(c => new CultureSummary
                {
                    Id = c.Id,
                    Name = c.Name,
                    Age = c.Age
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving all culture summaries");
                return new List<CultureSummary>();
            }
        }

        public async Task<Culture?> GetCultureByIdAsync(string id)
        {
            try
            {
                // Since we need to find by ID and we use age as partition key,
                // we'll query across all partitions
                var allCultures = await _culturesCosmosService.GetAllCulturesAsync();
                return allCultures.FirstOrDefault(c => c.Id.Equals(id, StringComparison.OrdinalIgnoreCase));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving culture by id: {Id}", id);
                return null;
            }
        }

        public async Task<IEnumerable<CultureSummary>> GetCulturesByAgeAsync(string age)
        {
            try
            {
                var cultures = await _culturesCosmosService.GetCulturesByAgeAsync(age);
                return cultures.Select(c => new CultureSummary
                {
                    Id = c.Id,
                    Name = c.Name,
                    Age = c.Age
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving cultures by age: {Age}", age);
                return new List<CultureSummary>();
            }
        }
    }
}