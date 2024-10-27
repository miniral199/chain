document.getElementById('cases-btn').addEventListener('click', function() {
    document.querySelector('.case-images').style.display = 'flex';
    document.getElementById('text').classList.add('hidden');
    selectButton(this);
});

document.getElementById('resume-btn').addEventListener('click', function() {
    document.querySelector('.case-images').style.display = 'none';
    document.getElementById('text').classList.remove('hidden');
    selectButton(this);
});

document.getElementById('contacts-btn').addEventListener('click', function() {
    document.querySelector('.case-images').style.display = 'none';
    document.getElementById('text').classList.add('hidden');
    selectButton(this);
});

function selectButton(selectedButton) {
    document.querySelectorAll('.buttons button').forEach(button => {
        button.classList.remove('selected');
    });
    selectedButton.classList.add('selected');
}
