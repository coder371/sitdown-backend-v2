const { ApolloError } = require("apollo-server-express");
const admin = require("firebase-admin");
const path = require('path');

module.exports = async ({title, body, imageUrl = undefined, token = undefined, data = undefined}) => {


    // تكوين الرسالة
    const message = {
        notification: {
            title,
            body,
        },
        android: {
            notification: {},
        },
        apns: {
            payload: {
                aps: {
                    'mutable-content': 1,
                },
            },
            fcmOptions: {
                analyticsLabel: "test",
            },
        },
        webpush: {
            headers:{}
        },
        token,
    };
    console.log("🚀 ~ file: pushNotficationWithToken.js:33 ~ module.exports= ~ message:", message)

    if(data){
        message.data = data
    }

    // إضافة imageUrl إذا تم تمريرها
    if (imageUrl) {
        message.notification.imageUrl = imageUrl;
        message.android.notification.imageUrl = imageUrl;
        message.apns.payload.mediaUrl = imageUrl;
        message.apns.fcmOptions.imageUrl = imageUrl;
        message.webpush.headers.image = imageUrl;
    }

    console.log("🚀 ~ file: pushNotficationWithToken.js:43 ~ module.exports= ~ message:", message)

    try {
        // قراءة ملف مفتاح الخدمة
        const filePath = path.resolve(__dirname, '../../files/firebaseAdminSdk/ma3ak-app-1cfa8-firebase-adminsdk-n122a-23d3274e40.json');
        const serviceAccount = require(filePath);

        // تكوين Firebase
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });

        // إرسال الرسالة
        await admin.messaging().send(message).then(() => {
            admin.app().delete();
        }).catch((err) => {
            admin.app().delete();
        });
    } catch (error) {
        if(error.errorInfo.code === 'messaging/registration-token-not-registered'){
            console.warn("مستخدم غير مسجل دخول:");
        }else {
            console.warn("حدث خطأ أثناء إرسال الإشعار:", error);
            return new ApolloError("حدث خطأ أثناء إرسال الإشعار");
        }
    }
};
