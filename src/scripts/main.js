document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const copyButtons = document.querySelectorAll('.password-function');
    const generateButton = document.querySelector('.generate-button');
    const slider = document.getElementById('slider-range');
    const valueDisplay = document.getElementById('value-display');
    const strengthBar = document.querySelector('.strength-level');

    slider.addEventListener('input', function(){     
        valueDisplay.textContent = slider.value;

        const x = (slider.value - slider.min) / (slider.max - slider.min) * 100;
        const color = `linear-gradient(90deg, #FFFFFF ${x}%, #2C1746 ${x}%)`

        slider.style.background = color;
    })

    function generatePassword() {
        const length = slider.value;
        const hasUppercase = document.querySelector('input[value="uppercase"]').checked;
        const hasLowercase = document.querySelector('input[value="lowercase"]').checked;
        const hasNumbers = document.querySelector('input[value="numbers"]').checked;
        const hasSymbols = document.querySelector('input[value="symbols"]').checked;
    
        let password = '';
        let characters = '';
        let mandatoryCharacters = '';
    
        if (!hasUppercase && !hasLowercase && !hasNumbers && !hasSymbols) {
            alert("Selecione pelo menos um tipo de caractere para a senha.");
            return;
        }

        if (hasUppercase) {
            characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            mandatoryCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.charAt(Math.floor(Math.random() * 26));
        }
        if (hasLowercase) {
            characters += 'abcdefghijklmnopqrstuvwxyz';
            mandatoryCharacters += 'abcdefghijklmnopqrstuvwxyz'.charAt(Math.floor(Math.random() * 26));
        }
        if (hasNumbers) {
            characters += '0123456789';
            mandatoryCharacters += '0123456789'.charAt(Math.floor(Math.random() * 10));
        }
        if (hasSymbols) {
            characters += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
            mandatoryCharacters += '!@#$%^&*()_+~`|}{[]:;?><,./-='.charAt(Math.floor(Math.random() * 32));
        }
    
        if (!characters) {
            characters = 'abcdefghijklmnopqrstuvwxyz';
            mandatoryCharacters += 'abcdefghijklmnopqrstuvwxyz'.charAt(Math.floor(Math.random() * 26));
        }
    
        for (let i = 0; i < length - mandatoryCharacters.length; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
    
        password += mandatoryCharacters;
        password = password.split('').sort(() => 0.5 - Math.random()).join('');
    
        passwordInput.value = password;
        passwordStrength(hasUppercase, hasLowercase, hasNumbers, hasSymbols);
    }
    

    function passwordStrength(hasUppercase, hasLowercase, hasNumbers, hasSymbols) {
        if (hasUppercase && hasLowercase && hasNumbers && hasSymbols) {
            strengthBar.id = 'strong';
        } else if (hasUppercase && hasLowercase && (hasNumbers || hasSymbols) || hasNumbers && hasSymbols && (hasUppercase || hasLowercase)) {
            strengthBar.id = 'medium';
        } else {
            strengthBar.id = 'weak';
        }
    }

    function copyPassword() {
        if (passwordInput.value) {
            passwordInput.select();
            passwordInput.setSelectionRange(0, 99999);
            document.execCommand('copy');
            alert('Senha copiada com sucesso!');
        } else {
            alert('Não há senha gerada para copiar. Clique em "Gerar nova senha" para criar uma.');
        }
    }

    generateButton.addEventListener('click', generatePassword);

    copyButtons.forEach(button => {
        button.addEventListener('click', copyPassword);
    });

    generatePassword();
});