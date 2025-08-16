const saleEndTime = new Date();
saleEndTime.setHours(21, 59, 59, 999); // Hết hạn vào 23:59:59 hôm nay

function updateCountdown() {
  const now = new Date().getTime();
  const distance = saleEndTime.getTime() - now;

  if (distance <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    clearInterval(timerInterval);
    return;
  }

  // Tính toán ngày, giờ, phút, giây
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Hiển thị lên HTML
  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

// Cập nhật fuction updateCountdown
const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown(); 
