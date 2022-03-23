let accordions;
const accordionWrapper = document.querySelector('.accordion');

const contentData = [
  {
    id: 1,
    title: 'Title1',
    content: 'Content1',
  },
  {
    id: 2,
    title: 'Title2',
    content: 'Content2',
  },
  {
    id: 3,
    title: 'Title3',
    content: 'Content3',
  },
  {
    id: 4,
    title: 'Title4',
    content: 'Content4',
  },
  {
    id: 5,
    title: 'Title5',
    content: 'Content5',
  },
  {
    id: 4,
    title: 'Title6',
    content: 'Content6',
  },
];

const createTemplate = (item) => {
  return `
        <div class="accordion__item">
            <div class="accordion__title">${item.title}</div>
            <div class="accordion__content">${item.content}</div>
        </div>
    `;
};

const fillHtmlList = () => {
  contentData.forEach((accordion) => {
    accordionWrapper.innerHTML += createTemplate(accordion);
  });
  accordions = document.querySelectorAll('.accordion__item');
};

window.addEventListener('load', () => {
  fillHtmlList();

  if (accordions) {
    for (let accordion of accordions) {
      accordion.addEventListener('click', (e) => {
        let thisAccordion = e.target.parentNode;

        if (thisAccordion.classList.contains('active')) {
          thisAccordion.classList.remove('active');
        } else {
          for (let item of accordions) {
            item.classList.remove('active');
          }

          thisAccordion.classList.add('active');
        }
      });
    }
  }
});
