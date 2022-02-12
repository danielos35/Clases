const day = 'sonday'; 

switch  (day) {
    case 'Monday':
    case 'monday':
    console.log('Study');
        break;
    case 'Tuesday':
    case 'tuesday':
        console.log('Study');
            break;
    case 'Wednsday':
    case 'wednsday':
        console.log('Study');
            break;
    case 'Thursday':
    case 'thursday':
        console.log('Study');
            break;
    case 'Friday':
    case 'friday':
        console.log('work');
        break; 
    case 'Saturday':
    case 'saturday':
        console.log('sleep');
        break; 
    case 'Sunday': 
    case 'sunday':
        console.log('Sleep a lot of');
        break; 

    default:
        console.log('Error');
        break;
}