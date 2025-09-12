# Game Design Wiki - Dragoneye Project

A visual skeleton for a game design wiki built with Angular and .NET, featuring a responsive layout, navigation system, and sample game design content.

## Project Structure

### Frontend (Angular)
- **Location**: `dragoneye.client/`
- **Framework**: Angular 19 with Bootstrap 5
- **Components**:
  - `SidebarComponent`: Fixed-width navigation panel with collapsible sections
  - `PageViewComponent`: Main content display area with routing
  - `BreadcrumbComponent`: Navigation breadcrumb trail
  - `PageHeaderComponent`: Page title, certainty status, and action buttons

### Backend (.NET)
- **Location**: `Dragoneye.Server/`
- **Framework**: .NET 9 Web API
- **Models**:
  - `Page`: Game design page with content, tags, and certainty level
  - `CertaintyLevel`: Enum for content status (Locked, Testing, Ideas, Questions)
  - `NavigationItem`: Hierarchical navigation structure
- **Services**:
  - `PageService`: Sample data provider for game design pages
  - `NavigationService`: Navigation structure provider
- **Controllers**:
  - `PagesController`: API endpoints for pages and navigation

## Features Implemented

### Layout & Design
- ✅ Two-column layout with fixed sidebar and flexible main content
- ✅ Responsive design that collapses sidebar on mobile
- ✅ Bootstrap-based styling with custom theme
- ✅ Full-height viewport utilization

### Navigation System
- ✅ Collapsible navigation sections with emoji icons
- ✅ Four main sections: Core Mechanics (🎯), Systems (⚔️), Content (📚), Setting & Lore (🌍)
- ✅ Sample subsections with realistic game design topics
- ✅ Active link highlighting
- ✅ Breadcrumb navigation

### Content Display
- ✅ Page header with title, certainty badges, and action buttons
- ✅ Content area with wiki-style formatting
- ✅ Color-coded certainty levels:
  - 🔒 **Locked** (Green): Finalized content
  - 🧪 **Testing** (Yellow): Content being playtested
  - 💡 **Ideas** (Blue): Preliminary ideas
  - ❓ **Questions** (Red): Content with unresolved questions
- ✅ Tags and metadata display
- ✅ Sample cross-references with wiki-link styling

### Sample Content
- ✅ 10 realistic game design pages covering:
  - Card System mechanics
  - Combat and social systems
  - Character domains (Warrior, Scholar)
  - Race descriptions (Human)
  - World lore and exploration
- ✅ Varied certainty levels across content
- ✅ Cross-references between related topics

## API Endpoints

### GET `/api/pages`
Returns list of all pages with metadata

### GET `/api/pages/{id}`
Returns specific page with full content

### GET `/api/pages/navigation`
Returns hierarchical navigation structure

## Running the Application

### Prerequisites
- Node.js 18+
- .NET 9 SDK
- Visual Studio 2022 or VS Code

### Backend (.NET)
```bash
cd Dragoneye.Server
dotnet run
```
Server runs on `https://localhost:7154`

### Frontend (Angular)
```bash
cd dragoneye.client
npm install
ng serve
```
Client runs on `https://localhost:62251` with proxy to backend

### Development Build
```bash
# Frontend
cd dragoneye.client
ng build

# Backend
cd Dragoneye.Server
dotnet build
```

## Technology Stack

- **Frontend**: Angular 19, TypeScript, Bootstrap 5, Bootstrap Icons
- **Backend**: .NET 9, ASP.NET Core Web API
- **Styling**: Bootstrap 5 with custom CSS
- **Build Tools**: Angular CLI, .NET CLI

## Future Development

This visual skeleton provides a foundation for:
- Database integration (Entity Framework)
- User authentication and authorization
- Real-time editing capabilities
- Version control for content
- Advanced search functionality
- Content management system
- Export/import capabilities

## Development Notes

- All functionality is visual/sample data only
- No database persistence implemented
- Search, edit, and other interactive features are placeholder
- Responsive design tested for desktop, tablet, and mobile viewports
- Bootstrap JavaScript included for future interactive components