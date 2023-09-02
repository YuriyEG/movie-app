/* eslint-disable */

export default function transformDate(date) {
  let y = date.slice(0, 4);
  let m = date.slice(5, 7);
  let d = date.slice(8, 10);
  let mounth = '';

  switch (m) {
    case '01':
    mounth = 'January';
    break;
    case '02':
    mounth = 'February';
    break;
    case '03':
    mounth = 'March';
    break;
    case '04':
    mounth = 'April';
    break;
    case '05':
    mounth = 'May';
    break;
    case '06': 
    mounth = 'June';
    break;
    case '07':
    mounth = 'July';
    break;
    case '08':
    mounth = 'August';
    break;
    case '09':
    mounth = 'September';
    break;
    case '10':
    mounth = 'October';
    break;
    case '11':
    mounth = 'November';
    break;
    case '12':
    mounth = 'December';
    break;
    
    default:
    mounth = 'error';
  }
  return `${d} ${mounth}, ${y}`;
}
