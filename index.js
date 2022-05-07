function scuberGreetingForFeet(distance){
  if (distance <= 400 ) {
    return 'This one is on me!'
  } 
  // else if(distance > 400 || distance < 2000){
  //  return 'That will be twenty bucks.'
  // }
  else if(distance > 2000){
    if(distance >2500){
      return 'No can do.'
    }
    return  "I will gladly take your thirty bucks."
  } 
 
}

// variable = (condition) ? expressionTrue :  expressionFalse;
function ternaryCheckCity(city){
  // Write your code here!
  let check = city == 'NYC' ? 'Ok, sounds good.' : "No go."
  return check;
};

function switchOnCharmFromTip(tip){
	// Write your code here!
	let tipGiven;
	switch(tip) {
		case 'generous':
		tipGiven = 'Thank you so much.';
		break;
		case 'not as generous':
		tipGiven = 'Thank you.';
		break;
		case 'thanks for everything':
		tipGiven = 'Bye.';
		break;
	}
	return tipGiven;
}
