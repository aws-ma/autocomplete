# Autocomplete Component

This Autocomplete component is a normal text input enhanced by a panel of suggested options.

This Component contains an async function to filter the options.

## How to use

1- copy the autocomplete folder (it contains four files) from src / components to your project.

2 - import Autocomplete.jsx as a local component from autocomplete folder.

## How it works

This component takes some attributes:

1- arrayItems: it's an array of options.

example:arrayItems= [ { id:1, title:'one' }, { id:2, title:'two' }, { id:3, title:'three' } ]

2- itemLocation: it's a string describes the location of item that you need to search in it. if items of arrayItems are strings, you can ignore this attribute.

example:
if you need to search in each title of last arrayItems, this attribute will be itemLocation='item.title'

3- onClickResult: it's a fanction that is executed by clicking on one of the options.it takes two parameters (e,item).e: it's the click event , item: it's the item of arrayItems.

## Example ( Meals autocomplete )

This project uses the Autocomplete component, you can search for any meal then click on one of the resault to see a picture of this meal.

## Run the example

1- clone the project to your computer using git `git clone https://github.com/aws-ma/autocomplete`

2-To install dependencies,open the terminal then write `npm install`.

3- After that write in terminal `npm run dev`.

or

you can see this project via :

https://aws-meals-autocomplete.netlify.app/

## created By

aws maarouf
