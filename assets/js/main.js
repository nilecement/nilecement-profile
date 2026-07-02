document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var lang = document.documentElement.getAttribute('lang');
      var msg = lang === 'ar'
        ? 'شكرًا لتواصلكم معنا. هيتم الرد عليكم في أقرب وقت.'
        : 'Thank you for reaching out. We will get back to you shortly.';
      alert(msg);
      form.reset();
    });
  }
});
