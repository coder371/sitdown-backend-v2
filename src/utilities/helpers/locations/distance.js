const { getDistance } = require('geolib');
module.exports  = ({origin, location}) => {
    return getDistance(origin, location) / 1000
      // تحويل الزوايا من نظام الدرجات إلى نظام نصف القطر
      lon1 = origin.longitude * Math.PI / 180;
      lon2 = location.longitude * Math.PI / 180;
      lat1 = origin.latitude * Math.PI / 180;
      lat2 = location.latitude * Math.PI / 180;
      // صيغة هافرساين
      var dlon = lon2 - lon1;
      var dlat = lat2 - lat1;
      var a = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);
      var c = 2 * Math.asin(Math.sqrt(a));
      
      // نصف قطر الأرض بوحدات الكيلومتر.
      var r = 6371;
      
      // حساب النتيجة
      return c * r;
  };  