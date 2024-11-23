document.addEventListener("DOMContentLoaded", () => {
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const whatsapp = document.getElementById("whatsapp");
    const message = document.getElementById("message");

    const validateFullName = () => {
        const nameParts = fullName.value.trim().split(" ");
        if (nameParts.length < 2 || nameParts.some(part => part === "")) {
            fullName.classList.add("is-invalid");
        } else {
            fullName.classList.remove("is-invalid");
        }
    };

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            email.classList.add("is-invalid");
        } else {
            email.classList.remove("is-invalid");
        }
    };

    const validateWhatsapp = () => {
        const whatsappRegex = /^\+?\d{10,15}$/;
        if (!whatsappRegex.test(whatsapp.value.trim())) {
            whatsapp.classList.add("is-invalid");
        } else {
            whatsapp.classList.remove("is-invalid");
        }
    };

    const validateMessage = () => {
        if (message.value.trim().length < 30 || message.value.trim().length > 500) {
            message.classList.add("is-invalid");
        } else {
            message.classList.remove("is-invalid");
        }
    };

    fullName.addEventListener("blur", validateFullName);
    email.addEventListener("blur", validateEmail);
    whatsapp.addEventListener("blur", validateWhatsapp);
    message.addEventListener("blur", validateMessage);

    const form = document.getElementById("contactForm");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
        validateFullName();
        validateEmail();
        validateWhatsapp();
        validateMessage();

        if (![...form.querySelectorAll(".is-invalid")].length) {
            alert("Formulário enviado com sucesso!");
            form.reset(); 
        }
    });
});