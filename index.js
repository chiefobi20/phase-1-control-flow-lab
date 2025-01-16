function scuberGreetingForFeet(freeSample){
  if(freeSample <= 400){
      return 'This one is on me!'
  } else if(freeSample > 400 && freeSample < 2000){
      return 'That will be twenty bucks.'
  } else if(freeSample > 2000 && freeSample < 2500){
      return 'I will gladly take your thirty bucks.'
  } else {
      return 'No can do.'
  }
}

function ternaryCheckCity(destinationCity){
  return destinationCity === 'NYC'?'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tips){
  switch(tips){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}