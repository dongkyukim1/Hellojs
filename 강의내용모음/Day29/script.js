// 전역 변수
const cart = JSON.parse(localStorage.getItem('cart')) || [];
const productData = [
  { id: 0, title: "식기세척기", brand: "세척나라", photo: "pr1.jpg", price: 10000 },
  { id: 1, title: "원목 침대 프레임", brand: "침대나라", photo: "pr2.jpg", price: 20000 },
  { id: 2, title: "천연 디퓨저 세트", brand: "향기나라", photo: "pr3.jpg", price: 30000 },
  { id: 3, title: "시원한 서큘레이터", brand: "바람나라", photo: "pr4.jpg", price: 40000 }
];

// 초기 실행
document.addEventListener('DOMContentLoaded', () => {
  bindAddToCartButtons();
  setupDragAndDrop();
  renderCart();
});

function bindAddToCartButtons() {
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', e => {
      const id = parseInt(e.target.closest('[data-id]').dataset.id);
      addToCart(id);
    });
  });
}

function setupDragAndDrop() {
  const items = document.querySelectorAll('[data-id]');
  items.forEach(item => {
    item.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', item.dataset.id);
    });
  });

  const dropZone = document.getElementById('cartDropZone');
  dropZone.addEventListener('dragover', e => e.preventDefault());
  dropZone.addEventListener('drop', e => {
    e.preventDefault();
    const id = parseInt(e.dataTransfer.getData('text/plain'));
    addToCart(id);
  });
}

function addToCart(id) {
  const found = cart.find(item => item.id === id);
  if (found) {
    found.count++;
  } else {
    const product = productData.find(p => p.id === id);
    cart.push({ ...product, count: 1 });
  }
  saveCart();
  renderCart();
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function renderCart() {
  const container = document.getElementById('cartItems');
  container.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.count;
    const col = document.createElement('div');
    col.className = 'col-md-12';
    col.innerHTML = `
      <div class="card shadow-sm border-0">
        <div class="card-body d-flex justify-content-between align-items-center">
          <div>
            <h6 class="mb-1">${item.title}</h6>
            <small class="text-muted">${item.brand} · ${item.price.toLocaleString()}원</small>
          </div>
          <div class="d-flex align-items-center gap-2">
            <input type="number" min="1" value="${item.count}" class="form-control form-control-sm" style="width:70px" data-id="${item.id}">
          </div>
        </div>
      </div>
    `;
    container.appendChild(col);
  });

  document.getElementById('totalPrice').textContent = total.toLocaleString();

  document.querySelectorAll('#cartItems input').forEach(input => {
    input.addEventListener('change', e => {
      const id = parseInt(e.target.dataset.id);
      const found = cart.find(item => item.id === id);
      found.count = Math.max(1, parseInt(e.target.value));
      saveCart();
      renderCart();
    });
  });
}

function drawReceipt() {
  const name = document.getElementById('buyerName').value;
  const phone = document.getElementById('buyerPhone').value;
  const canvas = document.getElementById('receiptCanvas');
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#333';
  ctx.font = 'bold 18px sans-serif';
  ctx.fillText('🧾 구매 영수증', 20, 30);

  ctx.font = '14px sans-serif';
  ctx.fillText(`구매자: ${name}`, 20, 60);
  ctx.fillText(`연락처: ${phone}`, 20, 85);
  ctx.fillText(`날짜: ${new Date().toLocaleDateString()}`, 20, 110);

  let y = 150;
  let total = 0;

  ctx.font = '14px monospace';
  ctx.fillStyle = '#000';
  cart.forEach(item => {
    const line = `${item.title} x${item.count} - ${item.price * item.count}원`;
    ctx.fillText(line, 20, y);
    y += 25;
    total += item.price * item.count;
  });

  ctx.strokeStyle = '#999';
  ctx.beginPath();
  ctx.moveTo(20, y);
  ctx.lineTo(330, y);
  ctx.stroke();

  ctx.font = 'bold 16px sans-serif';
  ctx.fillStyle = '#222';
  ctx.fillText(`총 합계: ${total.toLocaleString()}원`, 20, y + 30);

  document.getElementById('receiptContainer').classList.remove('d-none');

  // 구매 완료 후 장바구니 초기화
  cart.length = 0;
  saveCart();
  renderCart();
}