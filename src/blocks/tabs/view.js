document.addEventListener('DOMContentLoaded', () => {
    const framosTabs = document.querySelectorAll('.wp-block-framos-tabs');

    if (framosTabs.length === 0) return false;

    framosTabs.forEach(tab => {
        const titles = tab.querySelectorAll('.tab-tiltes > li');
        const tabContents = tab.querySelectorAll('.wp-block-framos-tab');

        // Show the first tab content by default
        if (tabContents.length > 0) {
            tabContents[0].classList.remove('hidden');
        }

        // Add click event to each tab title
        titles.forEach(title => {
            title.addEventListener('click', e => {
                e.preventDefault();

                // Remove active class from all tab titles
                titles.forEach(t => t.classList.remove('active'));
                title.classList.add('active');

                const tabId = title.dataset.titleTabId;

                // Hide all tab contents
                tabContents.forEach(content => {
                    content.classList.add('hidden');
                });

                // Show the clicked tab content
                const targetContent = [...tabContents].find(content => content.dataset.tabId === tabId);
                if (targetContent) {
                    targetContent.classList.remove('hidden');
                }
            });
        });
    });
});
