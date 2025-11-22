// Indian Medications Database - Hindi Version
// भारतीय दवाओं का डेटाबेस - हिंदी संस्करण

// Placeholder images - will be replaced with actual product images
const placeholderImg = '/medications/placeholder.jpg'

export const medicationsIndia = {
  paracetamol: [
    {
      id: 'crocin_drops',
      name: 'क्रोसिन बेबी ड्रॉप्स',
      ingredient: 'पैरासिटामोल',
      concentration: 100, // mg per 1ml
      volume: 1, // ml
      form: 'ड्रॉप्स',
      image: '/medications/crocin_baby_drops.png',
      ageRestriction: 'शिशुओं के लिए'
    },
    {
      id: 'crocin_120',
      name: 'क्रोसिन 120 सस्पेंशन',
      ingredient: 'पैरासिटामोल',
      concentration: 120, // mg per 5ml
      volume: 5, // ml
      form: 'सिरप',
      image: '/medications/crocin_120.png',
      ageRestriction: '5 साल तक'
    },
    {
      id: 'crocin_240',
      name: 'क्रोसिन 240 सस्पेंशन',
      ingredient: 'पैरासिटामोल',
      concentration: 240, // mg per 5ml
      volume: 5, // ml
      form: 'سيرप',
      image: '/medications/crocin_240.png',
      ageRestriction: ''
    },
    {
      id: 'calpol_250',
      name: 'कैलपोल 250 सस्पेंशन',
      ingredient: 'पैरासिटामोल',
      concentration: 250, // mg per 5ml
      volume: 5, // ml
      form: 'सिरप',
      image: '/medications/calpol_250.jpg',
      ageRestriction: ''
    },
    {
      id: 'dolo_syrup',
      name: 'डोलो सिरप',
      ingredient: 'पैरासिटामोल',
      concentration: 250, // mg per 5ml
      volume: 5, // ml
      form: 'सिरप',
      image: '/medications/dolo_250.jpg',
      ageRestriction: ''
    }
  ],
  ibuprofen: [
    {
      id: 'ibugesic_syrup',
      name: 'इबुजेसिक सिरप',
      ingredient: 'आइबूप्रोफेन',
      concentration: 100, // mg per 5ml
      volume: 5, // ml
      form: 'सिरप',
      image: '/medications/ibugesic_syrup.jpg',
      ageRestriction: '6 महीने और उससे अधिक'
    },
    {
      id: 'brufen_junior',
      name: 'ब्रूफेन जूनियर सस्पेंशन',
      ingredient: 'आइबूप्रोफेन',
      concentration: 100, // mg per 5ml
      volume: 5, // ml
      form: 'सिरप',
      image: '/medications/brufen_junior.webp',
      ageRestriction: '6 महीने और उससे अधिक'
    }
  ],
  combination: [
    {
      id: 'combiflam_suspension',
      name: 'कॉम्बिफ्लेम सस्पेंशन',
      ingredient: 'आइबूप्रोफेन + पैरासिटामोल',
      concentration: 100, // mg Ibuprofen per 5ml
      concentration2: 162.5, // mg Paracetamol per 5ml
      volume: 5, // ml
      form: 'सिरप',
      image: placeholderImg,
      ageRestriction: '6 महीने और उससे अधिक',
      dualIngredient: true
    },
    {
      id: 'ibugesic_plus',
      name: 'इबुजेसिक प्लस सिरप',
      ingredient: 'आइबूप्रोफेन + पैरासिटामोल',
      concentration: 100, // mg Ibuprofen per 5ml
      concentration2: 162.5, // mg Paracetamol per 5ml
      volume: 5, // ml
      form: 'सिरप',
      image: placeholderImg,
      ageRestriction: '6 महीने और उससे अधिक',
      dualIngredient: true
    },
    {
      id: 'brufen_p_junior',
      name: 'ब्रुफेन पी जूनियर',
      ingredient: 'आइबूप्रोफेन + पैरासिटामोल',
      concentration: 100, // mg Ibuprofen per 5ml
      concentration2: 162.5, // mg Paracetamol per 5ml
      volume: 5, // ml
      form: 'सिरप',
      image: placeholderImg,
      ageRestriction: '6 महीने और उससे अधिक',
      dualIngredient: true
    }
  ],
  suppositories: {
    paracetamol: [
      {
        id: 'suppol_baby',
        name: 'सपोल बेबी',
        ingredient: 'पैरासिटामोल',
        strength: 80, // mg
        form: 'सपोजिटरी',
        image: placeholderImg,
        minWeight: 6, // kg
        maxWeight: 10, // kg
        ageRestriction: 'शिशुओं के लिए'
      },
      {
        id: 'suppol_child',
        name: 'सपोल चाइल्ड',
        ingredient: 'पैरासिटामोल',
        strength: 170, // mg
        form: 'सपोजिटरी',
        image: placeholderImg,
        minWeight: 7, // kg
        maxWeight: 20, // kg
        ageRestriction: 'बच्चों के लिए'
      },
      {
        id: 'suppol_250',
        name: 'सपोल 250',
        ingredient: 'पैरासिटामोल',
        strength: 250, // mg
        form: 'सपोजिटरी',
        image: placeholderImg,
        minWeight: 20, // kg
        maxWeight: 40, // kg
        ageRestriction: 'बड़े बच्चों के लिए'
      }
    ]
  }
}
