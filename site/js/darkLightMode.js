document.addEventListener('DOMContentLoaded', (event) => {
    const switchButton = document.getElementById('toggle-switch');
    
    switchButton.addEventListener('change', () => {
        if (switchButton.checked) {
            console.log(switchButton.checked);
        } else {
            console.log(switchButton.checked);
        }
    });
});