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
    labels: ['1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969',
             '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979',
             '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989',
             '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999',
             '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009',
             '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019',
             '2020', '2021', '2022', '2023'],
    datasets: [{
        label: 'Poverty Rate (%)',
        data: [
            30.0, 29.5, 29.0, 28.5, 28.0, 27.5, 27.0, 26.5, 26.0, 25.5,
            25.0, 24.5, 24.0, 23.5, 23.0, 22.5, 22.0, 21.5, 21.0, 20.5,
            20.0, 19.5, 19.0, 18.5, 18.0, 17.5, 17.0, 16.5, 16.0, 15.5,
            15.0, 14.5, 14.0, 13.5, 13.0, 12.5, 12.0, 11.5, 11.0, 10.5,
            12.4, 12.7, 12.1, 12.5, 12.7, 12.6, 12.3, 12.5, 13.2, 14.3,
            15.1, 15.0, 14.8, 14.5, 14.8, 14.6, 14.4, 14.1, 13.9, 13.7,
            14.0, 14.4, 14.5, 14.2
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: false,
        tension: 0.1
    }]
}
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

