var name = prompt('Ismingizni kiriting:')
console.log('Ismingiz: ' + name);
alert('Assalamu alaykum, ' + name + '!')

var age = prompt(name + ', yoshingiz nechida?')
console.log('Yoshingiz: ' + age);

var confirmation = prompt('Misollarni ishlashga tayyormisiz? (Ha yoki yo`q)')

if (confirmation === ('ha') || confirmation === ('Ha')) {
    alert('Unda boshladik!')
    console.log('Tasdiq qabul qilindi.');

    var plus = prompt('3 + 5 = ?')
    console.log('Misol 1: 3 + 5 = 8, Sizning javobingiz: ' + plus);

    var minus = prompt('8 - 7 = ?')
    console.log('Misol 2: 8 - 7 = 1, Sizning javobingiz: ' + minus);

    var multiply = prompt('2 * 2 = ?')
    console.log('Misol 3: 2 * 2 = 4, Sizning javobingiz: ' + multiply);

    var divide = prompt('6 / 2 = ?')
    console.log('Misol 4: 6 / 2 = 3, Sizning javobingiz: ' + divide);

    var divideWithRemainder = prompt('9 % 2 = ?')
    console.log('Misol 5: 9 % 2 = 1, Sizning javobingiz: ' + divideWithRemainder);

    console.log('Xayr, Salomat bo`ling!');

    alert('WoW! Natijalaringizni bilish uchun konsol rejimini oching!')



} else {
    alert('Tayyorlanib keling!')
    console.log('Tasdiq qabul qilinmadi!');
}

