const ANIMA_DATA = {
  event: {
    name: 'Event',
    date: '2024-12-25 | الساعة: 8 مساءً'
  },
  categories: [
    {
      id: 'hot-drinks',
      title: 'مشروبات حارة',
      image: 'https://loremflickr.com/400/250/coffee,hot',
      items: [
        { name: 'اسبريسو', price: '4,000 د.ع', image: 'https://loremflickr.com/150/150/espresso' },
        { name: 'القهوة التركية', price: '4,000 د.ع', image: 'https://loremflickr.com/150/150/turkish,coffee' },
        { name: 'امريكانو', price: '5,000 د.ع', image: 'https://loremflickr.com/150/150/americano,coffee' },
        { name: 'سبانش لاتيه', price: '6,000 د.ع', image: 'https://loremflickr.com/150/150/latte' },
        { name: 'فلات وايت', price: '5,000 د.ع', image: 'https://loremflickr.com/150/150/flatwhite' },
        { name: 'كابتشينو', price: '5,500 د.ع', image: 'https://loremflickr.com/150/150/cappuccino' },
        { name: 'كراميل لاتيه', price: '6,000 د.ع', image: 'https://loremflickr.com/150/150/caramel,latte' },
        { name: 'كورتادو', price: '5,000 د.ع', image: 'https://loremflickr.com/150/150/cortado' },
        { name: 'لاتيه', price: '5,500 د.ع', image: 'https://loremflickr.com/150/150/latte' },
        { name: 'موكا لاتيه', price: '6,000 د.ع', image: 'https://loremflickr.com/150/150/mocha' },
        { name: 'هوت جوكلت', price: '5,500 د.ع', image: 'https://loremflickr.com/150/150/hotchocolate' }
      ]
    },
    {
      id: 'matcha',
      title: 'ماتشا',
      image: 'https://loremflickr.com/400/250/matcha,tea',
      items: [
        { name: 'ماتشا جوز هند', price: '7,500 د.ع', image: 'https://loremflickr.com/150/150/matcha,coconut' },
        { name: 'ماتشا فراولة', price: '7,500 د.ع', image: 'https://loremflickr.com/150/150/matcha,strawberry' },
        { name: 'ماتشا لاتيه', price: '6,500 د.ع', image: 'https://loremflickr.com/150/150/matcha,latte' },
        { name: 'ماتشا منغا', price: '7,500 د.ع', image: 'https://loremflickr.com/150/150/matcha,mango' }
      ]
    },
    {
      id: 'frappe-smoothie',
      title: 'فرابيه وسموزي',
      image: 'https://loremflickr.com/400/250/smoothie,frappe',
      items: [
        { name: 'سموزي فراولة', price: '6,000 د.ع', image: 'https://loremflickr.com/150/150/strawberry,smoothie' },
        { name: 'سموزي منكا', price: '6,000 د.ع', image: 'https://loremflickr.com/150/150/mango,smoothie' },
        { name: 'فرابيه كراميل', price: '6,000 د.ع', image: 'https://loremflickr.com/150/150/caramel,frappe' },
        { name: 'فرابيه موكا', price: '6,000 د.ع', image: 'https://loremflickr.com/150/150/mocha,frappe' }
      ]
    },
    {
      id: 'filter-coffee',
      title: 'قهوة فلتر',
      image: 'https://loremflickr.com/400/250/pourover,coffee',
      items: [
        { name: 'ايروبريس', price: '7,000 د.ع', image: 'https://loremflickr.com/150/150/aeropress' },
        { name: 'بوليسار', price: '7,000 د.ع', image: 'https://loremflickr.com/150/150/coffee,filter' },
        { name: 'كولد برو', price: '7,000 د.ع', image: 'https://loremflickr.com/150/150/coldbrew' },
        { name: 'V60', price: '7,000 د.ع', image: 'https://loremflickr.com/150/150/v60,coffee' }
      ]
    },
    {
      id: 'cold-drinks',
      title: 'مشروبات باردة وعصائر',
      image: 'https://loremflickr.com/400/250/cold,drink',
      items: [
        { name: 'ايس تي كركديه', price: '6,000 د.ع', image: 'https://loremflickr.com/150/150/icetea' },
        { name: 'شاي عراقي', price: '1,500 د.ع', image: 'https://loremflickr.com/150/150/tea' },
        { name: 'عصير برتقال', price: '5,000 د.ع', image: 'https://loremflickr.com/150/150/orange,juice' },
        { name: 'مشروبات غازية', price: '1,000 د.ع', image: 'https://loremflickr.com/150/150/soda' },
        { name: 'مياه', price: '500 د.ع', image: 'https://loremflickr.com/150/150/water' }
      ]
    },
    {
      id: 'pizza',
      title: 'بيتزا أنيما',
      image: 'https://loremflickr.com/400/250/pizza',
      items: [
        { name: 'الخضار', price: '13,000 د.ع', image: 'https://loremflickr.com/150/150/pizza,vegetable' },
        { name: 'الفريدو', price: '15,000 د.ع', image: 'https://loremflickr.com/150/150/pizza,alfredo' },
        { name: 'ببروني', price: '14,000 د.ع', image: 'https://loremflickr.com/150/150/pizza,pepperoni' },
        { name: 'بوراتا بيتزا', price: '17,000 د.ع', image: 'https://loremflickr.com/150/150/pizza,burrata' },
        { name: 'لحم', price: '17,000 د.ع', image: 'https://loremflickr.com/150/150/pizza,meat' },
        { name: 'مارغريتا', price: '12,000 د.ع', image: 'https://loremflickr.com/150/150/pizza,margherita' }
      ]
    },
    {
      id: 'breakfast',
      title: 'فطور',
      image: 'https://loremflickr.com/400/250/breakfast',
      items: [
        { name: 'سيت منيو لشخصين', price: '19,000 د.ع', image: 'https://loremflickr.com/150/150/breakfast,set' },
        { name: 'فطور لشخص واحد', price: '11,000 د.ع', image: 'https://loremflickr.com/150/150/breakfast,plate' }
      ]
    },
    {
      id: 'fold',
      title: 'فولد',
      image: 'https://loremflickr.com/400/250/wrap',
      items: [
        { name: 'فولد بطاطا', price: '8,000 د.ع', image: 'https://loremflickr.com/150/150/wrap,potato' },
        { name: 'بوراتا فولد', price: '12,000 د.ع', image: 'https://loremflickr.com/150/150/wrap,burrata' },
        { name: 'فولد حبش', price: '9,000 د.ع', image: 'https://loremflickr.com/150/150/wrap,turkey' },
        { name: 'فولد دجاج', price: '11,000 د.ع', image: 'https://loremflickr.com/150/150/wrap,chicken' },
        { name: 'لحم فولد', price: '13,000 د.ع', image: 'https://loremflickr.com/150/150/wrap,meat' }
      ]
    },
    {
      id: 'extra',
      title: 'اكسترا',
      image: 'https://loremflickr.com/400/250/frenchfries',
      items: [
        { name: 'اكسترا دجاج', price: '3,000 د.ع', image: 'https://loremflickr.com/150/150/chicken' },
        { name: 'اكسترا', price: '1,000 د.ع', image: 'https://loremflickr.com/150/150/sides' },
        { name: 'جبن', price: '2,000 د.ع', image: 'https://loremflickr.com/150/150/cheese' }
      ]
    },
    {
      id: 'salads',
      title: 'سلطات',
      image: 'https://loremflickr.com/400/250/salad',
      items: [
        { name: 'أناناس', price: '9,000 د.ع', image: 'https://loremflickr.com/150/150/salad,pineapple' },
        { name: 'بروسكيتا', price: '8,000 د.ع', image: 'https://loremflickr.com/150/150/bruschetta' },
        { name: 'بوراتا سلطة', price: '11,000 د.ع', image: 'https://loremflickr.com/150/150/salad,burrata' },
        { name: 'سيزر', price: '7,000 د.ع', image: 'https://loremflickr.com/150/150/salad,caesar' },
        { name: 'سيزون', price: '6,000 د.ع', image: 'https://loremflickr.com/150/150/salad,season' },
        { name: 'شمندر', price: '8,000 د.ع', image: 'https://loremflickr.com/150/150/salad,beetroot' }
      ]
    },
    {
      id: 'desserts',
      title: 'حلويات',
      image: 'https://loremflickr.com/400/250/dessert',
      items: [
        { name: 'تارت ستروبري', price: '6,000 د.ع', image: 'https://loremflickr.com/150/150/tart,strawberry' },
        { name: 'كرواسون شوكليت', price: '4,000 د.ع', image: 'https://loremflickr.com/150/150/croissant,chocolate' }
      ]
    },
    {
      id: 'sandwiches',
      title: 'ساندويش',
      image: 'https://loremflickr.com/400/250/sandwich',
      items: [
        { name: 'ساندوج bbq', price: '6,500 د.ع', image: 'https://loremflickr.com/150/150/sandwich,bbq' },
        { name: 'ساندويج تركي جيز', price: '5,500 د.ع', image: 'https://loremflickr.com/150/150/sandwich,turkey' },
        { name: 'ساندويج دايت', price: '6,000 د.ع', image: 'https://loremflickr.com/150/150/sandwich,diet' },
        { name: 'ساندويج سيزر', price: '6,500 د.ع', image: 'https://loremflickr.com/150/150/sandwich,caesar' },
        { name: 'ساندويج كلوب', price: '4,000 د.ع', image: 'https://loremflickr.com/150/150/sandwich,club' },
        { name: 'كرواسون لحوم باردة', price: '5,000 د.ع', image: 'https://loremflickr.com/150/150/croissant,meat' }
      ]
    },
    {
      id: 'others',
      title: 'أخرى',
      image: 'https://loremflickr.com/400/250/food',
      items: [
        { name: 'ببروني تركي جيز', price: '7,000 د.ع', image: 'https://loremflickr.com/150/150/sandwich,pepperoni' },
        { name: 'بطاطا مشروم', price: '4,000 د.ع', image: 'https://loremflickr.com/150/150/potato,mushroom' },
        { name: 'بيتر جيز', price: '5,000 د.ع', image: 'https://loremflickr.com/150/150/cheese,food' },
        { name: 'توشكا لحم', price: '13,500 د.ع', image: 'https://loremflickr.com/150/150/meat,food' },
        { name: 'جبنة خاصة', price: '5,000 د.ع', image: 'https://loremflickr.com/150/150/special,cheese' },
        { name: 'خاشابوري', price: '7,500 د.ع', image: 'https://loremflickr.com/150/150/khachapuri' },
        { name: 'فطيرة بيض محشوة الاطراف', price: '4,000 د.ع', image: 'https://loremflickr.com/150/150/pie,egg' },
        { name: 'كالزونا دجاج', price: '14,000 د.ع', image: 'https://loremflickr.com/150/150/calzone,chicken' },
        { name: 'كالزونا لحوم باردة', price: '13,500 د.ع', image: 'https://loremflickr.com/150/150/calzone,meat' },
        { name: 'كساديا دجاج', price: '11,500 د.ع', image: 'https://loremflickr.com/150/150/quesadilla,chicken' },
        { name: 'منقوشة جبن', price: '4,000 د.ع', image: 'https://loremflickr.com/150/150/manakeesh,cheese' },
        { name: 'منقوشة زعتر', price: '3,000 د.ع', image: 'https://loremflickr.com/150/150/manakeesh,zaatar' },
        { name: 'منقوشة لحم', price: '4,000 د.ع', image: 'https://loremflickr.com/150/150/manakeesh,meat' },
        { name: 'وجبة لحم بعجين', price: '7,500 د.ع', image: 'https://loremflickr.com/150/150/lahmacun' }
      ]
    }
  ]
};

// حفظ البيانات
function saveData() {
  localStorage.setItem('anima_data', JSON.stringify(ANIMA_DATA));
}

// تحميل البيانات
function loadData() {
  // مسح التخزين المؤقت لتحديث البيانات الجديدة بدون ايموجي
  localStorage.removeItem('anima_data');
}

loadData();
