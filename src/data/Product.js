/* ─────────────────────────────────────────────────────
   products.js  —  Aurum Fine Jewellery Product Catalogue
   ───────────────────────────────────────────────────── */

export const WHATSAPP_NUMBER = '919761560132' // Replace with real number

/* ── Image pools ─────────────────────────────────── */
const IMG = {
  rosering1: 'https://i.pinimg.com/736x/14/6d/fb/146dfbbd2094d2442f053b5c75cb0d21.jpg',
  rosering2:'https://i.pinimg.com/736x/7b/2f/5a/7b2f5a7214e3ac0fc978106b3739b2f2.jpg',
  rosering3:'https://i.pinimg.com/736x/51/48/59/5148597f0c4c365f247cc6cc6a2a0d50.jpg',
  ring1:       'https://i.pinimg.com/1200x/52/7f/d5/527fd502e821a6f5e490218224da9d40.jpg',
  ring2:       'https://i.pinimg.com/1200x/0e/12/36/0e1236c3b5f1f7986f51d6f705a3d459.jpg',
  ring3:       'https://i.pinimg.com/1200x/aa/94/81/aa9481821a408c00d9b337aeefcd1900.jpg',
  ring4:       'https://i.pinimg.com/1200x/28/1c/0f/281c0ff6002477ca0fd670788c555e96.jpg',
  ring5:        'https://i.pinimg.com/1200x/4a/99/ed/4a99ed2e7a6dc30351084b2eb84f0c51.jpg',
  necklace1:   'https://i.pinimg.com/736x/3f/df/4a/3fdf4a40a6430c17fc39852bf784c808.jpg',
  necklace2:   'https://i.pinimg.com/736x/b5/1d/54/b51d54377881806e0bb72019260fb5f4.jpg',
  necklace3:   'https://i.pinimg.com/1200x/fe/dc/ea/fedceaddcfe8ddc997eea0048daac09b.jpg',
  necklace4:   'https://i.pinimg.com/736x/26/87/cf/2687cf5915d10f0e96a9ba07b47bc1f7.jpg',
  bracelet1:   'https://i.pinimg.com/1200x/f5/23/39/f5233908544897faa442f22a1eded598.jpg',
  bracelet2:   'https://i.pinimg.com/1200x/37/08/a3/3708a3324e669edfa3df326a91e0a55b.jpg',
  bracelet3:   'https://i.pinimg.com/736x/29/29/cf/2929cfe15395fb55cfe69600474544e3.jpg',
  bracelet4:   'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=900&q=90',
  earring1:    'https://i.pinimg.com/736x/8e/a5/97/8ea597e672ef9860ad8776db1e6f6882.jpg',
  earring2:    'https://i.pinimg.com/1200x/69/54/f7/6954f72b58a6da6b916f9392fed1a525.jpg',
  earring3:    'https://i.pinimg.com/1200x/51/92/27/519227b6a3f6ac32e87e284a29b413d1.jpg',
  tops:        'https://i.pinimg.com/1200x/83/93/d2/8393d23e4d109d7ff4401ae2501aad6d.jpg',
  tops1:        'https://i.pinimg.com/1200x/11/77/d2/1177d28bdfb75e2ddb40ea07a207f883.jpg',
  tops2:        'https://i.pinimg.com/1200x/02/32/b8/0232b8d6a3652dc6785b0113651e1afe.jpg',
  bridal1:     'https://i.pinimg.com/1200x/07/35/3a/07353ae28e4756541c45154c2a510072.jpg',
  bridal2:     'https://i.pinimg.com/736x/0f/f8/7d/0ff87d1cee83bbb6649adefecbb97a32.jpg',
  bridal3:      'https://i.pinimg.com/1200x/c9/43/72/c94372fd5db3008d9a5ecb77a6892c37.jpg',
  chain1:      'https://i.pinimg.com/1200x/39/8c/09/398c09b96ec8f62055ed57189b606101.jpg',
  chain2:       'https://i.pinimg.com/1200x/42/6d/34/426d34e1b5722d3e71b4417150fdc74e.jpg',
  chain3:      'https://i.pinimg.com/1200x/31/e4/de/31e4deac2581e530fb7ffc11d0ae80f2.jpg',
  locket1:     'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=900&q=90',
  temple1:     'https://i.pinimg.com/736x/ef/51/52/ef5152e4bb902c9ea4df434091be6508.jpg',
  payal1:      'https://i.pinimg.com/736x/01/8c/c5/018cc5537ff7a2febc0ac8910b886c18.jpg',
  payal2:       'https://i.pinimg.com/1200x/74/18/fb/7418fb7240dde10057b2260650449076.jpg',
  pendant1:    'https://i.pinimg.com/1200x/48/30/5d/48305dbfe0eb24df0d4fbd69cada75cd.jpg',
  pendant2:     'https://i.pinimg.com/1200x/b6/fb/fe/b6fbfe8864d69995cd83019130a0e390.jpg',
  pendant3:     'https://i.pinimg.com/1200x/7f/f1/de/7ff1de475ede123a7dd81c7bfa6f247f.jpg',
  kade1:       'https://i.pinimg.com/1200x/79/86/f3/7986f3c3a160020983295704981accc8.jpg',
  kade2:        'https://i.pinimg.com/736x/c6/ee/da/c6eedaaa9ed6404d355242a3b37e9a10.jpg',
  kade3:'https://i.pinimg.com/736x/00/53/60/005360512584d840607709594b2128a8.jpg',
  choker1:     'https://i.pinimg.com/736x/bc/67/9d/bc679dd47fe8eaff655a5b8e8df7fa08.jpg',
  mangal1:     'https://i.pinimg.com/736x/ce/6c/36/ce6c36e8a0d03598d0339d529e40457e.jpg',
  managl2:      'https://i.pinimg.com/736x/97/5d/a8/975da81b9671df99ba5b28b4fd4935ea.jpg',
  managal3:      'https://i.pinimg.com/736x/41/71/06/4171064acbffd6e92a039e5724804917.jpg',
  jhumki1:     'https://i.pinimg.com/736x/b2/2c/b0/b22cb0e890121560f131e789969e3439.jpg',
  craft1:      'https://images.unsplash.com/photo-1618220179428-22790b461013?w=900&q=90',
  chudi1:      'https://i.pinimg.com/webp/736x/62/fa/78/62fa78569c8c07d467a68f540b36b12e.webp',
  chudi2:      'https://i.pinimg.com/1200x/3e/57/af/3e57afe2d1f885b2fbb96d5d08acf3c1.jpg',
  chudi3:      'https://i.pinimg.com/736x/9d/24/f4/9d24f4eee078ace7a4aaab61be66e9ee.jpg',
  omgold: 'https://i.pinimg.com/736x/c4/15/f4/c415f40892d600b165eda0f7c9348b51.jpg',
  omgold1: 'https://i.pinimg.com/736x/ac/42/29/ac4229ce50ad3f63c75381a935366045.jpg',
  omgold2: 'https://i.pinimg.com/736x/e3/4a/ee/e34aeed89b0be7cc20264a2d0a5e8fe0.jpg',
  payal2:   'https://i.pinimg.com/1200x/74/18/fb/7418fb7240dde10057b2260650449076.jpg',
  payal3:   'https://i.pinimg.com/736x/61/af/2e/61af2e667e5aa7c52b4f418df3695223.jpg',
silverring1:'https://i.pinimg.com/736x/d7/1e/51/d71e51c340a9ee5ec5571f544ec37219.jpg',
silverring2:'https://i.pinimg.com/736x/7c/d2/3e/7cd23e1a406198f53b567306da5efaa3.jpg',
silverring3:'https://i.pinimg.com/736x/eb/0f/13/eb0f137c7d42a92ea9286910eeb3b3c0.jpg',
  temple2:      'https://i.pinimg.com/1200x/c6/ff/8e/c6ff8e16553727dc3b05ccd0b26480f8.jpg',
  temple3:       'https://i.pinimg.com/736x/1b/0a/88/1b0a8878670c92a2b4aefb48c454a20a.jpg',
  silverearring:'https://i.pinimg.com/1200x/a3/b0/2e/a3b02e5884c20b0bd29d8d62d324003b.jpg',
  silverearring1:'https://i.pinimg.com/736x/14/9a/48/149a48d29f8732c66e53ad66be586601.jpg',
  silverbracelet:'https://i.pinimg.com/736x/31/9b/a8/319ba8e9d3db2b06d53d4ce5028345d0.jpg',
  silverbracelet2:'https://i.pinimg.com/1200x/b2/f8/71/b2f871a8379a4c15f6fafe1dbc03bc28.jpg',
  silverbracelet3:'https://i.pinimg.com/1200x/16/db/49/16db493f61a14c37867a99e1944b1dc2.jpg'
}

