'use strict'
// Create a function that will transform a U.S style date format into a format of a different language/region. If that date is a holiday in the target locale (language & region), it should be mentioned. Preferably, use a different language from that of the example.
// 	Example:

// 	English-US: 09/16/2014 → Spanish-MX: 16/09/2014 (Dia de la independencia) 
// 	Spanish-MX: 1/4/2014 → English-US: 4/1/2014 (April fools day)
let formats = {
    US:{
        format:'MM/DD/YYYY',
        pattern:/^(0[1-9]|1[1,2])\/(0[1-9]|[1,2][0-9]|3[0,1])\/(\d{4})$/,
        source:'https://www.timeanddate.com/holidays/us/{year}?hol=25',
        'DD/MM/YYYY':'$2/$1/$3',
        'MM/DD/YYYY':'$1/$2/$3',
        // holidays
        '01/01/{year}': "New Year's Day",
        '01/16/{year}': "Martin Luther King Jr. Day",
        '02/20/{year}': "Presidents' Day",
        '05/29/{year}': "Memorial Day",
        '06/19/{year}': "Juneteenth",
        '07/04/{year}': "Independence Day",
        '09/04/{year}': "Labor Day",
        '10/09/{year}': "Columbus Day",
        '11/11/{year}': "Veterans Day",
        '11/23/{year}': "Thanksgiving Day",
        '12/25/{year}': "Chrismas Day",
        
    },
    MX:{
        format:'DD/MM/YYYY',
        pattern:/^(0[1-9]|[1,2][0-9]|3[0,1])\/(0[1-9]|1[1,2])\/(\d{4})$/,
        source:'https://www.timeanddate.com/holidays/mexico/{year}?hol=25',
        'DD/MM/YYYY':'$1/$2/$3',
        'MM/DD/YYYY':'$2/$1/$3',
        // holidays
        '01/01/{year}': 'Año nuevo',
        '05/02/{year}': 'Día de la constitución',
        '21/03/{year}': 'Natalicio de Benito Juárez',
        '01/05/{year}': 'Día del trabajo',
        '16/09/{year}': 'Día de la independencia',
        '20/10/{year}': 'Día de la revolución Mexicana',
        '25/12/{year}': 'Navidad',
    },
    UK:{
        format:'DD/MM/YYYY',
        pattern:/^(0[1-9]|[1,2][0-9]|3[0,1])\/(0[1-9]|1[1,2])\/(\d{4})$/,
        'DD/MM/YYYY':'$1/$2/$3',
        'MM/DD/YYYY':'$2/$1/$3',
        source:'https://www.timeanddate.com/holidays/uk/{year}?hol=25',
        // holidays
        '01/01/{year}': "New Year's Day",
        '07/04/{year}': 'Good Friday',
        '10/04/{year}': 'Easter Monday',
        '01/05/{year}': 'Early May bank holiday',
        '08/05/{year}': 'Coronation of King Charles III',
        '29/05/{year}': 'Spring bank holiday',
        '28/08/{year}': 'Summer bank holiday',
        '25/12/{year}': 'Chrismas day',
        '25/12/{year}': 'Boxing day',
    }
}

function dateformat(from, to, date){
    if (formats[from] && formats[to]){
        if(formats[from].pattern.test(date)){
            // date to format of new language
            let newDate = date.replace(formats[from].pattern,formats[from][formats[to].format]);
            if(formats[to][newDate.replace(/\d{4}/,"{year}")]){
              newDate = newDate + " " + formats[to][newDate.replace(/\d{4}/,"{year}")]
            }
            return newDate;
        }
        else{
            throw new Error(`Invalid date format ${date} expected ${formats[from].format}`);
        }
    }
    else{
        if (!formats[from]) throw new Error(`Invalid format of date ${from}`);
        if (!formats[to]) throw new Error(`Invalid format of date ${to}`);
    }
}

dateformat('UK','US','29/05/2025')