// grammar.js: Script for generating stories based on user input and predefined grammar
document.addEventListener('DOMContentLoaded', function() {
    var names = ["someone"]; // Default name, to be replaced by user input

    // Function to add a new name to the grammar
    function addName() {
        var name = document.getElementById('name-input').value.trim();
        if (name) {
            names[0] = name; // Replace the default or add a new name
            document.getElementById('name-input').value = '';
            alert("Name added: " + name);
        }
    }

    // Function to generate an epic tale based on the names and grammar
    function generateEpicTale() {
        // Define the grammar rules as a JSON string
        var grammarJSON = {
            "start": ["<hero> <action> <conclusion>"],
            "hero": ["A brave pony named <name>", "A courageous puppy named <name>"],
            "name": names, // Use the names array
            "action": ["embarked on a magical adventure to <place>", "joined forces with <friend> to <task>"],
            "place": ["the Enchanted Forest", "the Crystal Caves", "the Mystic Mountains"],
            "friend": ["a wise old owl", "a mystical unicorn", "a fierce dragon"],
            "task": ["defeat the shadowy menace", "uncover the hidden secrets", "save their homeland"],
            "conclusion": ["Along the way, they learned the value of <lesson>", "Their courage and honesty led them to <achievement>"],
            "lesson": ["friendship", "bravery", "honesty", "compassion"],
            "achievement": ["victory over darkness", "unearthing ancient wisdom", "forming unbreakable bonds"]
        };

        var grammar = RiTa.grammar(grammarJSON);
        var result = grammar.expand();
        return result;
    }
    // Event listeners for adding a name and generating a story
    document.getElementById('add-name').addEventListener('click', addName);
    document.getElementById('generate-story').addEventListener('click', function() {
        var storyContainer = document.getElementById('story-container');
        var story = generateEpicTale();
        storyContainer.innerHTML += story + '<br><br>';
        storyContainer.scrollTop = storyContainer.scrollHeight;
    });
});