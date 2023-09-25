// Variable Declarations
var customName = document.getElementById("customname");
var randomize = document.querySelector(".randomize");
var story = document.querySelector(".story");

// Arrays for placeholders
var insertX = ["Donald Trump", "Jackie Chan", "Santa Claus"];
var insertY = ["Area 51", "Death Valley", "Aruba"];
var insertZ = ["spontaneously combusted", "rapidly sublimated", "evaporated instantly"];

// Function to return a random value from an array
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to generate and display the story
function result() {
    // Create a new variable called newStory and set it to the value of storyText
    var storyText = "It was 94 Fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
    var newStory = storyText;

    // Use randomValueFromArray() to generate values for xItem, yItem, and zItem
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    // Replace placeholders in newStory with values from xItem, yItem, and zItem
    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);

    // If a custom name is provided, replace 'Bob' in the story
    var name = customName.value;
    if (name !== "") {
        newStory = newStory.replace(/Bob/g, name);
    }

    // Update the story paragraph
    story.textContent = newStory;
    story.style.visibility = "visible";
}

// Event Listener for the "Generate random story" button
randomize.addEventListener("click", result);
