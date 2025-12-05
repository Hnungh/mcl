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
  function genBackendId(item) {
    return `${item.product_id}_${item.size || ''}_${item.color || ''}`;
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
      let idx = cart.findIndex(
        x => x.product_id === item.product_id &&
             x.size === item.size &&
             x.color === item.color
      );
      if (idx > -1) {
        cart[idx].quantity += item.quantity || 1;
      } else {
        cart.push({ ...item, quantity: item.quantity || 1, __backendId: genBackendId(item) });
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
        cart[idx] = { ...item, __backendId: genBackendId(item) };
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
