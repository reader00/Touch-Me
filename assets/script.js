// Navbar Animation
const navbar = document.getElementById("navbar");
window.addEventListener('scroll', function (e) {
   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   // console.log(scrollTop); 
   if (scrollTop >= 100) {
      navbar.classList.add('pad-nav-b', 'bg-a2');
      navbar.classList.remove('pad-nav-a', 'bg-a1');
   } else {
      navbar.classList.remove('pad-nav-b', 'bg-a2');
      navbar.classList.add('pad-nav-a', 'bg-a1');
   }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
         behavior: 'smooth',
         inline: 'start'
      });
   });
});

// Touch Me Animation
var touch = document.getElementById('touch');
touch.addEventListener('click', function (e) {
   var nav = document.getElementById('nav-item');
   nav.classList.add('m0');
   nav.classList.add('ml300');
   touch.classList.remove('rotate-0');
   touch.classList.add('rotate-l');
   touch.classList.add('c-fx');
   setTimeout(function (e) {
      touch.classList.remove('rotate-l');
      touch.classList.add('rotate-0');
   }, 100);
   setTimeout(function (e) {
      touch.classList.remove('rotate-0');
      touch.classList.add('rotate-r');
   }, 200);
   setTimeout(function (e) {
      touch.classList.remove('rotate-r');
      touch.classList.add('rotate-0');
   }, 300);
   setTimeout(function (e) {
      touch.classList.remove('rotate-0');
      touch.classList.add('rotate-l');
   }, 400);
   setTimeout(function (e) {
      touch.classList.remove('rotate-l');
      touch.classList.add('rotate-0');
   }, 500);
   setTimeout(function (e) {
      touch.classList.remove('rotate-0');
      touch.classList.add('rotate-r');
   }, 600);
   setTimeout(function (e) {
      touch.classList.remove('rotate-r');
      touch.classList.add('rotate-0');
   }, 700);
   setTimeout(function (e) {
      touch.classList.remove('rotate-0');
      touch.classList.add('rotate-l');
   }, 800);
   setTimeout(function (e) {
      touch.classList.remove('rotate-l');
      touch.classList.add('rotate-0');
   }, 900);
   setTimeout(function (e) {
      touch.classList.remove('rotate-0');
      touch.classList.add('rotate-r');
   }, 1000);
   setTimeout(function (e) {
      touch.classList.remove('rotate-r');
      touch.classList.add('rotate-0');
   }, 1100);
   setTimeout(function (e) {
      touch.classList.remove('rotate-0');
      touch.classList.add('rotate-l');
   }, 1200);
   setTimeout(function (e) {
      touch.classList.remove('rotate-l');
      touch.classList.add('rotate-0');
   }, 1300);
   setTimeout(function (e) {
      touch.classList.remove('rotate-0');
      touch.classList.add('rotate-r');
   }, 1400);
   setTimeout(function (e) {
      touch.classList.remove('rotate-r');
      touch.classList.remove('c-fx');
      touch.classList.add('rotate-0');
   }, 1500);
   setTimeout(function (e) {
      nav.classList.remove('ml300');
      nav.classList.add('m0');

   }, 1500);
});

// Float Content-Aside

const floatA = document.getElementById('float-a');
var floatABool = true
console.log(window.screen.width);
if (window.screen.width * window.devicePixelRatio > 1000) {
   floatA.addEventListener('click', function (e) {
      var content = document.getElementById('content');
      var aside = document.getElementById('profile');
      if (floatABool) {
         content.classList.remove('f-l');
         content.classList.add('f-r');
         aside.classList.remove('f-r');
         aside.classList.add('f-l');
      } else {
         content.classList.remove('f-r');
         content.classList.add('f-l');
         aside.classList.remove('f-l');
         aside.classList.add('f-r');
      }
      floatABool = !floatABool
   });
} else {
   floatA.addEventListener('click', function (e) {
      alert("Tidak bisa mengubah nilai float, karena ukuran layar terlalu kecil")
   });
}

// Float Button

const floatB = document.getElementById('float-b');
var floatBBool = true
floatB.addEventListener('click', function (e) {
   var fb = document.getElementById('float-button');
   if (floatBBool) {
      fb.classList.remove('f-l');
      fb.classList.add('f-r');

   } else {
      fb.classList.remove('f-r');
      fb.classList.add('f-l');

   }
   floatBBool = !floatBBool
});

