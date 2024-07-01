// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    fetchPatientData();
});

// Function to fetch patient data from the API
async function fetchPatientData() {
    const url = 'https://fedskillstest.coalitiontechnologies.workers.dev';
    const username = 'coalition';
    const password = 'skills-test';

    try {
        // Fetch data from the API with Basic Auth
        const response = await fetch(url, {
            headers: {
                'Authorization': 'Basic ' + btoa(`${username}:${password}`)
            }
        });

        // Parse the JSON response
        const data = await response.json();
        // Find the specific patient data for Jessica Taylor
        const patient = data.find(p => p.name === 'Jessica Taylor');

        // Populate the patient info section with the retrieved data
        document.getElementById('profile-picture').src = patient.profile_picture;
        document.getElementById('patient-details').innerHTML = `
            <strong>Age:</strong> ${patient.age}<br>
            <strong>Gender:</strong> ${patient.gender}<br>
            <strong>Phone Number:</strong> ${patient.phone_number}<br>
            <strong>Emergency Contact:</strong> ${patient.emergency_contact}<br>
            <strong>Insurance:</strong> ${patient.insurance_type}<br>
            <strong>Conditions:</strong> ${patient.diagnostic_list.map(d => d.name).join(', ')}
        `;

        // Create the chart with the patient's diagnosis history
        createChart(patient.diagnosis_history);
    } catch (error) {
        // Log any errors that occur during the fetch
        console.error('Error fetching patient data:', error);
    }
}

// Function to create the blood pressure chart using Chart.js
function createChart(data) {
    const ctx = document.getElementById('bpChart').getContext('2d');

    // Create a new Chart instance
    new Chart(ctx, {
        type: 'line', // Specify the chart type as line
        data: {
            labels: data.map(item => `${item.month} ${item.year}`), // X-axis labels
            datasets: [
                {
                    label: 'Systolic Blood Pressure',
                    data: data.map(item => item.blood_pressure.systolic.value), // Systolic BP data points
                    borderColor: 'rgba(75, 192, 192, 1)', // Line color
                    borderWidth: 2, // Line width
                    fill: false // Do not fill under the line
                },
                {
                    label: 'Diastolic Blood Pressure',
                    data: data.map(item => item.blood_pressure.diastolic.value), // Diastolic BP data points
                    borderColor: 'rgba(255, 99, 132, 1)', // Line color
                    borderWidth: 2, // Line width
                    fill: false // Do not fill under the line
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false, // Do not start the Y-axis at zero
                    suggestedMin: 60, // Suggest a minimum Y-axis value
                    suggestedMax: 180 // Suggest a maximum Y-axis value
                }
            }
        }
    });
}
