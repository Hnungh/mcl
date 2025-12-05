// mock data_sdk.js สำหรับตะกร้าสินค้า ใช้ localStorage เก็บข้อมูลบน browser
(function() {
  const CART_KEY = "mycart";
  let _handler = null;
  function _readCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY) || "[]"); }
    catch { return []; }
  }
  function _saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    if (_handler && typeof _handler.onDataChanged === "function") {
      _handler.onDataChanged(cart);
    }
  }
  window.dataSdk = {
    async init(handler) {
      _handler = handler;
      window.addEventListener("storage", () => {
        handler.onDataChanged(_readCart());
      });
      setTimeout(() => handler.onDataChanged(_readCart()), 50);
      return { isOk: true };
    },
    async create(item) {
      let cart = _readCart();
      // ใช้ product_id, size, color เป็น key แยกชิ้น
      let idx = cart.findIndex(
        x => x.product_id === item.product_id &&
             x.size === item.size &&
             x.color === item.color
      );
      if (idx > -1) {
        cart[idx].quantity += item.quantity || 1;
      } else {
       const backendId = `${item.product_id}_${item.size}_${item.color}`; 
        cart.push({ ...item, quantity: item.quantity || 1 });
      }
      _saveCart(cart);
      return { isOk: true };
    },
    async update(item) {
      let cart = _readCart();
      let idx = cart.findIndex(
        x => x.product_id === item.product_id &&
             x.size === item.size &&
             x.color === item.color
      );
      if (idx > -1) {
        cart[idx] = { ...item };
        _saveCart(cart);
        return { isOk: true };
      }
      return { isOk: false };
    },
    async delete(item) {
      let cart = _readCart();
      cart = cart.filter(
        x => !(x.product_id === item.product_id &&
               x.size === item.size &&
               x.color === item.color)
      );
      _saveCart(cart);
      return { isOk: true };
    }
  };
})();
