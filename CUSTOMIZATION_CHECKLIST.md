# ✅ Customization Checklist

Use this checklist to track your customization progress:

## 🎯 Essential Customizations

- [ ] **Test the App**

  - [ ] Open http://localhost:3000 in browser
  - [ ] Test all 5 slides work
  - [ ] Test navigation (tap left/right)
  - [ ] Test confetti button on final slide
  - [ ] Test on mobile/responsive view

- [ ] **Update Personal Text**

  - [ ] Change Slide 1 subtitle (friend's name)
  - [ ] Customize Slide 2 weather stats
  - [ ] Update Slide 5 birthday message
  - [ ] Add inside jokes or personal touches

- [ ] **Add Photos**
  - [ ] Create `public/images/` folder
  - [ ] Add 3-4 favorite photos
  - [ ] Update `src/data/slides.ts` with photo paths
  - [ ] Add meaningful captions to photos

## 🎨 Optional Enhancements

- [ ] **Customize Colors**

  - [ ] Change gradient colors to match your theme
  - [ ] Update emoji icons if needed
  - [ ] Adjust text colors for readability

- [ ] **Adjust Timing**

  - [ ] Test slide durations (too fast/slow?)
  - [ ] Adjust individual slide durations
  - [ ] Change auto-advance setting if needed

- [ ] **Optimize Images**

  - [ ] Replace placeholder divs with Next.js Image
  - [ ] Compress photos for faster loading
  - [ ] Ensure photos are high quality (1080px+)

- [ ] **Add More Slides**

  - [ ] Create new slide objects in slides.ts
  - [ ] Add more photos or memories
  - [ ] Create custom slide types if needed

- [ ] **Polish Details**
  - [ ] Proofread all text
  - [ ] Test on actual mobile device
  - [ ] Ask a friend to test it
  - [ ] Check spelling and grammar

## 🚀 Deployment

- [ ] **Prepare for Production**

  - [ ] Run `npm run build` to test build
  - [ ] Fix any build errors
  - [ ] Test production build locally

- [ ] **Deploy**
  - [ ] Push code to GitHub
  - [ ] Connect to Vercel
  - [ ] Test deployed version
  - [ ] Share link with friend! 🎉

## 📝 Final Touches

- [ ] **Test Everything**

  - [ ] All slides display correctly
  - [ ] Photos load properly
  - [ ] Animations are smooth
  - [ ] Text is readable on all backgrounds
  - [ ] Confetti works on final slide

- [ ] **Mobile Testing**

  - [ ] Test on iPhone
  - [ ] Test on Android
  - [ ] Test landscape/portrait
  - [ ] Test tap navigation

- [ ] **Share!**
  - [ ] Send link to your friend
  - [ ] Wait for their reaction 😊
  - [ ] Enjoy the moment! 🎂

---

## 🎯 Quick Reference

**Main files to edit:**

1. `src/data/slides.ts` - All content and text
2. `public/images/` - Your photos
3. `src/components/StoryViewer.tsx` - Advanced customization (optional)

**Dev server:** `npm run dev`
**Build:** `npm run build`
**Production:** `npm start`

**Need help?** Check `README.md` or `QUICK_START.ts`
