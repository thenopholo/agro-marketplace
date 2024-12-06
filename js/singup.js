document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-card');
  const cadastrarBtn = document.querySelector('.btn.bg-custom-secondary');
  const termsCheckbox = document.getElementById('termsCheckbox');

  cadastrarBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const nome = document.querySelector('input[placeholder="Nome"]').value;
    const sobrenome = document.querySelector('input[placeholder="Sobrenome"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const whatsapp = document.querySelector('input[placeholder="Whatsapp"]').value;
    const userType = document.getElementById('userTypeInput').value;

    if (!nome || !sobrenome || !email || !whatsapp || !userType) {
      showToast({
        message: 'Por favor, preencha todos os campos.',
        type: 'error'
      });
      return;
    }

    if (!email.includes('@')) {
      showToast({
        message: 'Por favor, insira um email válido.',
        type: 'error'
      });
      return;
    }

    if (!termsCheckbox.checked) {
      showToast({
        message: 'Por favor, aceite os termos de uso.',
        type: 'warning'
      });
      return;
    }

    showToast({
      message: 'Cadastro realizado com sucesso!',
      type: 'success'
    });
    
    function selectUserType(userType) {
      document.getElementById('userTypeInput').value = userType;
    }

    form.reset();
    window.selectUserType = selectUserType;
  });
});

