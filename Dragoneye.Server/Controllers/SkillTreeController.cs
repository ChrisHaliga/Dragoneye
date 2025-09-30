using Microsoft.AspNetCore.Mvc;
using Dragoneye.Server.Services;
using Dragoneye.Server.Models;

namespace Dragoneye.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SkillTreeController : ControllerBase
    {
        private readonly ISkillTreeService _skillTreeService;

        public SkillTreeController(ISkillTreeService skillTreeService)
        {
            _skillTreeService = skillTreeService;
        }

        [HttpGet]
        public ActionResult<SkillTreeData> GetSkillTree()
        {
            var skillTreeData = _skillTreeService.GetSkillTreeData();
            return Ok(skillTreeData);
        }
    }
}