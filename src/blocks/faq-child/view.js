document.addEventListener('DOMContentLoaded', function () {
    const faqs = document.querySelectorAll('.faq-item');

    faqs.forEach(faq => {
        const button = faq.querySelector('.faq-button');
        const answer = faq.querySelector('.faq-answer');
        const iconExpand = faq.querySelector('.icon-expand');
        const iconCollapse = faq.querySelector('.icon-collapse');

        button.addEventListener('click', function () {
            const isActive = faq.classList.contains('active');

            // Close all FAQs first
            faqs.forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-answer').style.maxHeight = null;
                item.querySelector('.icon-expand').classList.remove('hidden');
                item.querySelector('.icon-collapse').classList.add('hidden');
            });

            // If not already active, open the clicked one
            if (!isActive) {
                faq.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                iconExpand.classList.add('hidden');
                iconCollapse.classList.remove('hidden');
            }
        });
    });
});