/* ── Product list ─────────────────────────────────── */
export const products = [
  // ── GOLD RINGS ──────────────────────────────────
  {
    id: 'gr-001',
    slug: 'gold-solitaire-ring',
    name: 'Gold Rings',
    category: 'Rings',
    categorySlug: 'gold-rings',
    metal: 'gold',
    collections: ['party-wear'],
    images: [IMG.ring1, IMG.ring2, IMG.ring3],
    shortDescription: 'A timeless solitaire set in 22K gold — the ultimate declaration of love and refinement.',
    fullDescription: 'Our Solitaire Diamond Ring is a masterclass in understated luxury. Forged from 22-karat gold and set with a perfectly round brilliant-cut diamond, this ring is designed to endure every generation. The cathedral setting elevates the stone while allowing light to dance through its facets at every angle. Available in custom sizing.',
    features: ['22K Hallmarked Gold', 'Brilliant-cut Diamond', 'Custom Sizing Available', 'BIS Certified'],
    tags: ['gold', 'party-wear'],
  },
  {
    id: 'gr-002',
    slug: 'gold-halo-ring-women',
    name: 'Rose Gold Halo Ring',
    category: 'Rings',
    categorySlug: 'gold-rings',
    metal: 'gold',
    collections: ['party-wear', 'daily-wear'],
    images: [IMG.rosering1, IMG.rosering2, IMG.rosering3],
    shortDescription: 'A halo of micro-pave stones encircles a central gem — opulence at its most elegant.',
    fullDescription: 'The Rose Gold Halo Ring features a central gemstone encircled by a delicate halo of pavé-set diamonds. Crafted in 18K rose gold, the warm tone complements every complexion. Perfect as an engagement ring or a statement anniversary gift.',
    features: ['18K Rose Gold', 'Pavé Diamond Halo', 'GIA Certified Stone', 'Complimentary Sizing'],
    tags: ['gold', 'party-wear', 'daily-wear'],
  },
  {
    id: 'gr-003',
    slug: 'gold-men-band',
    name: 'Classic Gold Band — Men',
    category: 'Rings',
    categorySlug: 'gold-rings',
    metal: 'gold',
    collections: ['daily-wear', 'lightweight'],
    images: [IMG.ring4, IMG.ring3, IMG.ring5],
    shortDescription: 'A bold, hand-finished band in 22K gold — built for the man who moves with quiet confidence.',
    fullDescription: 'The Classic Men\'s Band is crafted from solid 22K gold with a brushed matte finish on the exterior and polished interior. Its weight and presence on the wrist speak of quality without pretension. Available in 6mm and 8mm widths.',
    features: ['22K Gold', 'Brushed Finish', 'Available in 6mm & 8mm', 'Lifetime Polish Warranty'],
    tags: ['gold', 'daily-wear', 'lightweight'],
  },

  // ── GOLD NECKLACES ───────────────────────────────
  {
    id: 'gn-001',
    slug: 'gold-pearl-necklace',
    name: 'Minimal Necklace',
    category: 'Necklaces',
    categorySlug: 'gold-necklaces',
    metal: 'gold',
    collections: ['party-wear', 'bridal'],
    images: [IMG.necklace2, IMG.necklace1, IMG.necklace3],
    shortDescription: 'South Sea pearls strung on 18K gold — a classic that never loses its brilliance.',
    fullDescription: 'A strand of perfectly matched South Sea pearls suspended on 18K gold silk thread with a diamond-set gold clasp. Each pearl is individually hand-knotted and inspected for lustre, roundness, and surface quality. This is the necklace that defines generations.',
    features: ['18K Gold Clasp', 'South Sea Pearls', 'Hand-knotted Thread', 'Comes in Luxury Box'],
    tags: ['gold', 'party-wear', 'bridal'],
  },
  {
    id: 'gn-002',
    slug: 'gold-diamond-choker',
    name: 'Gold Choker',
    category: 'Chokers',
    categorySlug: 'gold-chokers',
    metal: 'gold',
    collections: ['party-wear', 'bridal'],
    images: [IMG.choker1, IMG.necklace4, IMG.necklace1],
    shortDescription: 'A statement choker of channel-set diamonds in 22K gold — made for unforgettable evenings.',
    fullDescription: 'The Diamond Gold Choker sits close to the neck in a sleek channel setting of brilliant-cut diamonds. Crafted in 22K gold, the contrast between warm metal and icy stones creates an effect both dramatic and sophisticated. This piece transitions seamlessly from ceremony to celebration.',
    features: ['22K Hallmarked Gold', 'Channel-set Diamonds', 'Adjustable Length', 'Bridal Favourite'],
    tags: ['gold', 'party-wear', 'bridal'],
  },
  {
    id: 'gn-003',
    slug: 'gold-neck-chain-men',
    name: 'Curb Chain — Men',
    category: 'Neck Chains',
    categorySlug: 'gold-chains',
    metal: 'gold',
    collections: ['daily-wear'],
    images: [IMG.chain1, IMG.chain2, IMG.chain3],
    shortDescription: 'A substantial curb chain in 22K gold — the cornerstone of a man\'s jewellery collection.',
    fullDescription: 'Hand-assembled link by link from 22K gold, our Curb Chain for men delivers a satisfying weight and a mirror polish that catches the light at every turn. Available in 18\", 20\", and 22\" lengths. Each chain is hallmarked and accompanied by a certificate of purity.',
    features: ['22K Hallmarked Gold', 'Mirror Polish', '3 Length Options', 'BIS Certified'],
    tags: ['gold', 'daily-wear'],
  },

  // ── GOLD EARRINGS ────────────────────────────────
  {
    id: 'ge-001',
    slug: 'gold-jhumki-traditional',
    name: 'Traditional Gold Jhumki',
    category: 'Jhumki',
    categorySlug: 'gold-jhumki',
    metal: 'gold',
    collections: ['traditional', 'party-wear'],
    images: [IMG.jhumki1, IMG.earring1, IMG.earring2],
    shortDescription: 'Hand-engraved jhumkis with meenakari work — India\'s finest earring tradition, perfected.',
    fullDescription: 'These Traditional Gold Jhumkis are a tribute to centuries of Indian goldsmithing. Each piece is hand-engraved with floral motifs and accented with vibrant meenakari enamel work. The cascading bell drops are set with ruby and emerald accents, creating an earring that is both festive and refined.',
    features: ['22K Gold Base', 'Hand Meenakari Work', 'Ruby & Emerald Accents', 'Traditional Craftsmanship'],
    tags: ['gold', 'traditional', 'party-wear'],
  },
  {
    id: 'ge-002',
    slug: 'gold-tops-diamond',
    name: ' Gold Tops',
    category: 'Tops',
    categorySlug: 'gold-tops',
    metal: 'gold',
    collections: ['daily-wear', 'lightweight'],
    images: [IMG.tops, IMG.tops1, IMG.tops2],
    shortDescription: 'Brilliant-cut diamond studs in a four-claw 18K gold setting — perfect for every day.',
    fullDescription: 'The Diamond Tops are a wardrobe essential — a perfectly matched pair of brilliant-cut diamonds in a classic four-claw 18K gold setting. Their simplicity is their strength. Whether worn to a board meeting or a dinner, these tops elevate every look without competing with it.',
    features: ['18K Gold', 'Brilliant-cut Diamond', 'Push-back Setting', 'Certificate Included'],
    tags: ['gold', 'daily-wear', 'lightweight'],
  },

  // ── GOLD BRACELETS ───────────────────────────────
  {
    id: 'gb-001',
    slug: 'gold-tennis-bracelet',
    name: 'Tennis Bracelet',
    category: 'Bracelets',
    categorySlug: 'gold-bracelets',
    metal: 'gold',
    collections: ['party-wear'],
    images: [IMG.bracelet1, IMG.bracelet2, IMG.bracelet3],
    shortDescription: 'A continuous line of diamond-set gold links — the definitive luxury bracelet.',
    fullDescription: 'Our Tennis Bracelet features a continuous channel of round brilliant diamonds set in 18K gold, flexing elegantly with every movement. The box clasp with safety catch ensures it stays where it belongs — on your wrist. A piece that transcends trends because it embodies perfection.',
    features: ['18K Gold', 'F-G VS Diamond Quality', 'Safety Box Clasp', 'Resizable'],
    tags: ['gold', 'party-wear'],
  },
  {
    id: 'gb-002',
    slug: 'gold-chudi-set',
    name: 'Gold Chudi Set',
    category: 'Chudi',
    categorySlug: 'gold-chudi',
    metal: 'gold',
    collections: ['traditional', 'bridal'],
    images: [IMG.chudi1, IMG.chudi2, IMG.chudi3],
    shortDescription: 'A set of eight hand-carved gold chudi — the sound of celebration.',
    fullDescription: 'Our Gold Chudi Set of eight bangles is carved from solid 22K gold and adorned with a repeating lotus motif. The graduated design — with slightly varied widths — creates a stacked look that moves and chimes beautifully. Customisable in weight from 2 to 4 grams per bangle.',
    features: ['22K Gold', 'Lotus Carved Motif', 'Set of 8', 'Custom Weight Options'],
    tags: ['gold', 'traditional', 'bridal'],
  },

  // ── GOLD BRIDAL ──────────────────────────────────
  {
    id: 'gbr-001',
    slug: 'gold-bridal-full-set',
    name: 'Royal Bridal Set',
    category: 'Bridal Jewellery',
    categorySlug: 'gold-bridal',
    metal: 'gold',
    collections: ['bridal', 'traditional'],
    images: [IMG.bridal1, IMG.bridal2, IMG.bridal3],
    shortDescription: 'A complete 22K gold bridal set — necklace, maang tikka, earrings, and bangles.',
    fullDescription: 'The Royal Bridal Set is our flagship offering for the bride who deserves nothing less than everything. Crafted from 22K gold with hand-placed rubies, emeralds, and polki diamonds, this seven-piece set — necklace, choker, maang tikka, earrings, nath, bangles, and payal — tells the story of India\'s bridal heritage in the most luminous way possible.',
    features: ['22K Hallmarked Gold', '7-Piece Complete Set', 'Polki & Ruby Setting', 'Bespoke Fitting Service'],
    tags: ['gold', 'bridal', 'traditional'],
  },
  {
    id: 'gbr-002',
    slug: 'gold-mangalsutra-classic',
    name: 'Classic Mangalsutra',
    category: 'Mangalsutra',
    categorySlug: 'gold-mangalsutra',
    metal: 'gold',
    collections: ['bridal', 'daily-wear'],
    images: [IMG.mangal1, IMG.managl2, IMG.managal3],
    shortDescription: 'A sacred mangalsutra in 22K gold with black bead pattern — tradition refined.',
    fullDescription: 'Our Classic Mangalsutra combines the sacred black bead pattern with a central pendant of 22K gold set with a solitaire diamond. The chain blends traditional tanmaniya design with a contemporary slim profile, making it suitable for daily wear without ever losing its ceremonial gravitas.',
    features: ['22K Gold Pendant', 'Certified Diamond', 'Traditional Black Bead', 'Length Customisable'],
    tags: ['gold', 'bridal', 'daily-wear'],
  },

  // ── GOLD LOCKETS ─────────────────────────────────
  {
    id: 'gl-001',
    slug: 'gold-om-locket',
    name: 'Om Locket — Gold',
    category: 'Lockets',
    categorySlug: 'gold-lockets',
    metal: 'gold',
    collections: ['traditional', 'daily-wear'],
    images: [IMG.omgold, IMG.omgold1, IMG.omgold2],
    shortDescription: 'A hand-carved Om locket in 22K gold — devotion you can wear every day.',
    fullDescription: 'The Om Locket is cast from 22K gold with a deeply hand-engraved Om symbol on the face and a smooth mirror finish on the reverse. The bail is generously proportioned to fit chains up to 5mm wide. A piece that bridges the sacred and the everyday.',
    features: ['22K Gold', 'Hand-engraved Om', 'Wide Bail Fitting', 'Gift-ready Box'],
    tags: ['gold', 'traditional', 'daily-wear'],
  },

  // ── GOLD TEMPLE ──────────────────────────────────
  {
    id: 'gt-001',
    slug: 'gold-temple-necklace',
    name: 'Temple Necklace',
    category: 'Temple Jewellery',
    categorySlug: 'gold-temple',
    metal: 'gold',
    collections: ['traditional'],
    images: [IMG.temple1, IMG.temple2, IMG.temple3],
    shortDescription: 'Temple-inspired gold necklace with deity motifs — sacred artistry at its finest.',
    fullDescription: 'Inspired by the adornments of temple deities across South India, this necklace is a work of devotional art. Each panel is individually cast and hand-finished, depicting traditional motifs of Lakshmi, lotus, and peacock in rich 22K gold. The layered design falls across the chest in a cascade of golden opulence.',
    features: ['22K Gold', 'Hand-finished Panels', 'Temple Motif Design', 'South Indian Tradition'],
    tags: ['gold', 'traditional'],
  },

  // ── SILVER PAYAL ─────────────────────────────────
  {
    id: 'sp-001',
    slug: 'silver-payal-designer',
    name: 'Designer Payal',
    category: 'Payal',
    categorySlug: 'silver-payal',
    metal: 'silver',
    collections: ['traditional', 'daily-wear'],
    images: [IMG.payal1, IMG.payal2, IMG.payal3],
    shortDescription: 'Sterling silver anklets with a delicate ghungroo pattern — the music of tradition.',
    fullDescription: 'Our Designer Payal is crafted from 92.5 sterling silver with an interlocking chain design and tiny ghungroo bells that chime softly with each step. The lobster clasp allows easy adjustment to fit any ankle. Sold as a pair, presented in a luxury velvet pouch.',
    features: ['92.5 Sterling Silver', 'Ghungroo Bell Drops', 'Adjustable Lobster Clasp', 'Sold as a Pair'],
    tags: ['silver', 'traditional', 'daily-wear'],
  },

  // ── SILVER RINGS ─────────────────────────────────
  {
    id: 'sr-001',
    slug: 'silver-oxidised-ring',
    name: 'Oxidised Silver Ring',
    category: 'Rings',
    categorySlug: 'silver-rings',
    metal: 'silver',
    collections: ['daily-wear', 'lightweight'],
    images: [IMG.silverring1, IMG.silverring2, IMG.silverring3],
    shortDescription: 'A hand-oxidised band with tribal texture — contemporary style rooted in tradition.',
    fullDescription: 'The Oxidised Silver Ring features a wide band surface with hand-stamped geometric patterns that are then selectively oxidised to create contrast. The result is a ring that feels simultaneously ancient and modern — equally at home with jeans or a kurta.',
    features: ['92.5 Sterling Silver', 'Hand-oxidised Finish', 'Tribal Pattern', 'Unisex Design'],
    tags: ['silver', 'daily-wear', 'lightweight'],
  },

  // ── SILVER KADE ──────────────────────────────────
  {
    id: 'sk-001',
    slug: 'silver-kade-men',
    name: 'Men\'s Silver Kade',
    category: 'Kade',
    categorySlug: 'silver-kade',
    metal: 'silver',
    collections: ['traditional'],
    images: [IMG.kade1, IMG.kade2, IMG.kade3],
    shortDescription: 'A solid silver kade with a carved rope edge — worn by men who honour tradition.',
    fullDescription: 'Cast from solid 92.5 silver, our Men\'s Kade features a traditional rope-edge design that is both decorative and structurally reinforcing. The open-cuff design allows a small range of flex for easy wearing, while the heavy gauge ensures it sits with authority on the wrist. Each piece is hallmarked.',
    features: ['92.5 Sterling Silver', 'Rope Edge Design', 'Open-cuff for Flex', 'BIS Hallmarked'],
    tags: ['silver', 'traditional'],
  },

  // ── SILVER EARRINGS ──────────────────────────────
  {
    id: 'se-001',
    slug: 'silver-jhumke-oxidised',
    name: 'Oxidised Silver Jhumke',
    category: 'Jhumke',
    categorySlug: 'silver-jhumke',
    metal: 'silver',
    collections: ['traditional', 'party-wear'],
    images: [IMG.silverearring, IMG.earring3, IMG.silverearring1],
    shortDescription: 'Large oxidised silver jhumke with beaded drops — bold, beautiful, unmistakably Indian.',
    fullDescription: 'These Oxidised Silver Jhumke are a celebration of Indian craftsmanship at its most expressive. A wide dome of hand-engraved silver is bordered by delicate silver granulation, with five beaded drops that swing and catch the light. The lever-back hook ensures all-day comfort.',
    features: ['92.5 Sterling Silver', 'Hand Oxidised', 'Lever-back Hook', 'Beaded Drop Finish'],
    tags: ['silver', 'traditional', 'party-wear'],
  },

  // ── SILVER PENDANTS ──────────────────────────────
  {
    id: 'spe-001',
    slug: 'silver-om-pendant',
    name: 'Silver Pendant',
    category: 'Pendants',
    categorySlug: 'silver-pendants',
    metal: 'silver',
    collections: ['daily-wear', 'lightweight'],
    images: [IMG.pendant1, IMG.pendant2, IMG.pendant3],
    shortDescription: 'A minimal Om pendant in 92.5 silver — sacred geometry in a modern silhouette.',
    fullDescription: 'The Silver Om Pendant strips the sacred symbol to its essence — a clean, minimal form cast in 92.5 sterling silver and given a high-polish finish. It pairs equally well with a chunky silver chain for a bold statement or a fine box chain for everyday subtlety.',
    features: ['92.5 Sterling Silver', 'High-polish Finish', 'Universal Bail', 'Hypoallergenic'],
    tags: ['silver', 'daily-wear', 'lightweight'],
  },

  // ── SILVER BRACELETS ─────────────────────────────
  {
    id: 'sb-001',
    slug: 'silver-bracelet-women',
    name: 'Filigree Silver Bracelet',
    category: 'Bracelets',
    categorySlug: 'silver-bracelets',
    metal: 'silver',
    collections: ['lightweight', 'daily-wear'],
    images: [IMG.silverbracelet, IMG.  silverbracelet2, IMG.  silverbracelet3],
    shortDescription: 'Gossamer-thin silver filigree bracelet — the craft of Cuttack made wearable.',
    fullDescription: 'Inspired by the legendary Cuttack filigree tradition, this bracelet is woven from 92.5 silver wire drawn to a diameter of less than 0.5mm. The result is a piece of extraordinary delicacy that belies its durability. A toggle clasp makes it easy to put on and take off solo.',
    features: ['92.5 Sterling Silver', 'Cuttack Filigree Technique', 'Toggle Clasp', 'Ultra Lightweight'],
    tags: ['silver', 'lightweight', 'daily-wear'],
  },
]

