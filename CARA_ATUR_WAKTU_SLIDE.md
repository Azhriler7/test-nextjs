# 📝 Cara Mengatur Waktu Setiap Slide

## Ada 2 Cara Setting Waktu:

### 1️⃣ **Default Duration** (Waktu default untuk SEMUA slide)

File: `src/data/slides.ts`

```typescript
export const storyConfig: StoryConfig = {
  autoAdvance: true,
  defaultDuration: 10000, // ⬅️ 10 detik (10000 ms)
  transitionDuration: 700,
};
```

**Kapan dipakai?**

- Jika slide TIDAK punya `duration` sendiri, maka pakai waktu ini
- Lebih praktis kalau mau semua slide punya durasi sama

---

### 2️⃣ **Per-Slide Duration** (Waktu spesifik per slide) ⭐ **REKOMENDASI**

File: `src/data/slides.ts`

```typescript
{
  id: 1,
  type: 'intro',
  title: 'Haii nih paket... 📦✨',
  // ... konten lainnya
  duration: 7000, // ⬅️ Slide ini 7 detik (7000 ms)
}
```

**Kapan dipakai?**

- Kalau mau kontrol waktu tiap slide secara detail
- Slide dengan konten banyak bisa lebih lama
- Slide simple bisa lebih cepat

---

## 🎯 Mana yang Lebih Prioritas?

**`duration` di masing-masing slide** > `defaultDuration`

Artinya:

- Kalau slide punya `duration`, pakai itu
- Kalau slide TIDAK punya `duration`, baru pakai `defaultDuration`

---

## ⏱️ Konversi Waktu

| Detik    | Milidetik (ms) |
| -------- | -------------- |
| 3 detik  | 3000           |
| 5 detik  | 5000           |
| 7 detik  | 7000           |
| 10 detik | 10000          |
| 15 detik | 15000          |

---

## 💡 Rekomendasi Setting Saat Ini:

```typescript
export const slides: SlideContent[] = [
  // Slide 1: Intro (cepat, cuma judul)
  {
    id: 1,
    type: "intro",
    // ...
    duration: 7000, // 7 detik ⬅️ Cukup untuk baca judul + subtitle
  },

  // Slide 2: Hero dengan text panjang
  {
    id: 2,
    type: "hero",
    // ...
    duration: 10000, // 10 detik ⬅️ Ada typewriter + gambar
  },

  // Slide 3: Hero dengan pantun
  {
    id: 3,
    type: "hero",
    // ...
    duration: 12000, // 12 detik ⬅️ Text agak panjang
  },

  // Slide 4: Riddle (ada interaksi)
  {
    id: 4,
    type: "riddle",
    // ...
    duration: 15000, // 15 detik ⬅️ Kasih waktu untuk mikir + klik
  },

  // Slide 5: Envelope (final, banyak konten)
  {
    id: 5,
    type: "envelope",
    // ...
    duration: 20000, // 20 detik ⬅️ Baca surat + lihat animasi
  },
];
```

---

## 🚨 PERHATIAN!

**Waktu ini HANYA untuk auto-advance timer** (progress bar)

Timer ini TIDAK berjalan saat:

- ✋ User belum klik/tap layar pertama kali
- ⌨️ Typewriter effect sedang berjalan
- 🖱️ User hover mouse di atas story viewer
- 🎮 Slide interactive (riddle/envelope) sedang aktif

**Timer MULAI berjalan setelah:**

- ✅ User klik/tap layar pertama kali
- ✅ Typewriter effect selesai (otomatis lanjut ke slide berikutnya setelah 3 detik)

---

## 📌 Tips Tambahan:

1. **Slide dengan typewriter**: Waktu akan otomatis pause selama typing, jadi `duration` tidak terlalu penting
2. **Slide tanpa typewriter**: `duration` sangat penting untuk kontrol kapan slide berikutnya
3. **Slide interactive**: User kontrol kapan mau lanjut dengan klik button
4. **Test dulu!**: Setelah ubah duration, coba buka di browser dan rasakan pace-nya nyaman atau tidak

---

Semoga jelas! 🎉
