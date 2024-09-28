let selectedIndustry = null; // Branża wybrana przez użytkownika
let selectedLevel = null; // Poziom szczegółowości wybrany przez użytkownika

// Obsługa przycisków branży
document.querySelectorAll('.industry-btn').forEach(button => {
    button.addEventListener('click', function() {
        selectedIndustry = this.getAttribute('data-industry');
        clearActiveButtons('industry-btn');
        this.classList.add('active');
    });
});

// Obsługa przycisków poziomu szczegółowości
document.querySelectorAll('.level-btn').forEach(button => {
    button.addEventListener('click', function() {
        selectedLevel = this.getAttribute('data-level');
        clearActiveButtons('level-btn');
        this.classList.add('active');
    });
});

// Funkcja czyszcząca aktywne przyciski
function clearActiveButtons(buttonClass) {
    document.querySelectorAll(`.${buttonClass}`).forEach(btn => btn.classList.remove('active'));
}

// Generowanie checklisty
document.getElementById('generate-checklist').addEventListener('click', generateChecklist);

function generateChecklist() {
    if (!selectedIndustry || !selectedLevel) {
        alert("Proszę wybrać branżę i poziom szczegółowości.");
        return;
    }

    let checklistItems;
    
    // Wybór danych na podstawie branży
    if (selectedIndustry === 'IT') {
        checklistItems = checklistData.IT[selectedLevel];
    } else if (selectedIndustry === 'Finanse') {
        checklistItems = checklistDataFinanse.Finanse[selectedLevel];
    }

    const checklistContainer = document.getElementById('checklist-container');
    checklistContainer.innerHTML = ''; // Wyczyść poprzednią checklistę

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

// Pobieranie checklisty jako PDF (funkcjonalność w przyszłości)
document.getElementById('download-checklist').addEventListener('click', function() {
    const checklistSection = document.getElementById('checklist-section');
    
    // Użycie html2pdf do wygenerowania PDF z checklisty
    const opt = {
        margin:       0.5,
        filename:     'checklista_opsec.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(checklistSection).save();
});
