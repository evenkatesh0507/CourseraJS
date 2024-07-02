let g1, g2, g3, total;

function calculateArea() {
    g1 = parseFloat(document.getElementById('g1').value);
    g2 = parseFloat(document.getElementById('g2').value);
    g3 = parseFloat(document.getElementById('g3').value);
   
    total = g1 + g2 +g3;

    document.getElementById('billTotal').innerText = `The total amount is: ${total}`;
}