const ANIMA_DATA = {
  event: {
    name: 'Event',
    date: '2024-12-25 | الساعة: 8 مساءً'
  },
  categories: [
    {
      id: 'coffee-drinks',
      title: 'COFFEE DRINKS',
      items: [
        { name: 'Espresso', price: '4,000 د.ع', description: 'الجوهر. بدون إضافات، بدون تعقيد. اللي يعرفه يكتفي بي.', image: 'drinks/اسبريسو.jpg' },
        { name: 'Flat White', price: '5,000 د.ع', description: 'الحليب والقهوة بتوازن نادر. مو كثير، مو قليل. هيچ بالضبط.', image: 'drinks/كورتادو.jpg' },
        { name: 'Latte', price: '5,500 د.ع', description: 'ناعم، دافي، يمشي معك بأي وقت. الكلاسيك اللي ما يخيب.', image: 'drinks/ايس لاتيه .jpg' },
        { name: 'Iced Latte', price: '5,500 د.ع', description: 'ناعم، بارد، يمشي وياك بأي وقت. الكلاسيك اللي ما يخيب.', image: 'drinks/ايس لاتيه .jpg' },
        { name: 'Spanish Latte', price: '6,000 د.ع', description: 'حليب + حليب مكثف + إسبريسو. حلو بدون ما يطلب منك تقرر.', image: 'drinks/سبانشل لاتيه.jpg' },
        { name: 'Americano', price: '5,000 د.ع', description: 'إسبريسو يأخذ وقته. هادي، عميق، ما يستعجل.', image: 'drinks/اسبريسو.jpg' },
        { name: 'Cortado', price: '5,000 د.ع', description: 'نص إسبريسو، نص حليب. لما تريد تركيز بدون مرارة زايدة.', image: 'drinks/كورتادو.jpg' },
        { name: 'Cappuccino', price: '5,500 د.ع', description: 'ثلاث طبقات بكوب واحد. كل رشفة غير اللي قبلها.', image: 'drinks/كورتادو.jpg' },
        { name: 'Caramel Latte', price: '6,000 د.ع', description: 'كراميل، حليب، قهوة. الصبح اللي يستاهل تقوم علموده.', image: 'drinks/كرمل لاتيه .jpg' },
        { name: 'Hot Chocolate', price: '5,500 د.ع', description: 'مو قهوة، بس هم يدفي.', image: 'drinks/ايس موكا.jpg' },
        { name: 'Iraqi Tea', price: '1,500 د.ع', description: 'مو اوفر بس يحتاج يكون بكل مكان.', image: 'drinks/كركديه.jpg' },
        { name: 'Mocha Latte', price: '6,000 د.ع', description: 'ما تقدر تختار بين القهوة والشوكولاتة؟ — ما تحتاج.', image: 'drinks/ايس موكا.jpg' },
        { name: 'Turkish Coffee', price: '4,000 د.ع', description: 'مو بس تنشرب، تنقري هم.', image: 'drinks/اسبريسو.jpg' },
        { name: 'Hibiscus Iced Tea', price: '6,000 د.ع', description: 'شاي كركديه بارد على ثلج. اللون أحمر، الطعم حامض، المزاج صح.', image: 'drinks/كركديه.jpg' },
        { name: 'Peach Iced Tea', price: '6,000 د.ع', description: 'خوخ وشاي وثلج. يخبل مثل يوم ما عندك شغل بي.', image: 'drinks/ايس تي خوخ.jpg' }
      ]
    },
    {
      id: 'matcha',
      title: 'MATCHA',
      items: [
        { name: 'Strawberry Matcha', price: '7,500 د.ع', description: 'حامض وحلو فوق بعض. مزاج غريب بس محبوب.', image: 'drinks/ماتشتا فرولة.jpg' },
        { name: 'Mango Matcha', price: '7,500 د.ع', description: 'مانجو العراق وماتشا اليابان. شي ميشبه شي بس كاعدين سوه.', image: 'drinks/ماتشا منكا.jpg' },
        { name: 'Coconut Matcha', price: '7,500 د.ع', description: 'جوز هند + ماتشا. ناعم، استوائي، مثل عطلة بكوب.', image: 'drinks/ماتشا كوكونات.jpg' }
      ]
    },
    {
      id: 'specialty-coffee',
      title: 'SPECIALTY COFFEE',
      items: [
        { name: 'V60', price: '7,000 د.ع', description: 'قهوة مختصة محضرة يدوياً للحصول على نكهة نقية.', image: 'drinks/v60.jpg' }
      ]
    },
    {
      id: 'frappe',
      title: 'FRAPPE & SMOOTHIE',
      items: [
        { name: 'Caramel Frappe', price: '6,000 د.ع', description: 'ثلج وكراميل وقهوة. الحر ببغداد ما يستاهل أكثر من هذا.', image: 'drinks/فرابيه كرامل.jpg' },
        { name: 'Mocha Frappe', price: '6,000 د.ع', description: 'شوكولاتة مثلجة بروح قهوة. مو بس حلو، عميق هم.', image: 'drinks/فرايبيه جوكلت.jpg' },
        { name: 'Mango Smoothie', price: '6,000 د.ع', description: 'بس مانجو بارد. النوع اللي يخليك تتذكر الشتا حتى بالصيف.', image: 'drinks/سموذي منكا.jpg' },
        { name: 'Strawberry Smoothie', price: '6,000 د.ع', description: 'فراولة طازجة، ما تحتاج تسأل أكثر. الجواب بالكوب.', image: 'drinks/سموذي فرولة.jpg' },
        { name: 'Orange Juice', price: '5,000 د.ع', description: 'برتقال طازج، عصرناه هسه. البساطة أحياناً هي الاختيار الصح.', image: 'drinks/ايس تي خوخ.jpg' }
      ]
    },
    {
      id: 'pizza',
      title: 'PIZZA',
      items: [
        { name: 'Margherita', price: '12,000 د.ع', description: 'طماطم، موتزاريلا، ريحان. ثلاث مكونات تثبت إن البساطة موهبة.', image: 'food/بيتوا مارغرتا.jpg' },
        { name: 'Pepperoni', price: '14,000 د.ع', description: 'بيبروني يتحمص بالفرن. الريحة تجيك قبل الطبق.', image: 'food/بيتزا ببروني.jpg' },
        { name: 'Alfredo', price: '15,000 د.ع', description: 'دجاج و صوص كريمي أبيض فوق عجينة مثالية. ناعم، ثقيل بالمعنى الصح.', image: 'food/بيتزا الفريدو .jpg' },
        { name: 'Vegetable', price: '13,000 د.ع', description: 'خضار طازجة فوق العجينة. اللي يقول الخضار ما تشبع، ما جرب هاي.', image: 'food/بيتزا خضار.jpg' },
        { name: 'Burrata Pizza', price: '17,000 د.ع', description: 'جبن بوراتا ينكسر فوق الطماطم الطازجة و العجين. تحسها لحظة صارلك هواي منتظرها.', image: 'food/بيترا بورتا .jpg' },
        { name: 'Meat', price: '17,000 د.ع', description: 'لحم، فرن، جوع. مو وقت الكلام، وقت الأكل.', image: 'food/بيتزا لحم.jpg' }
      ]
    },
    {
      id: 'fold',
      title: 'FOLD',
      items: [
        { name: 'Chicken Fold', price: '11,000 د.ع', description: 'دجاج متبّل بعجينة بيتزا ساخنة. الساندويچ اللي قرر ما يكون عادي.', image: 'food/فولد دجاج .jpg' },
        { name: 'Potatoes Fold', price: '8,000 د.ع', description: 'بطاطا داخل عجينة ساخنة. بسيط ومقنع، مثل أفضل القرارات.', image: 'food/فولد potatoes.jpg' },
        { name: 'Burrata Fold', price: '12,000 د.ع', description: 'جبن بوراتا طرية بعجينة بيتزا. اوتفت العيد ببساطة.', image: 'food/فولد براتا .jpg' },
        { name: 'Turkey Fold', price: '9,000 د.ع', description: 'ديك رومي جبن وعجينة ساخنة.', image: 'food/فولد حبش .jpg' },
        { name: 'Meat Fold', price: '13,000 د.ع', description: 'لحم مفروم وتتبيلة خاصة.', image: 'food/فولد لحم .jpg' }
      ]
    },
    {
      id: 'salads',
      title: 'SALADS',
      items: [
        { name: 'Pineapple Salad', price: '9,000 د.ع', description: 'أناناس وخضار وتوازن ما تتوقعه. السلطة اللي قررت تكون مختلفة.', image: 'food/سلطة انناس.jpg' },
        { name: 'Burrata Salad', price: '11,000 د.ع', description: 'جبن بوراتا طازج فوق طماطة كرزية و زيت زيتون. مقبلات مسوية روحها طبق رئيسي.', image: 'food/سلطة بوراتا .jpg' },
        { name: 'Caesar Salad', price: '7,000 د.ع', description: 'خس روماني، صوص سيزر، دجاج مشوي.', image: 'food/سلطة سيزر .jpg' },
        { name: 'Beetroot Salad', price: '8,000 د.ع', description: 'شمندر وجرجير وجبن.', image: 'food/سلطة شمنر روكا .jpg' },
        { name: 'Bruschetta Salad', price: '8,000 د.ع', description: 'طماطم وريحان وخبز محمص.', image: 'food/سلطه بروسكيتا .jpg' }
      ]
    },
    {
      id: 'desserts',
      title: 'DESSERTS',
      items: [
        { name: 'Brownies', price: '5,000 د.ع', description: 'براونيز الشوكولاتة الغنية.', image: 'drinks/براونيز .jpg' },
        { name: 'Tart', price: '6,000 د.ع', description: 'تارت الفواكه الطازجة.', image: 'drinks/ترات .jpg' },
        { name: 'Tiramisu', price: '7,000 د.ع', description: 'حلى التيراميسو الإيطالي.', image: 'drinks/ترهمسيو.jpg' },
        { name: 'German Cake', price: '6,500 د.ع', description: 'كيكة ألمانية كلاسيكية.', image: 'drinks/جيرمن كيك.jpg' },
        { name: 'Cheesecake', price: '6,000 د.ع', description: 'تشيز كيك كريمي.', image: 'drinks/جيزكيك.jpg' },
        { name: 'San Sebastian', price: '7,500 د.ع', description: 'سـان سباستيان تشيز كيك.', image: 'drinks/سانسبستيلن.jpg' }
      ]
    },
    {
      id: 'sandwiches',
      title: 'SANDWICHES',
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
