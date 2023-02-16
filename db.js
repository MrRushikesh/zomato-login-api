let mongoose = require('mongoose');

mongoose.set('strictQuery',false);
// mongoose.set('strictQuery',true);

mongoose.connect(`mongodb://test:test123@ac-vvqzgty-shard-00-00.fp1yuey.mongodb.net:27017,ac-vvqzgty-shard-00-01.fp1yuey.mongodb.net:27017,ac-vvqzgty-shard-00-02.fp1yuey.mongodb.net:27017/?ssl=true&replicaSet=atlas-j1e58a-shard-0&authSource=admin&retryWrites=true&w=majority`)