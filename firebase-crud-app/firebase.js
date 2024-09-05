// firebase.js cấu hình kết nối FileStorage
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://test-a687a-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const db = admin.firestore();

module.exports = db;
