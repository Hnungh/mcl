// mock สำหรับ element_sdk.js (Canva บาง template ต้องการไว้ในระบบ)
// หากอยากใช้ฟังก์ชัน window.elementSdk ตาม doc สามารถเพิ่มได้
window.elementSdk = {
  // ตัวอย่าง mock
  config: {},
  onConfigChange: function (handler) {
    // mock ไม่ทำอะไร
  },
  getConfig: async function() { return window.elementSdk.config; }
};
