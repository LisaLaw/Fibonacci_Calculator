# 1. Installing and Downloading React
I first Googled "how to start with reactjs" and found myself on w3schools, a familiar webpage. I got a very basic understanding of what react actually is and that I needed an environment, namely Node.js
So I went ahead and downloaded NodeJs from the official webpage. Afterwards I downloaded npm.
I came across an error about missing unzip but was able to sort it out quickly via Google / StackOverflow.

#### Webpack required
I created an app with `npx create-react-app` , tried out some minor changes in index.html and index.js and got the error `Target container is not a DOM element -> webpack required`.
I tried to install webpack via npm and got notified that it was already up to date. In the end, I reloaded the server and it seemed to work.

#### Basic ReactJs Knowledge
I went back to w3schools and learned about classes, methods, class inheritance, arrow functions, this and variables under the ES6 section.
I further looked into RENDER, and JSX.

#### First tries
I created the basic html for the calculator and ran into a caching problem: My JS didn't update on saving the files but required a reload every time I wanted to check a change. I had ran into this problem before and included a dynamic script tag that added a different version of the JS file on each reload, but unfortunately the error persisted. I tried to Google and StackOverflow it, but after not finding quick fixes decided to leave this problem to a later date as I had limited time for this task.

I also ran into the following error: `Uncaught Syntax Error: Unexpected Token '<'` in index.js line 1. I found a blog post on this and tried to update npm (already up to date), and added `webpack-cli`, and tried to edit `publicPath` in webpack.config.js. I further deleted the node_modules folder (quickly realizing I actually needed it). I found another post on StackOverflow saying that as a beginner working with `create-react-app` you shouldn't need to be tinkering with the webpack at all.

#### Restart
So I decided to restart everything and this time I followed the official react documentation. This time, it worked.

# 2. Creating a form
Before going any further, I went through the instructions and created a hand-drawn visual of what I wanted to create. It was a simple one div-element but I made sure I understood all requirements and restrictions and included those into my drawing. This would help me stay on track later.

I decided to start with the form element and googled html forms, html input and "JS compute input value". I also looked at a couple of YouTube videos and studied the props concept. I further started working with a friend's [GitHub repo](https://github.com/Milda-Grabyte/Rick-and-Morty-database-Milda-Grabyte) (unrelated topic) to see how some of the concepts explained in the tutorials from Google and YouTube were realized in a real project.

I started to understand the different folders of the react app (src vs public vs node_modules) and, equally, the different files (App.js vs index.js.) I also started looking into Components.

My form was not showing in localhost to start with. I realized that instead of `<div>{ form }</div>` I need to include `<Form />` into App.js.

# 3. onClick, onSubmit etc.
I had some trouble understanding the concepts of assigning a value to the `results` div in the App, and how to manipulate said state. I started looking into form validation, onSubmit and controlled components.
This is also when I found `preventDefault()` and `innerHTML` (see testing / outlook).

I further looked into binding "this".

#### innerHTML doesn't stay visible
My output refused to stay visible but instead vanished after a couple of seconds. I tried to add `preventDefault()` which made the output vanish completely. However, I then realized that it had to go into the `<form>` tag rather than the `<button>` itself, where I put it in the first place.

# 4. The fibonacci calculation
I googled "fibonacci js" and realized I wasn't entirely sure what the calculation was meant to do. However after spending some time with it, I realized that the input was meant to look for a position in the Fibonacci sequence and return the number at that given position.
I decided to start a CodePen for this. I tried a couple of ways to compute the fib sequence:
```
function fibonacci(num) {
    var num1 = 0;
    var num2 = 1;
    var sum;
    var i = 0;
    for (i=0, i <num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
}
```

But this didn't make full sense to me - yet. I then wen ton to decouple handleClick from function fib to get a clearer code. This made more sense to me and also worked.

# 5. Back to form validation
I tried various ways to get around the form validation, the easiest being the inbuilt HTML validation with `type="number" required="required" step="1" min="0"`. These led to standard error messages but I preferred to include own error message as I knew how to style these.
So I included a manual validation function, turning to StackOverflow to get a conditional that checks for floating numbers (`n%1 !== 0`).

I started out with document.write() to display the error message but that led to a reload of the page and I wanted the error message to show on the same page. So I found `createElement` instead.
I had some trouble finding a way to add an id or class to the newly created element but in the end `element.id = 'element_id'` and `element.classList.add('error_class')` seemed to yield the best results.

I further struggled with appending the new element in the right place, and the only way it worked in the beginning was for it to appear after the App Component. I realized that this had to do with the DOM elements and finally managed via `childNodes`.

I then got the error message `cannot read property 'appendChild' of null` and managed to solve this by including a `defer` tag on my javascript tags.

# 6. The logic behind the validation
I also wasn't entirely clear on when which validation was supposed to happen. Various if statements were overlapping in my head. I created a handwritten flow chart including (non-)existent output and errors. This helped me get a solid conditional flow and I was further able to decouple the functions further, now including subfunctions such as `clearResult()`, `createErrorMessage()` and `removeErrorMessage()`. This led to cleaner code and a better understanding on my part and in turn, to more confidence.

I finally also added `preventDefault()` on `onInvalid`.

# 7. CSS
Somewhere during steps 3 and 4 I started to style the div as well. I loosely based my styling on [this login form](https://auth.coverwallet.com/login) and the general [CoverWallet](https://www.coverwallet.com/) webpage styling.

# 8. Unit testing
My code was starting to shape up so I decided to look into unit testing as well. I learned about jest and a typical test flow, before looking into Jest matchers.
I found this to be the most difficult concept of the whole process. I ran into some frustration because my code was working on the browser, but the test environments were giving me failures. After consulting with various friends who couldn't help out, I posted my question on StackOverflow and realized that the errors were coming from my use of `getElementById` and `innerHTML`.

Here are some of tests I tried which failed:
```
import computeFib from '../Fib_Calc';

describe("Fib Function", () => {

    test('Fib result is undefined on negative input', () => {
        const input = -5;
        const output = 'undefined';
        expect(computeFib(input)).toEqual(output);
    })

    test('Fib result is undefined on float input', () => {
        const input = 5.5;
        const output = 'undefined';
        expect(computeFib(input)).toEqual(output);
    })

    test('Fib result is n for n<2', () => {
        const input1 = 0;
        const input2 = 1;
        const output1 = 0;
        const output2 = 1;
        expect(computeFib(input1)).toEqual(output1);
        expect(computeFib(input2)).toEqual(output2);
    })

    test('Fib result is correct for n>2', () => {
        const input = 3;
        const fib1 = computeFib(2);
        const fib2 = computeFib(1);
        const output = fib1 + fib2;
        expect(computeFib(input)).toEqual(output);
    })
})
```

# 9. Outlook
Going further I need to look more into DOM manipulation and what that means for a react app.
I would also need to re-facture the app with the use of `state` (instead of `innerHTML`, `getElementById`).
Lastly, I would look into memory load for the fibonacci calculator I've created to see if there are more efficient ways to achieve the goal.