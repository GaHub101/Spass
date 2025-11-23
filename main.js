function calculateNumber() {
  const start = new Date('2025-01-01');
  const now = new Date();

  const monthsPassed = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  const total = Math.max(0, monthsPassed) * 150-192.60;

  return total;
}

document.addEventListener('DOMContentLoaded', () => {
  const amount = calculateNumber();
  document.getElementById('number').textContent = `${amount.toLocaleString('de-CH')}.-`;
});
