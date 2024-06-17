document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const accordionContent = this.nextElementSibling;

            this.classList.toggle('active');
            if (this.classList.contains('active')) {
                accordionContent.style.display = 'block';
                this.querySelector('.accordion-icon').textContent = '-';
            } else {
                accordionContent.style.display = 'none';
                this.querySelector('.accordion-icon').textContent = '+';
            }

            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== this) {
                    otherHeader.classList.remove('active');
                    otherHeader.nextElementSibling.style.display = 'none';
                    otherHeader.querySelector('.accordion-icon').textContent = '+';
                }
            });
        });
    });
});
