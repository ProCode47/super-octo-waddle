function returnConsole(word) {
    console.log(word);
}

returnConsole('Abracadabra');

Array.prototype.listLanguage = function(hypeWord){
    for(let i = 0; i < this.length; i++) {
        if (toLowerCase(this[i]) === 'javascript') {
            console.log('Hello', this[i], hypeWord);    
        }else {
            console.log('Hello', this[i])
        }
    }
}

const languageArray = ['JavaScript', 'Python', 'Java', 'C', 'C++', 'Ruby', 'C#']

languageArray.listLanguage('WORD!!!!!!');