// Width & Height

// Width 25%
const w25 = document.getElementById('w25');
w25.addEventListener('click', function (e) {
   var wh = document.getElementById('wh-box');
   for (let a of wh.classList) {
      if (a == "w50" | a == "w75" | a == "w100") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         wh.classList.remove(a);
      }
   }
   wh.classList.add('w25');
   w25.classList.add('active')
});

// Width 50%
const w50 = document.getElementById('w50');
w50.addEventListener('click', function (e) {
   var wh = document.getElementById('wh-box');
   for (let a of wh.classList) {
      if (a == "w25" | a == "w75" | a == "w100") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         wh.classList.remove(a);
      }
   }
   wh.classList.add('w50');
   w50.classList.add('active')
});

// Width 75%
const w75 = document.getElementById('w75');
w75.addEventListener('click', function (e) {
   var wh = document.getElementById('wh-box');
   for (let a of wh.classList) {
      if (a == "w25" | a == "w50" | a == "w100") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         wh.classList.remove(a);
      }
   }
   wh.classList.add('w75');
   w75.classList.add('active')
});

// Width 100%
const w100 = document.getElementById('w100');
w100.addEventListener('click', function (e) {
   var wh = document.getElementById('wh-box');
   for (let a of wh.classList) {
      if (a == "w25" | a == "w50" | a == "w75") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         wh.classList.remove(a);
      }
   }
   wh.classList.add('w100');
   w100.classList.add('active')
});

// Height 50px 
const h50 = document.getElementById('h50');
h50.addEventListener('click', function (e) {
   var wh = document.getElementById('wh-box');
   for (let a of wh.classList) {
      if (a == "h100" | a == "h150" | a == "h200") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         wh.classList.remove(a);
      }
   }
   wh.classList.add('h50');
   h50.classList.add('active')
});

// Height 100px 
const h100 = document.getElementById('h100');
h100.addEventListener('click', function (e) {
   var wh = document.getElementById('wh-box');
   for (let a of wh.classList) {
      if (a == "h50" | a == "h150" | a == "h200") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         wh.classList.remove(a);
      }
   }
   wh.classList.add('h100');
   h100.classList.add('active')
});

// Height 150px 
const h150 = document.getElementById('h150');
h150.addEventListener('click', function (e) {
   var wh = document.getElementById('wh-box');
   for (let a of wh.classList) {
      if (a == "h50" | a == "h100" | a == "h200") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         wh.classList.remove(a);
      }
   }
   wh.classList.add('h150');
   h150.classList.add('active')
});

// Height 200px 
const h200 = document.getElementById('h200');
h200.addEventListener('click', function (e) {
   var wh = document.getElementById('wh-box');
   for (let a of wh.classList) {
      if (a == "h50" | a == "h100" | a == "h150") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         wh.classList.remove(a);
      }
   }
   wh.classList.add('h200');
   h200.classList.add('active')
});

// Margin & Padding
var mp = document.querySelectorAll('.mp-box');

// Margin 0%
const m0 = document.getElementById('m0');
m0.addEventListener('click', function (e) {
   for (let a of mp[0].classList) {
      if (a == "m20" | a == "m40" | a == "m60") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         console.log(btn.classList)
         mp[0].classList.remove(a);
         mp[1].classList.remove(a);
      }
   }
   mp[0].classList.add('m0');
   mp[1].classList.add('m0');
   m0.classList.add('active')
});

// Margin 20%
const m20 = document.getElementById('m20');
m20.addEventListener('click', function (e) {
   for (let a of mp[0].classList) {
      if (a == "m0" | a == "m40" | a == "m60") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         mp[0].classList.remove(a);
         mp[1].classList.remove(a);
      }
   }
   mp[0].classList.add('m20');
   mp[1].classList.add('m20');
   m20.classList.add('active')
});

// Margin 40%
const m40 = document.getElementById('m40');
m40.addEventListener('click', function (e) {
   for (let a of mp[0].classList) {
      if (a == "m0" | a == "m20" | a == "m60") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         mp[0].classList.remove(a);
         mp[1].classList.remove(a);
      }
   }
   mp[0].classList.add('m40');
   mp[1].classList.add('m40');
   m40.classList.add('active')
});

