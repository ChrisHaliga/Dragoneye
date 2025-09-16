export interface Page {
  id: string;
  title: string;
  content: string;
  section: string;
  pageId: string;  // Optional - null for section-level pages
  tags: string[];
  certainty: CertaintyLevel;
  updated: Date;
}

export interface Homepage {
  id: string;
  title: string;
  subtitle: string;
  heroContent: string;
  quickAccessCards: QuickAccessCard[];
  recentUpdates: RecentUpdate[];
  stats: StatCard[];
  gettingStarted: GettingStartedSection;
  updated: Date;
  
  // UI Text for localization
  getStartedButtonText: string;
  exploreButtonText: string;
  exploreGameTitle: string;
  exploreGameSubtitle: string;
  quickLinkActionText: string;
  gettingStartedSubtitle: string;
  startLearningButtonText: string;
  loadingText: string;
  errorHeading: string;
  retryButtonText: string;
}

export interface QuickAccessCard {
  pageId: string;
  title: string;
  description: string;
  icon: string;
  badgeText: string;
  badgeColor: string;
  displayOrder: number;
}

export interface RecentUpdate {
  pageId: string;
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  updateDate: Date;
  displayOrder: number;
}

export interface StatCard {
  label: string;
  value: string;
  description: string;
  displayOrder: number;
}

export interface GettingStartedSection {
  title: string;
  steps: GettingStartedStep[];
}

export interface GettingStartedStep {
  title: string;
  description: string;
  icon: string;
  pageId: string;
  stepNumber: number;
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

// Culture models
export interface Culture {
  id: string;
  name: string;
  age: string; // "chaos", "order", "ascension"
  politics: PoliticsData;
  geography: GeographyData;
  economics: EconomicsData;
  history: HistoryData;
  cultureDetails: CultureDetails;
  religion: ReligionData;
  law: LawData;
  science: ScienceData;
}

export interface CultureSummary {
  id: string;
  name: string;
  age: string;
}

export interface PoliticsData {
  governanceSystems: string;
  powerDistribution: string;
  diplomacy: string;
  politicalMovements: string;
}

export interface GeographyData {
  physicalLandscape: string;
  settlements: string;
  territories: string;
  travelRoutes: string;
}

export interface EconomicsData {
  tradeAndCommerce: string;
  currency: string;
  resources: string;
  economicSystems: string;
}

export interface HistoryData {
  origins: string;
  majorEvents: string;
  conflicts: string;
  transitions: string;
}

export interface CultureDetails {
  socialStructure: string;
  dailyLifeAndEntertainment: string;
  traditionsAndFestivals: string;
  otherCultures: string;
}

export interface ReligionData {
  beliefsAndPantheon: string;
  practices: string;
  organizations: string;
  influence: string;
}

export interface LawData {
  legalSystems: string;
  enforcement: string;
  justice: string;
  crimesAndPunishments: string;
}

export interface ScienceData {
  knowledgeAndEducation: string;
  technology: string;
  research: string;
  innovation: string;
}