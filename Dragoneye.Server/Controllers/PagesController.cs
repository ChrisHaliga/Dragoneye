using Microsoft.AspNetCore.Mvc;
using Dragoneye.Server.Models;
using Dragoneye.Server.Services;

namespace Dragoneye.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PagesController : ControllerBase
    {
        private readonly PageService _pageService;
        private readonly NavigationService _navigationService;

        public PagesController(PageService pageService, NavigationService navigationService)
        {
            _pageService = pageService;
            _navigationService = navigationService;
        }

        [HttpGet]
        public ActionResult<List<Page>> GetAllPages()
        {
            return Ok(_pageService.GetAllPages());
        }

        [HttpGet("{id}")]
        public ActionResult<Page> GetPageById(string id)
        {
            // URL decode the ID to handle encoded characters like %20
            var decodedId = Uri.UnescapeDataString(id);
            var page = _pageService.GetPageById(decodedId);
            if (page == null)
            {
                return NotFound();
            }
            return Ok(page);
        }

        [HttpGet("navigation")]
        public ActionResult<List<NavigationItem>> GetNavigation()
        {
            return Ok(_navigationService.GetNavigationStructure());
        }
    }
}