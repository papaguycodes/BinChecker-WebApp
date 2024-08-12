const binViewModel = {
    binData: ko.observable(''),
    history: ko.observableArray([]),
    theme: ko.observable('light'),

    checkBin: function() {
        const bin = this.bin();
        fetch(`https://lookup.binlist.net/${bin}`)
            .then(response => response.json())
            .then(data => {
                this.history.push({
                    bin: bin,
                    brand: data.brand,
                    bank: data.bank.name,
                    country: data.country.name,
                    date: new Date().toLocaleString()
                });
            })
            .catch(error => {
                alert("Error: " + error.message);
            });
    },

    toggleTheme: function() {
        this.theme(this.theme() === 'dark' ? 'light' : 'dark');
        document.body.dataset.theme = this.theme();
    },

    clearHistory: function() {
        this.history.removeAll();
    },

    filterHistory: function(filterText) {
        return ko.utils.arrayFilter(this.history(), function(item) {
            return item.bin.includes(filterText) || item.brand.toLowerCase().includes(filterText.toLowerCase());
        });
    },

    exportHistory: function() {
        let csvContent = "data:text/csv;charset=utf-8,BIN,Brand,Bank,Country,Date\n";
        this.history().forEach(item => {
            csvContent += `${item.bin},${item.brand},${item.bank},${item.country},${item.date}\n`;
        });
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "history.csv");
        document.body.appendChild(link);
        link.click();
    }
};

ko.applyBindings(binViewModel);

/* 💡✌🏾 In the End, He made them Open-Source 💜❤️ */
