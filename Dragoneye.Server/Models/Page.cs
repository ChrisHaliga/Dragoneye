namespace Dragoneye.Server.Models
{
    public class Page 
    {
        public string Id { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public string Section { get; set; } = string.Empty;
        public string Subsection { get; set; } = string.Empty;
        public List<string> Tags { get; set; } = new List<string>();
        public CertaintyLevel Certainty { get; set; }
        public DateTime Updated { get; set; }
    }

    public class Homepage
    {
        public string Id { get; set; } = "homepage";
        public string Title { get; set; } = "Dragoneye Design Wiki";
        public string Subtitle { get; set; } = "Your comprehensive game design documentation hub";
        public string HeroContent { get; set; } = string.Empty;
        public List<QuickAccessCard> QuickAccessCards { get; set; } = new List<QuickAccessCard>();
        public List<RecentUpdate> RecentUpdates { get; set; } = new List<RecentUpdate>();
        public List<StatCard> Stats { get; set; } = new List<StatCard>();
        public GettingStartedSection GettingStarted { get; set; } = new GettingStartedSection();
        public DateTime Updated { get; set; }
        
        // UI Text for localization
        public string GetStartedButtonText { get; set; } = "Get Started";
        public string ExploreButtonText { get; set; } = "Explore";
        public string ExploreGameTitle { get; set; } = "Explore the Game";
        public string ExploreGameSubtitle { get; set; } = "Jump into any area of the design documentation";
        public string QuickLinkActionText { get; set; } = "Explore";
        public string GettingStartedSubtitle { get; set; } = "Follow this path to understand the game from the ground up";
        public string StartLearningButtonText { get; set; } = "Start Learning";
        public string LoadingText { get; set; } = "Loading homepage...";
        public string ErrorHeading { get; set; } = "Error Loading Homepage";
        public string RetryButtonText { get; set; } = "Retry";
    }

    public class QuickAccessCard
    {
        public string PageId { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Icon { get; set; } = "bi-file-text"; // Bootstrap icon class
        public string BadgeText { get; set; } = string.Empty;
        public string BadgeColor { get; set; } = "bg-primary"; // Bootstrap badge color
        public int DisplayOrder { get; set; }
    }

    public class RecentUpdate
    {
        public string PageId { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Icon { get; set; } = "bi-file-earmark-text";
        public string IconColor { get; set; } = "text-primary";
        public DateTime UpdateDate { get; set; }
        public int DisplayOrder { get; set; }
    }

    public class StatCard
    {
        public string Label { get; set; } = string.Empty;
        public string Value { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public int DisplayOrder { get; set; }
    }

    public class GettingStartedSection
    {
        public string Title { get; set; } = "Getting Started";
        public List<GettingStartedStep> Steps { get; set; } = new List<GettingStartedStep>();
    }

    public class GettingStartedStep
    {
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Icon { get; set; } = "bi-1-circle-fill";
        public string PageId { get; set; } = string.Empty; // Optional link to a specific page
        public int StepNumber { get; set; }
    }

    public enum CertaintyLevel 
    {
        Locked,    // 🔒
        Testing,   // 🧪  
        Ideas,     // 💡
        Questions  // ❓
    }
}