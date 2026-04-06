const button = document.getElementById('fetch-btn');
const display = document.getElementById('message-container');

button.addEventListener('click', async () => {
    button.disabled = true;
    display.innerText = "Scanning the Dad-abase...";
    
    
    try {
        // Technical Note: We MUST send an 'Accept' header for this API
        const response = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        });
        
        const data = await response.json();
        
        // The joke is stored in the 'joke' field
        display.innerText = data.joke;
       

    } catch (error) {
        display.innerText = "Even the jokes are broken. (Check connection,fool).";
    } finally {
        button.disabled = false;
    }

   
});