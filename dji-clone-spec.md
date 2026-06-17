# Kịch bản clone trang chủ DJI.com

> Spec để dán vào Cursor (Agent / Composer) yêu cầu code lại trang chủ DJI gần như y nguyên.
> Dựa trên ảnh chụp full-page + cấu trúc HTML thật của https://www.dji.com (bản US/English).

---

## 0. Prompt mở đầu cho Cursor

Dán nguyên đoạn này vào Cursor trước, rồi dán phần spec bên dưới:

> Tạo cho tôi một trang web tĩnh clone lại trang chủ DJI.com.
> Stack: **HTML + Tailwind CSS** (hoặc Next.js + Tailwind nếu tôi nói rõ). Responsive, mobile-first.
> Dùng ảnh placeholder (picsum / unsplash / màu nền xám) ở nơi chưa có ảnh thật.
> Code sạch, chia component rõ ràng, comment tiếng Việt ở mỗi section.
> Làm tuần tự từng section theo spec dưới đây, làm xong section nào báo tôi rồi mới qua section tiếp theo.

---

## 1. Tổng quan bố cục (thứ tự từ trên xuống)

1. Top promo bar (thanh khuyến mãi đen, đóng được)
2. Hero slider — DJI Mavic 3 Pro (carousel 8 sản phẩm)
3. Lưới 4 ô sản phẩm (Osmo 360, DJI Flip, Osmo Mobile 8, Compare Camera Drones)
4. Sticky nav bar (logo + menu chính + icon search/user/region/store)
5. "Shot on" slider (DJI RS 5, Osmo Action 6, ... — 6 slide, nền ảnh lớn)
6. Section "Standing at the Forefront of Innovation" (2 card tin tức)
7. Section "Explore DJI Products in Different Fields" (3 card: Video / Enterprise / Agriculture)
8. Dải 3 icon: Where to buy / Support / Fly Safe
9. Banner "Only in the DJI Store App"
10. Footer lớn (nhiều cột link + social + chọn quốc gia + copyright)

---

## 2. Design tokens

```
Màu sắc:
- Nền chính:        #ffffff
- Nền section phụ:  #f7f7f7 / #fafafa
- Chữ chính:        #181818 / #2b2b2b
- Chữ phụ (xám):    #999999
- Footer nền:       #1a1a1a (đen)
- Footer chữ:       #999 → hover #fff
- Accent nút Store: #1976ff (xanh dương) bo tròn pill
- Link "Learn More": chữ đen + mũi tên ">" bên phải

Typography:
- Font: -apple-system, "Helvetica Neue", Arial, sans-serif (DJI dùng font sans gọn)
- Heading sản phẩm hero: uppercase, đậm, letter-spacing rộng
- Body: 14–16px, line-height 1.6

Spacing:
- Container max-width: ~1280px, căn giữa
- Padding section dọc: 60–80px
- Bo góc card: 4–8px
- Nút: bo pill (rounded-full) hoặc bo nhẹ 4px
```

---

## 3. Chi tiết từng section

### 3.1 Top promo bar
- Thanh ngang full-width, nền trắng/xám nhạt, chữ giữa.
- Nội dung: "Download the DJI Store app and be the first to experience the obstacle sensing of DJI virtually." + link **Download the App ›**
- Nút X đóng bar ở góc phải.

### 3.2 Hero slider (carousel chính)
- Chiếm gần full chiều rộng, cao ~480–560px, nền tối (gradient xanh đen).
- Slide đầu: **DJI** (chữ lớn mờ phía sau) + tiêu đề **MAVIC 3 PRO** + dòng nhỏ "Triple-Lens Camera Drone" phía trên + tagline "Inspiration in Focus".
- 2 nút: **Learn More** (outline trắng) và **Buy Now** (outline trắng), bo pill.
- Ảnh drone đặt giữa/dưới.
- Có 8 slide, danh sách (dùng cho dots/thumbnail dưới hero):
  1. DJI Mavic 3 Pro — "Inspiration in Focus" — Learn More + Buy Now
  2. DJI Air 3S — "Chase the View" — Learn More + Buy Now
  3. Osmo Action 6 — "Square Up, Nail the Move" — Learn More
  4. Osmo Pocket 3 — "For Moving Moments" — Learn More + Buy Now
  5. DJI RS 5 — "Lead the Scene" — Learn More
  6. DJI Matrice 400 — "Engineered for Excellence, Designed for Versatility" — Learn More
  7. DJI AGRAS T100 / T70P — "Big Drone, Big Jobs." — 2 nút
  8. DJI FlyCart 100 — "Achieve More Deliveries" — Learn More
- Dưới hero có dãy text-link nhỏ dạng tab để nhảy slide (tên các sản phẩm trên).

### 3.3 Lưới 4 ô sản phẩm
- Grid 2x2 trên desktop (2 cột), 1 cột trên mobile.
- Mỗi ô: nền xám nhạt, tiêu đề lớn ở trên, subtitle, link Learn More (+ Buy Now nếu có), ảnh sản phẩm.
  1. **OSMO 360** — "8K Revolutionary 360° Camera" / "All in One" — Learn More
  2. **DJI FLIP** — "All-in-One Vlog Camera Drone" / "Open New Possibilities" — Learn More + Buy Now
  3. **OSMO MOBILE 8** — "Flagship Intelligent Tracking Phone Gimbal" / "In Tune With Every Move" — Learn More
  4. **Compare Camera Drones** — "Product Info" / "See product overviews and comparisons here" — Help Me Choose + Buy Now

