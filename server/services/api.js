const db = require('../startup/db');
module.exports = {

    aggregate(collectionName, aggregations) {
        return new Promise((resolve, reject) => {
            // console.log("inside the api of aggregate",aggregations)
            db.collection(collectionName).aggregate(
                aggregations
            ).toArray((err, result) => {
                if (err) {
                    reject(err)
                }
                else {
                    resolve(result)
                }
            })
        })
    }
    
}