// Margin 60%
const m60 = document.getElementById('m60');
m60.addEventListener('click', function (e) {
   for (let a of mp[0].classList) {
      if (a == "m0" | a == "m20" | a == "m40") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         mp[0].classList.remove(a);
         mp[1].classList.remove(a);
      }
   }
   mp[0].classList.add('m60');
   mp[1].classList.add('m60');
   m60.classList.add('active')
});

// Padding 0%
const p0 = document.getElementById('p0');
p0.addEventListener('click', function (e) {
   for (let a of mp[0].classList) {
      if (a == "p20" | a == "p40" | a == "p60") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         mp[0].classList.remove(a);
         mp[1].classList.remove(a);
      }
   }
   mp[0].classList.add('p0');
   mp[1].classList.add('p0');
   p0.classList.add('active')
});

// Margin 20%
const p20 = document.getElementById('p20');
p20.addEventListener('click', function (e) {
   for (let a of mp[0].classList) {
      if (a == "p0" | a == "p40" | a == "p60") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         mp[0].classList.remove(a);
         mp[1].classList.remove(a);
      }
   }
   mp[0].classList.add('p20');
   mp[1].classList.add('p20');
   p20.classList.add('active')
});

// Margin 40%
const p40 = document.getElementById('p40');
p40.addEventListener('click', function (e) {
   for (let a of mp[0].classList) {
      if (a == "p0" | a == "p20" | a == "p60") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         mp[0].classList.remove(a);
         mp[1].classList.remove(a);
      }
   }
   mp[0].classList.add('p40');
   mp[1].classList.add('p40');
   p40.classList.add('active')
});

// Margin 60%
const p60 = document.getElementById('p60');
p60.addEventListener('click', function (e) {
   for (let a of mp[0].classList) {
      if (a == "p0" | a == "p20" | a == "p40") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         mp[0].classList.remove(a);
         mp[1].classList.remove(a);
      }
   }
   mp[0].classList.add('p60');
   mp[1].classList.add('p60');
   p60.classList.add('active')
});

// Font
var fbox = document.getElementById('f-box')

// Align Left
const al = document.getElementById('align-l');
al.addEventListener('click', function (e) {
   for (let a of fbox.classList) {
      if (a == "align-c" | a == "align-r") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         fbox.classList.remove(a);
      }
   }
   fbox.classList.add('align-l');
   al.classList.add('active')
});

// Align Center
const ac = document.getElementById('align-c');
ac.addEventListener('click', function (e) {
   for (let a of fbox.classList) {
      if (a == "align-l" | a == "align-r") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         fbox.classList.remove(a);
      }
   }
   fbox.classList.add('align-c');
   ac.classList.add('active')
});

// Align Right
const ar = document.getElementById('align-r');
ar.addEventListener('click', function (e) {
   for (let a of fbox.classList) {
      if (a == "align-l" | a == "align-c") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         fbox.classList.remove(a);
      }
   }
   fbox.classList.add('align-r');
   ar.classList.add('active')
});

// Size 30px
const f30 = document.getElementById('f30');
f30.addEventListener('click', function (e) {
   for (let a of fbox.classList) {
      if (a == "f40" | a == "f3em" | a == "f4em") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         fbox.classList.remove(a);
      }
   }
   fbox.classList.add('f30');
   f30.classList.add('active')
});

// Size 40px
const f40 = document.getElementById('f40');
f40.addEventListener('click', function (e) {
   for (let a of fbox.classList) {
      if (a == "f30" | a == "f3em" | a == "f4em") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         fbox.classList.remove(a);
      }
   }
   fbox.classList.add('f40');
   f40.classList.add('active')
});

// Size 3em
const f3em = document.getElementById('f3em');
f3em.addEventListener('click', function (e) {
   for (let a of fbox.classList) {
      if (a == "f30" | a == "f40" | a == "f4em") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         fbox.classList.remove(a);
      }
   }
   fbox.classList.add('f3em');
   f3em.classList.add('active')
});

