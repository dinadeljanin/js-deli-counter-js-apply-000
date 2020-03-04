// issue ticket nums
// add cust num
// say "welcome, you're ticket num"

function takeANumber(line) { // line is an array
  let ticketNums = 1;
  line.push(ticketNums);
  return `Welcome, you are ticket number ${(line.length)+1} in line`;
}

// function takeANumber(katzDeliLine, customer) {
  
//   katzDeliLine.push(customer);
//   return `Welcome, ${customer}. You are number ${katzDeliLine.length} in line.`; 
// }

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(line) {
  let lunchRush = [];
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    for (let i = 0; i < line.length; i++) {
      lunchRush.push(`${(i + 1)}. ${line[i]}`);
    }  
  } 
 return `The line is currently: ${lunchRush.join(', ')}`;
}