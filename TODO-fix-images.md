# خطة تصحيح الصور المفقودة

## Information Gathered
- data_v2.js: image paths قديمة (food/margherita.jpg, pepperoni.jpg...)
- food/: صور عربية جديدة (بيتزا مارغريتا.jpg, بيتزا ببروني.jpg...)
- المشكلة: عدم تطابق الأسماء = صور لا تظهر

## Plan
1. ✅ قراءة data_v2.js (مكتمل)
2. map القديم للجديد
3. edit_file data_v2.js
4. git checkout -b blackboxai/fix-image-paths
5. git add, commit, push
6. gh pr create

## Dependent Files
- restaurant-menu/data_v2.js (الرئيسي)
- restaurant-menu/menu.html (يستخدم ANIMA_DATA)

## Followup Steps
- test محلياً
- merge PR
- Pages deploy تلقائي

تأكيد الخطة؟
