using Dragoneye.Server.Models;

namespace Dragoneye.Server.Services
{
    public interface ISkillTreeService
    {
        SkillTreeData GetSkillTreeData();
    }

    public class SkillTreeService : ISkillTreeService
    {
        private static readonly TextNodeData[] TextNodePool = new TextNodeData[]
        {
            new TextNodeData { Title = "Fireball", Type = "Action" },
            new TextNodeData { Title = "Lightning Strike", Type = "Action" },
            new TextNodeData { Title = "Ice Shard", Type = "Action" },
            new TextNodeData { Title = "Earth Shield", Type = "Action" },
            new TextNodeData { Title = "Wind Blade", Type = "Action" },
            new TextNodeData { Title = "Shadow Strike", Type = "Action" },
            new TextNodeData { Title = "Holy Light", Type = "Action" },
            new TextNodeData { Title = "Poison Dart", Type = "Action" },
            new TextNodeData { Title = "Healing Potion", Type = "Action" },
            new TextNodeData { Title = "Rage", Type = "Action" },
            new TextNodeData { Title = "Quick Step", Type = "Action" },
            new TextNodeData { Title = "Power Shot", Type = "Action" },
            new TextNodeData { Title = "Shield Bash", Type = "Action" },
            new TextNodeData { Title = "Arcane Missile", Type = "Action" },
            new TextNodeData { Title = "Stealth", Type = "Passive" },
            new TextNodeData { Title = "Focus Mind", Type = "Passive" },
            new TextNodeData { Title = "Iron Skin", Type = "Passive" },
            new TextNodeData { Title = "Critical Strike", Type = "Passive" },
            new TextNodeData { Title = "Mana Burn", Type = "Action" },
            new TextNodeData { Title = "Teleport", Type = "Action" },
            new TextNodeData { Title = "Battle Cry", Type = "Action" },
            new TextNodeData { Title = "Vampiric Drain", Type = "Action" },
            new TextNodeData { Title = "Divine Protection", Type = "Passive" },
            new TextNodeData { Title = "Whirlwind", Type = "Action" },
            new TextNodeData { Title = "Chain Lightning", Type = "Action" },
            new TextNodeData { Title = "Dodge Roll", Type = "Action" },
            new TextNodeData { Title = "Soul Burn", Type = "Action" },
            new TextNodeData { Title = "Blessing", Type = "Passive" },
            new TextNodeData { Title = "Double Strike", Type = "Passive" },
            new TextNodeData { Title = "Meteor", Type = "Action" }
        };

        private static readonly Random Random = new Random();

        public SkillTreeData GetSkillTreeData()
        {
            var shuffledNodes = TextNodePool.OrderBy(x => Random.Next()).ToArray();
            
            // Ensure we have at least 7 nodes for the tree
            var selectedNodes = shuffledNodes.Take(7).ToArray();
            
            // Generate smarter edges ensuring all nodes are reachable from center
            var (coreToInner, innerToInner, innerToOuter, outerToOuter) = GenerateConnectedEdges();

            return new SkillTreeData
            {
                Center = new Node
                {
                    NodeType = "text",
                    Data = selectedNodes[0] // First selected node as center
                },
                Outer = new Node[]
                {
                    new Node { NodeType = "specialization", Data = null },
                    new Node { NodeType = "text", Data = selectedNodes[1] },
                    new Node { NodeType = "stat", Data = null },
                    new Node { NodeType = "multiclass", Data = null },
                    new Node { NodeType = "text", Data = selectedNodes[2] },
                    new Node { NodeType = "text", Data = selectedNodes[3] }
                },
                Inner = new Node[]
                {
                    new Node { NodeType = "text", Data = selectedNodes[4] },
                    new Node { NodeType = "stat", Data = null },
                    new Node { NodeType = "text", Data = selectedNodes[5] },
                    new Node { NodeType = "stat", Data = null },
                    new Node { NodeType = "text", Data = selectedNodes[6] },
                    new Node { NodeType = "stat", Data = null }
                },
                Edges = new SkillTreeEdges
                {
                    CoreToInner = coreToInner,
                    InnerToInner = innerToInner,
                    InnerToOuter = innerToOuter,
                    OuterToOuter = outerToOuter
                }
            };
        }

        private bool[] GenerateRandomBoolArray(int length, double probability)
        {
            var result = new bool[length];
            for (int i = 0; i < length; i++)
            {
                result[i] = Random.NextDouble() < probability;
            }
            return result;
        }

        private (bool[] coreToInner, bool[] innerToInner, bool[] innerToOuter, bool[] outerToOuter) GenerateConnectedEdges()
        {
            // Define known working patterns exactly as specified
            var patterns = new[]
            {
                // Pattern 1: c-i: 0,3  i-i: 0,2,3,5  i-o: 0,3  o-o: 0,2,3,5
                new {
                    CoreToInner = new[] { 0, 3 },
                    InnerToInner = new[] { 0, 2, 3, 5 },
                    InnerToOuter = new[] { 0, 3 },
                    OuterToOuter = new[] { 0, 2, 3, 5 }
                },
                // Pattern 2: c-i: 0  i-i: 0,1,2,3,4  i-o: 5  o-o: 0,1,2,3,5
                new {
                    CoreToInner = new[] { 0 },
                    InnerToInner = new[] { 0, 1, 2, 3, 4 },
                    InnerToOuter = new[] { 5 },
                    OuterToOuter = new[] { 0, 1, 2, 3, 5 }
                },
                // Pattern 3: c-i: 0,2,4  i-i: 1,3,5  i-o: 1,3,5  o-o: 0,2,4
                new {
                    CoreToInner = new[] { 0, 2, 4 },
                    InnerToInner = new[] { 1, 3, 5 },
                    InnerToOuter = new[] { 1, 3, 5 },
                    OuterToOuter = new[] { 0, 2, 4 }
                }
            };

            // Randomly select a pattern
            var selectedPattern = patterns[Random.Next(patterns.Length)];

            // Convert to boolean arrays
            var coreToInner = new bool[6];
            var innerToInner = new bool[6];
            var innerToOuter = new bool[6];
            var outerToOuter = new bool[6];

            foreach (var index in selectedPattern.CoreToInner)
                coreToInner[index] = true;

            foreach (var index in selectedPattern.InnerToInner)
                innerToInner[index] = true;

            foreach (var index in selectedPattern.InnerToOuter)
                innerToOuter[index] = true;

            foreach (var index in selectedPattern.OuterToOuter)
                outerToOuter[index] = true;

            return (coreToInner, innerToInner, innerToOuter, outerToOuter);
        }
    }
}