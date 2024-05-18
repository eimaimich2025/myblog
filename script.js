function toggleBanner() {
    var banner = document.getElementById("mySideBanner");
    banner.style.width = banner.style.width === '250px' ? '0' : '250px';
}

function closeBanner() {
    var banner = document.getElementById("mySideBanner");
    banner.style.width = '0';
}

// Chart.js code
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('povertyChart').getContext('2d');
    const povertyChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Poverty Rate (%)',
                data: [12.4, 12.7, 12.1, 12.5, 12.7, 12.6, 12.3, 12.5, 13.2, 14.3, 15.1, 15.0, 14.8, 14.5, 14.8, 14.6, 14.4, 14.1, 13.9, 13.7, 14.0, 14.4, 14.5, 14.2],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false,
                tension: 0.1
            }]
        },
        options: {
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Poverty Rates Over Time'
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });
});

