function showToast({
  message,
  type = 'success',
  duration = 3000,
  position = 'right',
  gravity = 'top',
} = {}) {
  const backgrounds = {
    success: 'linear-gradient(to right, #00b09b, #96c93d)',
    error: 'linear-gradient(to right, #ff5f6d, #bf3130)',
    warning: 'linear-gradient(to right, #f7b733, #fc4a1a)',
    info: 'linear-gradient(to right, #2193b0, #6dd5ed)'
  };

  Toastify({
    text: message,
    duration: duration,
    gravity: gravity,
    position: position,
    stopOnFocus: true,
    close: true,
    style: {
      background: backgrounds[type],
      borderRadius: '8px',
      height: '55px',
      fontWeight: 'bold',
      fontSize: '1.2em',
    }
  }).showToast();
}

showToast({
  message: 'Produto adicionado com sucesso!',
  type: 'success'
});

showToast({
  message: 'Erro ao processar operação',
  type: 'error'
});

showToast({
  message: 'Atenção! Dados incompletos',
  type: 'warning'
});

showToast({
  message: 'Processando sua solicitação...',
  type: 'info',
  duration: 2000
});