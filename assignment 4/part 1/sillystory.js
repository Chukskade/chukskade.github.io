/*
    Name: Kade Chukwuebuka
    File: Sillystory.js
    Date: 27th of february 2025
    A very brief description of the file: JavaScript for generating a random silly story based on user input.
*/

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const ukRadio = document.getElementById('uk');
const usRadio = document.getElementById('us');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

const storyText = 'It was 94 Fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertz:', zItem);

    if (customName.value !== '') {
        newStory = newStory.replace('Bob', customName.value);
    }

    if (ukRadio.checked) {
        const weightInStone = Math.round(300 * 0.0714286) + ' stone';
        const tempInCelsius = Math.round((94 - 32) * 5 / 9) + ' centigrade';
        newStory = newStory.replace('300 pounds', weightInStone);
        newStory = newStory.replace('94 Fahrenheit', tempInCelsius);
    } else if (usRadio.checked) {
        // Just ensure the story retains the original US values
        newStory = newStory.replace('300 pounds', '300 pounds');
        newStory = newStory.replace('94 Fahrenheit', '94 Fahrenheit');
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}