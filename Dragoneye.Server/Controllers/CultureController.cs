using Microsoft.AspNetCore.Mvc;
using Dragoneye.Server.Models;
using Dragoneye.Server.Services;

namespace Dragoneye.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CultureController : ControllerBase
    {
        private readonly ICultureService _cultureService;

        public CultureController(ICultureService cultureService)
        {
            _cultureService = cultureService;
        }

        /// <summary>
        /// Get all culture summaries (names and IDs)
        /// </summary>
        [HttpGet("cultures")]
        public async Task<ActionResult<IEnumerable<CultureSummary>>> GetAllCultures()
        {
            try
            {
                var cultures = await _cultureService.GetAllCultureSummariesAsync();
                return Ok(cultures);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        /// <summary>
        /// Get detailed culture data by ID
        /// </summary>
        [HttpGet("culture/{id}")]
        public async Task<ActionResult<Culture>> GetCultureById(string id)
        {
            try
            {
                var culture = await _cultureService.GetCultureByIdAsync(id);
                if (culture == null)
                {
                    return NotFound($"Culture with ID '{id}' not found.");
                }
                return Ok(culture);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        /// <summary>
        /// Get cultures filtered by age
        /// </summary>
        [HttpGet("cultures/age/{age}")]
        public async Task<ActionResult<IEnumerable<CultureSummary>>> GetCulturesByAge(string age)
        {
            try
            {
                var cultures = await _cultureService.GetCulturesByAgeAsync(age);
                return Ok(cultures);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}