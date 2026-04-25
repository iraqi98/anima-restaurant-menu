const ANIMA_UI = {
  en: {
    home: 'Home',
    loading: 'Loading Menu...',
    eventTitle: 'Special Event',
    eventDate: 'Date Coming Soon',
    viewMenu: 'View Menu',
    close: 'Close',
    orderTip: 'Please place your order at the cashier',
    scratchTitle: 'Scratch & Win!',
    scratchPrize: 'Congratulations!<br>4% Discount 🎉',
    scratchInstruction: 'Scratch Here'
  },
  ar: {
    home: 'الرئيسية',
    loading: 'جاري التحميل...',
    eventTitle: 'إيفنت مميز',
    eventDate: 'التاريخ قريباً',
    viewMenu: 'قائمة الأصناف',
    close: 'إغلاق',
    orderTip: 'يرجى التوجه للكاشير لتثبيت طلبك',
    scratchTitle: 'امسح واربح!',
    scratchPrize: 'مبروك!<br>خصم 4% على طلبك 🎉',
    scratchInstruction: 'امسح هنا بإصبعك'
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
      title: { en: 'Hot Drinks', ar: 'المشروبات الساخنة' },
      items: [
        { name: { en: 'Espresso', ar: 'اسبريسو' }, price: '4,000 IQD', description: 'الجوهر. بدون إضافات، بدون تعقيد. اللي يعرفه يكتفي بي.', image: 'drinks/espresso.jpg' },
        { name: { en: 'Americano', ar: 'امريكانو' }, price: '5,000 IQD', description: 'امريكانو كلاسيكي، إسبريسو مع ماء ساخن. قهوة طويلة تناسب اللي يبي يمد الصبح.', image: 'drinks/americano.jpg' },
        { name: { en: 'Cortado', ar: 'كورتادو' }, price: '5,000 IQD', description: 'نص إسبريسو، نص حليب. لما تريد تركيز بدون مرارة زايدة.', image: 'drinks/cortado.jpg' },
        { name: { en: 'Cappuccino', ar: 'كابتشينو' }, price: '5,500 IQD', description: 'كابتشينو إيطالي تقليدي، إسبريسو مع رغوة حليب كثيفة. الرغوة اللي تخبل.', image: 'drinks/cappuccino.jpg' },
        { name: { en: 'Caramel Latte', ar: 'كراميل لاتيه' }, price: '6,000 IQD', description: 'كراميل، حليب، قهوة. الصبح اللي يستاهل تقوم علموده.', image: 'drinks/caramel-latte.jpg' },
        { name: { en: 'Hot Chocolate', ar: 'هوت شوكلت' }, price: '5,500 IQD', description: 'هوت شوكلت غني وكريمي، مثالي لليالي البرد. شوكولاتة حقيقية مو مسحوق.', image: 'drinks/hot-chocolate.jpg' },
        { name: { en: 'Iraqi Tea', ar: 'شاي عراقي' }, price: '1,500 IQD', description: 'شاي عراقي أصلي، بالنعناع أو النعيم. اللي يبدي اليوم صح.', image: 'drinks/americano.jpg' },
        { name: { en: 'Mocha Latte', ar: 'موكا لاتيه' }, price: '6,000 IQD', description: 'موكا لاتيه شوكولاتي، قهوة مع شوكولاتة ساخنة. للي يبي حلاوة مع قهوة.', image: 'drinks/mocha-latte.jpg' },
        { name: { en: 'Turkish Coffee', ar: 'قهوة تركية' }, price: '4,000 IQD', description: 'قهوة تركية أصلية، مفلترة بالرصاص. الروح العثمانية بكوب صغير.', image: 'drinks/turkish-coffee.jpg' },
        { name: { en: 'V60 Specialty Coffee', ar: 'قهوة مختصة V60' }, price: '7,000 IQD', description: 'قهوة مختصة V60، طريقة تحضير يدوية بفلتر مخروطي. نكهة نقية ومتوازنة.', image: 'drinks/v60.jpg' },
      ]
    },
    {
      id: 'matcha',
      title: { en: 'Matcha', ar: 'ماتشا' },
      items: [
        { name: { en: 'Strawberry Matcha', ar: 'فراولة ماتشا' }, price: '7,500 IQD', description: 'حامض وحلو فوق بعض. مزاج غريب بس محبوب.', image: 'drinks/strawberry-matcha.jpg' },
        { name: { en: 'Mango Matcha', ar: 'مانجو ماتشا' }, price: '7,500 IQD', description: 'مانجو العراق وماتشا اليابان. شي ميشبه شي بس كاعدين سوه.', image: 'drinks/mango-matcha.jpg' },
        { name: { en: 'Coconut Matcha', ar: 'جوز هند ماتشا' }, price: '7,500 IQD', description: 'جوز هند + ماتشا. ناعم، استوائي، مثل عطلة بكوب.', image: 'drinks/coconut-matcha.jpg' }
      ]
    },
    {
      id: 'cold-drinks',
      title: { en: 'Cold Drinks', ar: 'المشروبات الباردة' },
      items: [
        { name: { en: 'Iced Americano', ar: 'ايس امريكانو' }, price: '5,000 IQD', description: 'ايس امريكانو بارد، إسبريسو مع ثلج وماء بارد. للحر الشديد.', image: 'drinks/iced-americano.jpg' },
        { name: { en: 'Ice Mocha Latte', ar: 'ايس موكا لاتيه' }, price: '6,000 IQD', description: 'ايس موكا لاتيه، شوكولاتة مثلجة مع قهوة. حلو وبارد يبرد الجو.', image: 'drinks/iced-mocha.jpg' },
        { name: { en: 'Ice Caramel Latte', ar: 'ايس كراميل لاتيه' }, price: '6,000 IQD', description: 'ايس كراميل لاتيه، كراميل مثلج مع قهوة. حلاوة باردة تخبل.', image: 'drinks/iced-caramel-latte.jpg' },
        { name: { en: 'Iced Latte', ar: 'ايس لاتيه' }, price: '5,500 IQD', description: 'ناعم، بارد، يمشي وياك بأي وقت. الكلاسيك اللي ما يخيب.', image: 'drinks/iced-latte.jpg' },
        { name: { en: 'Spanish Latte Ice', ar: 'ايس سبانش لاتيه' }, price: '6,000 IQD', description: 'ايس سبانش لاتيه بارد، حليب مكثف مثلج مع إسبريسو. نكهة سبانية باردة.', image: 'drinks/spanish-latte.jpg' },
        { name: { en: 'Flat White', ar: 'فلات وايت' }, price: '5,000 IQD', image: 'drinks/spanish-latte.jpg', description: 'فلات وايت ناعم وقوي. إسبريسو مزدوج برغوة مثالية، متوازن بدون إفراط.' },
        { name: { en: 'Spanish Latte', ar: 'سبانش لاتيه' }, price: '6,000 IQD', image: 'drinks/spanish-latte.jpg', description: 'حليب مكثف حلو مع إسبريسو قوي. نكهة إسبانية حلوة ومختلفة تخليك تطلبها مرة ثانية.' },
        { name: { en: 'Hibiscus Iced Tea', ar: 'شاي كركديه بارد' }, price: '6,000 IQD', description: 'شاي كركديه بارد على ثلج. اللون أحمر، الطعم حامض، المزاج صح.', image: 'drinks/hibiscus.jpg' },
        { name: { en: 'Peach Iced Tea', ar: 'شاي خوخ بارد' }, price: '6,000 IQD', description: 'خوخ وشاي وثلج. يخبل مثل يوم ما عندك شغل بي.', image: 'drinks/peach-iced-tea.jpg' },
      ]
    },
    {
      id: 'frappe',
      title: { en: 'Frappe', ar: 'فرابيه' },
      items: [
        { name: { en: 'Caramel Frappe', ar: 'كراميل فرابيه' }, price: '6,000 IQD', description: 'ثلج وكراميل وقهوة. الحر ببغداد ما يستاهل أكثر من هذا.', image: 'drinks/caramel-frappe.jpg' },
        { name: { en: 'Mocha Frappe', ar: 'موكا فرابيه' }, price: '6,000 IQD', description: 'شوكولاتة مثلجة بروح قهوة. مو بس حلو، عميق هم.', image: 'drinks/mocha-frappe.jpg' },
      ]
    },
    {
      id: 'smoothies',
      title: { en: 'Smoothies & Juices', ar: 'سموذي وعصائر' },
      items: [
        { name: { en: 'Mango Smoothie', ar: 'مانجو سموذي' }, price: '6,000 IQD', description: 'بس مانجو بارد. النوع اللي يخليك تتذكر الشتا حتى بالصيف.', image: 'drinks/mango-smoothie.jpg' },
        { name: { en: 'Strawberry Smoothie', ar: 'فراولة سموذي' }, price: '6,000 IQD', description: 'فراولة طازجة، ما تحتاج تسأل أكثر. الجواب بالكوب.', image: 'drinks/strawberry-smoothie.jpg' },
        { name: { en: 'Orange Juice', ar: 'عصير برتقال' }, price: '5,000 IQD', description: 'عصير برتقال طازج، فيتامين C بكل رشفة. صحي ومنعش للصبح.', image: '' },
      ]
    },
    {
      id: 'pizza',
      title: { en: 'Pizza', ar: 'بيتزا' },
      items: [
        { name: { en: 'Margherita', ar: 'مارغريتا' }, price: '12,000 IQD', description: 'طماطم، موتزاريلا، ريحان. ثلاث مكونات تثبت إن البساطة موهبة.', image: 'food/margherita.jpg' },
        { name: { en: 'Pepperoni', ar: 'بيبروني' }, price: '14,000 IQD', description: 'بيبروني يتحمص بالفرن. الريحة تجيك قبل الطبق.', image: 'food/pepperoni.jpg' },
        { name: { en: 'Alfredo', ar: 'ألفريدو' }, price: '15,000 IQD', description: 'دجاج و صوص كريمي أبيض فوق عجينة مثالية. ناعم، ثقيل بالمعنى الصح.', image: 'food/alfredo-pizza.jpg' },
        { name: { en: 'Vegetable', ar: 'خضار' }, price: '13,000 IQD', description: 'خضار طازجة فوق العجينة. اللي يقول الخضار ما تشبع، ما جرب هاي.', image: 'food/veggie-pizza.jpg' },
        { name: { en: 'Burrata Pizza', ar: 'بيتزا بوراتا' }, price: '17,000 IQD', description: 'جبن بوراتا ينكسر فوق الطماطم الطازجة و العجين. تحسها لحظة صارلك هواي منتظرها.', image: 'food/burrata-pizza.jpg' },
        { name: { en: 'Meat', ar: 'لحم' }, price: '17,000 IQD', description: 'لحم، فرن، جوع. مو وقت الكلام، وقت الأكل.', image: 'food/meat-pizza.jpg' },
      ]
    },
    {
      id: 'fold',
      title: { en: 'Fold', ar: 'فولد' },
      items: [
        { name: { en: 'Chicken Fold', ar: 'فولد دجاج' }, price: '11,000 IQD', description: 'دجاج متبّل بعجينة بيتزا ساخنة. الساندويچ اللي قرر ما يكون عادي.', image: 'food/chicken-fold.jpg' },
        { name: { en: 'Potatoes Fold', ar: 'فولد بطاطا' }, price: '8,000 IQD', description: 'بطاطا داخل عجينة ساخنة. بسيط ومقنع، مثل أفضل القرارات.', image: 'food/potatoes-fold.jpg' },
        { name: { en: 'Burrata Fold', ar: 'فولد بوراتا' }, price: '12,000 IQD', description: 'جبن بوراتا طرية بعجينة بيتزا. اوتفت العيد ببساطة.', image: 'food/burrata-fold.jpg' },
        { name: { en: 'Turkey Fold', ar: 'فولد حبش' }, price: '9,000 IQD', description: 'ديك رومي جبن وعجينة ساخنة.', image: 'food/turkey-fold.jpg' },
        { name: { en: 'Meat Fold', ar: 'فولد لحم' }, price: '13,000 IQD', description: 'لحم مفروم وتتبيلة خاصة.', image: 'food/meat-fold.jpg' },
      ]
    },
    {
      id: 'salads',
      title: { en: 'Salads', ar: 'سلطات' },
      items: [
        { name: { en: 'Pineapple Salad', ar: 'سلطة أناناس' }, price: '9,000 IQD', description: 'أناناس وخضار وتوازن ما تتوقعه. السلطة اللي قررت تكون مختلفة.', image: 'food/pineapple-salad.jpg' },
        { name: { en: 'Burrata Salad', ar: 'سلطة بوراتا' }, price: '11,000 IQD', description: 'جبن بوراتا طازج فوق طماطة كرزية و زيت زيتون. مقبلات مسوية روحها طبق رئيسي.', image: 'food/burrata-salad.jpg' },
        { name: { en: 'Caesar Salad', ar: 'سلطة سيزر' }, price: '7,000 IQD', description: 'خس روماني، صوص سيزر، دجاج مشوي.', image: 'food/caesar-salad.jpg' },
        { name: { en: 'Beetroot Salad', ar: 'سلطة شمندر' }, price: '8,000 IQD', description: 'شمندر وجرجير وجبن.', image: 'food/beetroot-salad.jpg' },
        { name: { en: 'Bruschetta Salad', ar: 'سلطة بروشيتا' }, price: '8,000 IQD', description: 'طماطم وريحان وخبز محمص.', image: 'food/bruschetta-salad.jpg' },
      ]
    },
    {
      id: 'desserts',
      title: { en: 'Desserts', ar: 'حلويات' },
      items: [
        { name: { en: 'Brownies', ar: 'براونيز' }, price: '6,000 IQD', description: 'براونيز الشوكولاتة الغنية.', image: 'drinks/brownies.jpg' },
        { name: { en: 'Tart', ar: 'تارت' }, price: '6,000 IQD', description: 'تارت الفواكه الطازجة.', image: 'drinks/tart.jpg' },
        { name: { en: 'Tiramisu', ar: 'تيراميسو' }, price: '7,000 IQD', description: 'حلى التيراميسو الإيطالي.', image: 'drinks/tiramisu.jpg' },
        { name: { en: 'German Cake', ar: 'كيكة ألمانية' }, price: '6,500 IQD', description: 'كيكة ألمانية كلاسيكية.', image: 'drinks/german-cake.jpg' },
        { name: { en: 'Cheesecake', ar: 'تشيز كيك' }, price: '6,000 IQD', description: 'تشيز كيك كريمي.', image: 'drinks/cheesecake.jpg' },
        { name: { en: 'San Sebastian', ar: 'سان سباستيان' }, price: '6,000 IQD', description: 'سـان سباستيان تشيز كيك.', image: 'drinks/san-sebastian.jpg' },
      ]
    },
    {
      id: 'sandwiches',
      title: { en: 'Sandwiches', ar: 'ساندويش' },
      items: [
        { name: { en: 'Turkey Cheese Sandwich', ar: 'ساندويش حبش بالجبن' }, price: '5,500 IQD', image: 'food/turkey-cheese-sandwich.jpg', description: 'ديك رومي مع جبن ذايب وخبز محمص. مثالي للوجبة السريعة.' },
        { name: { en: 'Diet Sandwich', ar: 'ساندويش دايت' }, price: '6,000 IQD', image: 'food/diet-sandwich.jpg', description: 'ساندويش دايت مع دجاج مشوي، خضار طازج وصوص يوناني. خفيف ومشبع بدون ذنب.' },
        { name: { en: 'BBQ Chicken Sandwich', ar: 'ساندويش دجاج برابكيو' }, price: '6,500 IQD', image: 'food/bbq-chicken-sandwich.jpg', description: 'دجاج مشوي بصوص BBQ الحار والغني بالنكهة.' },
        { name: { en: 'Caesar Sandwich', ar: 'ساندويش سيزر' }, price: '6,500 IQD', image: 'food/caesar-sandwich.jpg', description: 'صوص سيزر الكلاسيكي مع دجاج مشوي وخس مقرمش.' },
      ]
    },
    {
      id: 'breakfast',
      title: { en: 'Breakfast', ar: 'الإفطار' },
      items: [
        { name: { en: 'Set Menu for Two', ar: 'سيت منيو لشخصين' }, price: '19,000 IQD', description: 'تشكيلة كاملة من القيمر، العسل، المربى، الأجبان، والبيض، تكفي لشخصين.', image: 'food/سيت منيو فطور .jpg' },
        { name: { en: 'Breakfast for One', ar: 'فطور لشخص واحد' }, price: '11,000 IQD', description: 'وجبة متكاملة لشخص واحد تحتوي على الأصناف الأساسية للفطور العراقي.', image: 'food/سيت منيو فطور .jpg' },
      ]
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

window.ANIMA_UI = ANIMA_UI;
window.ANIMA_DATA = ANIMA_DATA;
