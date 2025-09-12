namespace Dragoneye.Server.Models
{
    public class NavigationItem
    {
        public string Title { get; set; } = string.Empty;
        public string Icon { get; set; } = string.Empty;
        public List<NavigationItem> Children { get; set; } = new List<NavigationItem>();
        public string? Route { get; set; }
        public string? PageId { get; set; }
        public bool IsExpanded { get; set; } = false;
    }
}