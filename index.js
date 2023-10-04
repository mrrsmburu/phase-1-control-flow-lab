function scuberGreetingForFeet(){
  function suberGreetingForFeet(distanceInFeet) {
    if (distanceInFeet <=) {
      return "I'm sorry, you must enter a distance greater than zero.";
    } else if (distanceInFeet <= 1320) {
      return "You're going to walk " + distanceInFeet + " feet? That's not too far. Have a nice walk!";
    } else if (distanceInFeet <= 5280) {
      return "You want to go " + distanceInFeet + " feet? That's about a mile. Let me call you an Uber.";
    } else {
      return "You're going to travel " + distanceInFeet + " feet? That's quite a distance! Let me call you a helicopter.";
    }
  }
  
}

function ternaryCheckCity(){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}