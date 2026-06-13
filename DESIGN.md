---
name: Luminous Editorial
colors:
  surface: '#fff8f6'
  surface-dim: '#eed5ce'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1ed'
  surface-container: '#ffe9e3'
  surface-container-high: '#fce3dc'
  surface-container-highest: '#f6ddd6'
  on-surface: '#261814'
  on-surface-variant: '#51443f'
  inverse-surface: '#3c2d28'
  inverse-on-surface: '#ffede8'
  outline: '#84746e'
  outline-variant: '#d6c2bc'
  surface-tint: '#815342'
  primary: '#815342'
  on-primary: '#ffffff'
  primary-container: '#f3b8a2'
  on-primary-container: '#724736'
  inverse-primary: '#f4b9a3'
  secondary: '#71594e'
  on-secondary: '#ffffff'
  secondary-container: '#f9d9ca'
  on-secondary-container: '#755e52'
  tertiary: '#8f4c31'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffb497'
  on-tertiary-container: '#7f4026'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbce'
  primary-fixed-dim: '#f4b9a3'
  on-primary-fixed: '#321206'
  on-primary-fixed-variant: '#653c2c'
  secondary-fixed: '#fcdccd'
  secondary-fixed-dim: '#dfc0b2'
  on-secondary-fixed: '#28180f'
  on-secondary-fixed-variant: '#584237'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#ffb599'
  on-tertiary-fixed: '#370e00'
  on-tertiary-fixed-variant: '#72361c'
  background: '#fff8f6'
  on-background: '#261814'
  surface-variant: '#f6ddd6'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.08em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 64px
---

## Brand & Style

The design system is anchored in a soft editorial aesthetic that balances high-end luxury with approachable warmth. It is designed for a discerning audience that values intimacy, self-care, and sophisticated simplicity. The visual language evokes the tactile sensation of the product itself: smooth, reflective, and hydrating.

The style is a blend of **Minimalism** and **Glassmorphism**, utilizing generous whitespace to allow product photography to breathe. It avoids the clinical coldness of traditional luxury by using "organic depth"—subtle background blurs and soft-focus transitions that mimic the way light interacts with gloss. The emotional response should be one of "effortless elegance"—a UI that feels like a premium lifestyle magazine.

## Colors

The palette is rooted in a "Skin-Tone Warmth" philosophy. The primary Soft Peach (#F3B8A2) serves as the main call-to-action and brand identifier, while the Terracotta accent (#C77A5B) provides necessary contrast for interactive states and secondary emphasis.

The background uses a Cream (#FFF4EC) base instead of pure white to maintain a human, skin-like quality. Pure White (#FFFFFF) is reserved for elevated "Surface" containers to create a distinct hierarchy against the cream background. Typography utilizes a Dark Espresso (#241713) rather than pure black to soften the reading experience while maintaining accessibility.

## Typography

This design system employs a high-contrast typographic pairing to signal luxury. **Playfair Display** is used for headlines to provide a literary, editorial feel. It should be typeset with slightly tighter letter-spacing in display sizes to emphasize its elegant serifs.

**Inter** provides a functional, modern counterpoint for body text and labels. To maintain the premium feel, labels and small metadata should be set in uppercase with increased letter-spacing. Paragraphs should utilize a generous line-height (1.6) to enhance readability and contribute to the "airy" layout philosophy.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop, centered within a 1280px container to maintain editorial control over line lengths and image placement. On mobile, it transitions to a fluid 4-column system with 20px side margins.

Spacing is governed by an 8px base unit but prioritizes "Stack" logic over rigid grid lines. Significant vertical breathing room (stack-lg) is required between major sections to prevent the UI from feeling cluttered. Content should be grouped in logical clusters using `stack-sm` for internal relationships and `stack-md` for distinct elements.

## Elevation & Depth

Depth is conveyed through **Tonal Layers** and **Ambient Shadows** rather than sharp borders.
- **The Base:** The Cream background (#FFF4EC) acts as the foundation.
- **Surface Level:** Cards and modal containers use pure White (#FFFFFF).
- **Shadow Profile:** Shadows must be extremely diffused and tinted with the primary accent color. Use a 15% opacity of #C77A5B for shadows to create a "warm glow" rather than a grey drop-shadow.
- **Gloss Effect:** Apply a subtle `0.5px` inner-stroke of white on primary buttons to simulate a light-catching edge, mimicking the reflective surface of lip gloss.

## Shapes

The shape language is strictly **Pill-shaped** and organic. Harsh angles are avoided to maintain the soft, feminine aesthetic.
- Buttons and input fields should utilize the full pill radius.
- Image containers and cards should use `rounded-xl` (3rem) to maintain a soft but structured appearance.
- Secondary elements like chips or badges must also follow the pill-shape convention.

## Components

### Buttons
Primary buttons are pill-shaped with the Primary color (#F3B8A2) background. They feature a "hover lift" (translating -2px Y-axis) and an increased ambient shadow. For a "Glossy" effect, use a subtle linear gradient (White at 10% opacity to Transparent) top-to-bottom.

### Input Fields
Inputs use a minimal approach: a pure white background with a soft peach 1px border. Focus states transition the border to the Terracotta accent. Labels are always placed above the field in `label-sm` style.

### Cards
Cards are White with no visible border, using the warm ambient shadow for separation. Images within cards should always have the `rounded-xl` corner treatment to avoid sharp edges.

### Chips & Tags
Used for shade categories or product attributes. These should be semi-transparent versions of the Secondary color (#F8D8C9) with Muted Brown text.

### Interactive Gloss
Small UI details, like active navigation states or "Add to Bag" icons, should utilize a slight "bloom" effect (a 4px blur of the Primary color) to emphasize the luminous brand narrative.
