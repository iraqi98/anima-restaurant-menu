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
    {
      id: 'coffee-drinks',
      title: { en: 'Coffee Drinks', ar: 'مشاريب القهوة' },
      items: [
        { name: 'Espresso', price: '4,000 IQD', description: 'الجوهر. بدون إضافات، بدون تعقيد. اللي يعرفه يكتفي بي.', image: 'drinks/espresso.jpg' },
        { name: 'Flat White', price: '5,000 IQD', description: 'الحليب والقهوة بتوازن نادر. مو كثير، مو قليل. هيچ بالضبط.', image: '' },
        { name: 'Latte', price: '5,500 IQD', description: 'ناعم، دافي، يمشي معك بأي وقت. الكلاسيك اللي ما يخيب.', image: '' },
        { name: 'Iced Latte', price: '5,500 IQD', description: 'ناعم، بارد، يمشي وياك بأي وقت. الكلاسيك اللي ما يخيب.', image: 'drinks/iced-latte.jpg' },
        { name: 'Spanish Latte', price: '6,000 IQD', description: 'حليب + حليب مكثف + إسبريسو. حلو بدون ما يطلب منك تقرر.', image: '' },
        { name: 'Americano', price: '5,000 IQD', image: '' },
        { name: 'Cortado', price: '5,000 IQD', description: 'نص إسبريسو، نص حليب. لما تريد تركيز بدون مرارة زايدة.', image: 'drinks/cortado.jpg' },
        { name: 'Cappuccino', price: '5,500 IQD', description: 'ثلاث طبقات بكوب واحد. كل رشفة غير اللي قبلها.', image: '' },
        { name: 'Caramel Latte', price: '6,000 IQD', description: 'كراميل، حليب، قهوة. الصبح اللي يستاهل تقوم علموده.', image: 'drinks/caramel-latte.jpg' },
        { name: 'Hot Chocolate', price: '5,500 IQD', description: 'مو قهوة، بس هم يدفي.', image: '' },
        { name: 'Iraqi Tea', price: '1,500 IQD', description: 'مو اوفر بس يحتاج يكون بكل مكان.', image: '' },
        { name: 'Mocha Latte', price: '6,000 IQD', description: 'ما تقدر تختار بين القهوة والشوكولاتة? — ما تحتاج.', image: '' },
        { name: 'Turkish Coffee', price: '4,000 IQD', description: 'مو بس تنشرب، تنقري هم.', image: '' },
        { name: 'Hibiscus Iced Tea', price: '6,000 IQD', description: 'شاي كركديه بارد على ثلج. اللون أحمر، الطعم حامض، المزاج صح.', image: 'drinks/hibiscus.jpg' },
        { name: 'Peach Iced Tea', price: '6,000 IQD', description: 'خوخ وشاي وثلج. يخبل مثل يوم ما عندك شغل بي.', image: 'drinks/peach-iced-tea.jpg' },
        { name: 'Ice Mocha Latte', image: '' },
        { name: 'Ice Caramel Latte', image: '' },
        { name: 'Spanish Latte Ice', image: '' },
        { name: 'Ice Americano', image: '' }
      ]
    },
    {
      id: 'matcha',
      title: { en: 'Matcha', ar: 'ماتشا' },
      items: [
        { name: 'Strawberry Matcha', price: '7,500 IQD', description: 'حامض وحلو فوق بعض. مزاج غريب بس محبوب.', image: 'drinks/strawberry-matcha.jpg' },
        { name: 'Mango Matcha', price: '7,500 IQD', description: 'مانجو العراق وماتشا اليابان. شي ميشبه شي بس كاعدين سوه.', image: 'drinks/mango-matcha.jpg' },
        { name: 'Coconut Matcha', price: '7,500 IQD', description: 'جوز هند + ماتشا. ناعم، استوائي، مثل عطلة بكوب.', image: 'drinks/coconut-matcha.jpg' }
      ]
    },
    {
      id: 'specialty-coffee',
      title: { en: 'Specialty Coffee', ar: 'القهوة المختصة' },
      items: [
        { name: 'V60', price: '7,000 IQD', description: 'قهوة مختصة محضرة يدوياً للحصول على نكهة نقية.', image: 'drinks/v60.jpg' }
      ]
    },
    {
      id: 'frappe',
      title: { en: 'Frappe', ar: 'فرابيه' },
      items: [
        { name: 'Caramel Frappe', price: '6,000 IQD', description: 'ثلج وكراميل وقهوة. الحر ببغداد ما يستاهل أكثر من هذا.', image: 'drinks/caramel-frappe.jpg' },
        { name: 'Mocha Frappe', price: '6,000 IQD', description: 'شوكولاتة مثلجة بروح قهوة. مو بس حلو، عميق هم.', image: 'drinks/mocha-frappe.jpg' },
        { name: 'Mango Smoothie', price: '6,000 IQD', description: 'بس مانجو بارد. النوع اللي يخليك تتذكر الشتا حتى بالصيف.', image: 'drinks/mango-smoothie.jpg' },
        { name: 'Strawberry Smoothie', price: '6,000 IQD', description: 'فراولة طازجة، ما تحتاج تسأل أكثر. الجواب بالكوب.', image: 'drinks/strawberry-smoothie.jpg' },
        { name: 'Orange Juice', price: '5,000 IQD', description: 'برتقال طازج، عصرناه هسه. البساطة أحياناً هي الاختيار الصح.', image: '' }
      ]
    },
    {
      id: 'pizza',
      title: { en: 'Pizza', ar: 'بيتزا' },
      items: [
        { name: 'Margherita', price: '12,000 IQD', description: 'طماطم، موتزاريلا، ريحان. ثلاث مكونات تثبت إن البساطة موهبة.', image: 'food/margherita.jpg' },
        { name: 'Pepperoni', price: '14,000 IQD', description: 'بيبروني يتحمص بالفرن. الريحة تجيك قبل الطبق.', image: 'food/pepperoni.jpg' },
        { name: 'Alfredo', price: '15,000 IQD', description: 'دجاج و صوص كريمي أبيض فوق عجينة مثالية. ناعم، ثقيل بالمعنى الصح.', image: 'food/alfredo-pizza.jpg' },
        { name: 'Vegetable', price: '13,000 IQD', description: 'خضار طازجة فوق العجينة. اللي يقول الخضار ما تشبع، ما جرب هاي.', image: 'food/veggie-pizza.jpg' },
        { name: 'Burrata Pizza', price: '17,000 IQD', description: 'جبن بوراتا ينكسر فوق الطماطم الطازجة و العجين. تحسها لحظة صارلك هواي منتظرها.', image: 'food/burrata-pizza.jpg' },
        { name: 'Meat', price: '17,000 IQD', description: 'لحم، فرن، جوع. مو وقت الكلام، وقت الأكل.', image: 'food/meat-pizza.jpg' }
      ]
    },
    {
      id: 'fold',
      title: { en: 'Fold', ar: 'فولد' },
      items: [
        { name: 'Chicken Fold', price: '11,000 IQD', description: 'دجاج متبّل بعجينة بيتزا ساخنة. الساندويچ اللي قرر ما يكون عادي.', image: 'food/chicken-fold.jpg' },
        { name: 'Potatoes Fold', price: '8,000 IQD', description: 'بطاطا داخل عجينة ساخنة. بسيط ومقنع، مثل أفضل القرارات.', image: 'food/potatoes-fold.jpg' },
        { name: 'Burrata Fold', price: '12,000 IQD', description: 'جبن بوراتا طرية بعجينة بيتزا. اوتفت العيد ببساطة.', image: 'food/burrata-fold.jpg' },
        { name: 'Turkey Fold', price: '9,000 IQD', description: 'ديك رومي جبن وعجينة ساخنة.', image: 'food/turkey-fold.jpg' },
        { name: 'Meat Fold', price: '13,000 IQD', description: 'لحم مفروم وتتبيلة خاصة.', image: 'food/meat-fold.jpg' }
      ]
    },
    {
      id: 'salads',
      title: { en: 'Salads', ar: 'سلطات' },
      items: [
        { name: 'Pineapple Salad', price: '9,000 IQD', description: 'أناناس وخضار وتوازن ما تتوقعه. السلطة اللي قررت تكون مختلفة.', image: 'food/pineapple-salad.jpg' },
        { name: 'Burrata Salad', price: '11,000 IQD', description: 'جبن بوراتا طازج فوق طماطة كرزية و زيت زيتون. مقبلات مسوية روحها طبق رئيسي.', image: 'food/burrata-salad.jpg' },
        { name: 'Caesar Salad', price: '7,000 IQD', description: 'خس روماني، صوص سيزر، دجاج مشوي.', image: 'food/caesar-salad.jpg' },
        { name: 'Beetroot Salad', price: '8,000 IQD', description: 'شمندر وجرجير وجبن.', image: 'food/beetroot-salad.jpg' },
        { name: 'Bruschetta Salad', price: '8,000 IQD', description: 'طماطم وريحان وخبز محمص.', image: 'food/bruschetta-salad.jpg' }
      ]
    },
    {
      id: 'desserts',
      title: { en: 'Desserts', ar: 'حلويات' },
      items: [
        { name: 'Brownies', price: '5,000 IQD', description: 'براونيز الشوكولاتة الغنية.', image: 'drinks/brownies.jpg' },
        { name: 'Tart', price: '6,000 IQD', description: 'تارت الفواكه الطازجة.', image: 'drinks/tart.jpg' },
        { name: 'Tiramisu', price: '7,000 IQD', description: 'حلى التيراميسو الإيطالي.', image: 'drinks/tiramisu.jpg' },
        { name: 'German Cake', price: '6,500 IQD', description: 'كيكة ألمانية كلاسيكية.', image: 'drinks/german-cake.jpg' },
        { name: 'Cheesecake', price: '6,000 IQD', description: 'تشيز كيك كريمي.', image: 'drinks/cheesecake.jpg' },
        { name: 'San Sebastian', price: '7,500 IQD', description: 'سـان سباستيان تشيز كيك.', image: 'drinks/san-sebastian.jpg' }
      ]
    },
    {
      id: 'sandwiches',
      title: { en: 'Sandwiches', ar: 'ساندويش' },
      items: []
    }
  ]
};

function saveData() {
  localStorage.setItem('anima_data', JSON.stringify(ANIMA_DATA));
}

function loadData() {
  localStorage.removeItem('anima_data');
}

loadData();
