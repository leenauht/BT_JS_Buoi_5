/**
 * Đầu vào: - Họ tên user: Nguyễn Văn A
 *          - Tổng thu nhập năm: x
 *          - Số người phụ thuộc: y
 *
 * Xử lý:   - let total = 0
 *          - let taxableIncome = 0
 *          => taxableIncome = x - 4 - y * 1.6
 *          - if (taxableIncome >= 0 && taxableIncome <= 60)
 *                true => total = taxableIncome * 0.05
 *          - if (taxableIncome > 60 && taxableIncome <= 120)
 *                true => total = taxableIncome * 0.1
 *          - if (taxableIncome > 120 && taxableIncome <= 210)
 *                true => total = taxableIncome * 0.15
 *          - if (taxableIncome > 210 && taxableIncome <= 384)
 *                true => total = taxableIncome * 0.2
 *          - if (taxableIncome > 384 && taxableIncome <= 624
 *                true => total = taxableIncome * 0.25
 *          - if (taxableIncome > 624 && taxableIncome <= 960)
 *                true => total = taxableIncome * 0.3
 *          - if (taxableIncome > 960)
 *                true => total = taxableIncome * 0.35
 * Đầu ra:
 *      - Xuất ra màn hình: Thuế thu nhập cá nhân của Nguyễn Văn A là: total
 */

function handleTaxRateCheck(taxableIncome) {
  let total = 0;

  if (taxableIncome <= 60) {
    total = taxableIncome * 0.05;
  } else if (taxableIncome > 60 && taxableIncome <= 120) {
    total = taxableIncome * 0.1;
  } else if (taxableIncome > 120 && taxableIncome <= 210) {
    total = taxableIncome * 0.15;
  } else if (taxableIncome > 210 && taxableIncome <= 384) {
    total = taxableIncome * 0.2;
  } else if (taxableIncome > 384 && taxableIncome <= 624) {
    total = taxableIncome * 0.25;
  } else if (taxableIncome > 624 && taxableIncome <= 960) {
    total = taxableIncome * 0.3;
  } else {
    total = taxableIncome * 0.35;
  }

  return total;
}

function checkInputInvalid(grossIncome, numberOfDependent) {
  if (grossIncome <= 0 || numberOfDependent < 0) {
    return false;
  }
  return true;
}

function handlePresonalIncomeTax() {
  const nameUser = document.getElementById("nameUser").value;
  const grossIncome = document.getElementById("grossIncome").value * 1;
  const numberOfDependent =
    document.getElementById("numberOfDependent").value * 1;

  const isValidate = checkInputInvalid(grossIncome, numberOfDependent);

  if (!isValidate) {
    alert(
      "Tổng thu nhập năm phải lớn hơn 0 và số người phụ thuộc lớn hơn hoặc bằng 0!"
    );
    return;
  }

  let taxableIncome = 0;
  taxableIncome = grossIncome - 4 - 1.6 * numberOfDependent;

  const paymentIncomeTax = handleTaxRateCheck(taxableIncome);
  let result = `<p>Thuế thu nhập cá nhân phải trả của ${nameUser} là: ${paymentIncomeTax.toFixed(
    2
  )} triệu</p>`;
  document.getElementById("divInform").innerHTML = result;
}
