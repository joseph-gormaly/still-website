# STILL Website Changelog

## [1.4.0] - 2026-02-07

### Added - Research Blog Posts
- Created `/blog` directory for technical articles and research content
- Added navigation between main site and blog posts
- Implemented responsive design with Tailwind CSS for blog layout
- Added proper semantic HTML and accessibility features

#### Arctic Vegetation Monitoring Blog
- Integrated Arctic Vegetation Monitoring blog post to Research Labs section
- Published comprehensive research article: "Using Remote Sensing to Monitor 28 Years of Vegetation Changes in the Low Canadian Arctic"
  - Study period: 1981-2008 analysis of vegetation changes near Daring Lake TERS, NT
  - Interactive Chart.js visualizations of temperature trends and growing season changes
  - Complete dataset table with 28 years of temperature and phenology data
  - Includes study area map and phenology metrics figures
  - Full academic references and methodology section

#### Axolotl Conservation Blog
- Added "Axolotl Conservation" card to Research Labs section
- Published environmental justice article: "Protecting the Pulse of Xochimilco: The Fight for the Mexican Axolotl"
  - Focus on biodiversity and urbanization in Mexico City
  - Community-based conservation and stakeholder engagement
  - Social practice theory and multilevel perspective framework
  - Rich visual content including habitat maps, fieldwork photos, and educational imagery
  - Comprehensive references on environmental justice and amphibian conservation

### Enhanced
- Research Labs section now features real content (Arctic vegetation research and Axolotl conservation)
- Improved project showcase with clickable "Read More" links to actual content
- Better content organization with dedicated blog directory
- Expanded visual assets with professional photography and scientific imagery

## [1.3.0] - 2026-02-06

### Enhanced - Map Dashboard Improvements
- Protected areas layer now displays by default on page load
- Added loading indicators for layer initialization
- Significantly improved mobile responsive layout:
  - Optimized map height (400px mobile, 350px small mobile, 450px tablet)
  - Stats panel transforms to full-width below map on mobile devices
  - Layer controls switch to single-column grid on mobile
  - Touch-friendly button sizes (56px height on mobile, 48px minimum)
  - Enhanced Leaflet zoom controls (44px touch targets on mobile)
- Improved visual design:
  - Enhanced stats panel with backdrop blur and better shadows
  - Added hover states and transitions to stat items
  - Improved territory info section with gradient background
  - Better visual hierarchy with updated typography
  - Added loading animations (spinner and dots)
- Touch device optimizations:
  - Larger tap targets for all interactive elements
  - Better touch feedback with scale animations
  - Improved control positioning and spacing
- Enhanced accessibility:
  - Better ARIA labels for layer toggle states
  - Improved keyboard navigation support
- Added tablet-specific layout (769px-1024px)
- Improved TK/BC labels and overlay info styling
- Better visual feedback for active/loading states

## [1.2.0] - 2026-02-06

### Fixed - Critical Bugs
- Removed duplicate meta tags and link elements incorrectly placed in body section
- Fixed duplicate/nested footer elements - consolidated into single semantic footer
- Improved HTML structure and validity

### Added - Accessibility Improvements
- Enhanced skip navigation link with proper CSS for keyboard focus visibility
- Wrapped all sections in semantic `<main>` element with `id="main-content"`
- Added `role="main"` to main element for screen reader compatibility
- Added `aria-labelledby` attributes to all sections (home, about, resume, projects, dashboard, contact)
- Added unique IDs to all section headings for ARIA references
- Added `role="contentinfo"` to footer element
- Improved ARIA labels for social media links (more descriptive)
- Added `aria-hidden="true"` to decorative social media icons
- Added `aria-required="true"` to newsletter email input

### Enhanced - 404 Error Page
- Complete redesign matching main site branding and color palette
- Added proper meta tags (description, favicons)
- Integrated STILL logo and matching typography (Inter, Merriweather)
- Added semantic HTML with `role="main"` and `aria-labelledby`
- Implemented smooth fade-in and slide-up animations
- Improved button styling with hover and focus states
- Added proper ARIA labels throughout
- Enhanced visual design with gradient background and card-style container

