document.addEventListener('DOMContentLoaded', function () {
    const framosContentImageBlocks = document.querySelectorAll('.wp-block-framos-content-image');

    if (framosContentImageBlocks && framosContentImageBlocks.length > 0) {
        framosContentImageBlocks.forEach(block => {
            const accordionsWrapper = block.querySelector('.framos-accordions');
            if (accordionsWrapper) {
                const accordions = accordionsWrapper.querySelectorAll('.wp-block-framos-accordion');
                if (accordions && accordions.length > 0) {
                    accordions.forEach(accordion => {
                        const accordionHead = accordion.querySelector('.accordion-head');
                        const accordionBody = accordion.querySelector('.accordion-body');

                        if (accordionHead && accordionBody) {
                            accordionHead.addEventListener('click', function () {
                                const allAccordionBodies = accordionsWrapper.querySelectorAll('.accordion-body');
                                const closeIcon = accordionHead.querySelector('.close-icon');
                                const openIcon = accordionHead.querySelector('.open-icon');

                                const allAccordions = accordionsWrapper.querySelectorAll('.wp-block-framos-accordion');
                                allAccordions.forEach(acc => {
                                    const body = acc.querySelector('.accordion-body');
                                    const head = acc.querySelector('.accordion-head');
                                    const closeIcon = head.querySelector('.close-icon');
                                    const openIcon = head.querySelector('.open-icon');

                                    if (body !== accordionBody) {
                                        body.classList.add('hidden');
                                        if (closeIcon && openIcon) {
                                            closeIcon.classList.remove('hidden');
                                            openIcon.classList.add('hidden');
                                        }
                                    }
                                });

                                accordionBody.classList.toggle('hidden');

                                if (closeIcon && openIcon) {
                                    if (accordionBody.classList.contains('hidden')) {
                                        closeIcon.classList.remove('hidden');
                                        openIcon.classList.add('hidden');
                                    } else {
                                        closeIcon.classList.add('hidden');
                                        openIcon.classList.remove('hidden');
                                    }
                                }
                            });
                        }
                    });
                }
            }
        });
    }
});
