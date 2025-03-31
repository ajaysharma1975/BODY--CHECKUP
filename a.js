function checkHealth() {
    // Get user input values
    const temperature = parseFloat(document.getElementById('temperature').value);
    const bp = document.getElementById('bp').value.split('/');
    const sugar = parseFloat(document.getElementById('sugar').value);

    // Validate input
    if (isNaN(temperature) || isNaN(sugar) || bp.length !== 2 || isNaN(bp[0]) || isNaN(bp[1])) {
        alert('Please enter valid values for temperature, blood pressure, and sugar levels.');
        return;
    }

    // Temperature check
    let tempMessage = '';
    if (temperature > 37.5) {
        tempMessage = 'You may have a fever. Please monitor your symptoms.';
    } else {
        tempMessage = 'Your temperature is normal.';
    }

    // Blood Pressure check
    let bpMessage = '';
    const systolic = parseInt(bp[0]);
    const diastolic = parseInt(bp[1]);
    if (systolic > 140 || diastolic > 90) {
        bpMessage = 'Your blood pressure is high. Consider consulting a doctor.';
    } else if (systolic < 90 || diastolic < 60) {
        bpMessage = 'Your blood pressure is low. Consider consulting a doctor.';
    } else {
        bpMessage = 'Your blood pressure is normal.';
    }

    // Sugar level check
    let sugarMessage = '';
    if (sugar < 70) {
        sugarMessage = 'Your blood sugar is too low. Consider eating something sweet.';
    } else if (sugar > 180) {
        sugarMessage = 'Your blood sugar is high. Please consult your healthcare provider.';
    } else {
        sugarMessage = 'Your blood sugar level is normal.';
    }

    // Display results
    document.getElementById('temp-result').textContent = tempMessage;
    document.getElementById('bp-result').textContent = bpMessage;
    document.getElementById('sugar-result').textContent = sugarMessage;

    document.getElementById('result').style.display = 'block';
}