// Size 4em
const f4em = document.getElementById('f4em');
f4em.addEventListener('click', function (e) {
   for (let a of fbox.classList) {
      if (a == "f30" | a == "f40" | a == "f3em") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         fbox.classList.remove(a);
      }
   }
   fbox.classList.add('f4em');
   f4em.classList.add('active')
});

// Color Black
const blk = document.getElementById('blk');
blk.addEventListener('click', function (e) {
   for (let a of fbox.classList) {
      if (a == "r" | a == "g" | a == "b") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         fbox.classList.remove(a);
      }
   }
   fbox.classList.add('blk');
   blk.classList.add('active')
});

// Color Red
const r = document.getElementById('r');
r.addEventListener('click', function (e) {
   for (let a of fbox.classList) {
      if (a == "blk" | a == "g" | a == "b") {
         var btn = document.getElementById(a);
         console.log(btn.classList);
         btn.classList.remove('active');
         fbox.classList.remove(a);
      }
   }
   fbox.classList.add('r');
   r.classList.add('active')
});

// Color Green
const g = document.getElementById('g');
g.addEventListener('click', function (e) {
   for (let a of fbox.classList) {
      if (a == "blk" | a == "r" | a == "b") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         fbox.classList.remove(a);
      }
   }
   fbox.classList.add('g');
   g.classList.add('active')
});

// Color Blue
const b = document.getElementById('b');
b.addEventListener('click', function (e) {
   for (let a of fbox.classList) {
      if (a == "blk" | a == "r" | a == "g") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         fbox.classList.remove(a);
      }
   }
   fbox.classList.add('b');
   b.classList.add('active')
});

// Family 1
const f1 = document.getElementById('f1');
f1.addEventListener('click', function (e) {
   for (let a of fbox.classList) {
      if (a == "f2" | a == "f3" | a == "f4") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         fbox.classList.remove(a);
      }
   }
   fbox.classList.add('f1');
   f1.classList.add('active')
});

// Family 1
const f2 = document.getElementById('f2');
f2.addEventListener('click', function (e) {
   for (let a of fbox.classList) {
      if (a == "f1" | a == "f3" | a == "f4") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         fbox.classList.remove(a);
      }
   }
   fbox.classList.add('f2');
   f2.classList.add('active')
});

// Family 1
const f3 = document.getElementById('f3');
f3.addEventListener('click', function (e) {
   for (let a of fbox.classList) {
      if (a == "f1" | a == "f2" | a == "f4") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         fbox.classList.remove(a);
      }
   }
   fbox.classList.add('f3');
   f3.classList.add('active')
});

// Family 1
const f4 = document.getElementById('f4');
f4.addEventListener('click', function (e) {
   for (let a of fbox.classList) {
      if (a == "f1" | a == "f2" | a == "f3") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         fbox.classList.remove(a);
      }
   }
   fbox.classList.add('f4');
   f4.classList.add('active')
});

// Style Normal
const dn = document.getElementById('d-n');
dn.addEventListener('click', function (e) {
   for (let a of fbox.classList) {
      if (a == "d-i" | a == "d-b" | a == "d-u") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         fbox.classList.remove(a);
      }
   }
   fbox.classList.add('d-n');
   dn.classList.add('active')
});

// Family Italic
const di = document.getElementById('d-i');
di.addEventListener('click', function (e) {
   for (let a of fbox.classList) {
      if (a == "d-n" | a == "d-b" | a == "d-u") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         fbox.classList.remove(a);
      }
   }
   fbox.classList.add('d-i');
   di.classList.add('active')
});

// Style Bold
const db = document.getElementById('d-b');
db.addEventListener('click', function (e) {
   for (let a of fbox.classList) {
      if (a == "d-n" | a == "d-i" | a == "d-u") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         fbox.classList.remove(a);
      }
   }
   fbox.classList.add('d-b');
   db.classList.add('active')
});

// Style Underline
const du = document.getElementById('d-u');
du.addEventListener('click', function (e) {
   for (let a of fbox.classList) {
      if (a == "d-n" | a == "d-i" | a == "d-b") {
         var btn = document.getElementById(a);
         btn.classList.remove('active');
         fbox.classList.remove(a);
      }
   }
   fbox.classList.add('d-u');
   du.classList.add('active')
});