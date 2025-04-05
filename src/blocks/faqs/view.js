document.addEventListener('DOMContentLoaded', function () {
    const framosFaqs = document.querySelectorAll('.wp-block-framos-faqs .faqs-wrapper');

    if (framosFaqs && framosFaqs.length > 0) {
        framosFaqs.forEach(faqWrapper => {
            // Using event delegation - one listener per FAQ wrapper
            faqWrapper.addEventListener('click', function (event) {
                // Find the closest button if a child element was clicked
                const button = event.target.closest('.faq-button');

                // Only proceed if a button was clicked
                if (!button) return;

                // Find the parent faq-item
                const faqItem = button.closest('.faq-item');

                // Find the elements to toggle
                const answer = faqItem.querySelector('.faq-answer');
                const iconExpand = button.querySelector('.close-icon');
                const iconCollapse = button.querySelector('.open-icon');

                // Toggle the necessary classes
                answer.classList.toggle('hidden');
                iconExpand.classList.toggle('hidden');
                iconCollapse.classList.toggle('hidden');
            });
        });
    }
});
