// Lọc tại trình duyệt; không gửi dữ liệu hoặc sử dụng thư viện.
const form = document.querySelector('#filters');
const category = document.querySelector('#category');
const price = document.querySelector('#price');
const sort = document.querySelector('#sort');
const grid = document.querySelector('.grid');
const cards = Array.from(grid.children);
const money = new Intl.NumberFormat('vi-VN');
function applyFilters() {
  const time = form.querySelector('input[name="time"]:checked').value;
  const maximum = Number(price.value);
  document.querySelector('#price-value').textContent = money.format(maximum) + ' đ';
  let count = 0;
  cards.forEach(card => {
    const matches = (time === 'all' || card.dataset.time.split(' ').includes(time)) &&
      (category.value === 'all' || category.value === card.dataset.category) &&
      Number(card.dataset.price) <= maximum;
    card.hidden = !matches;
    if (matches) count++;
  });
  const ordered = [...cards];
  if (sort.value !== 'default') ordered.sort((a, b) => (Number(a.dataset.price) - Number(b.dataset.price)) * (sort.value === 'asc' ? 1 : -1));
  ordered.forEach(card => grid.append(card));
  document.querySelector('#count').textContent = count + ' sản phẩm phù hợp';
  document.querySelector('#empty').hidden = count !== 0;
  document.querySelectorAll('[data-category-choice]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.categoryChoice === category.value)));
}
form.addEventListener('submit', event => event.preventDefault());
form.addEventListener('input', applyFilters);
form.addEventListener('change', applyFilters);
form.addEventListener('reset', () => setTimeout(applyFilters, 0));
document.querySelectorAll('[data-category-choice]').forEach(button => button.addEventListener('click', () => {
  category.value = button.dataset.categoryChoice;
  applyFilters();
  document.querySelector('#products').scrollIntoView({behavior: 'auto', block: 'start'});
}));
applyFilters();
