// Default sleep hours for each day of the week
const getSleepHours = day => {
    switch (day) {
        case 'Monday':
            day = 8;
            break;
        case 'Tuesday':
            day = 7;
            break;
        case 'Wednesday':
            day = 7;
            break;
        case 'Thursday':
            day = 8;
            break;
        case 'Friday':
            day = 8;
            break;
        case 'Saturday':
            day = 9;
            break;
        case 'Sunday':
            day = 9;
            break;
        default: 
            return 'Invalid entry';
    }
    return day;
}

// Total sleep hours for the week
const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

// Total ideal sleep hours for the week
const getIdealSleepHours = idealHours => idealHours * 7;

// Calculate sleep debt for the week
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    // Set your ideal daily sleep hours
    const idealSleepHours = getIdealSleepHours(8);
    const hourDiff = Math.abs(actualSleepHours - idealSleepHours);
    const unitLabel = hourDiff === 1 ? 'hour' : 'hours';
    if (actualSleepHours === idealSleepHours) {
        console.log(`You got ${actualSleepHours} hours of sleep — just right!`);
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`You got ${hourDiff} ${unitLabel} more sleep than needed — that’s more than necessary.`);
    } else if (actualSleepHours < idealSleepHours) {
        console.log(`You got ${hourDiff} ${unitLabel} less sleep than needed — try to get more rest.`);
    } else {
        console.log('Please input a number');
    }
}

calculateSleepDebt();
