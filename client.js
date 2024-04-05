const {Kafka} = require('kafkajs');

exports.kafka = new Kafka({
    brokers: ['192.168.56.1:9092'],
    clientId: "my-app"
})