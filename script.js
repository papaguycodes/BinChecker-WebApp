function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active-section');
    });
    document.getElementById(sectionId).classList.add('active-section');

    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`nav a[href="#${sectionId}"]`).classList.add('active');
}

function checkBin() {
    const bin = document.getElementById('binInput').value;
    fetch(`https://lookup.binlist.net/${bin}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('binResult').innerHTML = `
                <p><strong>Brand:</strong> ${data.brand}</p>
                <p><strong>Bank:</strong> ${data.bank.name}</p>
                <p><strong>Country:</strong> ${data.country.name}</p>
            `;
        })
        .catch(error => {
            document.getElementById('binResult').innerHTML = `<p>Error: ${error.message}</p>`;
        });
}

function toggleTheme() {
    const body = document.body;
    body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
}

function filterHistory() {
    const filter = document.getElementById('historyFilter').value.toLowerCase();
    document.querySelectorAll('#historyList .history-item').forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(filter) ? '' : 'none';
    });
}

function sortHistory() {
    const list = document.getElementById('historyList');
    const items = Array.from(list.children);
    items.sort((a, b) => a.textContent.localeCompare(b.textContent));
    items.forEach(item => list.appendChild(item));
}

function exportHistory() {
    const historyItems = document.querySelectorAll('#historyList .history-item');
    let csvContent = "data:text/csv;charset=utf-8,";
    historyItems.forEach(item => {
        const text = item.textContent;
        csvContent += text + "\r\n";
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "history.csv");
    document.body.appendChild(link);
    link.click();
}
