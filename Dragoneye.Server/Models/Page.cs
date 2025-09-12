namespace Dragoneye.Server.Models
{
    public class Page 
    {
        public string Id { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public string Section { get; set; } = string.Empty;
        public List<string> Tags { get; set; } = new List<string>();
        public CertaintyLevel Certainty { get; set; }
        public DateTime Updated { get; set; }
    }

    public enum CertaintyLevel 
    {
        Locked,    // 🔒
        Testing,   // 🧪  
        Ideas,     // 💡
        Questions  // ❓
    }
}