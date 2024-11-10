/**
 * Đầu vào: - Tên user: Nguyễn Văn A
 *          - Số kw điện: n
 *
 * Xử lý:   - let total = 0
 *          - if (n >= 0 && n <= 50)
 *                true => total = 500 * n
 *          - if (n > 50 && n <= 100)
 *                true => total = 500 * 50 + 650 * (n - 50)
 *          - if (n > 100 && n <= 200)
 *                true => total = 500 * 50 + 650 * 50 + 850 * (n - 100)
 *          - if (n > 200 && n <= 350)
 *                true => total = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * (n - 200)
 *          - if (n > 350)
 *                true => total = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + 1300 * (n - 350)
 *
 * Đầu ra:
 *      - Xuất ra màn hình: Số tiền Nguyễn Văn A phải trả là total
 */

function checkInputInvalid(numberKw) {
  if (numberKw < 0) {
    return false;
  }
  return true;
}

function caculateElectricityBill(numberKw) {
  let total = 0;
  if (numberKw >= 0 && numberKw <= 50) {
    total = numberKw * 500;
  } else if (numberKw > 50 && numberKw <= 100) {
    total = 500 * 50 + (numberKw - 50) * 650;
  } else if (numberKw > 100 && numberKw <= 200) {
    total = 500 * 50 + 650 * 50 + (numberKw - 100) * 850;
  } else if (numberKw > 200 && numberKw <= 350) {
    total = 500 * 50 + 650 * 50 + 100 * 850 + (numberKw - 200) * 1100;
  } else {
    total =
      500 * 50 + 650 * 50 + 100 * 850 + 150 * 1100 + (numberKw - 350) * 1300;
  }
  return total;
}

function handleElectricityBill() {
  const nameUser = document.getElementById("nameUser").value;
  const numberKw = document.getElementById("numberKw").value * 1;
  const isValidate = checkInputInvalid(numberKw);
  let total = caculateElectricityBill(numberKw);

  if (!isValidate) {
    alert("Số kw điện không hợp lệ!");
    return;
  }

  document.getElementById(
    "divInform"
  ).innerHTML = `<p>Số tiền ${nameUser} phải trả là: ${total.toLocaleString()} vnđ</p>`;
}
