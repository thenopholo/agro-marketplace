// Form Validation Script for Zé Aluga Signup

document.addEventListener('DOMContentLoaded', function() {
    function selectUserType(userType) {
        const userTypeInput = document.getElementById('userTypeInput');
        userTypeInput.value = userType;
        validateUserType(userTypeInput);
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
        validateWhatsapp(this);
    });

    const dropdownItems = document.querySelectorAll('.dropdown-item');
    
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            const userType = this.textContent.trim();
            
            selectUserType(userType);
        });
    });

    function validateName(input) {
        const name = input.value.trim();
        const isValidName = name.length >= 2;

        if (isValidName) {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
        } else {
            input.classList.remove('is-valid');
            input.classList.add("is-invalid");
        }

        return isValidName;
    }

    function validateEmail(input) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailRegex.test(input.value.trim());

        if (isValidEmail){
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
        } else {
            input.classList.remove('is-valid');
            input.classList.add("is-invalid");
        }

        return isValidEmail;
    }

    function validateWhatsapp(input) {
        const cleanedPhone = input.value.replace(/\D/g, '');
        const isValidPhone = cleanedPhone.length === 10 || cleanedPhone.length === 11;

        if (isValidPhone) {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
        } else {
            input.classList.remove('is-valid');
            input.classList.add("is-invalid");
        }

        return isValidPhone;
    }

    function validateUserType(input) {
        const isValidUserType = !!input.value;

        if (isValidUserType) {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
        } else {
            input.classList.remove('is-valid');
            input.classList.add("is-invalid");
        }

        return isValidUserType;
    }

    function validateTerms(input) {
        const isValidTerm = input.checked;

        if (isValidTerm) {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
        } else {
            input.classList.remove('is-valid');
            input.classList.add("is-invalid");
        }

        return isValidTerm;
    }

    function validateForm() {
        const nameValid = validateName(nameInput);
        const lastNameValid = validateName(lastNameInput);
        const emailValid = validateEmail(emailInput);
        const whatsappValid = validateWhatsapp(whatsappInput);
        const userTypeValid = validateUserType(userTypeInput);
        const termsValid = validateTerms(termsCheckbox);

        return nameValid && lastNameValid && emailValid && whatsappValid && userTypeValid && termsValid;
    }

    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        .is-invalid {
            border: 2px solid red !important;
        }
        .is-invalid::placeholder {
            color: red !important;
        }
        .is-valid {
            border: 2px solid green !important;
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

    nameInput.addEventListener('blur', () => validateName(nameInput));
    lastNameInput.addEventListener('blur', () => validateName(lastNameInput));
    emailInput.addEventListener('blur', () => validateEmail(emailInput));
    whatsappInput.addEventListener('blur', () => validateWhatsapp(whatsappInput));
    termsCheckbox.addEventListener('change', () => validateTerms(termsCheckbox));
    termsCheckbox.addEventListener('change', validateForm);
});