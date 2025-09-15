namespace Dragoneye.Server.Models
{
    public class Culture
    {
        public string Id { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string Age { get; set; } = string.Empty; // "chaos", "order", "ascension"
        public PoliticsData Politics { get; set; } = new();
        public GeographyData Geography { get; set; } = new();
        public EconomicsData Economics { get; set; } = new();
        public HistoryData History { get; set; } = new();
        public CultureDetails CultureDetails { get; set; } = new();
        public ReligionData Religion { get; set; } = new();
        public LawData Law { get; set; } = new();
        public ScienceData Science { get; set; } = new();
    }

    public class CultureSummary
    {
        public string Id { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string Age { get; set; } = string.Empty;
    }

    public class PoliticsData
    {
        public string GovernanceSystems { get; set; } = string.Empty;
        public string PowerDistribution { get; set; } = string.Empty;
        public string Diplomacy { get; set; } = string.Empty;
        public string PoliticalMovements { get; set; } = string.Empty;
    }

    public class GeographyData
    {
        public string PhysicalLandscape { get; set; } = string.Empty;
        public string Settlements { get; set; } = string.Empty;
        public string Territories { get; set; } = string.Empty;
        public string TravelRoutes { get; set; } = string.Empty;
    }

    public class EconomicsData
    {
        public string TradeAndCommerce { get; set; } = string.Empty;
        public string Currency { get; set; } = string.Empty;
        public string Resources { get; set; } = string.Empty;
        public string EconomicSystems { get; set; } = string.Empty;
    }

    public class HistoryData
    {
        public string Origins { get; set; } = string.Empty;
        public string MajorEvents { get; set; } = string.Empty;
        public string Conflicts { get; set; } = string.Empty;
        public string Transitions { get; set; } = string.Empty;
    }

    public class CultureDetails
    {
        public string SocialStructure { get; set; } = string.Empty;
        public string DailyLifeAndEntertainment { get; set; } = string.Empty;
        public string TraditionsAndFestivals { get; set; } = string.Empty;
        public string OtherCultures { get; set; } = string.Empty;
    }

    public class ReligionData
    {
        public string BeliefsAndPantheon { get; set; } = string.Empty;
        public string Practices { get; set; } = string.Empty;
        public string Organizations { get; set; } = string.Empty;
        public string Influence { get; set; } = string.Empty;
    }

    public class LawData
    {
        public string LegalSystems { get; set; } = string.Empty;
        public string Enforcement { get; set; } = string.Empty;
        public string Justice { get; set; } = string.Empty;
        public string CrimesAndPunishments { get; set; } = string.Empty;
    }

    public class ScienceData
    {
        public string KnowledgeAndEducation { get; set; } = string.Empty;
        public string Technology { get; set; } = string.Empty;
        public string Research { get; set; } = string.Empty;
        public string Innovation { get; set; } = string.Empty;
    }
}