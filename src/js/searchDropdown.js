// OPEN AND CLOSE SEARCH
const search = document.querySelector('.navbar__item');

function searchDropdown() {
  search.addEventListener('click', () => {
    document.querySelector("#myDropdown").classList.toggle("show");
  })
}
searchDropdown();
// OPEN AND CLOSE SEARCH ENDS!


// CLOSE SEARCH BY CLICKING OUTSIDE
const modalOuter = document.querySelector('.navbar__searchDropdown');

function closeSearch() {
  modalOuter.classList.remove('show');
}

modalOuter.addEventListener('click', function(e) {
  const isOutside = !e.target.closest('.navbar__search-pushdown');
  if(isOutside) {
    closeSearch();
  }
});

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeSearch();
  }
});

// CLOSE SEARCH BY CLICKING OUTSIDE ENDS
