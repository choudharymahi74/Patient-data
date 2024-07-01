# Patient Data Visualization

This project is designed to retrieve patient data from an API and display it pictorially using Chart.js. The application fetches the data, processes it, and generates various charts to provide a visual representation of the patient's information.

## Features

- Fetches patient data from a specified API endpoint
- Processes and formats the data for visualization
- Uses Chart.js to create interactive and responsive charts
- Displays data such as patient vitals, medical history, and other relevant metrics

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Chart.js
- Fetch API

## Getting Started

### Prerequisites

To run this project locally, you need to have:

- A web browser (Chrome, Firefox, Safari, etc.)
- A code editor (VS Code, Sublime Text, etc.)

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/yourusername/patient-data-visualization.git
    ```

2. Navigate to the project directory:

    ```bash
    cd patient-data-visualization
    ```

3. Open `index.html` in your web browser to view the application:

    ```bash
    open index.html
    ```

## Usage

1. The application will automatically fetch patient data from the API upon loading.
2. The data will be processed and displayed in various charts using Chart.js.
3. You can interact with the charts to view detailed information.

## Code Structure

- `index.html`: The main HTML file that contains the structure of the web page.
- `style.css`: The CSS file for styling the application.
- `app.js`: The JavaScript file that contains the logic for fetching data, processing it, and rendering charts using Chart.js.

## API Integration

The application uses the Fetch API to retrieve patient data. The data is then processed and passed to Chart.js to create visualizations. Below is a snippet of the code used to fetch and display the data:

