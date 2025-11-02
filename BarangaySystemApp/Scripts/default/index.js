window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

    // Settings collapse arrow animation (Bootstrap 5)
    const settingsCollapse = document.getElementById('settingsCollapse');
    const settingsToggle = document.querySelector('[href="#settingsCollapse"]');

    if (settingsCollapse && settingsToggle) {
        // Set initial state based on whether collapse has .show
        if (settingsCollapse.classList.contains('show')) {
            settingsToggle.classList.add('expanded');
        } else {
            settingsToggle.classList.remove('expanded');
        }

        // Listen for Bootstrap collapse events
        settingsCollapse.addEventListener('show.bs.collapse', () => {
            settingsToggle.classList.add('expanded');
        });
        settingsCollapse.addEventListener('hide.bs.collapse', () => {
            settingsToggle.classList.remove('expanded');
        });
    }
});