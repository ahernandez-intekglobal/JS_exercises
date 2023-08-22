'use strict'
// Create a function that will transform a U.S style date format into a format of a different language/region. If that date is a holiday in the target locale (language & region), it should be mentioned. Preferably, use a different language from that of the example.
// 	Example:

// 	English-US: 09/16/2014 → Spanish-MX: 16/09/2014 (Dia de la independencia) 
// 	Spanish-MX: 1/4/2014 → English-US: 4/1/2014 (April fools day)
let formats = {
    US:{
        format:'MM/DD/YYYY',
        pattern:/^(0[1-9]|1[1,2])\/(0[1-9]|[1,2][0-9]|3[0,1])\/(2023|2024)$/,
        source:'https://www.timeanddate.com/holidays/us/2023?hol=25',
        'DD/MM/YYYY':'$2/$1/$3',
        'MM/DD/YYYY':'$1/$2/$3',
        // 2023
        '01/01/2023': "New Year's Day",
        '01/16/2023': "Martin Luther King Jr. Day",
        '02/20/2023': "Presidents' Day",
        '05/29/2023': "Memorial Day",
        '06/19/2023': "Juneteenth",
        '07/04/2023': "Independence Day",
        '09/04/2023': "Labor Day",
        '10/09/2023': "Columbus Day",
        '11/11/2023': "Veterans Day",
        '11/23/2023': "Thanksgiving Day",
        '12/25/2023': "Chrismas Day",
        // 2024
        '01/01/2024': "New Year's Day",
        '01/15/2024': "Martin Luther King Jr. Day",
        '02/19/2024': "Presidents' Day",
        '05/27/2024': "Memorial Day",
        '06/19/2024': "Juneteenth",
        '07/04/2024': "Independence Day",
        '09/02/2024': "Labor Day",
        '10/14/2024': "Columbus Day",
        '11/11/2024': "Veterans Day",
        '11/28/2024': "Thanksgiving Day",
        '12/25/2024': "Chrismas Day",
        
    },
    MX:{
        format:'DD/MM/YYYY',
        pattern:/^(0[1-9]|[1,2][0-9]|3[0,1])\/(0[1-9]|1[1,2])\/(2023|2024)$/,
        source:'https://www.timeanddate.com/holidays/mexico/2023?hol=25',
        'DD/MM/YYYY':'$1/$2/$3',
        'MM/DD/YYYY':'$2/$1/$3',
        // 2023
        '01/01/2023': 'Año nuevo',
        '05/02/2023': 'Día de la constitución',
        '21/03/2023': 'Natalicio de Benito Juárez',
        '01/05/2023': 'Día del trabajo',
        '16/09/2023': 'Día de la independencia',
        '20/10/2023': 'Día de la revolución Mexicana',
        '25/12/2023': 'Navidad',
        // 2024
        '01/01/2024': 'Año nuevo',
        '05/02/2024': 'Día de la constitución',
        '21/03/2024': 'Natalicio de Benito Juárez',
        '01/05/2024': 'Día del trabajo',
        '16/09/2024': 'Día de la independencia',
        '20/10/2024': 'Día de la revolución Mexicana',
        '25/12/2024': 'Navidad',
    },
    UK:{
        format:'DD/MM/YYYY',
        pattern:/^(0[1-9]|[1,2][0-9]|3[0,1])\/(0[1-9]|1[1,2])\/(2023|2024)$/,
        'DD/MM/YYYY':'$1/$2/$3',
        'MM/DD/YYYY':'$2/$1/$3',
        source:'https://www.timeanddate.com/holidays/uk/2023?hol=25',
        // 2023
        '01/01/2023': "New Year's Day",
        '07/04/2023': 'Good Friday',
        '10/04/2023': 'Easter Monday',
        '01/05/2023': 'Early May bank holiday',
        '08/05/2023': 'Coronation of King Charles III',
        '29/05/2023': 'Spring bank holiday',
        '28/08/2023': 'Summer bank holiday',
        '25/12/2023': 'Chrismas day',
        '25/12/2023': 'Boxing day',
        // 2024
        '01/01/2024': "New Year's Day",
        '29/03/2024': 'Good Friday',
        '01/04/2024': 'Easter Monday',
        '06/05/2024': 'Early May bank holiday',
        '27/05/2024': 'Spring bank holiday',
        '26/08/2024': 'Summer bank holiday',
        '25/12/2024': 'Chrismas day',
        '25/12/2024': 'Boxing day',
    }
}

function dateformat(from, to, date){
    if (formats[from] && formats[to]){
        if(formats[from].pattern.test(date)){
            // date to format of new language
            let newDate = date.replace(formats[from].pattern,formats[from][formats[to].format]);
            if(formats[to][newDate]){
              newDate = newDate + " " + formats[to][newDate]
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

dateformat('UK','US','29/05/2023')