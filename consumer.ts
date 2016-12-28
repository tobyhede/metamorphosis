import { Client, HighLevelProducer, HighLevelConsumer } from 'kafka-node';

// let options = {}
// let consumerGroup = new ConsumerGroup(options, ['topic1', 'topic2']);

let client = new Client('localhost:2181/','sendMessage');

// client.loadMetadataForTopics([], function (error, results) {
//   console.log('%j', _.get(results, '1.metadata'));
// });

let topics = [{ topic: 'topic1', offset: 0 }];
let options = { groupId:'blah-vtha-1', fromOffset: true };

let consumer = new HighLevelConsumer(client, topics, options);

consumer.on('message', function (message) {
  console.log(message);
});

consumer.on('error', function (message) {
  console.log(message);
  consumer.close(true, function(){
    console.log('Consumer Error')
    process.exit();
  })
});

process.on('SIGINT', function () {
  consumer.close(true, function () {
      process.exit();
  });
});
