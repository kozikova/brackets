module.exports = function check(str, bracketsConfig) {
  let remainingStack = str.split('').reduce((stack, current, index) => {
	  const isOpening = bracketsConfig.filter((conf) => { return conf[0] == current; });
	  const isClosing = bracketsConfig.filter((conf) => { return conf[1] == current; });
	 
	  if (index == 0) {
		  stack.push(current);
	  } else {	  
		  if ((isClosing[0] && isClosing[0][0] != isClosing[0][1]) || (isOpening[0] && isOpening[0][0] != isOpening[0][1])) {
		  if (isOpening.length > 0 || stack.length == 0) {
			  stack.push(current);
		  } else if (isClosing.length > 0 && stack[stack.length - 1] == isClosing[0][0]) {
			  stack.pop();
		  }
		} else if (stack[stack.length - 1] != isClosing[0][0]) {
			 stack.push(current);
		} else {
			stack.pop();
		}
	  }  
	  
	  
	  return stack;
  }, []);
  
  return remainingStack.length == 0 ? remainingStack.length == 0 : remainingStack.length == 0;
}
