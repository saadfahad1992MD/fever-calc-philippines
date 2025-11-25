#!/usr/bin/env python3
"""
Translate Hindi text in App.jsx to Tagalog for Philippines version
"""

import re

# Read the file
with open('src/App.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Translation mappings from Hindi to Tagalog
translations = {
    # Main titles
    'फीवर कैलक': 'Fever Calc',
    'बच्चों के लिए बुखार की दवा और दर्द निवारक खुराक कैलकुलेटर': 'Kalkulador ng Dosis ng Pampaibaba ng Lagnat at Pang-aliw ng Sakit para sa mga Bata',
    'वजन और दवा के प्रकार के आधार पर अपने बच्चे के लिए सही खुराक की गणना करें': 'Kalkulahin ang tamang dosis para sa iyong anak batay sa timbang at uri ng gamot',
    
    # Tabs
    'कैलकुलेटर': 'Kalkulador',
    'चिकित्सा जानकारी': 'Medikal na Impormasyon',
    
    # Child information
    'बच्चे की जानकारी': 'Impormasyon ng Bata',
    'बच्चे की उम्र और वजन दर्ज करें': 'Ilagay ang edad at timbang ng bata',
    'आपके बच्चे की उम्र कितनी है?': 'Ilang taon ang iyong anak?',
    '1 साल से कम': 'Wala pang 1 taon',
    '1-12 महीने': '1-12 buwan',
    '1 साल से ज्यादा': 'Higit sa 1 taon',
    '1-14 साल': '1-14 taon',
    
    # Age and weight
    'महीनों में उम्र चुनें': 'Pumili ng edad sa buwan',
    'महीने': 'buwan',
    'बच्चे का वजन (किलो)': 'Timbang ng Bata (kg)',
    
    # Medication form
    'दवा का प्रकार चुनें:': 'Pumili ng anyo ng gamot:',
    'सिरप': 'Syrup',
    'सपोजिटरी': 'Suppository',
    
    # Medication sections
    'पैरासिटामोल दवाएं': 'Mga gamot na Paracetamol',
    'आइबुप्रोफेन दवाएं': 'Mga gamot na Ibuprofen',
    'बड़ा करें': 'Palakihin',
    
    # Medication info
    'सांद्रता': 'Konsentrasyon',
    'खुराक': 'Dosis',
    
    # Age restrictions
    'शिशुओं के लिए': 'Para sa mga sanggol',
    '6 महीने और उससे अधिक': '6 na buwan pataas',
    
    # Instructions
    'यदि आपके पास पैरासिटामोल दवा है और आपको यह ऊपर की छवियों में नहीं मिली, तो आप समान सांद्रता वाली दवा का चयन कर सकते हैं और आपको वही आवश्यक खुराक मिलेगी। उदाहरण के लिए, सांद्रता 120mg/5ml': 'Kung mayroon kang gamot na Paracetamol at hindi mo ito nahanap sa mga larawan sa itaas, maaari mong piliin ang gamot na may parehong konsentrasyon at makakakuha ka ng parehong kinakailangang dosis. Halimbawa, konsentrasyon 120mg/5ml',
    
    # Ibuprofen section
    'उम्र 6 महीने से अधिक': 'Edad 6 na buwan pataas',
    'पैरासिटामोल के प्रति प्रतिक्रिया न करने वाले बुखार या दर्द के लिए, आपका डॉक्टर एक मजबूत बुखार कम करने वाली या दर्द निवारक दवा जैसे आइबुप्रोफेन की सिफारिश कर सकता है, यदि आवश्यक हो तो हर 4 घंटे में पैरासिटामोल के साथ बारी-बारी से': 'Para sa lagnat o sakit na hindi tumutugon sa paracetamol, maaaring magrekomenda ang iyong doktor ng mas malakas na pampaibaba ng lagnat o pang-aliw ng sakit tulad ng ibuprofen, palitan sa paracetamol bawat 4 na oras kung kinakailangan',
    
    # Notes
    'नोट:': 'Tandaan:',
    'आइबुप्रोफेन पैरासिटामोल के साथ परस्पर क्रिया नहीं करता है और इसे एक ही समय में लिया जा सकता है': 'Ang Ibuprofen ay hindi nakikipag-ugnayan sa paracetamol at maaaring inumin sa parehong oras',
    
    # Buttons
    'खुराक की गणना करें': 'Kalkulahin ang Dosis',
    'रीसेट करें': 'I-reset',
    
    # Results
    'गणना परिणाम': 'Resulta ng Kalkulasyon',
    'खुराक की गणना करने के लिए बच्चे की उम्र और वजन दर्ज करें और दवा का चयन करें': 'Ilagay ang edad at timbang ng bata at pumili ng gamot upang kalkulahin ang dosis',
    
    # Share
    'शेयर करें': 'Ibahagi',
}

# Apply translations
for hindi, tagalog in translations.items():
    content = content.replace(hindi, tagalog)

# Write back
with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Translation completed!")
print("Translated App.jsx from Hindi to Tagalog")
