using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Dragoneye.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthTestController : ControllerBase
    {
        [HttpGet("public")]
        public IActionResult GetPublic()
        {
            return Ok(new { message = "This is a public endpoint", timestamp = DateTime.UtcNow });
        }

        [HttpGet("private")]
        [Authorize]
        public IActionResult GetPrivate()
        {
            var userId = User.FindFirst("sub")?.Value;
            var email = User.FindFirst("email")?.Value;
            
            return Ok(new { 
                message = "This is a private endpoint", 
                userId = userId,
                email = email,
                timestamp = DateTime.UtcNow 
            });
        }
    }
}