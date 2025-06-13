document.addEventListener('DOMContentLoaded', function() {
    const loaderOverlay = document.getElementById('page-loader-overlay');

    function showPageLoader() {
        if (loaderOverlay) {
            loaderOverlay.style.display = 'flex';
        }
    }

    function hidePageLoader() {
        if (loaderOverlay) {
            loaderOverlay.style.display = 'none';
        }
    }

    // Initially hide the loader. It will be shown by beforeunload or link clicks.
    hidePageLoader();

    // Show loader when navigating away using standard links
    document.querySelectorAll('a[href]').forEach(link => {
        link.addEventListener('click', function(event) {
            const href = this.getAttribute('href');
            const target = this.getAttribute('target');

            if (href && !href.startsWith('#') && href.indexOf('javascript:void(0)') === -1 && target !== '_blank') {
                if (!href.startsWith('mailto:') && !href.startsWith('tel:')) {
                    showPageLoader();
                }
            }
        });
    });

    // Hide loader when the new page's content is fully loaded.
    window.addEventListener('load', hidePageLoader);

    // Show loader just before the current page unloads.
    window.addEventListener('beforeunload', function() {
        showPageLoader();
    });

    // Optional: Handle back/forward button navigation if you were using History API
    // window.addEventListener('popstate', function() {
    //     showPageLoader(); 
    //     // You'd typically hide it after your content for the new state is loaded.
    // });
}); 