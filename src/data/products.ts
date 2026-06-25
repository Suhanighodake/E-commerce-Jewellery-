export interface Product {
  id: number;
  name: string;
  category: 'office' | 'meeting' | 'party';
  type: 'ring' | 'earring' | 'bangle' | 'bracelet' | 'chain' | 'mangalsutra';
  material: '14k' | '18k';
  price: number;
  description: string;
  image: string;
  badge?: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

export const products: Product[] = [
  // ═════════════════════════════════════════════════════════
  // OFFICE EVERYDAY
  // ═════════════════════════════════════════════════════════
  {
    id: 1,
    name: "Aurora Minimal Ring",
    category: "office",
    type: "ring",
    material: "14k",
    price: 4200,
    description: "A whisper-thin 14K gold band with a single prong-set diamond. Understated brilliance for the woman who leads by quiet example.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=750&fit=crop",
    isBestseller: true
  },
  {
    id: 2,
    name: "Clara Pearl Studs",
    category: "office",
    type: "earring",
    material: "14k",
    price: 3200,
    description: "Lustrous freshwater pearls cradled in 14K rose gold settings. The definitive everyday stud for the polished professional.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=750&fit=crop",
    isNew: true
  },
  {
    id: 3,
    name: "Sienna Stack Bangles",
    category: "office",
    type: "bangle",
    material: "14k",
    price: 8500,
    description: "Set of three delicate 14K gold bangles — yellow, white, and rose. Wear solo or stack for effortless weekday sophistication.",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=750&fit=crop"
  },
  {
    id: 4,
    name: "Noir Bar Chain",
    category: "office",
    type: "chain",
    material: "14k",
    price: 5600,
    description: "A sleek horizontal bar pendant on a whisper-fine 14K chain. Architectural simplicity that pairs with every tailored blazer.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop"
  },
  {
    id: 5,
    name: "Modern Muse Mangalsutra",
    category: "office",
    type: "mangalsutra",
    material: "14k",
    price: 12800,
    description: "A contemporary masterpiece. Black beaded chain meets a minimalist 14K gold geometric pendant — tradition reimagined for the corner office.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=750&fit=crop",
    isBestseller: true,
    badge: "Modern Heritage"
  },
  {
    id: 6,
    name: "Infinity Mangalsutra",
    category: "office",
    type: "bracelet",
    material: "14k",
    price: 15200,
    description: "Symbolizing everlasting love and an unbreakable bond, the Infinity Mangalsutra is a beautiful expression of commitment, elegance, and modern romance. ",
    image: "https://i.pinimg.com/1200x/42/56/a9/4256a98d3de3363a0e818e15fa119244.jpg",
    isNew: true
  },
  {
    id: 19,
    name: "Aurelia Tiny Studs",
    category: "office",
    type: "earring",
    material: "14k",
    price: 1800,
    description: "Petite diamond-cut studs that catch light with every nod. The perfect no-fuss accessory for video calls and coffee runs.",
    image: "https://i.pinimg.com/736x/2d/ea/f0/2deaf0ca26645fdc6db9d3dd228fbf66.jpg",
    isNew: true
  },
  {
    id: 20,
    name: "Essential Gold Chain",
    category: "office",
    type: "chain",
    material: "14k",
    price: 2400,
    description: "A barely-there 14K gold cable chain for the woman who believes the finest things whisper rather than shout.",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=750&fit=crop"
  },
  {
    id: 21,
    name: "Prima Signet Ring",
    category: "office",
    type: "ring",
    material: "14k",
    price: 3600,
    description: "A polished 14K gold signet ring with a brushed oval face. Minimalist heirloom energy for modern power dressing.",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=750&fit=crop"
  },
  {
    id: 22,
    name: "Pearl Dewdrop Pendant",
    category: "office",
    type: "chain",
    material: "14k",
    price: 4800,
    description: "A single freshwater pearl suspended from a 14K gold chain. Soft, luminous, and quietly feminine for important days.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop",
    isNew: true
  },
  {
    id: 23,
    name: "Dainty Toe Ring Duo",
    category: "office",
    type: "ring",
    material: "14k",
    price: 1200,
    description: "Two ultra-delicate 14K gold toe rings with beaded texture. A hidden touch of luxury beneath your workwear.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=750&fit=crop"
  },
  {
    id: 24,
    name: "Rose Mini Hoops",
    category: "office",
    type: "earring",
    material: "14k",
    price: 2800,
    description: "Small 14K rose gold huggie hoops with a high-shine finish. Comfortable enough for all-day wear, polished enough for any meeting.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=750&fit=crop",
    badge: "Daily Staple"
  },

  // ═════════════════════════════════════════════════════════
  // MEETING POWER
  // ═════════════════════════════════════════════════════════
  {
    id: 7,
    name: "Regent Solitaire Ring",
    category: "meeting",
    type: "ring",
    material: "18k",
    price: 18500,
    description: "A commanding 18K gold ring crowned with a brilliant solitaire. The punctuation mark at the end of your power suit.",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=750&fit=crop",
    isBestseller: true
  },
  {
    id: 8,
    name: "Empress Drop Hoops",
    category: "meeting",
    type: "earring",
    material: "18k",
    price: 9800,
    description: "Structured 18K gold drop hoops with angular geometry. Frame your confidence as you command the room.",
    image: "https://i.pinimg.com/control1/1200x/5c/ec/2f/5cec2f775ac7292475d2aeca8c86763e.jpg"
  },
  {
    id: 9,
    name: "Apex Layered Necklace",
    category: "meeting",
    type: "chain",
    material: "18k",
    price: 14200,
    description: "Double-layered 18K chains in contrasting yellow and white gold. A subtle flex of taste that reads as authority, not accessory.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop",
    isNew: true
  },
  {
    id: 10,
    name: "Monarch Cuff Bracelet",
    category: "meeting",
    type: "bracelet",
    material: "18k",
    price: 16800,
    description: "Sculptural open cuff in brushed 18K gold. Slips over your watch like a coronation for your wrist.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=750&fit=crop",
    badge: "Power Dressing"
  },
  {
    id: 11,
    name: " Mangalsutra",
    category: "meeting",
    type: "mangalsutra",
    material: "18k",
    price: 19200,
    description: "Sleek 18K gold with a diamond-accented compass motif pendant. For the woman who navigates tradition and transformation.",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=750&fit=crop",
    badge: "Executive Edit"
  },
  {
    id: 12,
    name: "Heritage Bangles",
    category: "meeting",
    type: "bangle",
    material: "18k",
    price: 17800,
    description: "Pair of hand-hammered 18K gold bangles. Each mark tells a story of artisan hands and ancestral technique.",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=750&fit=crop"
  },
  {
    id: 25,
    name: "Earrings",
    category: "meeting",
    type: "earring",
    material: "18k",
    price: 12400,
    description: "Minimalist oval hoop stud earrings crafted from plated metal with steel ear pins, available in gold & silver two tones",
    image: "https://i.pinimg.com/1200x/9b/56/d6/9b56d69d791e3596bf67cd8a3f5fcb82.jpg",
    isNew: true
  },
  {
    id: 26,
    name: "Rose Gold Nail Ring",
    category: "meeting",
    type: "ring",
    material: "18k",
    price: 10200,
    description: "Discover timeless beauty with this elegant rose gold nail ring. ",
    image: "https://i.pinimg.com/736x/47/0c/fe/470cfec453544a664e95700980847518.jpg"
  },
  {
    id: 27,
    name: "Ruby Crest Ring",
    category: "meeting",
    type: "ring",
    material: "18k",
    price: 14800,
    description: "An 18K gold ring centered with a deep ruby-red cubic zirconia. A regal accent for decisive moments.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=750&fit=crop",
    badge: "Royal Accent"
  },
  {
    id: 28,
    name: "Viceroy Statement Cuff",
    category: "meeting",
    type: "bracelet",
    material: "18k",
    price: 16200,
    description: "Wide polished 18K cuff with a centre channel of baguette stones. Unapologetically powerful.",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=750&fit=crop"
  },
  {
    id: 29,
    name: "Emerald Envy Studs",
    category: "meeting",
    type: "earring",
    material: "18k",
    price: 11600,
    description: "Vivid emerald-green stones set in 18K gold bezels. A confident pop of colour beneath your executive bun.",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=750&fit=crop",
    isNew: true
  },
  {
    id: 30,
    name: "Twisted Sovereign Bangles",
    category: "meeting",
    type: "bangle",
    material: "18k",
    price: 13400,
    description: "Pair of twisted 18K gold bangles that catch boardroom light from every angle. Quietly commanding.",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=750&fit=crop"
  },

  // ═════════════════════════════════════════════════════════
  // EVENING GLAMOUR
  // ═════════════════════════════════════════════════════════
  {
    id: 13,
    name: "Diamond Necklace",
    category: "party",
    type: "chain",
    material: "18k",
    price: 20000,
    description: "Upgrade your look with our New Collection diamond necklace set, crafted in elegant rose gold & sparkling diamonds",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=750&fit=crop",
    isBestseller: true
  },
  {
    id: 14,
    name: "Seraphina Earrings",
    category: "party",
    type: "earring",
    material: "18k",
    price: 19500,
    description: "A design where gold and diamonds come together in quiet harmony. ",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=750&fit=crop",
    isNew: true,
  },
  {
    id: 15,
    name: "Royal Court Necklace",
    category: "party",
    type: "chain",
    material: "18k",
    price: 19800,
    description: "A dramatic collar of graduated cubic zirconia set in 18K white gold. Designed for the entrance that pauses every conversation.",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=750&fit=crop",
    badge: "Statement"
  },
  {
    id: 16,
    name: "Maharani Kada",
    category: "party",
    type: "bangle",
    material: "18k",
    price: 20000,
    description: "Wide ceremonial kada in 18K yellow gold with intricate Meenakari enamel work. Heritage reimagined for the modern celebration.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=750&fit=crop"
  },
  {
    id: 17,
    name: "Stella Charm Bracelet",
    category: "party",
    type: "bracelet",
    material: "14k",
    price: 6800,
    description: "A narrative bracelet of 14K gold charms — star, moon, heart, key. Each charm a chapter. Together, a story of modern femininity.",
    image: "https://i.pinimg.com/1200x/8d/01/b5/8d01b567fb6e3ffad89241a8ffe23b49.jpg"
  },
  {
    id: 18,
    name: "Elegant Mangalsutra",
    category: "party",
    type: "mangalsutra",
    material: "18k",
    price: 18500,
    description: "Black silk threads meet an 18K gold geometric pendant with a suspended lab-grown diamond. For the woman who rewrites tradition in her own handwriting.",
    image: "https://i.pinimg.com/736x/a9/ee/9c/a9ee9cad86f69b6606e111e60f980d16.jpg",
  },
  {
    id: 31,
    name: "Sapphire Tiara Ring",
    category: "party",
    type: "ring",
    material: "18k",
    price: 17200,
    description: "A deep blue centrepiece surrounded by a halo of brilliant stones in 18K white gold. Evening royalty.",
    image: "https://i.pinimg.com/1200x/32/b1/8d/32b18d4c3a0416d251b78d6d323cdc0a.jpg",
  
  },
  {
    id: 32,
    name: "Diamond Errings",
    category: "party",
    type: "earring",
    material: "18k",
    price: 20000,
    description: "Long tassels of tiny freshwater pearls capped in 18K gold. Elegant movement for every toast and twirl.",
    image: "https://i.pinimg.com/736x/b0/3f/d0/b03fd0cfb31f62f1a76c195e375577db.jpg",
    isNew: true
  },
  {
    id: 33,
    name: "Bridal Layered Rani Haar",
    category: "party",
    type: "chain",
    material: "18k",
    price: 18800,
    description: "Three graduated strands of pearls and 18K gold beads. Inspired by royal bridal jewellery, reimagined for contemporary celebrations.",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=750&fit=crop",
    badge: "Celebration"
  },
  {
    id: 34,
    name: "Kundan Heritage Bangle",
    category: "party",
    type: "bangle",
    material: "18k",
    price: 15400,
    description: "A wide open bangle in antique-finish 18K gold with kundan-inspired settings. For weddings that feel like royal affairs.",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=750&fit=crop"
  },
  {
    id: 35,
    name: "Diamond Gala Bracelet",
    category: "party",
    type: "bracelet",
    material: "18k",
    price: 13200,
    description: "A continuous tennis bracelet of brilliant-cut stones in 18K white gold. The only thing more dazzling than your dress.",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=750&fit=crop",
    isBestseller: true
  },
  {
    id: 36,
    name: "Festive Royal Mangalsutra",
    category: "party",
    type: "mangalsutra",
    material: "18k",
    price: 16800,
    description: "A celebration-ready mangalsutra with black beads, 18K gold lotus motifs, and a central ruby stone. Tradition in its finest festive form.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=750&fit=crop",
    badge: "Festive"
  },

  // Additional variety products
  {
    id: 37,
    name: "Emerald Leaf Bracelet",
    category: "office",
    type: "bracelet",
    material: "14k",
    price: 7200,
    description: "Delicate 14K gold chain bracelet with tiny emerald-green leaf charms. Fresh, refined, and perfect for weekday elegance.",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=750&fit=crop",
    isNew: true
  },
  {
    id: 38,
    name: "Moonlight Bangle",
    category: "office",
    type: "bangle",
    material: "14k",
    price: 5800,
    description: "A slim crescent-shaped 14K gold bangle with a brushed satin finish. Wears like moonlight around your wrist.",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=750&fit=crop"
  },
  {
    id: 39,
    name: "Lotus Mini Mangalsutra",
    category: "office",
    type: "mangalsutra",
    material: "14k",
    price: 9400,
    description: "A tiny lotus pendant in 14K gold on a delicate black-bead chain. Subtle tradition that sits beautifully under work collars.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop"
  },
  {
    id: 40,
    name: "Diamond Line Bracelet",
    category: "meeting",
    type: "bracelet",
    material: "18k",
    price: 13600,
    description: "A bold line of princess-cut stones set in 18K white gold. For the wrist that signs million-rupee deals.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=750&fit=crop",
    isNew: true
  },
  {
    id: 41,
    name: "Royal Cuff Bangle",
    category: "meeting",
    type: "bangle",
    material: "18k",
    price: 14200,
    description: "A thick, polished 18K gold bangle with carved regal motifs. The kind of piece that has presence without saying a word.",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=750&fit=crop",
    badge: "Commanding"
  },
  {
    id: 42,
    name: "Sapphire Mangalsutra",
    category: "meeting",
    type: "mangalsutra",
    material: "18k",
    price: 15800,
    description: "Black beads meet a deep blue sapphire stone set in 18K gold. A mangalsutra that belongs in the boardroom as much as at home.",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=750&fit=crop"
  },
  {
    id: 43,
    name: "Vintage Cuff Bracelet",
    category: "party",
    type: "bracelet",
    material: "18k",
    price: 11400,
    description: "An antique-finish 18K gold cuff with intricate filigree work. Timeless glamour for receptions and family celebrations.",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=750&fit=crop"
  },
  {
    id: 44,
    name: "Pearl Encrusted Bangle",
    category: "party",
    type: "bangle",
    material: "18k",
    price: 16400,
    description: "A broad 18K gold bangle edged with seed pearls. Royal, radiant, and made for the spotlight.",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=750&fit=crop",
    badge: "Royal"
  },
  {
    id: 45,
    name: "Temple Mangalsutra",
    category: "party",
    type: "mangalsutra",
    material: "18k",
    price: 19200,
    description: "Ornate temple-inspired motifs in 18K gold with ruby and emerald-coloured accents. Heritage grandeur for the grandest nights.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=750&fit=crop",
    badge: "Heritage"
  },
  {
    id: 46,
    name: "Rose Gold Heart Bracelet",
    category: "office",
    type: "bracelet",
    material: "14k",
    price: 3400,
    description: "A delicate 14K rose gold chain bracelet with a tiny heart charm. The little luxury you glance at during long meetings.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=750&fit=crop",
    isNew: true
  },
  {
    id: 47,
    name: "Onyx Bangle Pair",
    category: "party",
    type: "bangle",
    material: "18k",
    price: 11800,
    description: "A pair of 18K gold bangles accented with polished black onyx stones. Drama, elegance, and modern edge in one stack.",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=750&fit=crop"
  },
  {
    id: 48,
    name: "Diamond Drop Mangalsutra",
    category: "meeting",
    type: "mangalsutra",
    material: "18k",
    price: 17600,
    description: "A slender black chain culminating in a teardrop pendant of brilliant-cut stones. Modern mangalsutra, redefined for the executive woman.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop",
    isBestseller: true
  }
];

export const categories = [
  {
    id: 'office',
    name: 'Office Everyday',
    subtitle: 'Effortless Elegance for the 9-to-5',
    description: 'Delicate, refined pieces that complement your workwear without overwhelming it. Designed for the woman whose presence speaks before she does.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&h=1100&fit=crop',
    count: 16,
    priceFrom: '₹1,200'
  },
  {
    id: 'meeting',
    name: 'Meeting Power',
    subtitle: 'Boardroom Authority',
    description: 'Statement pieces that frame your confidence. For presentations that close deals, negotiations that set terms, and moments where you define the room.',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=900&h=1100&fit=crop',
    count: 16,
    priceFrom: '₹9,800'
  },
  {
    id: 'party',
    name: 'Evening Glamour',
    subtitle: 'Celebration & Soirée',
    description: 'Bold, luminous pieces engineered for the spotlight. For galas, weddings, award nights, and every evening where you are the occasion.',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=900&h=1100&fit=crop',
    count: 16,
    priceFrom: '₹6,800'
  }
];

export const jewelryTypes = [
  { id: 'ring', name: 'Rings' },
  { id: 'earring', name: 'Earrings' },
  { id: 'bangle', name: 'Bangles' },
  { id: 'bracelet', name: 'Bracelets' },
  { id: 'chain', name: 'Necklaces' },
  { id: 'mangalsutra', name: 'Mangalsutra' }
];
