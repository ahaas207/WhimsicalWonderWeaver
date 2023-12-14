// grammar.js: Script for generating complex and detailed stories
document.addEventListener('DOMContentLoaded', function() {
    var names = []; // Array to hold user-added names
    var places = ["the Enchanted Forest of whispers from the past", "the Crystal Caves sparkling with mystery", "the Mystic Mountains shrouded in legend"];
    var friends = ["a wise old owl with ancient knowledge", "a mystical unicorn with healing powers", "a fierce dragon guarding timeless treasures"];
    var tasks = ["defeat the shadowy menace lurking beneath", "uncover the hidden secrets lost in time", "save their homeland from the brink of chaos"];
    var challenges = ["overcoming a treacherous storm of unrelenting fury", "solving an ancient riddle wrapped in mystery", "escaping a maze of illusions with deceptive paths", "navigating through treacherous landscapes riddled with danger"];
    var twists = ["finding an unexpected ally in a forgotten foe", "discovering a hidden power within themselves", "realizing a misunderstood truth that changes everything", "unearthing a long-lost artifact of unimaginable power"];
    var resolutions = ["restoring peace and harmony to the land", "revealing the wisdom of the ancients that reshapes history", "forging a bond of unbreakable friendship that transcends time"];
    var emotions = ["wit and wonder", "insight and determination", "hope and courage", "bravery and resilience"];

    function getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function updateAddedElements() {
        document.getElementById('added-elements').textContent = 'Possible Names (randomly selected): ' + names.join(', ') + ' | Possible Places (randomly selected): ' + places.join(', ');
        // Update for other elements similarly
    }

    function addElement() {
        var elementValue = document.getElementById('element-input').value.trim();
        var elementType = document.getElementById('element-type').value;
        
        if (elementValue) {
            if (elementType === 'name') {
                names.push(elementValue);
            } else if (elementType === 'place') {
                places.push(elementValue);
            }
            // Handle other element types similarly

            document.getElementById('element-input').value = '';
            alert(`New ${elementType} added: ${elementValue}`);
            updateAddedElements();
        }
    }

    function generateEpicTale() {
        var name = getRandomElement(names.length > 0 ? names : ["a nameless hero"]);
        var place = getRandomElement(places);
        var friend = getRandomElement(friends);
        var task = getRandomElement(tasks);
        var challenge = getRandomElement(challenges);
        var twist = getRandomElement(twists);
        var resolution = getRandomElement(resolutions);
        var emotion = getRandomElement(emotions);

        var paragraph1 = `In a land far away, ${name}, known for their ${emotion}, 
                            embarked on a magical adventure to ${place}. Joined by ${friend}, 
                            they set out to ${task}. Their journey was fraught with challenges, including ${challenge}.`;
        var paragraph2 = `As the tale unfolded, ${twist} altered their path. Amidst trials and tribulations,
                             ${name} found strength in unexpected places. Finally, their journey culminated 
                             in ${resolution}, leaving a legacy that echoed through the ages.`;

        return paragraph1 + "\n\n" + paragraph2;
    }

    // Event listeners
    document.getElementById('add-element').addEventListener('click', addElement);
    document.getElementById('generate-story').addEventListener('click', function() {
        var story = generateEpicTale();
        var storyContainer = document.getElementById('story-container');
        storyContainer.innerHTML = ''; 
        var storyParagraph = document.createElement("p");
        storyParagraph.innerHTML = story.replace(/\n\n/g, '<br><br>');
        storyContainer.appendChild(storyParagraph);
        storyContainer.scrollTop = storyContainer.scrollHeight;
    });
});
