NEZER Repair & Remodeling — website
====================================

HOW TO ADD PHOTOS
-----------------
Put .jpg files into the images/ folder using EXACTLY these names.
A photo appears automatically; until then a striped placeholder is shown.

  images/hero.jpg                  Home page, big photo at top (landscape, ~1600px wide)
  images/team.jpg                  About page, team photo

  Gallery (before / after pairs), folder images/gallery/:
  kitchen-before.jpg   kitchen-after.jpg
  deck-before.jpg      deck-after.jpg
  flooring-before.jpg  flooring-after.jpg
  bathroom-before.jpg  bathroom-after.jpg
  fence-before.jpg     fence-after.jpg
  stairs-before.jpg    stairs-after.jpg
  siding-before.jpg    siding-after.jpg
  shelving-before.jpg  shelving-after.jpg

Tips: names are lowercase, extension .jpg. Shrink photos to ~1600px wide
(e.g. squoosh.app) so the site loads fast.

ADD A NEW GALLERY PROJECT
-------------------------
Open gallery.html, copy one <div class="gitem" ...> ... </div> block,
change the photo names, caption, and data-cat (one of: Remodeling,
Decks & Fences, Flooring, Carpentry, Repairs).

FORMS (estimate + contact)
--------------------------
The site is static, so forms need a free form service to email you.
1. Sign up at formspree.io with nezer.remodeling@gmail.com
2. Create a form, copy its ID (looks like xyzabcd)
3. In estimate.html and contact.html replace YOUR_FORM_ID with it.
Photo attachments in the estimate form need a Formspree paid plan
(or use Basin / Getform which allow files on free tiers).

ACCOUNTS
--------
Sign Up currently saves the customer's name/phone/email/address in their
own browser so the Estimate form fills in automatically next time.
Passwords are NOT stored. For real cross-device accounts you will need a
backend (e.g. Firebase Auth or Supabase) — a developer can hook it into
js/site.js.

PUBLISHING
----------
Upload the whole folder to any static host: Netlify (drag & drop),
Cloudflare Pages, GitHub Pages, or your current host for
nezerconstruction.com. index.html is the home page.

EDITING TEXT
------------
Page text lives in each .html file. Header, footer, phone and email live
in one place: js/site.js (top of file).
