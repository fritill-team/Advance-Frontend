$('[data-input-mask=credit_card_number]').inputmask({
  mask: "9999 9999 9999 9999",
  keepStatic: true,
  "placeholder": "0000 0000 0000 0000"
});
$('[data-input-mask=expiry-input]').inputmask({mask: "99 / 99", keepStatic: true, "placeholder": "MM / YY"});
$('[data-input-mask=cvv]').inputmask({mask: "999", keepStatic: true, "placeholder": "000"});
