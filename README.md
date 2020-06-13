# JS-Password-Generator
So basically the idea for this project was to get a page for generating a new password working using javascript
The rules were to ask the user how many characters they wanted as well as what types of characters they wanted in there pass word
I started by using a querySelector to tap into an element on the html page and since that elemnt was a button, I needed to add an eventListener for clicking it.
Once that was done I got started on a set up for some global variables that would later have their values determined by the user
I also set up different arrays with lower case letters, upper case, letters, numbers, and symbols. 
These arrays would later serve as pools of which we could pull some data from.
After the initial set up, I has to set up some prompts for the user to determine what would go into their password.
The prompts/confirms being asked were accompanied by 'while loops' that determined the user could not continue of certain specifications weren't met. 
Once the user met the specified guidlines for their password, there responses became the values for my pre set up global variables.
Next we needed to see if the variables were true or false, and if they were true we would apply them to an empty array that I created using .concat 
This would create the content that would serve this entirely new array. 
Then a 'for loop' was used to dictate the length of a new string that would become their password based on the user input that referenced their prior decision for length. 
Now the password will be as long as they choose
Inside the for loop we needed to add Math.floor and Math.random to randomly select characters from that new array created by the users input and apply them into the slots inside the string.
Lastly we returned that string and applied it to the html 

Hopefully my description made sense :) 
