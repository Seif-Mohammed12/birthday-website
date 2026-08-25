# Birthday Website for Your Girlfriend 💕

A beautiful, handmade-style interactive birthday website with 4 chapters: Envelope, Love Letter, Memories, Date Selection, and Day Timeline.

## 🎨 Customization

All personalization is done in `src/config.ts`. Edit this file to customize:

- **Names**: Change `herName` and `myName`
- **Love Letter**: Edit the `letter` object with your own message
- **Memories**: Add your photos to `public/images/` and update the `memories` array with paths and captions
- **Dates**: Modify the `dates` array with available birthday dates
- **Times**: Customize the `times` array with preferred time slots
- **Itinerary**: Update the `itinerary` array with your actual day plan
- **Final Message**: Change the closing message at the end

## 📸 Adding Photos

1. Place your photos in the `public/images/` folder
2. Name them (e.g., `memory1.jpg`, `memory2.jpg`, etc.)
3. Update the `memories` array in `src/config.ts` with the correct paths
4. Adjust captions, dates, and rotation for each photo

## 🚀 Running the Website

```bash
# Install dependencies (if not already done)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Features

- **Chapter 1**: Interactive envelope with opening animation
- **Chapter 2**: Handwritten letter with typing animation
- **Chapter 3**: Scrapbook-style photo collage with polaroids
- **Chapter 4**: Custom date and time picker
- **Chapter 5**: Hand-drawn timeline of the day's plan

## 🎨 Design Notes

- Uses Google Fonts: Caveat (handwritten) and Playfair Display (serif)
- Paper textures and subtle noise for authentic feel
- Warm color palette: ivory, cream, dusty rose, burgundy
- Responsive design for mobile devices
- Smooth animations with Framer Motion

## 💡 Tips

- The website works best on mobile (where she'll likely view it)
- Test the animations before sharing
- Keep the letter personal and genuine
- Use high-quality photos for the memories section
- Adjust the itinerary to match your actual plans

Happy Birthday to her! 🎂
