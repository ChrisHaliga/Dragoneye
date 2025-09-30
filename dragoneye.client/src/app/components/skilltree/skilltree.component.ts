import { Component, Input } from '@angular/core';
import { SkillTreeData, NodeConfig, TextLayout, Node } from '../../models/skilltree.model';

@Component({
  selector: 'app-skilltree',
  standalone: false,
  templateUrl: './skilltree.component.html',
  styleUrl: './skilltree.component.css'
})

export class SkilltreeComponent {
  @Input() skillTreeData!: SkillTreeData;

  // Coordinate mappings
  private coordinates = {
    outer: [
      { x: 31.749998, y: 21.232817 },  // top
      { x: 51.752487, y: 32.841404 },  // top-right
      { x: 51.856144, y: 56.058594 },  // bottom-right
      { x: 31.749998, y: 67.667183 },  // bottom
      { x: 11.643854, y: 56.05859 },   // bottom-left
      { x: 11.643328, y: 32.841408 }   // top-left
    ],
    inner: [
      { x: 31.749998, y: 32.841408 },  // top
      { x: 41.751244, y: 38.645706 },  // top-right
      { x: 41.80307, y: 50.254299 },   // bottom-right
      { x: 31.749998, y: 56.058594 },  // bottom
      { x: 21.696926, y: 50.254299 },  // bottom-left
      { x: 21.748749, y: 38.645706 }   // top-left
    ],
    center: { x: 31.75, y: 44.450001 }
  };

  // Computed property that converts to working format
  get nodeConfigs(): NodeConfig[] {
    const configs: NodeConfig[] = [];
    
    // Add outer ring
    this.skillTreeData.outer.forEach((node, i) => {
      configs.push(this.convertToNodeConfig(node, this.coordinates.outer[i], false));
    });
    
    // Add inner ring
    this.skillTreeData.inner.forEach((node, i) => {
      configs.push(this.convertToNodeConfig(node, this.coordinates.inner[i], false));
    });
    
    // Add center
    configs.push(this.convertToNodeConfig(this.skillTreeData.center, this.coordinates.center, true));
    
    return configs;
  }

  private convertToNodeConfig(node: Node, coords: {x: number, y: number}, isCentral: boolean): NodeConfig {
    if (node.nodeType === 'text' && node.data !== null) {
      return {
        type: node.nodeType,
        x: coords.x,
        y: coords.y,
        isCentral,
        title: node.data.title,
        nodeType: node.data.type
      };
    } else {
      return {
        type: node.nodeType,
        x: coords.x,
        y: coords.y,
        isCentral
      };
    }
  }

  private generateRandomNodeTypes(): ('text' | 'specialization' | 'stat' | 'multiclass')[] {
    const types: ('text' | 'specialization' | 'stat' | 'multiclass')[] = ['text', 'specialization', 'stat', 'multiclass'];
    const randomTypes = Array.from({ length: 13 }, () => types[Math.floor(Math.random() * types.length)]);
    // Ensure center node (index 12) is always text
    randomTypes[12] = 'text';
    return randomTypes;
  }

  getTextLayout(title: string): TextLayout {
    if (!title) return { line1: '', line2: '', fontSize: 1.05833 };

    const words = title.split(' ');
    const maxCharsPerLine = 12; // Approximate character limit for readability
    const longWordThreshold = 11; // Single words longer than this get smaller font

    // If single word
    if (words.length === 1) {
      if (words[0].length > longWordThreshold) {
        return { line1: words[0], line2: '', fontSize: 0.8 };
      }
      return { line1: words[0], line2: '', fontSize: 1.05833 };
    }

    // If two words
    if (words.length === 2) {
      const [word1, word2] = words;
      
      // Check if either word is too long
      if (word1.length > longWordThreshold || word2.length > longWordThreshold) {
        return { line1: word1, line2: word2, fontSize: 0.8 };
      }
      
      // Check if combined length is reasonable for one line
      if (title.length <= maxCharsPerLine) {
        return { line1: title, line2: '', fontSize: 1.05833 };
      }
      
      // Split into two lines
      return { line1: word1, line2: word2, fontSize: 1.05833 };
    }

    // Multiple words - try to balance lines
    let bestSplit = 1;
    let bestDifference = Infinity;
    
    for (let i = 1; i < words.length; i++) {
      const line1 = words.slice(0, i).join(' ');
      const line2 = words.slice(i).join(' ');
      const difference = Math.abs(line1.length - line2.length);
      
      if (difference < bestDifference) {
        bestDifference = difference;
        bestSplit = i;
      }
    }
    
    const line1 = words.slice(0, bestSplit).join(' ');
    const line2 = words.slice(bestSplit).join(' ');
    
    // Check if any line has very long words
    const hasLongWords = words.some(word => word.length > longWordThreshold);
    const fontSize = hasLongWords ? 0.8 : 1.05833;
    
    return { line1, line2, fontSize };
  }
}