### 3.4 Nav bar (sticky)
- Sticky top khi cuộn (trong ảnh nó nằm sau lưới 4 ô do là full-page screenshot, nhưng thực tế là thanh dính trên cùng).
- Trái: **logo DJI**.
- Menu chính: Camera Drones · Handheld · Power · Specialized (dropdown: Enterprise / Agriculture / DJI Delivery) · Explore (dropdown: Who We Are / SkyPixel / DJI Forum / Media Center / DJI Trust Center / DJI Blog / Careers) · Support · Where to Buy.
- Phải: icon Search (🔍), icon User (👤), nút chọn vùng "🌐 United States", nút **Store** (pill xanh).

### 3.5 "Shot on" slider
- Nền ảnh lớn (full-width), cao ~400px, có nút mũi tên trái/phải + dots (6 chấm).
- Mỗi slide: chữ nhỏ "Shot on" + tên sản phẩm lớn + Learn More (vài cái có Buy Now).
- 6 slide: DJI RS 5 · Osmo Action 6 · Osmo Mobile 8 · Osmo Nano · Osmo 360 (+Buy Now) · DJI Flip (+Buy Now).

### 3.6 Standing at the Forefront of Innovation
- Tiêu đề căn giữa + đoạn mô tả: "As we explore new technology, we push the capabilities of what is possible, driving progress through continuous innovation."
- 2 card ngang:
  1. "Industry Insight Report" / **DJI Agriculture Annual Report** / Learn More
  2. "Engineering, Science & Technology" / **DJI Ronin 2 Gimbal System Honored with 2025 Scientific and Technical Award** / Learn More

### 3.7 Explore DJI Products in Different Fields
- Tiêu đề căn giữa.
- 3 card có ảnh nền, chữ trắng đè lên:
  1. **Video Production** — "Professional Aerial and Ground Filmmaking Tools"
  2. **Enterprise** — "Drone Solutions for a New Generation of Work"
  3. **Agriculture** — "Efficient and Intelligent Agricultural Solution"
- Mỗi card có Learn More ›.

### 3.8 Dải 3 icon
- Nền trắng, 3 cột căn giữa, mỗi cột: icon + tên + Learn More.
  1. Where to buy
  2. Support
  3. Fly Safe

### 3.9 Banner "Only in the DJI Store App"
- Nền tối, chữ giữa.
- Tiêu đề "Only in the DJI Store App" + "Try Virtual Flight online for free, and enjoy convenient one-stop device services." + nút **Download App**.

### 3.10 Footer
- Nền đen (#1a1a1a), chữ xám.
- **Hàng cột link** (mỗi cột 1 nhóm, chữ tiêu đề đậm trắng, link xám):
  - **Product Categories**: Consumer · Professional · Enterprise · Components
  - **Service Plans**: DJI Care Refresh · DJI Care Pro · DJI Care Enterprise · DJI Maintenance Program
  - **Where to Buy**: DJI Online Store · Flagship Stores · DJI-Operated Stores · Retail Stores · Enterprise Retailers · Agricultural Drone Dealer · Delivery Drone Dealer · Pro Retailers · DJI Store App
  - **Cooperation**: Become a Dealer · Apply For Authorized Store
  - **Fly Safe**: Fly Safe · DJI Flying Tips
  - **Support**: Product Support · Service Request and Inquiry · Help Center · After-Sales Service Policies · Download Center · Security and Privacy
  - **Explore**: Media Center · Buying Guides · DJI Trust Center · DJI Blog
  - **Trending Now**: Phone Gimbals · Action Cameras · Wireless Microphones · Portable Power Stations · Vlog Cameras
  - **Community**: SkyPixel · DJI Forum · Developer
  - **Subscribe**: ô nhập email "Your email address" + nút Subscribe
- **Hàng dưới**: logo DJI + link Who We Are · Contact Us · Careers · Dealer Portal · RoboMaster + icon social (Facebook, X/Twitter, Youtube, TikTok, Instagram).
- **Hàng cuối**: link DJI Privacy Policy · Use of Cookies · Terms of Use · Business Information · Accessibility · Do Not Sell Or Share My Personal Information · Cookie Preferences + "Copyright © 2026 DJI All Rights Reserved." + "United States / English".

---

## 4. Hành vi (interaction) cần làm

- Hero slider: tự chạy + bấm tab/dots để chuyển slide.
- "Shot on" slider: nút prev/next + dots.
- Nav: sticky khi cuộn; dropdown menu cho "Specialized" và "Explore".
- Promo bar: nút X ẩn thanh.
- Responsive: menu chính gập thành hamburger trên mobile; grid 4 ô và 3 card xuống 1 cột.

---

## 5. Gợi ý cấu trúc file (nếu dùng React/Next)

```
/components
  TopPromoBar.tsx
  Navbar.tsx
  HeroSlider.tsx
  ProductGrid.tsx     // lưới 4 ô
  ShotOnSlider.tsx
  InnovationSection.tsx
  FieldsSection.tsx   // 3 card Video/Enterprise/Agriculture
  QuickLinks.tsx      // dải 3 icon
  AppBanner.tsx
  Footer.tsx
/data
  heroSlides.ts
  footerLinks.ts
```

---

## 6. Lưu ý bản quyền
Đây là bản clone để **học/luyện tập**. Không dùng logo, hình ảnh, tên thương hiệu DJI cho mục đích thương mại hay gây nhầm lẫn là trang chính thức. Thay logo/ảnh thật bằng placeholder khi public.