/* ── Derived helpers ─────────────────────────────── */
export function getProductBySlug(slug) {
  return products.find(p => p.slug === slug) || null
}

export function getProductsByCategory(categorySlug) {
  return products.filter(p => p.categorySlug === categorySlug)
}

export function getProductsByMetal(metal) {
  return products.filter(p => p.metal === metal)
}

export function getProductsByCollection(collectionSlug) {
  return products.filter(p => p.collections.includes(collectionSlug))
}

export function getProductsByTag(tag) {
  return products.filter(p => p.tags.includes(tag))
}

export function getRelatedProducts(product, limit = 4) {
  return products
    .filter(p =>
      p.id !== product.id &&
      (p.categorySlug === product.categorySlug || p.metal === product.metal)
    )
    .slice(0, limit)
}

export const allCategories = [
  // Gold
  { label: 'Rings', slug: 'gold-rings', metal: 'gold' },
  { label: 'Neck Chains', slug: 'gold-chains', metal: 'gold' },
  { label: 'Lockets', slug: 'gold-lockets', metal: 'gold' },
  { label: 'Kundal', slug: 'gold-kundal', metal: 'gold' },
  { label: 'Earrings', slug: 'gold-earrings', metal: 'gold' },
  { label: 'Nose Rings', slug: 'gold-nose-rings', metal: 'gold' },
  { label: 'Nose Pins', slug: 'gold-nose-pins', metal: 'gold' },
  { label: 'Necklaces', slug: 'gold-necklaces', metal: 'gold' },
  { label: 'Chokers', slug: 'gold-chokers', metal: 'gold' },
  { label: 'Rani Haar', slug: 'gold-rani-haar', metal: 'gold' },
  { label: 'Bali', slug: 'gold-bali', metal: 'gold' },
  { label: 'Om Collection', slug: 'gold-om', metal: 'gold' },
  { label: 'Bracelets', slug: 'gold-bracelets', metal: 'gold' },
  { label: 'Chudi', slug: 'gold-chudi', metal: 'gold' },
  { label: 'Kade', slug: 'gold-kade', metal: 'gold' },
  { label: 'Mangalsutra', slug: 'gold-mangalsutra', metal: 'gold' },
  { label: 'Kanthi', slug: 'gold-kanthi', metal: 'gold' },
  { label: 'Nath', slug: 'gold-nath', metal: 'gold' },
  { label: 'Bridal Jewellery', slug: 'gold-bridal', metal: 'gold' },
  { label: 'Kids Jewellery', slug: 'gold-kids', metal: 'gold' },
  { label: 'Jhumki', slug: 'gold-jhumki', metal: 'gold' },
  { label: 'Tops', slug: 'gold-tops', metal: 'gold' },
  { label: 'Gold Coins', slug: 'gold-coins', metal: 'gold' },
  { label: 'Temple Jewellery', slug: 'gold-temple', metal: 'gold' },
  // Silver
  { label: 'Payal', slug: 'silver-payal', metal: 'silver' },
  { label: 'Toe Rings', slug: 'silver-toe-rings', metal: 'silver' },
  { label: 'Neck Chains', slug: 'silver-chains', metal: 'silver' },
  { label: 'Rings', slug: 'silver-rings', metal: 'silver' },
  { label: 'Kade', slug: 'silver-kade', metal: 'silver' },
  { label: 'Bracelets', slug: 'silver-bracelets', metal: 'silver' },
  { label: 'Jhumke', slug: 'silver-jhumke', metal: 'silver' },
  { label: 'Earrings', slug: 'silver-earrings', metal: 'silver' },
  { label: 'Baby Sets', slug: 'silver-baby', metal: 'silver' },
  { label: 'Pendants', slug: 'silver-pendants', metal: 'silver' },
  { label: 'Kids Kade', slug: 'silver-kids-kade', metal: 'silver' },
  { label: 'Silver Coins', slug: 'silver-coins', metal: 'silver' },
  { label: 'Gift Items', slug: 'silver-gifts', metal: 'silver' },
]