$('.card-number-input').inputmask({
  mask: "9999 9999 9999 9999",
  keepStatic: true,
  "placeholder": "0000 0000 0000 0000"
});
$('.expiry-input').inputmask({mask: "99 / 99", keepStatic: true, "placeholder": "MM / YY"});
$('.cvv-input').inputmask({mask: "999", keepStatic: true, "placeholder": "000"});
