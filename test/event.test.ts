import { suite, test, slow, timeout, skip, only } from 'mocha-typescript';

import { Client, HighLevelProducer, HighLevelConsumer } from 'kafka-node';


@suite class EventTest {

  @test("write to topics")
  assert_write_topics(done: Function) {
    // console.log(kafka.Client);
    let client = new Client('localhost:2181/','sendMessage');
    let producer = new HighLevelProducer(client);
    let payloads = [
      { topic: 'topic1', messages: ['blah!', 'vtha!'] },
      { topic: 'topic2', messages: ['hello', 'world'] }
    ];
 
    producer.on('ready', function () {
        producer.send(payloads, function (err, data) {
          console.log(err);
          console.log(data);
          done();
        });
    });
  }

  @test("read topics")
  assert_read_topics(done: Function) {
    let client = new Client('localhost:2181/','sendMessage');

    let topics = [{ topic: 'topic1' }, { topic: 'topic2' }];
    let consumer = new HighLevelConsumer(client, topics, {});

    consumer.on('message', function (message) {
      console.log(message);
    });

  }

  // var kafka = require('kafka-node'),
  //   HighLevelConsumer = kafka.HighLevelConsumer,
  //   client = new kafka.Client(),
  //   consumer = new HighLevelConsumer(
  //       client,
  //       [
  //           { topic: 't' }, { topic: 't1' }
  //       ],
  //       {
  //           groupId: 'my-group'
  //       }
  //   );

}
