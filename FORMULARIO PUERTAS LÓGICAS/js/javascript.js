document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(input => {
        input.addEventListener('change', updateResults);
    });
    
    function updateResults() {
        const value1 = document.getElementById('value1').checked;
        const value2 = document.getElementById('value2').checked;
        
        // AND: Solo es true si ambas casillas están marcadas.
        document.getElementById('andResult').textContent = (value1 && value2) ? 'True' : 'False';
        
        // OR: Es true si al menos una casilla está marcada.
        document.getElementById('orResult').textContent = (value1 || value2) ? 'True' : 'False';
        
        // XOR: Es true si solo una casilla está marcada, pero false si ambas o ninguna lo están.
        document.getElementById('xorResult').textContent = (value1 !== value2) ? 'True' : 'False';
    }
});

