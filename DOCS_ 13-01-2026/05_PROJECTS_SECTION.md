# Projects Section - Featured Work Documentation

## Overview
The Projects section showcases your portfolio work through an interactive carousel featuring detailed project cards. This section is dynamically populated from MDX project files.

---

## Section Header

**Title:** Featured Projects
**Format:** Carousel with auto-play functionality
**New Feature:** Swipe gestures for mobile navigation

---

## Project Structure

Projects are loaded from the `/content` directory as MDX files. Each project includes:

### Metadata Fields:
- **title** - Project name
- **subtitle** - Category/type tag
- **description** - Brief overview
- **image** - Hero image path
- **color** - Gradient theme color
- **iconName** - Associated icon (Layout, Cpu, Terminal, Shield)
- **stats** - Key impact metric
- **tech[]** - Technology stack array
- **demoLink** - Live demo URL
- **codeLink** - GitHub repository URL

---

## Featured Projects

Based on the file structure, your portfolio includes these projects:

### 1. FuelShield
**File:** `app/projects/fuelshield/page.tsx`
**Category:** IoT Security Project
**Expected Icon:** Shield

This project likely focuses on:
- Fuel theft prevention
- IoT-based monitoring
- Security systems

---

### 2. Sanjivani (Multiple Versions)

#### Sanjivani V1
**File:** `app/projects/sanjivani/page.tsx`

#### Sanjivani V2
**File:** `app/projects/sanjivani-v2/page.tsx`

This appears to be an iterative project with significant updates, suggesting:
- Agricultural/farming focus
- Health monitoring system
- Multiple development phases

---

### 3. IoT Security
**File:** `app/projects/iot-security/page.tsx`
**Category:** Security-focused IoT
**Expected Icon:** Shield

Likely covers:
- IoT device security
- Network protection
- Threat prevention

---

### 4. Smart CRM
**File:** `app/projects/smart-crm/page.tsx`
**Category:** Business Application
**Expected Icon:** Layout

This project likely features:
- Customer relationship management
- Business automation
- Smart data analytics

---

## Carousel Features

### Auto-Play Functionality
- **Duration:** 5 seconds per slide
- **Pause:** On hover
- **Loop:** Continuous rotation

## Navigation 🧭Powerful navigation features for seamless browsing:

### **Desktop Navigation**
- **Arrow Buttons**: Large left/right chevrons positioned outside the carousel
- **Hover Effects**: Buttons scale up and glow on hover
- **Auto-play**: Automatically cycles every 5 seconds
- **Pause on Hover**: Auto-play pauses when hovering over the carousel

### **Mobile Navigation**
- **Swipe Gestures** ⭐: Drag left/right to navigate between projects
- **Touch-Friendly**: 50px swipe threshold for reliable gesture detection
- **Elastic Feedback**: Card bounces back if swipe is too short
- **Visual Cursor**: Shows grab cursor during interaction

### **Universal Controls**
- **Dot Indicators**: Click any dot to jump directly to that project
- **Progress Bar**: Animated timer showing auto-play progress
- **Keyboard Accessible**: Full keyboard navigation support

---

## Card Layout

Each project card features a two-column layout:

### Left Column: Visual Side
- **Full-height project image**
- **Gradient overlay** (project-specific color)
- **Fade gradient** to blend with content side
- **Floating icon badge** (top-left)
- **Hover effect:** Slight scale increase

### Right Column: Content Side
- **Category badge** (subtitle)
- **Large project title** (4xl-5xl font)
- **Description** (3-line clamp)
- **Key Impact card** with stats metric
- **Technology tags** (flex-wrapped badges)
- **Three action buttons:**
  1. View Case Study (Primary)
  2. Live Demo (Outline)
  3. Source Code (Outline)

---

## Technology Visualization

Each project displays its technology stack as badges, which may include:
- **Frontend:** React, Next.js, Flutter, Tailwind CSS
- **Backend:** Node.js, Python, FastAPI, Firebase
- **Hardware:** Arduino, ESP32, Sensors
- **Other:** Git, Figma, etc.

---

## Project Icons

Four icon options are available:
1. **Layout** - Web applications, CRM, dashboards
2. **Cpu** - IoT, embedded systems, hardware projects
3. **Terminal** - CLI tools, automation, backend services
4. **Shield** - Security-focused projects, protection systems

---

## Card Interactions

### Hover Effects
- **Image:** Scales up slightly
- **Navigation buttons:** Change color to primary
- **Card:** Enhanced shadow and glow

### Click Actions
- **View Case Study:** Navigate to `/projects/[slug]` page
- **Live Demo:** Open demo URL in new tab
- **Source Code:** Open GitHub repository in new tab

---

## Color Themes

Each project can have a custom gradient theme applied to:
- Image overlay
- Background glow
- Accent elements

Common color options:
- Purple gradient (primary)
- Blue gradient
- Green/teal gradient
- Red/orange gradient

---

## Responsive Design

### Desktop (≥1024px)
- Two-column card layout
- External navigation arrows
- Progress bar and dots visible

### Tablet (768px - 1023px)
- Two-column maintained
- Closer navigation buttons
- Adjusted image height

### Mobile (<768px)
- Single column (image on top)
- Tap areas for navigation
- Compressed image height
- Stacked content

---

## Animation Details

### Card Transitions
- **Duration:** 500ms
- **Type:** Fade transitions
- **Easing:** Default easing

### Progress Bar
- **Duration:** 5 seconds (linear)
- **Reset:** On slide change
- **Pause:** On hover

### Dot Indicators
- **Active state:** Elongated (w-8)
- **Inactive state:** Circular (w-2.5)
- **Transition:** 300ms

---

## Content Strategy

Your projects demonstrate:

1. **IoT Expertise**
   - FuelShield (security + IoT)
   - IoT Security (dedicated security)
   - Multiple hardware-software integrations

2. **Full Stack Capability**
   - Smart CRM (business application)
   - Web-based interfaces
   - Backend integrations

3. **Iterative Development**
   - Sanjivani V1 and V2 (showing project evolution)

4. **Problem Solving**
   - Security solutions
   - Agricultural/health tech
   - Business automation

---

## Key Messaging

The projects section emphasizes:
- **Practical application** of technical skills
- **Real-world impact** through quantifiable stats
- **Diverse portfolio** spanning IoT, security, and business apps
- **Open source** contributions (GitHub links)
- **Live demonstrations** (demo links)
- **Professional presentation** with case studies

---

## Case Study Pages

Each project has a dedicated case study page at `/projects/[slug]` which likely includes:
- Detailed project overview
- Problem statement
- Solution approach
- Technical architecture
- Implementation details
- Results and impact
- Lessons learned
- Future improvements
