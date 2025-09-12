using Dragoneye.Server.Models;

namespace Dragoneye.Server.Services
{
    public class NavigationService
    {
        private readonly List<NavigationItem> _navigation;

        public NavigationService()
        {
            _navigation = GenerateNavigation();
        }

        public List<NavigationItem> GetNavigation()
        {
            return _navigation;
        }

        public List<NavigationItem> GetNavigationStructure() // Keep old method for backwards compatibility
        {
            return GetNavigation();
        }

        private List<NavigationItem> GenerateNavigation()
        {
            return new List<NavigationItem>
            {
                new NavigationItem
                {
                    Title = "Core Mechanics",
                    Icon = "bi-gear",
                    IsExpanded = true,
                    Children = new List<NavigationItem>
                    {
                        new NavigationItem { Title = "Card System", PageId = "Card System", Route = "/pages/Card%20System", Icon = "bi-grid-3x3-gap" },
                        new NavigationItem { Title = "Action Cards", PageId = "Action Cards", Route = "/pages/Action%20Cards", Icon = "bi-layers" },
                        new NavigationItem { Title = "Resource Management", PageId = "Resource Management", Route = "/pages/Resource%20Management", Icon = "bi-battery-half" }
                    }
                },
                new NavigationItem
                {
                    Title = "Systems",
                    Icon = "bi-diagram-3",
                    IsExpanded = false,
                    Children = new List<NavigationItem>
                    {
                        new NavigationItem { Title = "Combat System", PageId = "Combat System", Route = "/pages/Combat%20System", Icon = "bi-shield-check" },
                        new NavigationItem { Title = "Social Encounters", PageId = "Social Encounters", Route = "/pages/Social%20Encounters", Icon = "bi-chat-dots" },
                        new NavigationItem { Title = "Exploration System", PageId = "Exploration System", Route = "/pages/Exploration%20System", Icon = "bi-compass" }
                    }
                },
                new NavigationItem
                {
                    Title = "Content",
                    Icon = "bi-book",
                    IsExpanded = false,
                    Children = new List<NavigationItem>
                    {
                        new NavigationItem { Title = "Warrior Domain", PageId = "Warrior Domain", Route = "/pages/Warrior%20Domain", Icon = "bi-shield-fill-exclamation" },
                        new NavigationItem { Title = "Scholar Domain", PageId = "Scholar Domain", Route = "/pages/Scholar%20Domain", Icon = "bi-mortarboard" },
                        new NavigationItem { Title = "Human Race", PageId = "Human Race", Route = "/pages/Human%20Race", Icon = "bi-person" }
                    }
                },
                new NavigationItem
                {
                    Title = "Setting & Lore",
                    Icon = "bi-globe",
                    IsExpanded = false,
                    Children = new List<NavigationItem>
                    {
                        new NavigationItem { Title = "World Overview", PageId = "World Overview", Route = "/pages/World%20Overview", Icon = "bi-map" },
                        new NavigationItem { Title = "Locations", Route = "#", Icon = "bi-pin-map" },
                        new NavigationItem { Title = "NPCs", Route = "#", Icon = "bi-people" }
                    }
                }
            };
        }
    }
}