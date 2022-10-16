const mongoose = require('mongoose');

const marketSchema = new mongoose.Schema(
    {
        "編號": {
            type: String,
        },
        "市集名稱": {
            type: String,
        },
        "活動圖片": {
            type: String,
        },
        "活動時間": {
            type: String,
        },
        "活動地點": {
            type: String,
        },
        "地區": {
            type: String,
        },
    }, { versionKey: false }
);


const Market = mongoose.model('Markets', marketSchema);

module.exports = Market;