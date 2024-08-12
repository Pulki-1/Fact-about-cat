const catFacts = [
    "A group of cats is called a clowder.",
    "Cats have five toes on their front paws, but only four on the back ones.",
    "A cat's brain is 90% similar to a human's brain.",
    "Cats can make over 100 different sounds, whereas dogs can make only about 10.",
    "A cat can jump up to six times its length.",
    "Adult cats only meow to communicate with humans.",
    "Cats' whiskers are generally about the same width as their body.",
    "The world's oldest cat lived to be 38 years old.",
    "Cats sleep for 70% of their lives.",
    "A cat's nose is as unique as a human's fingerprint."
];

function getRandomFact() {
    const index = Math.floor(Math.random() * catFacts.length);
    return catFacts[index];
}

function displayFact() {
    const factElement = document.getElementById('cat-fact');
    const newFact = getRandomFact();
    factElement.textContent = newFact;
}

function copyFactToClipboard() {
    const factText = document.getElementById('cat-fact').textContent;
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = factText;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert("Cat fact copied to clipboard!");
}

document.getElementById('generate-fact').addEventListener('click', displayFact);
document.getElementById('copy-fact').addEventListener('click', copyFactToClipboard);

window.onload = displayFact;
