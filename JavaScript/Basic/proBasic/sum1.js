

/* 1. **Sum of Two Numbers**   
    **Task:** Write a function that takes two numbers and returns their sum.    
    **Input Example:** 5, 3 
    **Expected Output:** 8
    **Details:** The function should simply add the two provided numbers and return the result.
       
function sum(){
    let a = parseInt( prompt("Enter  First num"));
    let b = parseInt(prompt("Enter  First num"));
    let c = a+b;
  //  return alert(c);
    return document.writeln(c);
   }

  sum();
*/
//   ----------------------------------------------------------------------------------

/*2. **Even or Odd Checker**
    **Task:** Create a function that checks if a given number is even or odd.
    **Input Example:** 4
    **Expected Output:** "Even"
    **Details:** Use the modulus operator to determine if the number is divisible by 2. Return "Odd" if not.

function Evenodd(){
    let a = parseInt( prompt("Enter  a num"));
    
    if(a%2==0){
        alert(a+" Is Even num");
        //document.writeln(a+" Is Even num")
    }
    else alert(a+" Is Odd num");
   // document.writeln(b+" Is Odd num")
     
}
Evenodd();
*/

//-------------------------------------------------------------------------------------

/*3. **Largest of Three Numbers**    
    **Task:** Write a function that accepts three numbers and returns the largest one.    
    **Input Example:** 4, 9, 7    
    **Expected Output:** 9

function lOFthree(){
      let a = parseInt( prompt("Enter  First num"));
     let b = parseInt(prompt("Enter  sec num"));
     let c = parseInt(prompt("Enter  third num"));
     
          if (a>b && a>c){
             alert(a+" Is Largest num");
          }
          else if (b>c){
            alert(b+" Is Largest num");
          }
          else{
            alert(c+" Is Largest num");
          }

}
lOFthree();
*/
//-----------------------------------------------------------------------------------------------------------------------------------

/*4. **Simple Calculator**    
    **Task:** Develop a function that accepts two numbers and an operator (`+`, `-`, `*`, `/`), then returns the result.    
    **Input Example:** 8, 2, "/"   
    **Expected Output:** 4
    
  function Calculator(){
  let a =  parseInt(prompt("Enter  First num"));
    let b =  parseInt(prompt("Enter  Second num"));
    let o =  prompt("Enter  Operator");
  
    switch(o){
        case "+": alert(a+b);
        break;

        case "-": alert(a-b);
        break;

        case "*": alert(a*b);
        break;

        case "/": alert(a/b);
        break;

        default : alert("Invalid Operator");

    }

  }
 
  Calculator();
*/
//   ----------------------------------------------------------------------------------------------------------------------------------


/*  5. **Print Numbers Using a Loop**
    **Task:** Use a loop to print numbers from 1 to 10.
    **Input Example:** No direct input (the loop range is defined in the code)
    **Expected Output:** 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

function iterator(){
    for(i=1;i<=10;i++){
        document.writeln(i);
    }
}

iterator(); */
//------------------------------------------------------------------------------------------------------------------------------------


/*
6. **Multiplication Table Generator**
    
    **Task:** Write a function that takes a number and prints its multiplication table from 1 to 10.
    
    **Input Example:** 5
    
    **Expected Output:**
    
    ```
    5 x 1 = 5
    5 x 2 = 10
    ...
    5 x 10 = 50
    
    ```


function table(){
    let a = parseInt(prompt("Enter num"));

    for( i = 1 ; i <= 10; i++){
        document.writeln(a*i);
    }
}
table();
*/

//------------------------------------------------------------------------------------------------------------------------------------

/*
7. **Celsius to Fahrenheit Converter**
    **Task:** Create a function to convert Celsius to Fahrenheit.
    **Input Example:** 0
    **Expected Output:** 32
    **Details:** Use the formula: Fahrenheit = (Celsius * 9/5) + 32.


function temperature(){
    let Celsius = parseInt(prompt("Enter Celsius"));
    let Fahrenheit = (Celsius * 9/5)+32;
    
  return  alert(Fahrenheit);
}

temperature();
*/
//---------------------------------------------------------------------------------------------------------------------------------------
/* 
8. **Find the Remainder**
    **Task:** Write a function that returns the remainder when one number is divided by another. 
    **Input Example:** 10, 3 
    **Expected Output:** 1



function Remainder(a,b){
    

    if(a>b && a/b){
        document.writeln(a%b);
    }
    else(
        document.writeln("NOT DIVIDE")
    )
}
Remainder(15,4);
*/

//----------------------------------------------------------------------------------------------------------------------------------
// 9. **Compare Two Numbers**
//     **Task:** Write a function that compares two numbers and prints which one is greater or if they are equal. 
//     **Input Example:** 7, 7
//     **Expected Output:** "Both numbers are equal."

function Compare(a,b){
    if(a>b){
        alert(a+" Is Greater");
    }
    else if(a<b){
        alert(b+" Is Greater");

    }
    else {
        alert("Both "+a+" & "+b+" Are Same");
    }
}
Compare(2,8);