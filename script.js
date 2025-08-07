const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const bookBtn = document.getElementById('bookBtn');
const confirmation = document.getElementById('confirmation');

let ticketPrice = +movieSelect.value;

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Click on seat
container.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
});

// Change movie
movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

// Book button click
bookBtn.addEventListener('click', () => {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  if (selectedSeats.length === 0) {
    alert('Please select at least one seat to book.');
    return;
  }

  // Optionally mark them as occupied
  selectedSeats.forEach((seat) => {
    seat.classList.remove('selected');
    seat.classList.add('occupied');
  });

  updateSelectedCount();

  // Show confirmation
  confirmation.classList.remove('hidden');

  // Hide it after 3 seconds
  setTimeout(() => {
    confirmation.classList.add('hidden');
  }, 3000);
});

// Initial update
updateSelectedCount();
