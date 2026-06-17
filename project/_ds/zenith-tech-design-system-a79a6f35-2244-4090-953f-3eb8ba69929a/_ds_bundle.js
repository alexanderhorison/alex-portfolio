/* @ds-bundle: {"format":3,"namespace":"WABroadcastDesignSystem_a79a6f","components":[{"name":"BottomNav","sourcePath":"components/app/BottomNav.jsx"},{"name":"ListRow","sourcePath":"components/app/ListRow.jsx"},{"name":"SelectableTile","sourcePath":"components/app/SelectableTile.jsx"},{"name":"StatCard","sourcePath":"components/app/StatCard.jsx"},{"name":"StatusCard","sourcePath":"components/app/StatusCard.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Label","sourcePath":"components/core/Label.jsx"},{"name":"Textarea","sourcePath":"components/core/Textarea.jsx"}],"sourceHashes":{"components/app/BottomNav.jsx":"f2e0edb324e7","components/app/ListRow.jsx":"37c2cdce978b","components/app/SelectableTile.jsx":"a427893076c6","components/app/StatCard.jsx":"bf7c82f0fd15","components/app/StatusCard.jsx":"21d4df8ce2cb","components/core/Avatar.jsx":"1df96cb812c6","components/core/Badge.jsx":"da887d1fdaca","components/core/Button.jsx":"abf64c5bc721","components/core/Card.jsx":"dad9bb690220","components/core/Checkbox.jsx":"6bdfc92b4e82","components/core/Input.jsx":"3a4d1c5b73cb","components/core/Label.jsx":"ee7313504897","components/core/Textarea.jsx":"2dff6eee726d","ui_kits/wa-broadcast/data.js":"bb2838e3f346","ui_kits/wa-broadcast/icons.js":"061b87eb5e3a","ui_kits/wa-broadcast/screens.jsx":"01df9d9a6014"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WABroadcastDesignSystem_a79a6f = window.WABroadcastDesignSystem_a79a6f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/app/BottomNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BottomNav — fixed mobile tab bar. Items: { key, label, icon }.
 * Active item turns brand red.
 */