### Improved - Visual Enhancements
- Enhanced page load animations with subtle slide-up transform effect
- Changed animation easing to cubic-bezier for smoother transitions
- Added staggered animation delays for sequential section loading
- Improved overall visual polish and user experience

### Technical
- Added security improvement: `rel="noopener noreferrer"` to external social links
- Cleaned up inline styles in favor of CSS classes where appropriate
- Improved code organization and maintainability

---

## [Planned: Visual Refresh - feature/visual-refresh]

- Apply nature-distilled color palette and neo-minimalist base styles
- Refine typography and add organic/handmade elements
- Add tactile maximalist details to dashboard/map UI
- Implement kinetic typography for hero/mission sections
- Introduce neomorphism for toggles and controls
- Add TK/BC Labels and Indigenous data sovereignty UI
- Optimize dashboard for vector tiles and performance
- Refine worldview toggle with segmented control and color cues
- Progressive disclosure for research/project sections
- Accessibility and engagement improvements

## Data Integration Notes
- Citation for WDPA/WD-OECM data:
	UNEP-WCMC and IUCN (2026), Protected Planet: The World Database on Protected Areas (WDPA) and World Database on Other Effective Area-based Conservation Measures (WD-OECM) [Online], February 2026, Cambridge, UK: UNEP-WCMC and IUCN. Available at: www.protectedplanet.net.

- Interested in integrating the Global Database on Protected Area Management Effectiveness (GD-PAME) from Protected Planet.
- Note: Direct GeoJSON download is not available; formats offered are CSV, SHP, File Geodatabase, and ESRI Web Service. Data may need conversion for web mapping use.


## [Unreleased] - Planned Improvements
### Deployment
- [x] Under construction page set as live landing page (index.html); main site backed up as main-site.html
### Assets
- [x] Created assets folder and added an image for future use

#### Anxiety to Agency - this is the goal.  Integrate this idea throughout potentialy

### Training & Learning Modules
- [ ] Develop interactive training modules based on past presentations and research papers
- [ ] Integrate "Bicycle as Metaphor" content for systems thinking and resilience
- [ ] Create multimedia lessons (video, slides, text) for Two-Eyed Seeing and Guardian Programs
- [ ] Add self-assessment quizzes and reflection prompts
- [ ] Implement progress tracking for users
- [ ] Provide downloadable resources and reading lists
- [ ] Enable community-contributed lesson content and feedback

### 🧠 Conceptual Visualizations

#### Two-Eyed Seeing Toggle
- [ ] Site-wide toggle switching between two visual modes
- [ ] **Emissary View** (Left-Hemisphere): Data in charts, GDP metrics, resource extraction values
- [ ] **Master View** (Right-Hemisphere): Relationships, cultural flows, ecological connections
- [ ] Demonstrates that the same reality can be "mapped" differently

-### Cookie Consent Language

-### Planned Graphics
- [ ] Graphic: Puzzle silhouette image addition

### Timeline
- [ ] Add a timeline of accomplishments to the website
- [ ] Graphic: Signpost at a crossroads between two relative and seemingly opposed fields of research
- [ ] Graphic: Map on a surface with a 3D head and spinal cord hovering above
- [ ] Adopt clear, user-friendly cookie consent statements similar to:
	- Required: Only cookies and Google Fonts are loaded (minimum website functionality is secured, no YouTube, Google Maps etc).
	- Comfort: Necessary cookies, Google Fonts, Google Maps, OpenStreetMap and Youtube are loaded.
	- Statistics: Necessary cookies, Google Fonts, Google Maps, OpenStreetMap, Youtube and Google Analytics are loaded.

#### Interactive "Maps of Meaning" Diagram
- [ ] Animated SVG with two overlapping worldview circles
- [ ] Colonial "Map" → linear, extractive arrows pointing outward
- [ ] Indigenous "Map" → cyclical, relational arrows flowing between land, community, health
- [ ] Click conflict zones to reveal case studies of epistemological clash

