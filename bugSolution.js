```javascript
//Correct usage of $inc to increment a counter
db.collection('counters').updateOne({ _id: 'myCounter' }, { $inc: { seq: 1 } }, { upsert: true });

//If you need to decrement, use a negative value explicitly
db.collection('counters').updateOne({ _id: 'myCounter' }, { $inc: { seq: -1 } }, { upsert: true });
```