function BottomNav({
  items = [],
  activeKey,
  onSelect,
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: ["wa-bottomnav", "safe-area-bottom", className].filter(Boolean).join(" ")
  }, props), items.map(item => {
    const active = item.key === activeKey;
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: item.key,
      className: ["wa-bottomnav__item", active ? "wa-bottomnav__item--active" : ""].filter(Boolean).join(" "),
      "aria-current": active ? "page" : undefined,
      onClick: onSelect ? () => onSelect(item.key) : undefined
    }, item.icon, /*#__PURE__*/React.createElement("span", {
      className: "wa-bottomnav__label"
    }, item.label));
  }));
}
Object.assign(__ds_scope, { BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/BottomNav.jsx", error: String((e && e.message) || e) }); }

// components/app/ListRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ListRow — bordered row: leading media + title/meta + optional
 * trailing slot. Used for broadcast lists, recipients, menu items.
 */
function ListRow({
  lead,
  title,
  meta,
  trailing,
  as: As = "div",
  button = false,
  flush = false,
  className = "",
  ...props
}) {
  const cls = ["wa-row", button ? "wa-row--button" : "", flush ? "wa-row--flush" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(As, _extends({
    className: cls
  }, props), lead != null && /*#__PURE__*/React.createElement("div", {
    className: "wa-row__lead"
  }, lead), /*#__PURE__*/React.createElement("div", {
    className: "wa-row__body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "wa-row__title"
  }, title), meta != null && /*#__PURE__*/React.createElement("p", {
    className: "wa-row__meta"
  }, meta)), trailing != null && /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0
    }
  }, trailing));
}
Object.assign(__ds_scope, { ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/ListRow.jsx", error: String((e && e.message) || e) }); }

// components/app/SelectableTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SelectableTile — toggleable group/option card with a brand check
 * badge when selected. Used by the broadcast group picker.
 */
function SelectableTile({
  icon,
  title,
  meta,
  selected = false,
  className = "",
  children,
  ...props
}) {
  const cls = ["wa-tile", selected ? "wa-tile--selected" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-pressed": selected
  }, props), selected && /*#__PURE__*/React.createElement("span", {
    className: "wa-tile__check",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), icon != null && /*#__PURE__*/React.createElement("div", {
    className: "wa-tile__icon"
  }, icon), /*#__PURE__*/React.createElement("p", {
    className: "wa-tile__title"
  }, title), meta != null && /*#__PURE__*/React.createElement("p", {
    className: "wa-tile__meta"
  }, meta), children);
}
Object.assign(__ds_scope, { SelectableTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/SelectableTile.jsx", error: String((e && e.message) || e) }); }

// components/app/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** StatCard — the dashboard metric tile: big number + caption. */
function StatCard({
  value,
  label,
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["wa-stat", className].filter(Boolean).join(" ")
  }, props), /*#__PURE__*/React.createElement("p", {
    className: "wa-stat__value"
  }, value), /*#__PURE__*/React.createElement("p", {
    className: "wa-stat__label"
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/app/StatusCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatusCard — delivery-result panel for a broadcast. Status drives
 * the border/tint/icon color; optional metric tiles + rate chip.
 */
function StatusCard({
  status = "success",
  icon,
  title,
  rate,
  metrics,
  className = "",
  children,
  ...props
}) {
  const cls = ["wa-status", `wa-status--${status}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "wa-status__head"
  }, icon != null && /*#__PURE__*/React.createElement("span", {
    className: "wa-status__icon"
  }, icon), /*#__PURE__*/React.createElement("span", {
    className: "wa-status__title"
  }, title), rate != null && /*#__PURE__*/React.createElement("span", {
    className: "wa-status__rate"
  }, rate)), Array.isArray(metrics) && metrics.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "wa-status__metrics"
  }, metrics.map((m, i) => /*#__PURE__*/React.createElement("div", {
    className: "wa-status__metric",
    key: i
  }, /*#__PURE__*/React.createElement("p", {
    className: "wa-status__metric-value",
    style: m.color ? {
      color: m.color
    } : undefined
  }, m.value), /*#__PURE__*/React.createElement("p", {
    className: "wa-status__metric-label"
  }, m.label)))), children);
}
Object.assign(__ds_scope, { StatusCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/StatusCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: "wa-avatar--sm",
  md: "wa-avatar--md",
  lg: "wa-avatar--lg"
};

/**
 * Avatar — image / initials / icon well. `brand` tint is the soft
 * red circle used for profile and feature glyphs across the app.
 */
function Avatar({
  size = "md",
  brand = false,
  src,
  alt = "",
  fallback,
  className = "",
  children,
  ...props
}) {
  const cls = ["wa-avatar", SIZES[size] || SIZES.md, brand ? "wa-avatar--brand" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, props), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }) : children || fallback);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  default: "wa-badge--default",
  brand: "wa-badge--brand",
  secondary: "wa-badge--secondary",
  destructive: "wa-badge--destructive",
  outline: "wa-badge--outline",
  success: "wa-badge--success",
  pending: "wa-badge--pending",
  warning: "wa-badge--warning"
};

/**
 * Badge — small pill for counts, statuses and labels.
 */
function Badge({
  variant = "default",
  className = "",
  children,
  ...props
}) {
  const cls = ["wa-badge", VARIANTS[variant] || VARIANTS.default, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, props), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  brand: "wa-btn--brand",
  primary: "wa-btn--primary",
  secondary: "wa-btn--secondary",
  outline: "wa-btn--outline",
  ghost: "wa-btn--ghost",
  destructive: "wa-btn--destructive",
  link: "wa-btn--link"
};
const SIZES = {
  sm: "wa-btn--sm",
  md: "wa-btn--md",
  lg: "wa-btn--lg",
  xl: "wa-btn--xl",
  icon: "wa-btn--icon"
};

/**
 * Button — the product's primary action control.
 * Brand (red) = send / confirm CTAs, primary (near-black) = neutral
 * default, plus secondary / outline / ghost / destructive / link.
 */
function Button({
  variant = "primary",
  size = "md",
  block = false,
  className = "",
  type = "button",
  children,
  ...props
}) {
  const cls = ["wa-btn", VARIANTS[variant] || VARIANTS.primary, SIZES[size] || SIZES.md, block ? "wa-btn--block" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls
  }, props), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Card — border-only surface, the product's default container. */
function Card({
  padded = false,
  className = "",
  children,
  ...props
}) {
  const cls = ["wa-card", padded ? "wa-card--pad" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, props), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox — native checkbox styled to the shadcn recipe. */
function Checkbox({
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    className: ["wa-checkbox", className].filter(Boolean).join(" ")
  }, props));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Input — single-line text field (shadcn default recipe). */
function Input({
  className = "",
  type = "text",
  ...props
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    className: ["wa-field", "wa-input", className].filter(Boolean).join(" ")
  }, props));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Label.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Label — form field label. */
function Label({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    className: ["wa-label", className].filter(Boolean).join(" ")
  }, props), children);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Label.jsx", error: String((e && e.message) || e) }); }

// components/core/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Textarea — multi-line input (message composer). */
function Textarea({
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("textarea", _extends({
    className: ["wa-field", "wa-textarea", className].filter(Boolean).join(" ")
  }, props));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wa-broadcast/data.js
try { (() => {
// WA Broadcast — sample data for the UI kit (fake, illustrative).
// Mirrors the product's domain: a premier-banking RM broadcasting
// WhatsApp messages to customer groups. Names are fictional.
(function () {
  const customers = [{
    id: "c1",
    name: "Andre Wijaya",
    whatsappNumber: "+62 812-1100-2231",
    group: "g1"
  }, {
    id: "c2",
    name: "Siti Rahmawati",
    whatsappNumber: "+62 813-5521-9087",
    group: "g1"
  }, {
    id: "c3",
    name: "Budi Santoso",
    whatsappNumber: "+62 811-9080-1142",
    group: "g1"
  }, {
    id: "c4",
    name: "Maria Kusuma",
    whatsappNumber: "+62 821-7763-5510",
    group: "g2"
  }, {
    id: "c5",
    name: "Hendra Gunawan",
    whatsappNumber: "+62 812-3344-7781",
    group: "g2"
  }, {
    id: "c6",
    name: "Dewi Lestari",
    whatsappNumber: "+62 856-2210-9934",
    group: null
  }, {
    id: "c7",
    name: "Rizky Pratama",
    whatsappNumber: "+62 819-4567-2200",
    group: null
  }];
  const groups = [{
    id: "g1",
    name: "Premier Nasabah"
  }, {
    id: "g2",
    name: "Prospek Baru"
  }];
  const broadcasts = [{
    id: "b1",
    message: "Selamat tahun baru, Bapak/Ibu nasabah premier! Nikmati promo spesial deposito 6,5% p.a. hingga akhir Januari. Hubungi saya untuk detailnya. 🙏",
    sentAt: "2026-01-02T09:30:00",
    recipients: ["c1", "c2", "c3", "c4", "c5"],
    status: "done",
    delivery: {
      totalRecipients: 5,
      successCount: 5,
      failedCount: 0,
      successRate: "100%",
      failedContacts: []
    }
  }, {
    id: "b2",
    message: "Reminder: webinar eksklusif 'Wealth Planning 2026' hari Kamis pukul 19.00 WIB. Link akan dikirim H-1. Sampai jumpa!",
    sentAt: "2026-01-08T14:05:00",
    recipients: ["c1", "c2", "c3", "c4", "c5", "c6"],
    status: "done",
    delivery: {
      totalRecipients: 6,
      successCount: 5,
      failedCount: 1,
      successRate: "83%",
      failedContacts: [{
        whatsappNumber: "62856221099 34",
        error: "Number not registered on WhatsApp"
      }]
    }
  }, {
    id: "b3",
    message: "Promo akhir pekan: cashback hingga Rp500.000 untuk transaksi kartu kredit premier. Berlaku s/d Minggu.",
    sentAt: "2026-01-11T10:15:00",
    recipients: ["c1", "c4", "c7"],
    status: "pending",
    delivery: null
  }];
  window.WAData = {
    customers,
    groups,
    broadcasts
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wa-broadcast/data.js", error: String((e && e.message) || e) }); }

// ui_kits/wa-broadcast/icons.js
try { (() => {
// WA Broadcast — lucide-style icon set (stroke 2, 24x24).
// Vectors traced from lucide-react, the icon library the product ships.
(function () {
  const S = (children, props = {}) => React.createElement("svg", Object.assign({
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, props), children);
  const P = (d, key) => React.createElement("path", {
    d,
    key
  });
  const C = (cx, cy, r, key) => React.createElement("circle", {
    cx,
    cy,
    r,
    key
  });
  const mk = parts => props => S(parts.map((p, i) => Array.isArray(p) ? C(p[0], p[1], p[2], i) : P(p, i)), props);
  const Icons = {
    Send: mk(["m22 2-7 20-4-9-9-4Z", "M22 2 11 13"]),
    Home: mk(["m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", "M9 22V12h6v10"]),
    Users: mk(["M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", [9, 7, 4], "M22 21v-2a4 4 0 0 0-3-3.87", "M16 3.13a4 4 0 0 1 0 7.75"]),
    Settings: mk(["M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z", [12, 12, 3]]),
    ChevronRight: mk(["m9 18 6-6-6-6"]),
    ArrowLeft: mk(["m12 19-7-7 7-7", "M19 12H5"]),
    Eye: mk(["M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", [12, 12, 3]]),
    EyeOff: mk(["M9.88 9.88a3 3 0 1 0 4.24 4.24", "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68", "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61", "m2 2 20 20"]),
    Megaphone: mk(["m3 11 18-5v12L3 14v-3z", "M11.6 16.8a3 3 0 1 1-5.8-1.6"]),
    Trash: mk(["M3 6h18", "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", "M10 11v6", "M14 11v6"]),
    ImagePlus: mk(["M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7", "M16 5h6", "M19 2v6", [9, 9, 2], "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"]),
    X: mk(["M18 6 6 18", "m6 6 12 12"]),
    Folder: mk(["M6 14l1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"]),
    Check: mk(["M20 6 9 17l-5-5"]),
    CheckCircle: mk(["M21.801 10A10 10 0 1 1 17 3.335", "m9 11 3 3L22 4"]),
    XCircle: mk([[12, 12, 10], "m15 9-6 6", "m9 9 6 6"]),
    AlertTriangle: mk(["m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z", "M12 9v4", "M12 17h.01"]),
    Clock: mk([[12, 12, 10], "M12 6v6l4 2"]),
    Loader: mk(["M12 2v4", "m16.2 7.8 2.9-2.9", "M18 12h4", "m16.2 16.2 2.9 2.9", "M12 18v4", "m4.9 19.1 2.9-2.9", "M2 12h4", "m4.9 4.9 2.9 2.9"]),
    Plus: mk(["M5 12h14", "M12 5v14"]),
    Search: mk([[11, 11, 8], "m21 21-4.3-4.3"]),
    Shield: mk(["M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"]),
    LogOut: mk(["M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", "m16 17 5-5-5-5", "M21 12H9"]),
    User: mk(["M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", [12, 7, 4]]),
    Upload: mk(["M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", "M17 8l-5-5-5 5", "M12 3v12"]),
    Phone: mk(["M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"])
  };
  window.WAIcons = Icons;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wa-broadcast/icons.js", error: String((e && e.message) || e) }); }

// ui_kits/wa-broadcast/screens.jsx
try { (() => {
// WA Broadcast — UI kit screens. Faithful recreations of the
// product's mobile views, composed from the design-system
// primitives (window.WABroadcastDesignSystem_*) + lucide icons.
(function () {
  const NS = window.WABroadcastDesignSystem_a79a6f;
  const {
    Button,
    Badge,
    Input,
    Textarea,
    Label,
    Checkbox,
    Avatar,
    StatCard,
    ListRow,
    SelectableTile,
    StatusCard,
    BottomNav
  } = NS;
  const I = window.WAIcons;
  const {
    customers,
    groups,
    broadcasts
  } = window.WAData;
  const muted = "hsl(var(--muted-foreground))";
  const fg = "hsl(var(--foreground))";
  const fmt = (iso, withYear) => {
    const d = new Date(iso);
    const mo = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][d.getMonth()];
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    return withYear ? `${mo} ${d.getDate()}, ${d.getFullYear()} · ${hh}:${mm}` : `${mo} ${d.getDate()}, ${hh}:${mm}`;
  };
  const PageHead = ({
    title,
    sub
  }) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-xl)",
      fontWeight: 600,
      letterSpacing: "-0.015em",
      margin: 0,
      color: fg
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      color: muted,
      margin: "2px 0 0"
    }
  }, sub));
  const Page = ({
    children,
    style
  }) => /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      padding: "20px 16px",
      display: "flex",
      flexDirection: "column",
      gap: 20
    }, style)
  }, children);

  // ---------------- Login ----------------
  function Login({
    onLogin
  }) {
    const [pw, setPw] = React.useState("Suthiono11");
    const [show, setShow] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 24px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "animate-fade-in",
      style: {
        width: "100%",
        maxWidth: 360,
        display: "flex",
        flexDirection: "column",
        gap: 32
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      brand: true,
      size: "lg",
      className: "animate-scale-in"
    }, /*#__PURE__*/React.createElement(I.Send, null)), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: "var(--text-xl)",
        fontWeight: 600,
        margin: 0,
        color: fg
      }
    }, "WA Broadcast"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-sm)",
        color: muted,
        margin: 0
      }
    }, "Made special for Irene Suthiono \u2764\uFE0F")), /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        onLogin();
      },
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Label, {
      htmlFor: "pw"
    }, "Password"), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(Input, {
      id: "pw",
      type: show ? "text" : "password",
      value: pw,
      onChange: e => setPw(e.target.value),
      style: {
        paddingRight: 40
      }
    }), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setShow(!show),
      style: {
        position: "absolute",
        right: 12,
        top: "50%",
        transform: "translateY(-50%)",
        background: "none",
        border: "none",
        color: muted,
        cursor: "pointer",
        display: "flex"
      }
    }, show ? /*#__PURE__*/React.createElement(I.EyeOff, {
      width: 16,
      height: 16
    }) : /*#__PURE__*/React.createElement(I.Eye, {
      width: 16,
      height: 16
    })))), /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      variant: "brand",
      block: true
    }, "Login"))));
  }

  // ---------------- Dashboard ----------------
  function Dashboard({
    onOpen,
    onCompose
  }) {
    const totalMsgs = broadcasts.reduce((s, b) => s + b.recipients.length, 0);
    return /*#__PURE__*/React.createElement(Page, {
      style: {
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(PageHead, {
      title: /*#__PURE__*/React.createElement("span", null, "Welcome back, Irene Suthiono \uD83D\uDC4B"),
      sub: "Senior Premier Banking Manager"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(StatCard, {
      value: broadcasts.length,
      label: "Broadcasts sent"
    }), /*#__PURE__*/React.createElement(StatCard, {
      value: totalMsgs,
      label: "Total messages"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: "var(--text-sm)",
        fontWeight: 600,
        margin: 0,
        color: fg
      }
    }, "Recent Broadcasts"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, broadcasts.map(b => /*#__PURE__*/React.createElement(ListRow, {
      key: b.id,
      as: "button",
      button: true,
      onClick: () => onOpen(b.id),
      lead: /*#__PURE__*/React.createElement(I.Send, {
        width: 16,
        height: 16
      }),
      title: b.message.slice(0, 56) + (b.message.length > 56 ? "…" : ""),
      meta: `${b.recipients.length} recipients · ${fmt(b.sentAt)}`,
      trailing: /*#__PURE__*/React.createElement("span", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 6
        }
      }, b.status === "pending" && /*#__PURE__*/React.createElement(Badge, {
        variant: "pending"
      }, "Pending"), /*#__PURE__*/React.createElement(I.ChevronRight, {
        width: 16,
        height: 16,
        style: {
          color: muted
        }
      }))
    })))));
  }

  // ---------------- Customers ----------------
  function Customers() {
    const [q, setQ] = React.useState("");
    const groupName = id => (groups.find(g => g.id === id) || {}).name;
    const list = customers.filter(c => c.name.toLowerCase().includes(q.toLowerCase()));
    return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(PageHead, {
      title: "Customers",
      sub: `${customers.length} contacts · ${groups.length} groups`
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "brand",
      size: "icon",
      "aria-label": "Add customer"
    }, /*#__PURE__*/React.createElement(I.Plus, null))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(I.Search, {
      width: 16,
      height: 16,
      style: {
        position: "absolute",
        left: 12,
        top: "50%",
        transform: "translateY(-50%)",
        color: muted
      }
    }), /*#__PURE__*/React.createElement(Input, {
      placeholder: "Search contacts",
      value: q,
      onChange: e => setQ(e.target.value),
      style: {
        paddingLeft: 36
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1px solid hsl(var(--border))",
        borderRadius: "var(--radius)",
        overflow: "hidden"
      }
    }, list.map((c, i) => /*#__PURE__*/React.createElement("div", {
      key: c.id,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: 12,
        borderTop: i ? "1px solid hsl(var(--border))" : "none"
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      size: "md",
      fallback: c.name.split(" ").map(p => p[0]).slice(0, 2).join("")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-sm)",
        fontWeight: 500,
        margin: 0,
        color: fg
      }
    }, c.name), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-2xs)",
        color: muted,
        margin: 0
      }
    }, c.whatsappNumber)), c.group && /*#__PURE__*/React.createElement(Badge, {
      variant: "secondary"
    }, groupName(c.group))))));
  }

  // ---------------- Broadcast (compose) ----------------
  function Broadcast({
    onSend
  }) {
    const [message, setMessage] = React.useState("");
    const [selected, setSelected] = React.useState(new Set());
    const [selGroups, setSelGroups] = React.useState(new Set());
    const inGroup = gid => customers.filter(c => c.group === gid).map(c => c.id);
    const ungrouped = customers.filter(c => !c.group);
    const toggleGroup = gid => {
      const ng = new Set(selGroups),
        ns = new Set(selected);
      if (ng.has(gid)) {
        ng.delete(gid);
        inGroup(gid).forEach(id => ns.delete(id));
      } else {
        ng.add(gid);
        inGroup(gid).forEach(id => ns.add(id));
      }
      setSelGroups(ng);
      setSelected(ns);
    };
    const toggleCustomer = id => {
      const ns = new Set(selected);
      ns.has(id) ? ns.delete(id) : ns.add(id);
      setSelected(ns);
    };
    const count = selected.size;
    const canSend = message.trim().length > 0 && count > 0;
    return /*#__PURE__*/React.createElement(Page, {
      style: {
        paddingBottom: 96
      }
    }, /*#__PURE__*/React.createElement(PageHead, {
      title: "Broadcast",
      sub: "Send WhatsApp messages"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Message"), /*#__PURE__*/React.createElement(Textarea, {
      placeholder: "Type your message...",
      value: message,
      maxLength: 4096,
      onChange: e => setMessage(e.target.value),
      style: {
        minHeight: 120
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-2xs)",
        color: muted,
        textAlign: "right",
        margin: 0
      }
    }, message.length, "/4096")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Image (optional)"), /*#__PURE__*/React.createElement("div", {
      style: {
        border: "2px dashed hsl(var(--border))",
        borderRadius: "var(--radius)",
        padding: 24,
        textAlign: "center",
        color: muted
      }
    }, /*#__PURE__*/React.createElement(I.ImagePlus, {
      width: 20,
      height: 20,
      style: {
        margin: "0 auto 6px"
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-xs)",
        margin: 0
      }
    }, "Tap to upload image"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Groups"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 8
      }
    }, groups.map(g => /*#__PURE__*/React.createElement(SelectableTile, {
      key: g.id,
      icon: /*#__PURE__*/React.createElement(I.Folder, null),
      title: g.name,
      meta: `${inGroup(g.id).length} contacts`,
      selected: selGroups.has(g.id),
      onClick: () => toggleGroup(g.id)
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Other Contacts (", ungrouped.length, ")"), /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1px solid hsl(var(--border))",
        borderRadius: "var(--radius)",
        overflow: "hidden"
      }
    }, ungrouped.map((c, i) => /*#__PURE__*/React.createElement("label", {
      key: c.id,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: 12,
        cursor: "pointer",
        borderTop: i ? "1px solid hsl(var(--border))" : "none"
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      checked: selected.has(c.id),
      onChange: () => toggleCustomer(c.id)
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-sm)",
        fontWeight: 500,
        margin: 0,
        color: fg
      }
    }, c.name), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-2xs)",
        color: muted,
        margin: 0
      }
    }, c.whatsappNumber)))))), count > 0 && /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-xs)",
        color: muted,
        textAlign: "center",
        margin: 0
      }
    }, count, " recipient", count !== 1 ? "s" : "", " selected"), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        bottom: "var(--bottom-nav-h)",
        left: 0,
        right: 0,
        padding: "8px 16px",
        background: "hsl(var(--background) / 0.95)",
        backdropFilter: "blur(8px)",
        borderTop: "1px solid hsl(var(--border))"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "brand",
      size: "xl",
      block: true,
      disabled: !canSend,
      onClick: () => onSend(message, count)
    }, /*#__PURE__*/React.createElement(I.Send, {
      width: 16,
      height: 16
    }), " Send to ", count, " recipient", count !== 1 ? "s" : "")));
  }

  // ---------------- Broadcast Detail ----------------
  function BroadcastDetail({
    id,
    onBack
  }) {
    const b = broadcasts.find(x => x.id === id) || broadcasts[0];
    const pending = b.status === "pending";
    const d = b.delivery;
    const allSuccess = d && d.failedCount === 0;
    const failedNums = new Set((d && d.failedContacts || []).map(f => f.whatsappNumber));
    const recips = b.recipients.map(rid => customers.find(c => c.id === rid)).filter(Boolean);
    return /*#__PURE__*/React.createElement(Page, {
      style: {
        paddingBottom: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onBack,
      style: {
        background: "none",
        border: "none",
        padding: 4,
        marginLeft: -4,
        cursor: "pointer",
        display: "flex",
        color: fg
      }
    }, /*#__PURE__*/React.createElement(I.ArrowLeft, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: "var(--text-lg)",
        fontWeight: 600,
        margin: 0,
        color: fg
      }
    }, "Broadcast Detail"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-xs)",
        color: muted,
        margin: 0
      }
    }, fmt(b.sentAt, true)))), pending ? /*#__PURE__*/React.createElement(StatusCard, {
      status: "pending",
      icon: /*#__PURE__*/React.createElement(I.Loader, {
        className: "wa-spin"
      }),
      title: "Sending...",
      rate: "Pending"
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-xs)",
        color: muted,
        margin: 0
      }
    }, "Broadcasting to ", b.recipients.length, " recipients. Results will appear here automatically once complete."), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        borderRadius: 999,
        background: "hsl(var(--status-pending) / 0.2)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        width: "66%",
        borderRadius: 999,
        background: "hsl(var(--status-pending))"
      },
      className: "wa-pulse"
    }))) : /*#__PURE__*/React.createElement(StatusCard, {
      status: allSuccess ? "success" : "warning",
      icon: allSuccess ? /*#__PURE__*/React.createElement(I.CheckCircle, null) : /*#__PURE__*/React.createElement(I.AlertTriangle, null),
      title: allSuccess ? "All Delivered" : "Partially Delivered",
      rate: d.successRate,
      metrics: [{
        value: d.totalRecipients,
        label: "Total"
      }, {
        value: d.successCount,
        label: "Success",
        color: "hsl(var(--status-success))"
      }, {
        value: d.failedCount,
        label: "Failed",
        color: d.failedCount ? "hsl(var(--status-failed))" : muted
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-xs)",
        fontWeight: 500,
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        color: muted,
        margin: 0
      }
    }, "Message"), /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1px solid hsl(var(--border))",
        borderRadius: "var(--radius)",
        background: "hsl(var(--card))",
        padding: 12,
        fontSize: "var(--text-sm)",
        color: fg,
        whiteSpace: "pre-wrap"
      }
    }, b.message)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-xs)",
        fontWeight: 500,
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        color: muted,
        margin: 0,
        display: "flex",
        alignItems: "center",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement(I.Users, {
      width: 12,
      height: 12
    }), " Recipients (", recips.length, ")"), /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1px solid hsl(var(--border))",
        borderRadius: "var(--radius)",
        overflow: "hidden"
      }
    }, recips.map((r, i) => {
      const isFailed = failedNums.has(r.whatsappNumber.replace(/^\+/, ""));
      return /*#__PURE__*/React.createElement("div", {
        key: r.id,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: 12,
          borderTop: i ? "1px solid hsl(var(--border))" : "none"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: "var(--text-sm)",
          fontWeight: 500,
          margin: 0,
          color: fg
        }
      }, r.name), /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: "var(--text-2xs)",
          color: muted,
          margin: 0
        }
      }, r.whatsappNumber)), pending ? /*#__PURE__*/React.createElement(I.Clock, {
        width: 16,
        height: 16,
        style: {
          color: "hsl(var(--status-pending))"
        },
        className: "wa-pulse"
      }) : isFailed ? /*#__PURE__*/React.createElement(I.XCircle, {
        width: 16,
        height: 16,
        style: {
          color: "hsl(var(--status-failed))"
        }
      }) : /*#__PURE__*/React.createElement(I.CheckCircle, {
        width: 16,
        height: 16,
        style: {
          color: "hsl(var(--status-success))"
        }
      }));
    }))));
  }

  // ---------------- Settings ----------------
  function Settings({
    onLogout
  }) {
    return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(PageHead, {
      title: "Settings",
      sub: "Manage your account"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        border: "1px solid hsl(var(--border))",
        borderRadius: "var(--radius)",
        background: "hsl(var(--card))",
        padding: 16
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      brand: true,
      size: "md"
    }, /*#__PURE__*/React.createElement(I.User, null)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-sm)",
        fontWeight: 500,
        margin: 0,
        color: fg
      }
    }, "Irene Suthiono"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-xs)",
        color: muted,
        margin: 0
      }
    }, "Senior Premier Banking Manager"))), /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1px solid hsl(var(--border))",
        borderRadius: "var(--radius)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("button", {
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 16px",
        background: "none",
        border: "none",
        cursor: "pointer",
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement(I.Shield, {
      width: 16,
      height: 16,
      style: {
        color: muted
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: "var(--text-sm)",
        color: fg
      }
    }, "Privacy & Security"), /*#__PURE__*/React.createElement(I.ChevronRight, {
      width: 16,
      height: 16,
      style: {
        color: muted
      }
    }))), /*#__PURE__*/React.createElement(Button, {
      variant: "destructive",
      block: true,
      style: {
        height: 44,
        borderRadius: "var(--radius-xl)"
      },
      onClick: onLogout
    }, /*#__PURE__*/React.createElement(I.LogOut, {
      width: 16,
      height: 16
    }), " Logout"));
  }
  window.WAScreens = {
    Login,
    Dashboard,
    Customers,
    Broadcast,
    BroadcastDetail,
    Settings
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wa-broadcast/screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BottomNav = __ds_scope.BottomNav;

__ds_ns.ListRow = __ds_scope.ListRow;

__ds_ns.SelectableTile = __ds_scope.SelectableTile;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.StatusCard = __ds_scope.StatusCard;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