### 📊 Data Dashboards

#### Bio-Social Valuation (BSV) Calculator
- [ ] Interactive tool comparing Traditional CBA vs BSV Model
- [ ] Input land area and see holistic value breakdown
- [ ] Show cultural resilience, health outcomes, carbon sequestration
- [ ] Demonstrates the "measurement crisis" in left-hemisphere accounting

#### "Cost of Severance" Visualizer
- [ ] Map showing Indigenous communities with health outcome overlays
- [ ] Visualize distance from traditional territory
- [ ] Show years since land access was restricted
- [ ] Demonstrate severance as a "social determinant of health"

### 🗺️ Enhanced Dashboard Features

#### Guardian Program Impact Tracker
- [ ] Map pins showing active Guardian Programs / IPCAs across Canada
- [ ] Click for "synergy metrics": jobs, species monitored, cultural events, health improvements
- [ ] Before/after satellite imagery toggle for stewarded lands

#### Worldview Collision Timeline
- [ ] Scrolling timeline from 1492 → Present
- [ ] Key colonial policies (Indian Act, residential schools, terra nullius)
- [ ] Counter-movements (UNDRIP, TRC, IPCA designations)
- [ ] Framed as "Left-Hemisphere Impositions" vs "Integrated Reclamation"

### 🎨 Experimental/Artistic

#### "Hallucinating Reality" Perception Demo
- [ ] Embed optical illusions based on Jiang's Kant discussion
- [ ] Captions connecting perception to colonial vs Indigenous "seeing"
- [ ] Interactive reveal showing how frameworks shape what we see

#### Hemisphere Drawing Exercise
- [ ] Interactive canvas for users to draw objects in two modes
- [ ] Left mode: Grid, straight lines, measurements only
- [ ] Right mode: Freehand, flowing, contextual
- [ ] Reveals McGilchrist's thesis experientially

### 📚 Research Integration

#### Living Bibliography Network
- [ ] Interactive citation network showing source connections
- [ ] McGilchrist → Peterson → Jiang → BSV Model
- [ ] Click nodes to read key quotes
- [ ] Visualizes the intellectual "map" behind the research

#### "Ask the Research" Chatbot
- [ ] Local LLM (Ollama) trained on research proposal docs
- [ ] Visitors can ask questions about Two-Eyed Seeing, Guardian Programs, etc.
- [ ] Demonstrates Technical Sovereignty research in practice

---

### SEO
- [ ] Add meta description tag for search engine optimization
- [ ] Add Open Graph tags for social media sharing
- [ ] Add Twitter Card meta tags

### Accessibility
- [x] Add skip navigation link
- [x] Add semantic HTML5 elements (header, main, footer)
- [x] Ensure proper ARIA labels where needed
- [ ] Test with screen reader

### Engagement
- [x] Add contact email or contact form link
- [ ] Add social media links (if applicable)
- [ ] Add newsletter signup (optional)

### Visual Polish
- [x] Add subtle fade-in animations on page load
- [x] Add hover effects for interactive elements
- [ ] Consider adding a logo/icon

### Technical
- [x] Add favicon for browser tabs
- [x] Add Apple touch icon for mobile bookmarks
- [x] Add 404 error page

### Structure
- [x] Add footer with copyright year
- [x] Create About section
- [x] Create Contact section

---

## [1.1.0] - 2026-02-04

### Added - Scrolling Portfolio Redesign
- Sticky navigation bar with smooth scrolling
- Five distinct sections: Home, About, Resume, Projects, Contact
- Timeline component for Resume section
- Project cards with hover effects
- Contact section with email link
- Footer with copyright
- Responsive design for mobile devices
- Flexbox-based layout system
- Alternating section background colors
- CSS transitions and hover states

---

## [1.0.0] - 2026-02-04

### Initial Release
- Basic landing page with STILL branding
- Responsive design
- Clean typography
- Tagline and mission statement
