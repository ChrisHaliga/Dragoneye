using Dragoneye.Server.Models;

namespace Dragoneye.Server.Services
{
    public interface ICultureService
    {
        Task<IEnumerable<CultureSummary>> GetAllCultureSummariesAsync();
        Task<Culture?> GetCultureByIdAsync(string id);
        Task<IEnumerable<CultureSummary>> GetCulturesByAgeAsync(string age);
    }

    public class CultureService : ICultureService
    {
        private readonly List<Culture> _cultures;

        public CultureService()
        {
            _cultures = InitializeSampleData();
        }

        public async Task<IEnumerable<CultureSummary>> GetAllCultureSummariesAsync()
        {
            await Task.CompletedTask; // Simulate async operation
            return _cultures.Select(c => new CultureSummary
            {
                Id = c.Id,
                Name = c.Name,
                Age = c.Age
            });
        }

        public async Task<Culture?> GetCultureByIdAsync(string id)
        {
            await Task.CompletedTask; // Simulate async operation
            return _cultures.FirstOrDefault(c => c.Id.Equals(id, StringComparison.OrdinalIgnoreCase));
        }

        public async Task<IEnumerable<CultureSummary>> GetCulturesByAgeAsync(string age)
        {
            await Task.CompletedTask; // Simulate async operation
            return _cultures
                .Where(c => c.Age.Equals(age, StringComparison.OrdinalIgnoreCase))
                .Select(c => new CultureSummary
                {
                    Id = c.Id,
                    Name = c.Name,
                    Age = c.Age
                });
        }

        private List<Culture> InitializeSampleData()
        {
            return new List<Culture>
            {
                new Culture
                {
                    Id = "human-kingdoms-chaos",
                    Name = "Human Kingdoms",
                    Age = "chaos",
                    Politics = new PoliticsData
                    {
                        GovernanceSystems = "Feudal monarchies ruled by warrior-kings who claim divine right through conquest. Power flows from personal loyalty and military strength rather than formal institutions.",
                        PowerDistribution = "Highly centralized around the monarch and their inner circle of knights and nobles. Local lords hold significant autonomy in exchange for military service and tribute.",
                        Diplomacy = "Conducted through marriage alliances, hostage exchanges, and personal oaths of fealty. Treaties are often sealed with magical bindings or sacred rituals.",
                        PoliticalMovements = "Rebellious nobles seeking independence, religious movements claiming divine authority, and underground resistance from displaced native peoples."
                    },
                    Geography = new GeographyData
                    {
                        PhysicalLandscape = "Rolling hills and fertile valleys dotted with ancient forests. Rivers serve as natural boundaries between kingdoms, while mountain passes control trade routes.",
                        Settlements = "Fortified towns built around castle keeps, with villages clustered near defensive walls. Most settlements are within a day's ride of military protection.",
                        Territories = "Kingdoms defined by the reach of their armies rather than formal borders. Frontier regions remain contested and dangerous, filled with monsters and bandits.",
                        TravelRoutes = "Ancient roads maintained by local lords, often unsafe without armed escort. River transport preferred for bulk goods, while mountain paths known only to smugglers and guides."
                    },
                    Economics = new EconomicsData
                    {
                        TradeAndCommerce = "Barter systems dominate local exchange, with precious metals reserved for major transactions. Guilds control specialized crafts and jealously guard trade secrets.",
                        Currency = "Gold and silver coins bearing the king's seal, though their value fluctuates with political stability. Gems and magical components often serve as alternative currency.",
                        Resources = "Agriculture forms the economic backbone, supplemented by mining, forestry, and monster hunting. Magical components are highly valued but dangerous to obtain.",
                        EconomicSystems = "Feudal obligations and tribute systems. Peasants owe labor and produce to their lords, who in turn owe military service to their king."
                    },
                    History = new HistoryData
                    {
                        Origins = "Human settlers arrived by sea three centuries ago, bringing iron weapons and military organization that overwhelmed the native peoples' scattered tribes.",
                        MajorEvents = "The Great Conquest established the first human kingdoms. The War of Three Crowns saw siblings fight for succession. The Demon Incursion required unprecedented cooperation.",
                        Conflicts = "Constant border skirmishes between kingdoms, peasant uprisings against harsh lords, and ongoing resistance from displaced elven and orcish communities.",
                        Transitions = "From tribal invasions to established kingdoms, marked by the construction of great castles and the codification of feudal law."
                    },
                    CultureDetails = new CultureDetails
                    {
                        SocialStructure = "Rigid hierarchy from king to peasant, with social mobility primarily through military service or marriage. Knights form the warrior elite, while clergy hold significant influence.",
                        DailyLifeAndEntertainment = "Most people work from dawn to dusk in agricultural or craft labor. Entertainment includes festivals, bardic tales, martial tournaments, and religious ceremonies.",
                        TraditionsAndFestivals = "Harvest festivals, knighting ceremonies, royal progresses, and religious holy days. Victory celebrations often include the display of conquered banners and tribute.",
                        OtherCultures = "Suspicious of elven magic, respectful but wary of dwarven craftsmanship, hostile toward orcish 'savagery.' Native peoples are often enslaved or driven to marginal lands."
                    },
                    Religion = new ReligionData
                    {
                        BeliefsAndPantheon = "Worship of the Warrior God who grants victory to the righteous, alongside nature spirits inherited from conquered peoples. Divine right of kings is central doctrine.",
                        Practices = "Public ceremonies to bless weapons and crops, private confession to clerical advisors, ritual combat to resolve disputes, and pilgrimage to battle sites.",
                        Organizations = "Military orders of warrior-priests, local shrines maintained by village elders, and royal chaplains who serve as advisors and legitimizers of royal authority.",
                        Influence = "Religion justifies conquest and social hierarchy. Priests often serve as judges, record-keepers, and diplomatic envoys between kingdoms."
                    },
                    Law = new LawData
                    {
                        LegalSystems = "Royal decree and feudal custom form the basis of law. Trial by combat resolves serious disputes, while local lords handle minor infractions according to tradition.",
                        Enforcement = "Knights and men-at-arms serve as law enforcement, though their primary loyalty is to their lord rather than abstract justice. Local militias handle minor crimes.",
                        Justice = "Justice is personal and immediate. Punishments focus on restitution, public humiliation, or exile rather than imprisonment. Blood feuds are common but regulated.",
                        CrimesAndPunishments = "Theft punished by loss of hand, treason by execution, poaching by branding. Murder may be resolved through trial by combat or blood money to the victim's family."
                    },
                    Science = new ScienceData
                    {
                        KnowledgeAndEducation = "Literacy reserved for clergy and nobility. Knowledge transmitted through apprenticeship and oral tradition. Military engineering and tactics are the most advanced fields.",
                        Technology = "Iron working, siege engines, and basic alchemy. Water mills and windmills represent the height of mechanical achievement. Magic supplements technology where available.",
                        Research = "Focused on practical military applications. Alchemists experiment with poisons and explosives. Scholars preserve ancient texts but rarely innovate.",
                        Innovation = "Driven by military necessity rather than theoretical curiosity. Improvements in armor, weapons, and fortification design occur gradually through trial and battlefield experience."
                    }
                }
            };
        }
    }
}