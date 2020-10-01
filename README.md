# Moment.js Daily Scheduler


## Description


## Table of Contents

* [Overview](#overview)
* [Tools](#tools)
* [Credits](#credits)
* [License](#license)

## Overview
![main](https://user-images.githubusercontent.com/57735283/94873533-56593800-0404-11eb-8f33-494088c8fc20.gif)

<p>Note the time is updated with todays date, and time blocks are colored according to the current time.</p>
<p>The past is a gray color, the present is a red color, and the future is a green color.</p> 

### Save the days time block
![save](https://user-images.githubusercontent.com/57735283/94873659-a637ff00-0404-11eb-9dd4-0fb2361331b5.gif)

<p>A user can enter text into anytime slot and save it to local storage. The browser will load with existing entrys that are saved to local storage.</p>

## Tools
 ### JQuery $
  jQuery() — Can also be written as $() https://api.jquery.com/jQuery/ <br/>
  $(".") - Class selector https://api.jquery.com/class-selector/ <br/>
  $("<>") -Create element https://stackoverflow.com/questions/268490/jquery-document-createelement-equivalent <br/>
  .ready() - Ready handler https://api.jquery.com/ready/#ready-handler <br/>
  .on() - Attach an event handler function for one or more events to the selected elements https://api.jquery.com/on/#on-events-selector-data-handler <br/>
  .text() - Add text to element https://api.jquery.com/text/#text <br/>
  .attr(attributeName, value) - Set an attribute name and value https://api.jquery.com/attr/#attr-attributeName-value <br/>
  .append() - DOM manipulation append an element to the DOM https://api.jquery.com/append/#append-function <br/>
  .addClass() - Adds to the class attribute and dosent delete exisiting classes https://api.jquery.com/addClass/#addClass-className <br/>
  .find() - Searchs the descendants of the current selector https://api.jquery.com/find/#find-selector <br/>
  .get() - Selects the index of an array https://api.jquery.com/get/#get-index <br/>
 ### Moment.js
 moment() - Get the current date and time https://momentjs.com/docs/#/parsing/now/ <br/>
 .format() - Allows you to format the date and time how you want https://momentjs.com/docs/#/displaying/format/ <br/>
 .startOf() - Changes a moment to a specified start date and time https://momentjs.com/docs/#/manipulating/start-of/ <br/>
 .add() - Changes a moment by adding time https://momentjs.com/docs/#/manipulating/add/ <br/>
 .isBefore() - Check a moment is before a set time https://momentjs.com/docs/#/query/is-before/ <br/>
 .isBetween() - Check a moment is between two different times https://momentjs.com/docs/#/query/is-between/ <br/>
 ### JSON
 JSON.stringify() - Converts a JavaScript object into a JSON string https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify <br/>
 JSON.parse() - Converts a JSON string into a JavaScript object https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse <br/>
 ### Local storage - 
 localstorage.setItem() - Stores a key name and value in local storage https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem <br/>
 localstorage.getItem() - Retruns a keys value when given a key name or Null if not found https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem <br/>

## Credits
Jquery - https://jquery.com/ <br/>
Moment.JS - https://momentjs.com/ <br/>
Bootstrap - https://getbootstrap.com/ <br/>
Font Awesome - https://fontawesome.com/ <br/>
Google Fonts - https://fonts.google.com/ <br/>
Trilogy Education Services project setup <br/>

## License

### MIT License

Copyright (c) 2020 Ken Kopelson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Badges
<a href="https://img.shields.io/badge/HTML-16.0%25-red"><img alt="HTML usage" src="https://img.shields.io/badge/HTML-16.0%25-red"></a> <a href="https://img.shields.io/badge/CSS-23.5%25-purple"><img alt="CSS usage" src="https://img.shields.io/badge/CSS-23.5%25-purple"></a> <a href="https://img.shields.io/badge/JavaScript-60.5%25-yellow"><img alt="Javascript usage" src="https://img.shields.io/badge/JavaScript-60.5%25-yellow"></a> <a href="https://img.shields.io/badge/Framework-Bootstrap-blue"><img alt="Bootstrap framework" src="https://img.shields.io/badge/Framework-Bootstrap-blue"></a> <a href="https://img.shields.io/badge/Framework-JQuery-blue"><img alt="JQuery framework" src="https://img.shields.io/badge/Framework-JQuery-blue"></a> <a href="https://img.shields.io/badge/Library-MomentJS-green"><img alt="MomentJS library" src="https://img.shields.io/badge/Library-MomentJS-green"></a>
