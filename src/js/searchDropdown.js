// OPEN AND CLOSE SEARCH
function searchDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// OPEN AND CLOSE SEARCH ENDS!


// Close search bar clicking outside.
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

// Close search bar clicking outside. ENDS!
