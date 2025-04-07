// Pour la recherche (optionnelle)
document.querySelector('.search-bar input').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  document.querySelectorAll('.mod-card').forEach(card => {
    const title = card.querySelector('h2').innerText.toLowerCase();
    card.style.display = title.includes(query) ? '' : 'none';
  });
});
