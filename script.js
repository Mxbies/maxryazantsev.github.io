const cursor = document.querySelector('.cursor');

if (cursor) {
  window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor.style.opacity = 1;
  });

  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = 0;
  });
}


// =========================
// SCROLL REVEAL
// =========================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.12
  }
);

document.querySelectorAll('.reveal').forEach((element) => {
  observer.observe(element);
});


// =========================
// INTERACTIVE SKILLS
// =========================

const skillsStage = document.querySelector('#skillsStage');

const skills = document.querySelectorAll('.skill-orbit');

const skillInfo = document.querySelector('#skillInfo');

const skillInfoTitle =
  skillInfo?.querySelector('.skill-info-title');

const skillInfoText =
  skillInfo?.querySelector('p');


if (skillsStage) {

  // движение мыши

  skillsStage.addEventListener('mousemove', (event) => {

    const rect =
      skillsStage.getBoundingClientRect();

    const x =
      event.clientX - rect.left;

    const y =
      event.clientY - rect.top;


    skillsStage.style.setProperty(
      '--mouse-x',
      `${x}px`
    );

    skillsStage.style.setProperty(
      '--mouse-y',
      `${y}px`
    );


    const centerX =
      rect.width / 2;

    const centerY =
      rect.height / 2;


    const moveX =
      (x - centerX) / centerX;

    const moveY =
      (y - centerY) / centerY;


    skills.forEach((skill, index) => {

      const intensity =
        6 + index * 0.8;


      skill.style.marginLeft =
        `${moveX * intensity}px`;

      skill.style.marginTop =
        `${moveY * intensity}px`;

    });

  });


  // наведение на навык

  skills.forEach((skill) => {

    skill.addEventListener(
      'mouseenter',
      () => {

        const title =
          skill.dataset.title;

        const description =
          skill.dataset.description;


        if (skillInfoTitle) {
          skillInfoTitle.textContent =
            title;
        }


        if (skillInfoText) {
          skillInfoText.textContent =
            description;
        }


        skillInfo.classList.add(
          'active'
        );

      }
    );


    skill.addEventListener(
      'mouseleave',
      () => {

        if (skillInfoTitle) {
          skillInfoTitle.textContent =
            'SELECT A SKILL';
        }


        if (skillInfoText) {
          skillInfoText.textContent =
            'Hover over any skill';
        }


        skillInfo.classList.remove(
          'active'
        );

      }
    );

  });

}/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
  '.reveal, .about-grid, .stats, .experience-row, .project-card, .project, .case-study, .contact h2, .contact-links'
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});