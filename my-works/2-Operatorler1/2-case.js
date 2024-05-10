let monthName = 'aralik'; 
let monthNumber;

switch (monthName) { 
    case 'ocak':
        monthNumber = 1;
        break;
    case 'subat':
        monthNumber = 2;
        break;
    case 'mart':
        monthNumber = 3;
        break;
    case 'nisan':
        monthNumber = 4;
        break;
    case 'mayıs':
        monthNumber = 5;
        break;
    case 'haziran':
        monthNumber = 6;
        break;
    case 'temmuz':
        monthNumber = 7;
        break;
    case 'agustos':
        monthNumber = 8;
        break;
    case 'eylul':
        monthNumber = 9;
        break;
    case 'ekim':
        monthNumber = 10;
        break;
    case 'kasim':
        monthNumber = 11;
        break;
    case 'aralik':
        monthNumber = 12;
        break;
    default:
        monthNumber = 'Hatalı ay ismi';
}

console.log(monthNumber);
