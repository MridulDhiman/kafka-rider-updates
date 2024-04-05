
const { kafka } = require("./client");
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function init () {
    const producer = kafka.producer();
    console.log("Connecting Producer...");
   await producer.connect();
   console.log("Producer connected successfully...");

rl.setPrompt("> ");
rl.prompt();

   
rl.on('line', async (line) => {
const [name, loc] = line.split(' ');

console.log("sending messages to topic [rider-updates]");
   await producer.send({
        topic: 'rider-updates',
        messages: [
            {
                key: "location-update",
                value: JSON.stringify({name,loc}), 
                partition: loc.toLowerCase() === 'north' ? 0: 1
          }
          ]
   });

}).on('close',  async ()=> {
    console.log("Disconnecting Producer...");
    await producer.disconnect();
})

   




    
}

init();