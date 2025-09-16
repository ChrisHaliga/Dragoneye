import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject, fromEvent } from 'rxjs';
import { NotesService, PageNote, PageNoteRequest } from '../../services/notes.service';

@Component({
  selector: 'app-floating-notes',
  standalone: false,
  templateUrl: './floating-notes.component.html',
  styleUrl: './floating-notes.component.css'
})
export class FloatingNotesComponent implements OnInit, OnDestroy {
  isModalOpen = false;
  currentPageId = '';
  currentNote: PageNote | null = null;
  noteContent = '';
  isLoading = false;
  isSaving = false;
  saveMessage = '';
  hasNotes = false;
  autoSaveEnabled = false; // Default to false
  isRichTextMode = true; // Toggle between rich text and plain text
  
  private destroy$ = new Subject<void>();
  private saveSubject = new Subject<string>();

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private notesService: NotesService
  ) {}

  ngOnInit(): void {
    // Listen for route changes to update page ID
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.updatePageId();
      this.loadCurrentNote();
    });

    // Set initial page ID and load note
    this.updatePageId();
    this.loadCurrentNote();

    // Set up auto-save with debouncing
    this.saveSubject.pipe(
      debounceTime(2000), // Wait 2 seconds after user stops typing
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(content => {
      this.autoSaveNote(content);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private updatePageId(): void {
    // Get the current URL and use it as the page ID
    const url = this.router.url;
    
    // Extract meaningful parts from the URL
    if (url === '/' || url === '/home') {
      this.currentPageId = 'home';
    } else {
      // Remove leading slash and replace slashes with dashes for cleaner display
      this.currentPageId = url.substring(1).replace(/\//g, '-');
    }
  }

  private loadCurrentNote(): void {
    if (!this.currentPageId) return;
    
    this.isLoading = true;
    this.notesService.getPageNote(this.currentPageId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (note) => {
          this.currentNote = note;
          // Ensure noteContent is always a string, never an object
          this.noteContent = typeof note.content === 'string' ? note.content : '';
          this.hasNotes = this.noteContent.trim().length > 0;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading note:', error);
          this.isLoading = false;
          this.currentNote = null;
          this.noteContent = '';
          this.hasNotes = false;
        }
      });
  }

  openModal(): void {
    this.isModalOpen = true;
    this.saveMessage = '';
  }

  closeModal(): void {
    // Save any pending changes before closing
    if (this.noteContent !== (this.currentNote?.content || '')) {
      this.saveNote();
    }
    this.isModalOpen = false;
  }

  onModalBackdropClick(event: Event): void {
    // Close modal if clicked outside the modal content
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }

  onNoteContentChange(): void {
    // Only trigger auto-save if enabled
    if (this.autoSaveEnabled) {
      this.saveSubject.next(this.noteContent);
    }
  }

  onAutoSaveToggle(): void {
    // If auto-save is being enabled and there are unsaved changes, save now
    if (this.autoSaveEnabled && this.noteContent !== (this.currentNote?.content || '')) {
      this.saveNote();
    }
  }

  // Handle Quill editor content change
  onQuillContentChange(event: any): void {
    // Fix the [object Object] issue by properly extracting content
    let content = '';
    
    if (typeof event === 'string') {
      content = event;
    } else if (event && typeof event.html === 'string') {
      content = event.html;
    } else if (event && typeof event.content === 'string') {
      content = event.content;
    } else if (event && event.target && typeof event.target.value === 'string') {
      content = event.target.value;
    }
    
    // Ensure we never set [object Object]
    this.noteContent = content || '';
    this.onNoteContentChange();
  }

  saveNote(): void {
    if (!this.currentPageId || this.isSaving) return;

    this.isSaving = true;
    this.saveMessage = 'Saving...';

    const request: PageNoteRequest = {
      pageId: this.currentPageId,
      content: this.noteContent,
      modifiedBy: 'User' // In a real app, this would come from authentication
    };

    this.notesService.savePageNote(request)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (savedNote) => {
          this.currentNote = savedNote;
          this.hasNotes = savedNote.content.trim().length > 0;
          this.isSaving = false;
          this.saveMessage = 'Saved!';
          
          // Clear success message after 2 seconds
          setTimeout(() => {
            this.saveMessage = '';
          }, 2000);
        },
        error: (error) => {
          console.error('Error saving note:', error);
          this.isSaving = false;
          this.saveMessage = 'Error saving note';
          
          // Clear error message after 3 seconds
          setTimeout(() => {
            this.saveMessage = '';
          }, 3000);
        }
      });
  }

  private autoSaveNote(content: string): void {
    if (content === (this.currentNote?.content || '')) {
      return; // No changes to save
    }

    this.saveNote();
  }

  deleteNote(): void {
    if (!this.currentPageId || !this.hasNotes) return;

    if (confirm('Are you sure you want to delete this note?')) {
      this.notesService.deletePageNote(this.currentPageId)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (success) => {
            if (success) {
              this.noteContent = '';
              this.currentNote = null;
              this.hasNotes = false;
              this.saveMessage = 'Note deleted';
              
              setTimeout(() => {
                this.saveMessage = '';
              }, 2000);
            }
          },
          error: (error) => {
            console.error('Error deleting note:', error);
            this.saveMessage = 'Error deleting note';
            
            setTimeout(() => {
              this.saveMessage = '';
            }, 3000);
          }
        });
    }
  }

  getFormattedLastModified(): string {
    if (!this.currentNote || !this.currentNote.lastModified) {
      return '';
    }
    
    const date = new Date(this.currentNote.lastModified);
    return date.toLocaleString();
  }

  // Helper method to get the display name for the page
  getPageDisplayName(): string {
    if (this.currentPageId === 'home') {
      return 'Homepage';
    }
    
    // Convert URL segments to a readable format
    return this.currentPageId
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
