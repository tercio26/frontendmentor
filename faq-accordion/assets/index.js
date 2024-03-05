(() => {
    const faqItems = document.querySelectorAll('.faq-item');
    document.querySelectorAll('.faq-item .faq-title').forEach(function(elem) {
        elem.addEventListener('click', function () {
            const faqItem = this.closest('.faq-item')
            if (!faqItem.classList.contains('active')) {
                faqItems.forEach(x => x.classList.remove("active"));
                faqItem.classList.add('active')
            }
        })
    });

})();