const fs = require('fs');

let content = fs.readFileSync('data_v2.js', 'utf8');

const translations = {
  'Espresso': 'اسبريسو',
  'Flat White': 'فلات وايت',
  'Latte': 'لاتيه',
  'Iced Latte': 'ايس لاتيه',
  'Spanish Latte': 'سبانش لاتيه',
  'Americano': 'امريكانو',
  'Cortado': 'كورتادو',
  'Cappuccino': 'كابتشينو',
  'Caramel Latte': 'كراميل لاتيه',
  'Hot Chocolate': 'هوت شوكلت',
  'Iraqi Tea': 'شاي عراقي',
  'Mocha Latte': 'موكا لاتيه',
  'Turkish Coffee': 'قهوة تركية',
  'Hibiscus Iced Tea': 'شاي كركديه بارد',
  'Peach Iced Tea': 'شاي خوخ بارد',
  'Ice Mocha Latte': 'ايس موكا لاتيه',
  'Ice Caramel Latte': 'ايس كراميل لاتيه',
  'Spanish Latte Ice': 'ايس سبانش لاتيه',
  'Ice Americano': 'ايس امريكانو',
  'Strawberry Matcha': 'فراولة ماتشا',
  'Mango Matcha': 'مانجو ماتشا',
  'Coconut Matcha': 'جوز هند ماتشا',
  'V60': 'في 60',
  'Mango Smoothie': 'مانجو سموثي',
  'Strawberry Smoothie': 'فراولة سموثي',
  'Orange Juice': 'عصير برتقال',
  'Caramel Frappe': 'كراميل فرابيه',
  'Mocha Frappe': 'موكا فرابيه',
  'Margherita': 'مارغريتا',
  'Pepperoni': 'بيبروني',
  'Alfredo': 'ألفريدو',
  'Vegetable': 'خضار',
  'Burrata Pizza': 'بيتزا بوراتا',
  'Meat': 'لحم',
  'Chicken Fold': 'فولد دجاج',
  'Potatoes Fold': 'فولد بطاطا',
  'Burrata Fold': 'فولد بوراتا',
  'Turkey Fold': 'فولد حبش',
  'Meat Fold': 'فولد لحم',
  'Pineapple Salad': 'سلطة أناناس',
  'Burrata Salad': 'سلطة بوراتا',
  'Caesar Salad': 'سلطة سيزر',
  'Beetroot Salad': 'سلطة شمندر',
  'Bruschetta Salad': 'سلطة بروشيتا',
  'Brownies': 'براونيز',
  'Tart': 'تارت',
  'Tiramisu': 'تيراميسو',
  'German Cake': 'كيكة ألمانية',
  'Cheesecake': 'تشيز كيك',
  'San Sebastian': 'سان سباستيان'
};

for (const [en, ar] of Object.entries(translations)) {
  const regex = new RegExp(`name: '${en}'`, 'g');
  content = content.replace(regex, `name: { en: '${en}', ar: '${ar}' }`);
}

fs.writeFileSync('data_v2.js', content);
console.log('Done!');
