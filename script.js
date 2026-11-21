const menuBtn = document.getElementById('menuBtn'); const nav = document.getElementById('nav'); menuBtn.addEventListener('click', () => { nav.classList.toggle('open'); menuBtn.textContent = nav.classList.contains('open') ? '×' : '☰' }); nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menuBtn.textContent = '☰' })); const modal = document.getElementById('modal'); document.querySelectorAll('.quick').forEach(btn => btn.addEventListener('click', () => { document.getElementById('modalName').textContent = btn.dataset.name; document.getElementById('modalNotes').textContent = btn.dataset.notes; modal.classList.add('show') })); function closeModal() { modal.classList.remove('show') } document.getElementById('close').addEventListener('click', closeModal); document.getElementById('done').addEventListener('click', closeModal); modal.addEventListener('click', e => { if (e.target === modal) closeModal() }); document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal() }); document.getElementById('contactForm').addEventListener('submit', e => { e.preventDefault(); const email = document.getElementById('email'); document.getElementById('message').textContent = 'Thank you! Your email has been entered. This demo form does not send messages yet.'; email.value = '' })

// Reveal sections and cards smoothly as they enter the screen.
const revealTargets = document.querySelectorAll(
  '.intro, .sectionHead, .products article, .storyPhoto, .storyText, .quote, .contact'
);
revealTargets.forEach(element => element.classList.add('reveal-on-scroll'));

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealTargets.forEach(element => revealObserver.observe(element));
} else {
  revealTargets.forEach(element => element.classList.add('is-visible'));
}
