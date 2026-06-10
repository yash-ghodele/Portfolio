# Page: Contact (`/#contact`)

Source: `components/contact.tsx`

---

## Section Header

**Badge text:** Contact

### H2
```
Let's start a
conversation.
```
("conversation." as gradient: purple-400 → pink-600)

### Sub-description paragraph
> Interested in collaborating on a project or just want to say hi?
> My inbox is always open for new opportunities.

---

## Contact Details

| Type | Label | Value |
|------|-------|-------|
| ✉️ Email | Mail me at | yashghodele.work@gmail.com |
| 📞 Phone | Call me at | +91 76661 68561 |

---

## Social Links (displayed as icon buttons)

| Platform | URL | Hover color |
|----------|-----|-------------|
| LinkedIn | https://linkedin.com/in/yash-ghodele | Blue |
| GitHub | https://github.com/yash-ghodele | White |
| Instagram | https://www.instagram.com/why_be_yashhh/ | Pink |

---

## Contact Form (right side)

**Submit button text:** Send Message →

### Form Fields

| Field ID | Label | Placeholder | Type |
|----------|-------|-------------|------|
| name | NAME | John Doe | text (required) |
| email | EMAIL | john@example.com | email (required) |
| subject | SUBJECT | Project Inquiry | text (required) |
| message | MESSAGE | Tell me about your project... | textarea (required) |

### Toast Messages

**Success toast:**
- Title: `Message transmission successful`
- Description: (from server response)

**Error toast:**
- Title: `Transmission Error`
- Description: (from server response or "Something went wrong.")

---

## Page Metadata (SEO)
- **Section ID:** `contact` (used for anchor scrolling from Navbar "Contact")
