const ANIMA_UI = {
  en: {
    home: 'Home',
    loading: 'Loading Menu...',
    eventTitle: 'Special Event',
    eventDate: 'Date Coming Soon',
    viewMenu: 'View Menu',
    close: 'Close',
    orderTip: 'Please place your order at the cashier'
  },
  ar: {
    home: 'الرئيسية',
    loading: 'جاري التحميل...',
    eventTitle: 'إيفنت مميز',
    eventDate: 'التاريخ قريباً',
    viewMenu: 'قائمة الأصناف',
    close: 'إغلاق',
    orderTip: 'يرجى التوجه للكاشير لتثبيت طلبك'
  }
};

const ANIMA_DATA = {
  event: {
    name: { en: 'Special Event', ar: 'إيفنت مميز' },
    date: { en: 'Dec 25 | 8 PM', ar: '25 ديسمبر | 8 مساءً' }
  },
  categories: [
    // ... coffee-drinks and other unchanged ...
    {
      id: 'pizza',
      title: { en: 'Pizza', ar: 'بيتزا' },
      items: [
        { name: 'مارغريتا', price: '12,000 IQD', description: 'طماطم، موتزاريلا، ريحان. ثلاث مكونات تثبت إن البساطة موهبة.', image: 'food/بيتزا مارغريتا.jpg' },
        { name: 'ببروني', price: '14,000 IQD', description: 'بيبروني يتحمص بالفرن. الريحة تجيك قبل الطبق.', image: 'food/بيتزا ببروني.jpg' },
        { name: 'ألفريدو', price: '15,000 IQD', description: 'دجاج و صوص كريمي أبيض فوق عجينة مثالية. ناعم، ثقيل بالمعنى الصح.', image: 'food/مارغريتا .jpg' },
        { name: 'خضار', price: '13,000 IQD', description: 'خضار طازجة فوق العجينة. اللي يقول الخضار ما تشبع، ما جرب هاي.', image: 'food/بيتزا خضار.jpg' },
        { name: 'بوراتا', price: '17,000 IQD', description: 'جبن بوراتا ينكسر فوق الطماطم الطازجة و العجين. تحسها لحظة صارلك هواي منتظرها.', image: 'food/بيتزا بوراتا .jpg' },
        { name: 'لحم', price: '17,000 IQD', description: 'لحم، فرن، جوع. مو وقت الكلام، وقت الأكل.', image: 'food/بيتزا لحم .jpg' }
      ]
    },
    {
      id: 'fold',
      title: { en: 'Fold', ar: 'فولد' },
      items: [
        { name: 'دجاج فولد', price: '11,000 IQD', description: 'دجاج متبّل بعجينة بيتزا ساخنة. الساندويچ اللي قرر ما يكون عادي.', image: 'food/فولد دجاج.jpg' },
        { name: 'بطاطس فولد', price: '8,000 IQD', description: 'بطاطا داخل عجينة ساخنة. بسيط ومقنع، مثل أفضل القرارات.', image: 'food/فولد بطاطا.jpg' },
        { name: 'بوراتا فولد', price: '12,000 IQD', description: 'جبن بوراتا طرية بعجينة بيتزا. اوتفت العيد ببساطة.', image: 'food/فولدبوراتا.jpg' },
        { name: 'تركي فولد', price: '9,000 IQD', description: 'ديك رومي جبن وعجينة ساخنة.', image: 'food/فولدحبش.jpg' },
        { name: 'لحم فولد', price: '13,000 IQD', description: 'لحم مفروم وتتبيلة خاصة.', image: 'food/فولد لحم.jpg' }
      ]
    },
    {
      id: 'salads',
      title: { en: 'Salads', ar: 'سلطات' },
      items: [
        { name: 'أناناس سلطة', price: '9,000 IQD', description: 'أناناس وخضار وتوازن ما تتوقعه. السلطة اللي قررت تكون مختلفة.', image: 'food/انناس.jpg' },
        { name: 'بوراتا سلطة', price: '11,000 IQD', description: 'جبن بوراتا طازج فوق طماطة كرزية و زيت زيتون. مقبلات مسوية روحها طبق رئيسي.', image: 'food/بورتا سلط .jpg' },
        { name: 'سيزر', price: '7,000 IQD', description: 'خس روماني، صوص سيزر، دجاج مشوي.', image: 'food/سيزر.jpg' },
        { name: 'شمندر', price: '8,000 IQD', description: 'شمندر وجرجير وجبن.', image: 'food/شمندر.jpg' },
        { name: 'بروسكيتا', price: '8,000 IQD', description: 'طماطم وريحان وخبز محمص.', image: 'food/بروسكيتا .jpg' }
      ]
    }
    // باقي الأقسام كما هي...
  ]
};

function saveData() {
  localStorage.setItem('anima_data', JSON.stringify(ANIMA_DATA));
}

function loadData() {
  localStorage.removeItem('anima_data');
}

loadData();
