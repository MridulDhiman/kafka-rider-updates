const { kafka } = require("./client");

const group = process.argv[2];

async function init () {
    // create with group id 
    const consumer = kafka.consumer({ groupId: group });

    console.log("Connecting Consumer: ");

    await consumer.connect();
    console.log("Consumer connected");


    // start consuming message 
    // consume message by subscribing to a topic
    await consumer.subscribe({ topics: ['rider-updates'], fromBeginning: true});

    await consumer.run({
        eachMessage: async ({topic, partition, message, heartbeat, pause}) => {
console.log(`[TOPIC:${topic}] PART:${partition} GROUP:${group} MESSAGE:${message.value.toString()}`)
        }
    })




// consumer ko disconnect ni krna 
}


init();