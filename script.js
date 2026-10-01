const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (menuButton && nav) {
  const closeMenu = () => {
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  };

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('is-open', !isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) closeMenu();
  });
}

const hero = document.querySelector('.hero');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (hero && !reducedMotion) {
  hero.addEventListener('pointermove', (event) => {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    hero.style.setProperty('--mx', x.toFixed(3));
    hero.style.setProperty('--my', y.toFixed(3));
  });
}

const speakerData=[
['speaker-01-tatyana-fanshteyn.jpg','Татьяна Фанштейн','Преподаватель английского языка с 25-летним опытом, методист, тренер преподавателей, основатель онлайн-школы и методического центра, автор книги «Легко учить(ся)».','Более 5000 преподавателей прошли авторские курсы Татьяны. Её экспертиза — создание эффективной образовательной среды и развитие преподавателей.'],
['speaker-09-natasha-potapova.jpg','Наташа Потапова','Преподаватель и разработчик курсов английского B2–C2, руководитель школы Top-Notch English for B2–C2.','MA in English Discourse (Distinction), CPE (A). Более 580 выпускников школы.'],
['speaker-02-tatyana-suslova.jpg','Татьяна Суслова','Преподаватель английского языка для взрослых A2–B2. 17 лет опыта преподавания, TKT 1–3.','Консультирует преподавателей по повторению, рециркуляции, лексическому подходу и работе с аутентикой.'],
['speaker-04-vladimir-skvortsov.jpg','Владимир Скворцов','Cambridge преподаватель и тренер преподавателей с опытом более 15 лет.','Автор методических курсов и ведущий подкаста «Душный методист».'],
['speaker-05-tatyana-eremeeva.jpg','Татьяна Еремеева','Преподаёт английский преподавателям, ведёт дискуссионный клуб Cinemagic.','DELTA M1, IH-CAM, CELTA, CPE, IELTS, TOEFL, GRE.'],
['speaker-06-oksana-ryabtseva.jpg','Оксана Рябцева','Юрист образовательных проектов, основатель юридического агентства «ЧЕК-ЛИСТ».','Работает с юридическими вопросами образовательного бизнеса.'],
['speaker-07-elena-paremskaya.jpg','Елена Паремская','Эксперт по продвижению преподавателей и образовательных продуктов.','Автор обучающих программ и запусков для преподавателей.'],
['speaker-08-arina-vdovina.jpg','Арина Вдовина','Методист, преподаватель английского языка и эксперт по AI в образовании, магистр НИУ ВШЭ.','Разрабатывает учебные материалы и инструменты, которые помогают преподавателям работать с нейросетями.'],
['speaker-03-maria-nikitina.jpg','Мария Никитина','Эксперт ЕГЭ и ОГЭ, член предметной комиссии Москвы с 2016 года.','Практикующий учитель, руководитель методического объединения иностранных языков.']];
document.querySelectorAll('.speaker-thumb').forEach((b)=>b.addEventListener('click',()=>{let s=speakerData[+b.dataset.speaker];document.getElementById('speaker-image').src='assets/'+s[0];document.getElementById('speaker-name').textContent=s[1];document.getElementById('speaker-role').textContent=s[2];document.getElementById('speaker-bio').textContent=s[3];document.querySelectorAll('.speaker-thumb').forEach(x=>x.classList.remove('active'));b.classList.add('active')}));
