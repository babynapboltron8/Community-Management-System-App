// BAR CHART
const barLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
const barData = {
    labels: barLabels,
    datasets: [{
        label: 'Monthly Values',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
        ],
        borderWidth: 1
    }]
};
const barConfig = {
    type: 'bar',
    data: barData,
    options: {
        maintainAspectRatio: false, // allow canvas CSS height to control chart height
        scales: {
            y: { beginAtZero: true }
        }
    }
};

// PIE CHART
const pieLabels = ['Red', 'Blue', 'Yellow'];
const pieData = {
    labels: pieLabels,
    datasets: [{
        label: 'Dataset (pie)',
        data: [300, 50, 100],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};
const pieConfig = {
    type: 'pie',
    data: pieData,
    options: {
        maintainAspectRatio: false // allow the pie to use the container height
    }
};

function initCharts() {
    if (typeof Chart === 'undefined') {
        console.error('Chart.js is not loaded. Include Chart.js before dashboard.js');
        return;
    }

    // main chart (uses barConfig)
    const mainCanvas = document.getElementById('myChart');
    if (mainCanvas) {
        const ctx = mainCanvas.getContext('2d');
        new Chart(ctx, barConfig);
    }

    const pieCanvas = document.getElementById('myPieChart');
    if (pieCanvas) {
        const ctxPie = pieCanvas.getContext('2d');
        new Chart(ctxPie, pieConfig);
    } else {
        console.warn('Canvas with id "myPieChart" not found.');
    }
}

// Run immediately if DOM is already ready, otherwise wait for DOMContentLoaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCharts);
} else {
    initCharts();
}