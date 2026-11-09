const tabbuttons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-panel');

tabbuttons.forEach(button => {
    button.addEventListener('click', function(evt) {
        const tabName = evt.currentTarget.dataset.tab;

        tabContents.forEach(link => link.classList.remove('active'));

        tabbuttons.forEach(link => link.classList.remove('active'));

        document.getElementById(tabName).classList.add('active');
        evt.currentTarget.classList.add('active');
    });
});