// Form Validation Script for Zé Aluga Signup

document.addEventListener('DOMContentLoaded', function() {
    function selectUserType(userType) {
        const userTypeInput = document.getElementById('userTypeInput');
        
        userTypeInput.value = userType;
    }

    function formatWhatsApp(phone) {
        const cleanedPhone = phone.replace(/\D/g, '');
        
        if (cleanedPhone.length === 10) {
            return `(${cleanedPhone.slice(0,2)})${cleanedPhone.slice(2,6)}-${cleanedPhone.slice(6)}`;
        } else if (cleanedPhone.length === 11) {
            return `(${cleanedPhone.slice(0,2)})${cleanedPhone.slice(2,7)}-${cleanedPhone.slice(7)}`;
        }
        
        return phone;
    }

    const form = document.querySelector('.card-body');
    const nameInput = form.querySelector('input[placeholder="Nome"]');
    const lastNameInput = form.querySelector('input[placeholder="Sobrenome"]');
    const emailInput = form.querySelector('input[placeholder="Email"]');
    const whatsappInput = form.querySelector('input[placeholder="Whatsapp"]');
    const userTypeInput = document.getElementById('userTypeInput');
    const termsCheckbox = document.getElementById('termsCheckbox');
    const registerButton = form.querySelector('button');

    whatsappInput.addEventListener('input', function() {
        this.value = formatWhatsApp(this.value);
    });

    const dropdownItems = document.querySelectorAll('.dropdown-item');
    
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            const userType = this.textContent.trim();
            
            selectUserType(userType);
        });
    });

    function validateName(name) {
        return name.trim().length >= 2;
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email.trim());
    }

    function validateWhatsapp(phone) {
        const cleanedPhone = phone.replace(/\D/g, '');
        
        return cleanedPhone.length === 10 || cleanedPhone.length === 11;
    }

    function validateForm() {
        let isValid = true;
        
        [nameInput, lastNameInput, emailInput, whatsappInput, userTypeInput].forEach(input => {
            input.classList.remove('is-invalid');
        });
        termsCheckbox.classList.remove('is-invalid');
        termsCheckbox.parentElement.classList.remove('text-danger');

        if (!validateName(nameInput.value)) {
            nameInput.classList.add('is-invalid');
            isValid = false;
        }

        if (!validateName(lastNameInput.value)) {
            lastNameInput.classList.add('is-invalid');
            isValid = false;
        }

        if (!validateEmail(emailInput.value)) {
            emailInput.classList.add('is-invalid');
            isValid = false;
        }

        if (!validateWhatsapp(whatsappInput.value)) {
            whatsappInput.classList.add('is-invalid');
            isValid = false;
        }

        if (!userTypeInput.value) {
            userTypeInput.classList.add('is-invalid');
            isValid = false;
        }

        if (!termsCheckbox.checked) {
            termsCheckbox.classList.add('is-invalid');
            termsCheckbox.parentElement.classList.add('text-danger');
            isValid = false;
        }

        return isValid;
    }

    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        .is-invalid {
            border: 2px solid red !important;
        }
        .is-invalid::placeholder {
            color: red !important;
        }
        .text-danger {
            color: red !important;
        }
    `;
    document.head.appendChild(styleSheet);

    registerButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        if (validateForm()) {
    
            const mensagemSucesso = `
    Cadastro realizado com sucesso! 
    
    Bem-vindo(a) ao Zé Aluga!
            `;
    
            alert(mensagemSucesso);
            
            window.location.href = 'index.html';
        } else {
            alert('Por favor, preencha todos os campos corretamente.');
        }
    });    

    [nameInput, lastNameInput, emailInput, whatsappInput, userTypeInput].forEach(input => {
        input.addEventListener('blur', validateForm);
    });

    termsCheckbox.addEventListener('change', validateForm);
});