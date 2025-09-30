export interface TextNodeData {
  title: string;
  type: string;
}

export interface Node {
  nodeType: 'text' | 'stat' | 'specialization' | 'multiclass';
  data: TextNodeData | null;
}

export interface SkillTreeData {
  center: Node;
  inner: Node[];
  outer: Node[];
  edges: {
    coreToInner: boolean[];
    innerToInner: boolean[];
    innerToOuter: boolean[];
    outerToOuter: boolean[];
  };
}

export interface NodeConfig {
  type: 'text' | 'specialization' | 'stat' | 'multiclass';
  x: number;
  y: number;
  isCentral?: boolean;
  title?: string;
  nodeType?: string;
}

export interface TextLayout {
  line1: string;
  line2: string;
  fontSize: number;
}