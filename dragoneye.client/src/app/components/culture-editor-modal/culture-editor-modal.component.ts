import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { 
  Culture, 
  PoliticsData, 
  GeographyData, 
  EconomicsData, 
  HistoryData, 
  CultureDetails, 
  ReligionData, 
  LawData, 
  ScienceData 
} from '../../models/page.model';
import { CultureService } from '../../services/culture.service';

@Component({
  selector: 'app-culture-editor-modal',
  standalone: false,
  templateUrl: './culture-editor-modal.component.html',
  styleUrl: './culture-editor-modal.component.css'
})
export class CultureEditorModalComponent implements OnChanges {
  @Input() isOpen = false;
  @Input() editingCulture: Culture | null = null; // New input for editing
  @Input() initialActiveTab = 'basic'; // New input for setting initial tab
  @Output() closeModal = new EventEmitter<void>();
  @Output() cultureCreated = new EventEmitter<Culture>();
  @Output() cultureUpdated = new EventEmitter<Culture>(); // New output for updates

  activeTab = 'basic';
  isLoading = false;
  errorMessage = '';
  isEditMode = false; // Track if we're editing or creating

  culture: Culture = this.getEmptyCulture();

  ages = [
    { value: 'chaos', label: 'Age of Chaos' },
    { value: 'order', label: 'Age of Order' },
    { value: 'ascension', label: 'Age of Ascension' }
  ];

  constructor(private cultureService: CultureService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen'] && this.isOpen) {
      this.initializeModal();
    }
    
    if (changes['editingCulture'] && this.editingCulture) {
      this.culture = JSON.parse(JSON.stringify(this.editingCulture)); // Deep copy
      this.isEditMode = true;
    }

    if (changes['initialActiveTab'] && this.initialActiveTab) {
      this.activeTab = this.initialActiveTab;
    }
  }

  private initializeModal(): void {
    if (this.editingCulture) {
      this.culture = JSON.parse(JSON.stringify(this.editingCulture)); // Deep copy
      this.isEditMode = true;
    } else {
      this.culture = this.getEmptyCulture();
      this.isEditMode = false;
    }
    
    this.activeTab = this.initialActiveTab || 'basic';
    this.errorMessage = '';
    this.isLoading = false;
  }

  onClose(): void {
    this.closeModal.emit();
    this.resetForm();
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  generateId(): void {
    if (this.culture.name && this.culture.age && !this.isEditMode) {
      this.culture.id = `${this.culture.name.toLowerCase().replace(/\s+/g, '-')}-${this.culture.age}`;
    }
  }

  onSubmit(): void {
    if (!this.isFormValid()) {
      this.errorMessage = 'Please fill in the required fields (Name and Age).';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    if (this.isEditMode) {
      // Update existing culture
      this.cultureService.updateCulture(this.culture).subscribe({
        next: (updatedCulture) => {
          this.cultureUpdated.emit(updatedCulture);
          this.onClose();
        },
        error: (error) => {
          console.error('Error updating culture:', error);
          this.errorMessage = 'Failed to update culture. Please try again.';
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        }
      });
    } else {
      // Create new culture
      if (!this.culture.id) {
        this.generateId();
      }

      this.cultureService.createCulture(this.culture).subscribe({
        next: (createdCulture) => {
          this.cultureCreated.emit(createdCulture);
          this.onClose();
        },
        error: (error) => {
          console.error('Error creating culture:', error);
          this.errorMessage = 'Failed to create culture. Please try again.';
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        }
      });
    }
  }

  private isFormValid(): boolean {
    return !!(this.culture.name && this.culture.age);
  }

  private resetForm(): void {
    this.activeTab = 'basic';
    this.isLoading = false;
    this.errorMessage = '';
    this.isEditMode = false;
    this.culture = this.getEmptyCulture();
  }

  private getEmptyCulture(): Culture {
    return {
      id: '',
      name: '',
      age: 'chaos',
      politics: {
        governanceSystems: '',
        powerDistribution: '',
        diplomacy: '',
        politicalMovements: ''
      },
      geography: {
        physicalLandscape: '',
        settlements: '',
        territories: '',
        travelRoutes: ''
      },
      economics: {
        tradeAndCommerce: '',
        currency: '',
        resources: '',
        economicSystems: ''
      },
      history: {
        origins: '',
        majorEvents: '',
        conflicts: '',
        transitions: ''
      },
      cultureDetails: {
        socialStructure: '',
        dailyLifeAndEntertainment: '',
        traditionsAndFestivals: '',
        otherCultures: ''
      },
      religion: {
        beliefsAndPantheon: '',
        practices: '',
        organizations: '',
        influence: ''
      },
      law: {
        legalSystems: '',
        enforcement: '',
        justice: '',
        crimesAndPunishments: ''
      },
      science: {
        knowledgeAndEducation: '',
        technology: '',
        research: '',
        innovation: ''
      }
    };
  }
}
