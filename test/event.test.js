"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var mocha_typescript_1 = require("mocha-typescript");
var kafka_node_1 = require("kafka-node");
var EventTest = (function () {
    function EventTest() {
    }
    EventTest.prototype.assert_write_topics = function (done) {
        // console.log(kafka.Client);
        var client = new kafka_node_1.Client('localhost:2181/', 'sendMessage');
        var producer = new kafka_node_1.HighLevelProducer(client);
        var payloads = [
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
    };
    EventTest.prototype.assert_read_topics = function (done) {
        var client = new kafka_node_1.Client('localhost:2181/', 'sendMessage');
        var topics = [{ topic: 'topic1' }, { topic: 'topic2' }];
        var consumer = new kafka_node_1.HighLevelConsumer(client, topics, {});
        consumer.on('message', function (message) {
            console.log(message);
        });
    };
    return EventTest;
}());
__decorate([
    mocha_typescript_1.test("write to topics"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", void 0)
], EventTest.prototype, "assert_write_topics", null);
__decorate([
    mocha_typescript_1.test("read topics"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", void 0)
], EventTest.prototype, "assert_read_topics", null);
EventTest = __decorate([
    mocha_typescript_1.suite,
    __metadata("design:paramtypes", [])
], EventTest);
