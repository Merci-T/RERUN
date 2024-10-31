const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        item.classList.toggle('expanded');

        // Toggle other questions when one is clicked
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('expanded');
            }
        });

        // Change the icon from + to - and vice versa
        const icon = item.querySelector('.toggle-icon');
        if (item.classList.contains('expanded')) {
            icon.textContent = '−';
        } else {
            icon.textContent = '+';
        }
    });
});

    // Function to animate percentage between a min and max value
    function animatePercentage(elementId, min, max) {
      let currentValue = min;
      let isIncrementing = true;
    
      setInterval(() => {
        if (isIncrementing) {
          currentValue += Math.random() * 0.1; // Randomly increment
          if (currentValue >= max) isIncrementing = false;
        } else {
          currentValue -= Math.random() * 0.1; // Randomly decrement
          if (currentValue <= min) isIncrementing = true;
        }
    
        // Limit to 2 decimal places and update the element
        document.getElementById(elementId).innerText = currentValue.toFixed(2) + '%';
      }, 100); // Update every 100 milliseconds (adjust for speed)
    }
    
    // Start animating the percentages with reasonable ranges
    animatePercentage('percent-1', 5.50, 6.00); // Secure Savings: 5.50% - 6.00%
    animatePercentage('percent-2', 0.90, 1.10); // Instant Access: 0.90% - 1.10%
    animatePercentage('percent-3', 2.10, 2.30); // Real-time Fraud: 2.10% - 2.30%