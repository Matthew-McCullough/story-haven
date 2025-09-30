## 🖼️ How to Add Your Scroll Images

### Step 1: Save Your Images
1. **Right-click on your first scroll image** (the one with wood background)
2. **Save As...** → Navigate to: `/Users/matthewmccullough/Desktop/projects/story-haven/public/`
3. **Name it exactly:** `scroll1.jpg`

4. **Right-click on your second scroll image** (the plain parchment one)
5. **Save As...** → Navigate to the same public folder
6. **Name it exactly:** `scroll2.jpg`

### Step 2: Verify Upload
After saving, your public folder should contain:
```
public/
├── scroll1.jpg  ← Your first scroll image
├── scroll2.jpg  ← Your second scroll image
├── file.svg
├── globe.svg
├── next.svg
└── ...other files
```

### Step 3: Refresh Browser
Go to http://localhost:3001 and refresh the page - your beautiful scroll backgrounds will appear!

---

## ✅ What's Already Fixed:

### 🎨 **Cursive Italicized Title**
- Main header now uses `font-family: cursive` with italic styling
- "Once Upon A Time..." appears in beautiful cursive script

### 📐 **Perfect Image Fitting**
- **Primary scroll (scroll1.jpg)**: Covers full screen without stretching
- **Secondary scroll (scroll2.jpg)**: Contained to fit properly as overlay
- **Fixed positioning**: Images stay in place when scrolling
- **Responsive design**: Works perfectly on all screen sizes

### 🎯 **Enhanced Background System**
- Primary scroll: 40% opacity, full coverage, center positioned
- Secondary scroll: 15% opacity, contained size, center positioned  
- Both images use `background-attachment: fixed` for immersive effect
- Proper `minHeight: 100vh` ensures full screen coverage

Once you add your images, you'll see the complete magical experience! 🏰✨