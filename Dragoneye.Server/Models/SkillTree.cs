namespace Dragoneye.Server.Models
{
    public class TextNodeData
    {
        public string Title { get; set; } = string.Empty;
        public string Type { get; set; } = string.Empty;
    }

    public class Node
    {
        public string NodeType { get; set; } = string.Empty;
        public TextNodeData? Data { get; set; }
    }

    public class SkillTreeEdges
    {
        public bool[] CoreToInner { get; set; } = new bool[6];
        public bool[] InnerToInner { get; set; } = new bool[6];
        public bool[] InnerToOuter { get; set; } = new bool[6];
        public bool[] OuterToOuter { get; set; } = new bool[6];
    }

    public class SkillTreeData
    {
        public Node Center { get; set; } = new Node();
        public Node[] Inner { get; set; } = new Node[6];
        public Node[] Outer { get; set; } = new Node[6];
        public SkillTreeEdges Edges { get; set; } = new SkillTreeEdges();
    }
}