// code your solution here
function saturdayFun(activity ="roller-skate")
{return `This Saturday, I want to ${activity}!`}

const mondayWork = function(activity ="go to the office")
{return `This Monday, I will ${activity}.`}

function wrapAdjective(string="*")
{function innerFunction(parameter="special")
{return `You are ${string}${parameter}${string}!`}
return innerFunction
}

  /*  function outer(greeting, msg = "It's a fine day to learn") {
        const innerFunction = function (name, lang = "Python") {
          return `${greeting}, ${name}! ${msg} ${lang}`;
        };
        return innerFunction;
      }
*/