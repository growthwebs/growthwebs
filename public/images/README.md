# Images & Assets Organization

This folder contains all image assets organized in a consistent and maintainable structure.

## 📁 Folder Structure

```
public/images/
├── svg/                    # General SVG assets
│   ├── growthwebs-logo.svg    # Main company logo
│   └── snowflake-icon.svg     # Hero section icon
├── logos/                  # Company logos for carousel
│   ├── culture-amp.svg        # Culture Amp logo
│   ├── clay.svg              # Clay logo
│   ├── lightspeed.svg        # Lightspeed logo
│   ├── anthropic.svg         # Anthropic logo
│   ├── monday.svg            # Monday.com logo
│   ├── amplitude.svg         # Amplitude logo
│   ├── synthesia.svg         # Synthesia logo
│   └── index.ts              # Logo paths export
└── README.md               # This documentation
```

## 🎨 SVG Assets

### General SVGs (`/svg/`)
- **growthwebs-logo.svg**: Main company logo with GW initials
- **snowflake-icon.svg**: Decorative icon for hero section

### Company Logos (`/logos/`)
All company logos are designed as simple, clean SVGs with:
- Consistent dimensions (120x40 for most, 80x40 for shorter names)
- `currentColor` for dynamic theming
- Clean typography using Arial font family
- Transparent backgrounds for seamless integration

## 🔧 Usage

### Importing Logos
```typescript
import { companyLogos } from '@/public/images/logos/index'

// Use in components
<Image src={companyLogos['Culture Amp']} alt="Culture Amp logo" />
```

### Using General SVGs
```typescript
<Image src="/images/svg/growthwebs-logo.svg" alt="Logo" />
```

## 📝 Adding New Assets

1. **New Company Logo**: Add SVG to `/logos/` folder
2. **Update index.ts**: Add new logo to `companyLogos` object
3. **General SVG**: Add to `/svg/` folder
4. **Update this README**: Document new additions

## 🎯 Design Principles

- **Consistency**: All logos follow the same design language
- **Accessibility**: High contrast and clear typography
- **Scalability**: SVG format for crisp display at any size
- **Maintainability**: Organized structure for easy updates
