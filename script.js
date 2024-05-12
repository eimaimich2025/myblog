
function toggleBanner() {
    var banner = document.getElementById("mySideBanner");
    banner.style.width = banner.style.width === '250px' ? '0' : '250px';
}

// Close the side banner
function closeBanner() {
    var banner = document.getElementById("mySideBanner");
    banner.style.width = '0';
}
