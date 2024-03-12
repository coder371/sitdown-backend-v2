const { ApolloError } = require("apollo-server-express");
const admin = require("firebase-admin");
const path = require('path');

module.exports = async ({title, body, imageUrl = undefined, topic = "ALL"}) => {
    // تكوين الرسالة
    const message = {
        notification: {
            title,
            body,
            imageUrl
        },
        android: {
            notification: {
                imageUrl,
            },
        },
        apns: {
            payload: {
                aps: {
                    'mutable-content': 1,
                },
                mediaUrl:imageUrl,
                mediaType: "image" 
            },
            fcmOptions: {
                // image: imageUrl,
                analyticsLabel: "test",
                imageUrl,
            },
        },
        webpush: {
            headers: {
                image: imageUrl,
            },
        },
        topic,
    };
    try {
        // قراءة ملف مفتاح الخدمة
        const filePath = path.resolve(__dirname, '../../files/firebaseAdminSdk/ma3ak-app-1cfa8-firebase-adminsdk-n122a-23d3274e40.json');
        const serviceAccount = require(filePath);

        // تكوين Firebase
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });

        // إرسال الرسالة
        await admin.messaging().send(message);
        admin.app().delete();
    } catch (error) {
        console.error("حدث خطأ أثناء إرسال الإشعار:", error);
        throw new ApolloError("حدث خطأ أثناء إرسال الإشعار");
    }
};