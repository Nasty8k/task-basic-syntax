/*
regOnly - true если текст содержит символы кроме "IVXLCDM"  
regAmount - true если в тексте символы "IVXLCDM" в количестве от 4 подряд
RN - (Roman notation) - Римская нотация. Индекс массива как приоритет. У большего индекса - больший приоритет
*/
export function romanToInteger(str) {
    let result = 0;
    const regOnly = /([^IVXLCDM])/,
        regAmount = /(I{4,}|V{4,}|X{4,}|L{4,}|C{4,}|D{4,}|M{4,})/;
    // Проверка корректности ввода
    if (regOnly.test(str) || regAmount.test(str)) {
        console.log('Некорректный ввод');
        return -1;
    }
    const RN = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    result += RN[str[str.length - 1]];
    for (let i = str.length - 2; i >= 0; i--) {
        if (RN[str[i]] >= RN[str[i + 1]]) {
            result += RN[str[i]];
        } else {
            result -= RN[str[i]];
        }
    }
    return result;
}
