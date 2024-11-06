// Defina a data de término da promoção
const endDate = new Date('Nov 30, 2024 23:59:59').getTime();

// Atualize o countdown a cada segundo
const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const distance = endDate - now;

  // Cálculos de tempo para dias, horas, minutos e segundos
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Exiba o resultado nos elementos correspondentes
  document.getElementById('days').innerText = String(days).padStart(2, '0');
  document.getElementById('hours').innerText = String(hours).padStart(2, '0');
  document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
  document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');

  // Se o countdown terminar, exiba uma mensagem
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById('countdown').innerHTML = 'Promoção Encerrada';
  }
}, 1000);