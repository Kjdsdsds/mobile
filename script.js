// Add any interactive functionality here if needed
document.addEventListener('DOMContentLoaded', function() {
  const ctaButton = document.querySelector('.cta-button');
  
  if (ctaButton) {
    ctaButton.addEventListener('click', function() {
      console.log('Button clicked: 너의 선택을 믿어봐');
      // Add your button click functionality here
    });
  }
});
