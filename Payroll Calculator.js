function calculate() {
    let gross = parseFloat(document.getElementById("salaryInput").value);
    
    // Check if the user actually entered a number
    if (isNaN(gross)) {
        alert("Please enter a valid salary amount.");
        return;
    }

    // NSSF Calculation (5% employee contribution)
    let nssf = gross * 0.05;
    let chargeableincome = gross - nssf;

    // PAYE Calculation
    let totalpaye = 0;

    if (chargeableincome > 410000) {
        totalpaye = (0.1 * 100000) + (0.2 * 75000) + (0.3 * (chargeableincome - 410000));
    } else if (chargeableincome > 335000) {
        totalpaye = (0.1 * 100000) + (0.2 * (chargeableincome - 335000));
    } else if (chargeableincome > 235000) {
        totalpaye = 0.1 * (chargeableincome - 235000);
    } else {
        totalpaye = 0;
    }

    // Calculate Net Salary
    let netsalary = chargeableincome - totalpaye;

    // Display Results
    document.getElementById("results").innerHTML = `
        <hr>
        <h3>Payroll Summary</h3>
        <p><strong>Gross Salary:</strong> UGX ${gross.toLocaleString()}</p>
        <p><strong>NSSF (5%):</strong> UGX ${nssf.toLocaleString()}</p>
        <p><strong>PAYE Tax:</strong> UGX ${totalpaye.toLocaleString()}</p>
        <p><strong>Net Salary:</strong> UGX ${netsalary.toLocaleString()}</p>
    `;
}