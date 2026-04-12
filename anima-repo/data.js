const ANIMA_DATA = {
  event: {
    name: 'Event',
    date: '2024-12-25 | الساعة: 8 مساءً'
  },
  categories: [
    {
      id: 'hot-drinks',
      title: 'Hot Drinks',
      image: 'https://loremflickr.com/1200/800/coffee,hot',
      items: [
        { name: 'اسبريسو', price: '4,000 د.ع', description: 'إسبريسو قوي 100% قهوة أرابيكا إيطالية, محضر بضغط 9 بار', image: 'https://loremflickr.com/1200/800/espresso' },
        { name: 'القهوة التركية', price: '4,000 د.ع', description: 'قهوة تركية أصلية بنكهة القرفة والحبهان', image: 'https://loremflickr.com/1200/800/turkish,coffee' },
        { name: 'امريكانو', price: '5,000 د.ع', description: 'إسبريسو مع ماء ساخن لنكهة قهوة أمريكية كلاسيكية', image: 'https://loremflickr.com/1200/800/americano,coffee' },
        { name: 'سبانش لاتيه', price: '6,000 د.ع', description: 'لاتيه مع نكهة الشوكولاتة الإسبانية الحلوة', image: 'https://loremflickr.com/1200/800/latte,chocolate' },
        { name: 'فلات وايت', price: '5,000 د.ع', description: 'إسبريسو مزدوج مع حليب مخفوق سلس وكريمة خفيفة', image: 'https://loremflickr.com/1200/800/flatwhite' },
        { name: 'كابتشينو', price: '5,500 د.ع', description: 'إسبريسو مع حليب مبخر وطبقة سميكة من الرغوة', image: 'https://loremflickr.com/1200/800/cappuccino' },
        { name: 'كراميل لاتيه', price: '6,000 د.ع', description: 'لاتيه كلاسيك مع صوص كراميل طبيعي ولمسة فانيليا', image: 'https://loremflickr.com/1200/800/caramel,latte' },
        { name: 'كورتادو', price: '5,000 د.ع', description: 'إسبريسو "مقطوع" بحليب ساخن لتوازن مثالي', image: 'https://loremflickr.com/1200/800/cortado' },
        { name: 'لاتيه', price: '5,500 د.ع', description: 'إسبريسو واحد مع حليب مبخر وسطح مخملي ناعم', image: 'https://loremflickr.com/1200/800/latte' },
        { name: 'موكا لاتيه', price: '6,000 د.ع', description: 'لاتيه مع صوص شوكولاتة غامقة ومسحوق كاكاو', image: 'https://loremflickr.com/1200/800/mocha' },
        { name: 'هوت جوكلت', price: '5,500 د.ع', description: 'شوكولاتة ساخنة بيلوية مع كريمة ومسحوق كاكاو', image: 'https://loremflickr.com/1200/800/hotchocolate' }
      ]
    },
    {
      id: 'matcha',
      title: 'ماتشا',
      image: 'https://loremflickr.com/1200/800/matcha,tea',
      items: [
        { name: 'ماتشا جوز هند', price: '7,500 د.ع', description: 'ماتشا ياباني أصلي مع حليب جوز الهند الاستوائي', image: 'https://loremflickr.com/1200/800/matcha,coconut' },
        { name: 'ماتشا فراولة', price: '7,500 د.ع', description: 'ماتشا مع صوص الفراولة الطازجة وحليب', image: 'https://loremflickr.com/1200/800/matcha,strawberry' },
        { name: 'ماتشا لاتيه', price: '6,500 د.ع', description: 'ماتشا أخضر مع حليب مبخر وسكر نخيل', image: 'https://loremflickr.com/1200/800/matcha,latte' },
        { name: 'ماتشا منغا', price: '7,500 د.ع', description: 'ماتشا مع لب المانجو الطازج وحليب اللوز', image: 'https://loremflickr.com/1200/800/matcha,mango' }
      ]
    },
    {
      id: 'frappe-smoothie',
      title: 'فرابيه وسموزي',
      image: 'https://loremflickr.com/1200/800/smoothie,frappe',
      items: [
        { name: 'سموزي فراولة', price: '6,000 د.ع', description: 'فراولة طازجة + موز + يوغورت + عسل', image: 'https://loremflickr.com/1200/800/strawberry,smoothie' },
        { name: 'سموزي منكا', price: '6,000 د.ع', description: 'مانجو ناضج + أناناس + حليب جوز الهند', image: 'https://loremflickr.com/1200/800/mango,smoothie' },
        { name: 'فرابيه كراميل', price: '6,000 د.ع', description: 'قهوة ثلج + كراميل + كريمة + ثلج', image: 'https://loremflickr.com/1200/800/caramel,frappe' },
        { name: 'فرابيه موكا', price: '6,000 د.ع', description: 'شوكولاتة + قهوة + حليب + ثلج مطحون', image: 'https://loremflickr.com/1200/800/mocha,frappe' }
      ]
    },
    {
      id: 'filter-coffee',
      title: 'قهوة فلتر',
      image: 'https://loremflickr.com/1200/800/pourover,coffee',
      items: [
        { name: 'ايروبريس', price: '7,000 د.ع', description: 'قهوة فلتر أيروبريس بدرجة تحميص فاتحة', image: 'https://loremflickr.com/1200/800/aeropress' },
        { name: 'بوليسار', price: '7,000 د.ع', description: 'قهوة بوليسار كيميكس لنكهة متوازنة', image: 'https://loremflickr.com/1200/800/coffee,filter' },
        { name: 'كولد برو', price: '7,000 د.ع', description: 'كولد برو 12 ساعة نقع بارد', image: 'https://loremflickr.com/1200/800/coldbrew' },
        { name: 'V60', price: '7,000 د.ع', description: 'V60 يدوي بفلتر ورقي لنقاء مثالي', image: 'https://loremflickr.com/1200/800/v60,coffee' }
      ]
    },
    {
      id: 'cold-drinks',
      title: 'Cold Drinks',
      image: 'https://loremflickr.com/1200/800/cold,drink',
      items: [
        { name: 'ايس تي كركديه', price: '6,000 د.ع', description: 'شاي كركديه بارد + نعناع + ليمون', image: 'https://loremflickr.com/1200/800/icetea' },
        { name: 'شاي عراقي', price: '1,500 د.ع', description: 'شاي أسود عراقي بارد مع سكر', image: 'https://loremflickr.com/1200/800/tea' },
        { name: 'عصير برتقال', price: '5,000 د.ع', description: 'برتقال طازج مع عصير ليمون', image: 'https://loremflickr.com/1200/800/orange,juice' },
        { name: 'مشروبات غازية', price: '1,000 د.ع', description: 'كوكاكولا، بيبسي، ميرندا باردة', image: 'https://loremflickr.com/1200/800/soda' },
        { name: 'مياه', price: '500 د.ع', description: 'مياه معدنية باردة', image: 'https://loremflickr.com/1200/800/water' }
      ]
    },
    {
      id: 'pizza',
      title: 'بيتزا أنيما',
      image: 'https://loremflickr.com/1200/800/pizza',
      items: [
        { name: 'الخضار', price: '13,000 د.ع', description: 'خضروات موسمية + صوص طماطم + جبن موزاريلا', image: 'https://loremflickr.com/1200/800/pizza,vegetable' },
        { name: 'الفريدو', price: '15,000 د.ع', description: 'صوص كريمة فريدو + دجاج + فطر + جبن بارميزان', image: 'https://loremflickr.com/1200/800/pizza,alfredo' },
        { name: 'ببروني', price: '14,000 د.ع', description: 'ببروني إيطالي حار + صوص طماطم + جبن موزاريلا مزدوج', image: 'https://loremflickr.com/1200/800/pizza,pepperoni' },
        { name: 'بوراتا بيتزا', price: '17,000 د.ع', description: 'بوراتا طازجة + ريكوتا + بيستو + طماطم كرز', image: 'https://loremflickr.com/1200/800/pizza,burrata' },
        { name: 'لحم', price: '17,000 د.ع', description: 'لحم بقري مفروم + بصل + فلفل + صوص BBQ', image: 'https://loremflickr.com/1200/800/pizza,meat' },
        { name: 'مارغريتا', price: '12,000 د.ع', description: 'كلاسيكية: طماطم طازجة + ريحان + موزاريلا بوراتا', image: 'https://loremflickr.com/1200/800/pizza,margherita' }
      ]
    },
    {
      id: 'breakfast',
      title: 'فطور',
      image: 'https://loremflickr.com/1200/800/breakfast',
      items: [
        { name: 'سيت منيو لشخصين', price: '19,000 د.ع', description: 'فطور كامل لشخصين + عصير + قهوة', image: 'https://loremflickr.com/1200/800/breakfast,set' },
        { name: 'فطور لشخص واحد', price: '11,000 د.ع', description: 'بيض + خبز + جبن + خضار + قهوة', image: 'https://loremflickr.com/1200/800/breakfast,plate' }
      ]
    },
    {
      id: 'fold',
      title: 'فولد',
      image: 'https://loremflickr.com/1200/800/wrap',
      items: [
        { name: 'فولد بطاطا', price: '8,000 د.ع', description: 'بطاطا مقلية + مايونيز + كاتشب', image: 'https://loremflickr.com/1200/800/wrap,potato' },
        { name: 'بوراتا فولد', price: '12,000 د.ع', description: 'بوراتا + طماطم + ريحان + بيستو', image: 'https://loremflickr.com/1200/800/wrap,burrata' },
        { name: 'فولد حبش', price: '9,000 د.ع', description: 'ديك رومي + جبن + خضار + صوص خاص', image: 'https://loremflickr.com/1200/800/wrap,turkey' },
        { name: 'فولد دجاج', price: '11,000 د.ع', description: 'دجاج مشوي + خضار + صوص BBQ', image: 'https://loremflickr.com/1200/800/wrap,chicken' },
        { name: 'لحم فولد', price: '13,000 د.ع', description: 'لحم مفروم + بصل + فلفل + طحينة', image: 'https://loremflickr.com/1200/800/wrap,meat' }
      ]
    },
    {
      id: 'extra',
      title: 'اكسترا',
      image: 'https://loremflickr.com/1200/800/frenchfries',
      items: [
        { name: 'اكسترا دجاج', price: '3,000 د.ع', description: 'قطع دجاج مقلية إضافية', image: 'https://loremflickr.com/1200/800/chicken' },
        { name: 'اكسترا', price: '1,000 د.ع', description: 'صوص أو بطاطس صغيرة', image: 'https://loremflickr.com/1200/800/sides' },
        { name: 'جبن', price: '2,000 د.ع', description: 'جبن موزاريلا ممدود', image: 'https://loremflickr.com/1200/800/cheese' }
      ]
    },
    {
      id: 'salads',
      title: 'سلطات',
      image: 'https://loremflickr.com/1200/800/salad',
      items: [
        { name: 'أناناس', price: '9,000 د.ع', description: 'أناناس + جبن + جوز + صوص بالzamico', image: 'https://loremflickr.com/1200/800/salad,pineapple' },
        { name: 'بروسكيتا', price: '8,000 د.ع', description: 'خبز محمص + طماطم + ريحان + زيت زيتون', image: 'https://loremflickr.com/1200/800/bruschetta' },
        { name: 'بوراتا سلطة', price: '11,000 د.ع', description: 'بوراتا + طماطم كرز + بيستو + خبز محمص', image: 'https://loremflickr.com/1200/800/salad,burrata' },
        { name: 'سيزر', price: '7,000 د.ع', description: 'خس روماني + صوص سيزر + كروتون + بارميزان', image: 'https://loremflickr.com/1200/800/salad,caesar' },
        { name: 'سيزون', price: '6,000 د.ع', description: 'خضار موسمية + صوص خردل + بصل أحمر', image: 'https://loremflickr.com/1200/800/salad,season' },
        { name: 'شمندر', price: '8,000 د.ع', description: 'شمندر مشوي + جبن الماعز + جوز + بلسميك', image: 'https://loremflickr.com/1200/800/salad,beetroot' }
      ]
    },
    {
      id: 'desserts',
      title: 'حلويات',
      image: 'https://loremflickr.com/1200/800/dessert',
      items: [
        { name: 'تارت ستروبري', price: '6,000 د.ع', description: 'تارت كريمة + فراولة طازجة + صوص فانيليا', image: 'https://loremflickr.com/1200/800/tart,strawberry' },
        { name: 'كرواسون شوكليت', price: '4,000 د.ع', description: 'كرواسون فرنسي + شوكولاتة سوداء مذابة', image: 'https://loremflickr.com/1200/800/croissant,chocolate' }
      ]
    },
    {
      id: 'sandwiches',
      title: 'ساندويش',
      image: 'https://loremflickr.com/1200/800/sandwich',
      items: [
        { name: 'ساندوج bbq', price: '6,500 د.ع', description: 'دجاج BBQ + كول سلو + صوص BBQ', image: 'https://loremflickr.com/1200/800/sandwich,bbq' },
        { name: 'ساندويج تركي جيز', price: '5,500 د.ع', description: 'ديك رومي + جبن شيدر + خس + طماطم', image: 'https://loremflickr.com/1200/800/sandwich,turkey' },
        { name: 'ساندويج دايت', price: '6,000 د.ع', description: 'دجاج مشوي + خضار + صوص زبادي لايت', image: 'https://loremflickr.com/1200/800/sandwich,diet' },
        { name: 'ساندويج سيزر', price: '6,500 د.ع', description: 'دجاج + صوص سيزر + خس روماني + بارميزان', image: 'https://loremflickr.com/1200/800/sandwich,caesar' },
        { name: 'ساندويج كلوب', price: '4,000 د.ع', description: 'ديك رومي + بيكون + خس + طماطم + مايونيز', image: 'https://loremflickr.com/1200/800/sandwich,club' },
        { name: 'كرواسون لحوم باردة', price: '5,000 د.ع', description: 'لحوم باردة + جبن + خس + خردل', image: 'https://loremflickr.com/1200/800/croissant,meat' }
      ]
    },
    {
      id: 'others',
      title: 'أخرى',
      image: 'https://loremflickr.com/1200/800/food',
      items: [
        { name: 'ببروني تركي جيز', price: '7,000 د.ع', description: 'ببروني + ديك رومي + جبن شيدر + صوص BBQ', image: 'https://loremflickr.com/1200/800/sandwich,pepperoni' },
        { name: 'بطاطا مشروم', price: '4,000 د.ع', description: 'بطاطس مهروسة + فطر + صوص الثوم', image: 'https://loremflickr.com/1200/800/potato,mushroom' },
        { name: 'بيتر جيز', price: '5,000 د.ع', description: 'جبن شيدر + جبن موزاريلا + صوص بيتزا', image: 'https://loremflickr.com/1200/800/cheese,food' },
        { name: 'توشكا لحم', price: '13,500 د.ع', description: 'عجينة + لحم مفروم + بصل + جبن', image: 'https://loremflickr.com/1200/800/meat,food' },
        { name: 'جبنة خاصة', price: '5,000 د.ع', description: 'خليط جبن موتزاريلا + شيدر + ريكوتا', image: 'https://loremflickr.com/1200/800/special,cheese' },
        { name: 'خاشابوري', price: '7,500 د.ع', description: 'عجينة جورجية + جبن + بيض', image: 'https://loremflickr.com/1200/800/khachapuri' },
        { name: 'فطيرة بيض محشوة الاطراف', price: '4,000 د.ع', description: 'فطيرة محشية بيض + جبن + بصل', image: 'https://loremflickr.com/1200/800/pie,egg' },
        { name: 'كالزونا دجاج', price: '14,000 د.ع', description: 'دجاج + فلفل + جبن + صوص الثوم', image: 'https://loremflickr.com/1200/800/calzone,chicken' },
        { name: 'كالزونا لحوم باردة', price: '13,500 د.ع', description: 'لحوم باردة + جبن + فلفل أخضر', image: 'https://loremflickr.com/1200/800/calzone,meat' },
        { name: 'كساديا دجاج', price: '11,500 د.ع', description: 'تورتيلا + دجاج + جبن + صوص salsa', image: 'https://loremflickr.com/1200/800/quesadilla,chicken' },
        { name: 'منقوشة جبن', price: '4,000 د.ع', description: 'عجينة لبنانية + جبن أكaawi', image: 'https://loremflickr.com/1200/800/manakeesh,cheese' },
        { name: 'منقوشة زعتر', price: '3,000 د.ع', description: 'عجينة + زعتر + زيت زيتون', image: 'https://loremflickr.com/1200/800/manakeesh,zaatar' },
        { name: 'منقوشة لحم', price: '4,000 د.ع', description: 'لحم مفروم + بصل + طماطم + بهارات', image: 'https://loremflickr.com/1200/800/manakeesh,meat' },
        { name: 'وجبة لحم بعجين', price: '7,500 د.ع', description: 'لحم بقري + بصل + فلفل في عجينة رقيقة', image: 'https://loremflickr.com/1200/800/lahmacun' }
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
