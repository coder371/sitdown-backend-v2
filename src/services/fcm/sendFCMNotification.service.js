const { default: axios } = require("axios");

const sendFCMNotification = async (apiKey, topic, title, imageUrl) => {
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
    };

    const notification = {
        "title": title,
        "image": imageUrl,
    };

    const message = {
        "topic": topic,
        "notification": notification,
        "android": {
            "notification": notification,
        },
        "apns": {
            "payload": {
                "aps": {
                    "mutable-content": 1,
                },
            },
            "fcm_options": {
                "image": imageUrl,
            },
        },
        "webpush": {
            "headers": {
                "image": imageUrl,
            },
        },
    };

    try {
        const response = await axios.post(
            "https://fcm.googleapis.com/v1/projects/wafflelab-9e222/messages:send",
            {
                "message": message,
            },
            { headers }
        );

        console.log("تم إرسال الإشعار بنجاح:", response.data);
        return true;
    } catch (error) {
        console.error("حدث خطأ أثناء إرسال الإشعار:", error);
        return false;
    }
}

module.exports = sendFCMNotification
