const { Kafka } = require('kafkajs');
require('dotenv').config();

exports.kafka = new Kafka({
    brokers: [`${process.env.LOCAL_BROKER}`],
    clientId: "my-app"
})