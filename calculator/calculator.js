function* tokenize(s) {
  s = s.replace(/-/g, "+-");
  if (s.indexOf("+") == 0) {
    s = s.substring(1, s.length);
  }
  let token = "";
  for (const character of s.slice(0, -1)) {
    if ("*/+".includes(character) && token !== "") {
      yield parseFloat(token);
      yield character;
      token = "";
    } else {
      token += character;
    }
  }
  yield parseFloat(token + s.at(-1));
}

function calculateOperators(tokens, operators) {
  const r = [];
  let operator;
  for (const token of tokens) {
    if (token in operators) {
      operator = operators[token];
    } else if (operator) {
      r[r.length - 1] = operator(r[r.length - 1], token);
      operator = null;
    } else {
      r.push(token);
    }
  }
  return r;
}

function calculate(tokens) {
  // --- Perform a calculation expressed as a sequence of operators and numbers
  const precedence = [
    { "*": (a, b) => a * b, "/": (a, b) => a / b },
    { "+": (a, b) => a + b },
  ];

  tokens = precedence.reduce(calculateOperators, tokens);
  if (tokens.length === 1) {
    return tokens[0];
  } else {
    throw new Error(`Unable to resolve calculation ${tokens}`);
  }
}

function recursive_calculate(uservalue) {
  if (uservalue.includes("(")) {
    let sub_equation = uservalue.substring(
      uservalue.indexOf("(") + 1,
      uservalue.lastIndexOf(")")
    );
    let answer = calculate(tokenize(sub_equation));
    let new_equation = uservalue.replace(
      uservalue.substring(
        uservalue.indexOf("("),
        uservalue.lastIndexOf(")") + 1
      ),
      answer.toFixed(1)
    );
    return recursive_calculate(new_equation);
  } else {
    return calculate(tokenize(uservalue));
  }
}
const calculateButton = document.getElementById("submit");
const userInput = document.getElementById("inputData");
const result = document.getElementById("result");
calculateButton.addEventListener("click", function () {
  result.innerText = "The answer is " + recursive_calculate(userInput.value);
});
