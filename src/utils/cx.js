// 組合 className，忽略 falsy 值
const cx = (...classes) => classes.filter(Boolean).join(" ");

export default cx;
