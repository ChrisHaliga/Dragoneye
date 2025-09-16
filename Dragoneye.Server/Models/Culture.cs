using System.Text.Json.Serialization;

namespace Dragoneye.Server.Models
{
    public class Culture
    {
        [JsonPropertyName("id")]
        public string Id { get; set; } = string.Empty;
        
        [JsonPropertyName("name")]
        public string Name { get; set; } = string.Empty;
        
        [JsonPropertyName("age")]
        public string Age { get; set; } = string.Empty; // "chaos", "order", "ascension"
        
        [JsonPropertyName("politics")]
        public PoliticsData Politics { get; set; } = new();
        
        [JsonPropertyName("geography")]
        public GeographyData Geography { get; set; } = new();
        
        [JsonPropertyName("economics")]
        public EconomicsData Economics { get; set; } = new();
        
        [JsonPropertyName("history")]
        public HistoryData History { get; set; } = new();
        
        [JsonPropertyName("cultureDetails")]
        public CultureDetails CultureDetails { get; set; } = new();
        
        [JsonPropertyName("religion")]
        public ReligionData Religion { get; set; } = new();
        
        [JsonPropertyName("law")]
        public LawData Law { get; set; } = new();
        
        [JsonPropertyName("science")]
        public ScienceData Science { get; set; } = new();
        
        [JsonPropertyName("_etag")]
        public string? ETag { get; set; }
        
        // Partition key for Cosmos DB - using id
        [JsonPropertyName("partitionKey")]
        public string PartitionKey => Id;
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