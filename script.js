const button = document.getElementById('fetch-btn');
const display = document.getElementById('message-container');
const metaDisplay = document.getElementById('meta-container');

button.addEventListener('click', async () => {
    button.disabled = true;
    display.innerText = "Scanning the Dad-abase...";
    metaDisplay.innerText = "";

    
    
    try {
        // Technical Note: We MUST send an 'Accept' header for this API....wished i stayed with the simple unhinged api
        const response = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        });
        
        const data = await response.json();
        
        // The joke is stored in the 'joke' field....joke on u my life is a joke...sorry
        display.innerText = data.joke;
        metaDisplay.innerHTML = `
            <span>the id of the joke(second get): ${data.id} </span> <br>
            <span>the status of http replay(third result): ${data.status}</span>
        `;
       

    } catch (error) {
        display.innerText = "Even the jokes are broken. (Check connection,fool).";
    } finally {
        button.disabled = false;
    }

   
});