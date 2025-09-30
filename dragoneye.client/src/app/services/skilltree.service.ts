import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SkillTreeData } from '../models/skilltree.model';

@Injectable({
  providedIn: 'root'
})
export class SkillTreeService {
  private baseUrl = '/api/skilltree';

  constructor(private http: HttpClient) {}

  getSkillTreeData(): Observable<SkillTreeData> {
    return this.http.get<SkillTreeData>(this.baseUrl);
  }
}