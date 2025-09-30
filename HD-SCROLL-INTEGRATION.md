# HD Scroll Background Integration Instructions

## 🎨 How to Use Your HD Scroll Images

Your "Once Upon A Time..." app is now configured to use HD scroll images as backgrounds while maintaining excellent text readability. Here's how to integrate your scroll images:

### 📁 Image Placement
Place your HD scroll images in the `/public` folder with these filenames:
- `scroll1.jpg` or `scroll1.png` - Primary background scroll
- `scroll2.jpg` or `scroll2.png` - Secondary overlay scroll

### 🖼️ Supported Formats
The app will automatically try multiple formats in this order:
- `.jpg` files (recommended for photos)
- `.png` files (good for images with transparency)
- Fallback placeholder names like `parchment.jpg`, `ancient-scroll.jpg`, etc.

### ⚙️ Background Configuration
The scroll images are configured with:
- **Primary scroll (scroll1)**: 40% opacity, full coverage, center positioned
- **Secondary scroll (scroll2)**: 20% opacity, 150% size, top-right positioned
- **Text readability overlays**: Multiple gradient layers ensure text remains readable
- **Blend modes**: `multiply` and `overlay` for authentic parchment effect

### 🎨 Text Readability Enhancements
The app includes multiple layers to ensure text remains readable:
- Amber/yellow gradient overlays (60-40% opacity)
- Backdrop blur effects on content areas
- Enhanced background opacity on text containers (95-98%)
- Stronger border contrasts and shadow effects

### 🔧 Customization Options
To adjust the scroll background effects, edit `/src/app/page.tsx`:

```typescript
// Adjust primary scroll opacity (currently 40%)
className="absolute inset-0 opacity-40"

// Adjust secondary scroll size (currently 150%)
backgroundSize: '150%'

// Modify readability overlays
className="absolute inset-0 bg-gradient-to-br from-amber-50/60 via-yellow-50/40 to-orange-50/60"
```

### 📱 Responsive Design
The scroll backgrounds are:
- ✅ Mobile-friendly with proper scaling
- ✅ Retina display optimized
- ✅ Performant with CSS transforms
- ✅ Accessible with high contrast text

### 🚀 Quick Start
1. Copy your HD scroll images to `/public/scroll1.jpg` and `/public/scroll2.jpg`
2. Refresh your browser at http://localhost:3001
3. Your custom scroll backgrounds will appear automatically!

### 🎭 Current Features Working
- ✅ Medieval scroll backgrounds with HD image support
- ✅ Perfect text readability with multiple overlay systems
- ✅ "Once Upon A Time..." branding with cursive fonts
- ✅ Story type emojis (🎭 fairy tales, 🐉 fantasy, etc.)
- ✅ ❌ emoji for "no preference" option
- ✅ Amber/parchment color scheme throughout
- ✅ Text-to-speech with male/female voices
- ✅ Responsive design for all devices

Enjoy your magical bedtime story app! 🏰✨