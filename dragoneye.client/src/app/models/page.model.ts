export interface Page {
  id: string;
  title: string;
  content: string;
  section: string;
  tags: string[];
  certainty: CertaintyLevel;
  updated: Date;
}

export enum CertaintyLevel {
  Locked = 0,    // 🔒
  Testing = 1,   // 🧪  
  Ideas = 2,     // 💡
  Questions = 3  // ❓
}

export interface NavigationItem {
  title: string;
  icon: string;
  children?: NavigationItem[];
  route?: string;
  pageId?: string;
  isExpanded?: boolean;
}

export const CertaintyIcons = {
  [CertaintyLevel.Locked]: '🔒',
  [CertaintyLevel.Testing]: '🧪',
  [CertaintyLevel.Ideas]: '💡',
  [CertaintyLevel.Questions]: '❓'
};

export const CertaintyLabels = {
  [CertaintyLevel.Locked]: 'Locked',
  [CertaintyLevel.Testing]: 'Testing',
  [CertaintyLevel.Ideas]: 'Ideas',
  [CertaintyLevel.Questions]: 'Questions'
};

export const CertaintyColors = {
  [CertaintyLevel.Locked]: 'success',
  [CertaintyLevel.Testing]: 'warning',
  [CertaintyLevel.Ideas]: 'primary',
  [CertaintyLevel.Questions]: 'danger'
};