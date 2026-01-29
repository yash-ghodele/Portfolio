# Contact Section - Communication Documentation

## Overview
The Contact section provides multiple ways to reach you, featuring a modern contact form alongside your contact information and social media links.

---

## Section Header

**Badge:** Contact
**Main Heading:** Let's start a conversation.
- "Let's start a" in white
- "conversation." with purple-to-pink gradient

**Subheading:** 
> "Interested in collaborating on a project or just want to say hi? My inbox is always open for new opportunities."

---

## Contact Information

### Email Address
**Icon:** 📧 Mail
**Label:** Mail me at
**Address:** yashghodele.work@gmail.com

**Purpose:** Primary professional communication

---

### Phone Number
**Icon:** 📞 Phone
**Label:** Call me at
**Number:** +91 76661 68561

**Purpose:** Direct voice communication
**Format:** Indian mobile number

---

## Social Media Links

All social links open in new tabs with hover animations:

### 1. LinkedIn
**Icon:** LinkedIn logo
**URL:** https://linkedin.com/in/yash-ghodele
**Hover Color:** Blue (blue-400)
**Purpose:** Professional networking

### 2. GitHub
**Icon:** GitHub logo
**URL:** https://github.com/yash-ghodele
**Hover Color:** White
**Purpose:** Code portfolio, open source contributions

### 3. Instagram
**Icon:** Instagram logo
**URL:** https://www.instagram.com/why_be_yashhh/
**Hover Color:** Pink (pink-400)
**Purpose:** Personal brand, behind-the-scenes

---

## Contact Form

### Form Fields

#### 1. Name (Required)
- **Type:** Text input
- **Placeholder:** "John Doe"
- **Validation:** Required field
- **Label:** NAME (uppercase, small)

#### 2. Email (Required)
- **Type:** Email input
- **Placeholder:** "john@example.com"
- **Validation:** Required, valid email format
- **Label:** EMAIL (uppercase, small)

#### 3. Subject (Required)
- **Type:** Text input
- **Placeholder:** "Project Inquiry"
- **Validation:** Required field
- **Label:** SUBJECT (uppercase, small)

#### 4. Message (Required)
- **Type:** Textarea
- **Placeholder:** "Tell me about your project..."
- **Validation:** Required field
- **Min Height:** 150px
- **Resize:** Disabled
- **Label:** MESSAGE (uppercase, small)

---

### Form Behavior

#### Submit Button
**Default State:**
- Text: "Send Message"
- Icon: Send icon (paper plane)
- Background: White
- Text Color: Black
- Full width, large height (h-14)

**Loading State:**
- Text: (Hidden)
- Icon: Spinning loader
- Disabled state active
- Message: "Sending..."

**Hover State:**
- Background: Light gray (gray-200)
- Scale: 1.02x
- Enhanced shadow

**Active State:**
- Scale: 0.98x (press effect)

---

### Form Submission

#### Success Response
**Toast Notification:**
- **Title:** "Message transmission successful"
- **Description:** Success message from server
- **Type:** Default/Success style
- **Action:** Form fields cleared

#### Error Response
**Toast Notification:**
- **Title:** "Transmission Error"
- **Description:** Error message or "Something went wrong."
- **Type:** Destructive (red variant)
- **Action:** Form data preserved for retry

---

### Form Integration

**Backend:** Server action (`sendEmail`)
**Method:** Form data submission
**Fields Sent:**
- name
- email
- subject
- message

---

## Visual Design

### Left Column
Contains:
- Badge
- Main heading
- Subheading
- Contact information cards
- Social media icons

**Style:**
- Text-heavy
- Information presentation
- Call-to-action messaging

---

### Right Column
Contains:
- Glass portal form
- Abstract glow background
- Grid pattern overlay
- Hover effects

**Style:**
- Interactive elements
- Modern glassmorphism
- Animated backgrounds

---

## Design Features

### Glass Portal Form
1. **Background:**
   - Semi-transparent white (white/5)
   - Heavy backdrop blur
   - Subtle white border

2. **Overlays:**
   - Grid pattern (5% opacity)
   - Gradient glow (purple-blue)
   - Intensifies on hover

3. **Form Inputs:**
   - Dark black/20 background
   - White/10 borders
   - Primary border on focus
   - Rounded corners (xl)
   - 12px height for inputs

---

### Focus States
Each input field has enhanced focus styling:
- Border color changes to primary/50
- Background darkens slightly (black/30)
- Smooth 300ms transition
- Visible focus indicators

---

### Animation Effects

#### Entrance Animations
1. **Left Column:**
   - Initial: Opacity 0, X -50
   - Final: Opacity 1, X 0
   - Duration: 800ms

2. **Right Column (Form):**
   - Initial: Opacity 0, Scale 0.9
   - Final: Opacity 1, Scale 1
   - Duration: 800ms

#### Interaction Animations
- **Social icons:** Translate Y -5 on hover
- **Submit button:** Scale on hover/active
- **Hover glow:** Transitions over 1000ms

---

## Accessibility Features

1. **Form Labels:**
   - Properly associated with inputs
   - Uppercase tracking for clarity
   - Descriptive text

2. **Required Fields:**
   - All fields marked as required
   - Browser validation enabled

3. **Focus Management:**
   - Visible focus states
   - Tab navigation support
   - Focus/blur event handlers

4. **Icons:**
   - Decorative role
   - Information duplicated in text

---

## User Experience Flow

### Typical User Journey:
1. User scrolls to Contact section
2. Reads contact information
3. Considers communication channel:
   - Email: Click or copy address
   - Phone: Click to call (mobile)
   - Form: Complete and submit
   - Social: Visit profile
4. If using form:
   - Fill all required fields
   - Submit form
   - Receive toast notification
   - Form clears on success

---

## Communication Channels Summary

### Primary Channels
1. **Contact Form** - Structured inquiries
2. **Email** - Professional communication
3. **Phone** - Urgent/direct contact

### Social Channels
1. **LinkedIn** - Professional networking
2. **GitHub** - Technical collaboration
3. **Instagram** - Personal connection

---

## Messaging Strategy

### Tone
- **Inviting:** "Let's start a conversation"
- **Open:** "Inbox is always open"
- **Professional:** "New opportunities"
- **Friendly:** "Just want to say hi"

### Purpose
- Collaboration invitations
- Project inquiries
- Casual greetings
- Professional opportunities

---

## Technical Implementation

### Form Handling
- **Client-side validation:** HTML5 required attributes
- **Server action:** `sendEmail` from `/actions/send-email`
- **State management:** React useState hooks
- **Loading state:** isSubmitting boolean
- **Focus tracking:** focusedField state (optional for future enhancements)

### Toast System
- **Library:** Custom toast hook from `/hooks/use-toast`
- **Display:** Non-blocking notifications
- **Types:** Success, Destructive (error)
- **Auto-dismiss:** Likely configured

---

## Key Messaging

The contact section communicates:
- **Accessibility:** Multiple communication channels
- **Professionalism:** Structured contact form
- **Openness:** "Always open for new opportunities"
- **Responsiveness:** Toast notifications confirm receipt
- **Modern approach:** Glass morphism design, smooth UX
- **Comprehensive:** Email, phone, form, and social options
