# Legal Pages Documentation

## Overview
This document describes the legal pages created for the GrowthWebs website to ensure compliance with European data protection regulations (GDPR).

## Pages Created

### 1. Privacy Policy (`/privacy-policy`)
- **Purpose**: Explains how we collect, use, and protect personal information
- **Key Features**:
  - Clear explanation of data collection practices
  - Legal basis for processing (consent, legitimate interest, contract)
  - User rights under GDPR (access, correction, deletion, etc.)
  - Data sharing and security measures
  - International data transfers
  - Contact information for data protection queries

### 2. Terms of Service (`/terms-of-service`)
- **Purpose**: Outlines the terms for using our website and services
- **Key Features**:
  - Service descriptions and offerings
  - User obligations and acceptable use
  - Payment and billing terms
  - Intellectual property rights
  - Limitation of liability
  - Dispute resolution procedures

### 3. Cookie Policy (`/cookie-policy`)
- **Purpose**: Explains our use of cookies and how users can control them
- **Key Features**:
  - Simple explanation of what cookies are
  - Types of cookies used (essential, analytics, functional)
  - How to manage cookie preferences
  - Third-party cookie information
  - Impact of disabling cookies

## GDPR Compliance Features

### GDPR Consent System v2
- **Components**: 
  - `GDPRConsent.tsx` - Main consent banner with granular controls
  - `CookiePreferencesManager.tsx` - Persistent preferences manager
- **Features**:
  - Four consent options: Essential, Analytics, Functional, Marketing
  - Granular control over each cookie type
  - Customise preferences with detailed explanations
  - Persistent storage with timestamp tracking
  - Floating preferences manager accessible anytime
  - Mobile-responsive design with expandable details

### User Rights
- Clear explanation of GDPR rights
- Contact information for exercising rights
- Data retention policies
- International transfer safeguards

### Transparency
- Simple, jargon-free language
- Clear contact information
- Regular update notifications
- Cross-references between policies

## Technical Implementation

### File Structure
```
app/
├── privacy-policy/
│   └── page.tsx
├── terms-of-service/
│   └── page.tsx
├── cookie-policy/
│   └── page.tsx
└── components/
    └── ui/
        ├── GDPRConsent.tsx
        └── CookiePreferencesManager.tsx
```

### Components Used
- **Header**: Consistent navigation across all pages
- **Footer**: Contains links to all legal pages
- **AnimationProvider**: Maintains design consistency
- **GDPRConsent**: Comprehensive GDPR-compliant consent banner
- **CookiePreferencesManager**: Persistent cookie preferences manager

### Styling
- Consistent with main website design
- Responsive layout for all devices
- Accessible color contrast
- Clear typography hierarchy

## Customization Required

### Contact Information
Update the following placeholders in each page:
- `[Your Company Address]`
- `[Your Phone Number]`
- `[DPO Name if applicable]`
- `[Your Country]` (for governing law)

### Email Addresses
- `privacy@growthwebs.com` - for privacy and data protection queries
- `legal@growthwebs.com` - for terms of service questions

## Usage Instructions

### Adding to New Pages
To add the GDPR consent system to new pages:

```tsx
import GDPRConsent from '../components/ui/GDPRConsent'
import CookiePreferencesManager from '../components/ui/CookiePreferencesManager'

// Add these components after your main content
<GDPRConsent />
<CookiePreferencesManager />
```

### Updating Content
- Legal content should be reviewed by legal professionals
- Update dates when policies change
- Ensure all contact information is current
- Verify compliance with local regulations

## Testing

### Functionality
- [ ] Cookie consent banner appears on first visit
- [ ] User choices are properly stored
- [ ] Links between pages work correctly
- [ ] Responsive design on all devices

### Content
- [ ] All placeholder text is replaced
- [ ] Contact information is accurate
- [ ] Legal language is appropriate
- [ ] Cross-references are correct

## Maintenance

### Regular Updates
- Review policies quarterly
- Update contact information as needed
- Monitor for regulatory changes
- Test functionality after updates

### Legal Review
- Have policies reviewed by legal counsel
- Ensure compliance with current regulations
- Update based on business changes
- Document all policy changes

## Notes
- These pages are designed to be simple and easy to understand
- Language avoids complex legal jargon
- Structure follows GDPR requirements
- Design maintains brand consistency
- All pages are mobile-responsive
