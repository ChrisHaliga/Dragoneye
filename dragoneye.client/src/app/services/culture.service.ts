import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CultureSummary {
  id: string;
  name: string;
  age: 'chaos' | 'order' | 'ascension';
}

export interface CultureData {
  id: string;
  name: string;
  age: 'chaos' | 'order' | 'ascension';
  politics: PoliticsData;
  geography: GeographyData;
  economics: EconomicsData;
  history: HistoryData;
  cultureDetails: CultureDetails;
  religion: ReligionData;
  law: LawData;
  science: ScienceData;
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

@Injectable({
  providedIn: 'root'
})
export class CultureService {
  private apiUrl = '/api/culture'; // Updated to match backend routes

  constructor(private http: HttpClient) { }

  getAllCultures(): Observable<CultureSummary[]> {
    return this.http.get<CultureSummary[]>(`${this.apiUrl}/cultures`);
  }

  getCultureById(id: string): Observable<CultureData> {
    return this.http.get<CultureData>(`${this.apiUrl}/culture/${id}`);
  }

  getCulturesByAge(age: string): Observable<CultureSummary[]> {
    return this.http.get<CultureSummary[]>(`${this.apiUrl}/cultures/age/${age}`);
  }
}
