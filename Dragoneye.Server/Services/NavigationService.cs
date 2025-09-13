using Dragoneye.Server.Models;

namespace Dragoneye.Server.Services
{
    public class NavigationService
    {
        private readonly PageService _pageService;

        public NavigationService(PageService pageService)
        {
            _pageService = pageService;
        }

        public List<NavigationItem> GetNavigation()
        {
            return GenerateNavigationFromPages();
        }

        public List<NavigationItem> GetNavigationStructure() // Keep old method for backwards compatibility
        {
            return GetNavigation();
        }

        private List<NavigationItem> GenerateNavigationFromPages()
        {
            var pages = _pageService.GetAllPages();
            var navigation = new List<NavigationItem>();

            // Group pages by Section, then by Subsection
            var sections = pages.GroupBy(p => p.Section).OrderBy(g => GetSectionOrder(g.Key));

            foreach (var section in sections)
            {
                var sectionItem = new NavigationItem
                {
                    Title = section.Key,
                    Icon = GetSectionIcon(section.Key),
                    IsExpanded = true, // Expand all sections by default
                    Children = new List<NavigationItem>()
                };

                // Group pages within this section by subsection
                var subsections = section.GroupBy(p => p.Subsection).OrderBy(g => g.Key);

                foreach (var subsection in subsections)
                {
                    if (string.IsNullOrEmpty(subsection.Key))
                    {
                        // Pages without subsections go directly under the section
                        foreach (var page in subsection.OrderBy(p => p.Title))
                        {
                            sectionItem.Children.Add(new NavigationItem
                            {
                                Title = page.Title,
                                PageId = page.Id,
                                Route = $"/pages/{Uri.EscapeDataString(page.Id)}",
                                Icon = GetPageIcon(page.Id)
                            });
                        }
                    }
                    else
                    {
                        // Create subsection with pages
                        var subsectionItem = new NavigationItem
                        {
                            Title = subsection.Key,
                            Icon = GetSubsectionIcon(subsection.Key),
                            IsExpanded = true, // Expand all subsections by default
                            Children = new List<NavigationItem>()
                        };

                        foreach (var page in subsection.OrderBy(p => p.Title))
                        {
                            subsectionItem.Children.Add(new NavigationItem
                            {
                                Title = page.Title,
                                PageId = page.Id,
                                Route = $"/pages/{Uri.EscapeDataString(page.Id)}",
                                Icon = GetPageIcon(page.Id)
                            });
                        }

                        sectionItem.Children.Add(subsectionItem);
                    }
                }

                navigation.Add(sectionItem);
            }

            return navigation;
        }

        private int GetSectionOrder(string section)
        {
            return section switch
            {
                "Core Mechanics" => 1,
                "Systems" => 2,
                "Content" => 3,
                "Setting & Lore" => 4,
                _ => 99
            };
        }

        private string GetSectionIcon(string section)
        {
            return section switch
            {
                "Core Mechanics" => "bi-gear",
                "Systems" => "bi-diagram-3",
                "Content" => "bi-book",
                "Setting & Lore" => "bi-globe",
                _ => "bi-folder"
            };
        }

        private string GetSubsectionIcon(string subsection)
        {
            return subsection switch
            {
                "Card Fundamentals" => "bi-grid-3x3-gap",
                "Card Types" => "bi-layers",
                "Resources" => "bi-battery-half",
                "Tactical Combat" => "bi-shield-check",
                "Social Mechanics" => "bi-chat-dots",
                "Adventure Mechanics" => "bi-compass",
                "Character Domains" => "bi-person-badge",
                "Player Races" => "bi-people",
                "World Building" => "bi-map",
                _ => "bi-folder2"
            };
        }

        private string GetPageIcon(string pageId)
        {
            return pageId switch
            {
                "Card System" => "bi-grid-3x3-gap",
                "Action Cards" => "bi-layers",
                "Resource Management" => "bi-battery-half",
                "Combat System" => "bi-shield-check",
                "Social Encounters" => "bi-chat-dots",
                "Exploration System" => "bi-compass",
                "Warrior Domain" => "bi-shield-fill-exclamation",
                "Scholar Domain" => "bi-mortarboard",
                "Human Race" => "bi-person",
                "World Overview" => "bi-map",
                _ => "bi-file-text"
            };
        }
    }
}