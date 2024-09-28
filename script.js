let selectedIndustry = 'IT'; // Only IT is active
let selectedLevel = null;

document.querySelectorAll('.level-btn').forEach(button => {
    button.addEventListener('click', function() {
        selectedLevel = this.getAttribute('data-level');
        clearActiveButtons('level-btn');
        this.classList.add('active');
    });
});

function clearActiveButtons(buttonClass) {
    document.querySelectorAll(`.${buttonClass}`).forEach(btn => btn.classList.remove('active'));
}

document.getElementById('generate-checklist').addEventListener('click', generateChecklist);

function generateChecklist() {
    if (!selectedLevel) {
        alert("Proszę wybrać poziom szczegółowości.");
        return;
    }

    const checklistContainer = document.getElementById('checklist-container');
    checklistContainer.innerHTML = ''; // Wyczyść poprzednią checklistę

    const checklistItems = checklistData[selectedIndustry][selectedLevel];
    
    checklistItems.forEach(item => {
        const checklistItem = document.createElement('div');
        checklistItem.classList.add('checklist-item');

        const title = document.createElement('h3');
        title.innerText = item.title;
        checklistItem.appendChild(title);

        const description = document.createElement('p');
        description.innerHTML = `${item.description}\n\nWięcej: ${item.moreInfo}`;
        checklistItem.appendChild(description);

        title.addEventListener('click', () => {
            description.style.display = description.style.display === 'block' ? 'none' : 'block';
        });

        checklistContainer.appendChild(checklistItem);
    });

    document.getElementById('checklist-section').classList.remove('hidden');
}

// Funkcja do generowania PDF
document.getElementById('download-checklist').addEventListener('click', function() {
    const checklistSection = document.getElementById('checklist-section');
    
    // Użyj html2pdf do wygenerowania PDF z checklisty
    const opt = {
        margin:       0.5,
        filename:     'checklista_opsec.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(checklistSection).save();
});
