/**
 * Đầu vào: - Mã khách hàng: Nguyễn Văn A
 *          - Loại khách hàng: x (Residential Packages, Business Packages)
 *              + Residential Packages: Phí sử lý hóa đơn 4.5$
 *                                      Phí dịch vụ cơ bản: 20.5$
 *                                      Thuê kênh cao cấp: 7.5$ / kênh
 *              + Business Packages: Phí sử lý hóa đơn 15$
 *                                   Phí dịch vụ cơ bản: 75$ tổng 10 kết nối đầu, mỗi kết nối tiếp thêm 5$ / kết nối
 *                                   Thuê kênh cao cấp: 50$ / kênh
 *          - Số kết nối: y
 *          - Số kênh cao cấp: z
 *
 * Xử lý:   - let total = 0
 *          - if (x === "Residential Packages")
 *              true => ẩn hoặc disable số kết nối: y => total = 4.5 + 20.5 + 7.5 * z
 *          - if (x === Residential Packages)
 *              true => Ennable số kết nối: y => total = 15 + 75 + y * 5 + 50 * z
 *
 * Đầu ra:
 *      - Xuất ra màn hình: Hóa đơn của khách hàng Nguyễn Văn A loại x
 *                          Tổng số tiền phải thanh toán là: total
 */

// function verifyCustomerType() {}
// Check loại khách hàng
getCustomerType();

function getCustomerType() {
  const customerType = document.getElementById("customerType").value;
  let elmNumberOfConnection = document.getElementById("numberOfConnection");

  if (customerType === "Residential Packages") {
    elmNumberOfConnection.disabled = true;
  } else if (customerType === "Business Packages") {
    elmNumberOfConnection.disabled = false;
  }
  return elmNumberOfConnection.disabled;
}

function checkInputInvalid(numberOfConnection, numberOfPermiumChannel) {
  if (numberOfConnection < 0 || numberOfPermiumChannel < 0) {
    return false;
  }
  return true;
}

function handleBilling() {
  const customerCode = document.getElementById("customerCode").value;
  const customerType = document.getElementById("customerType").value;
  const numberOfConnection =
    document.getElementById("numberOfConnection").value * 1;
  const numberOfPermiumChannel =
    document.getElementById("numberOfPermiumChannel").value * 1;
  let isValidate = checkInputInvalid(
    numberOfConnection,
    numberOfPermiumChannel
  );

  let type = getCustomerType();
  console.log(type);

  let total = 0;

  if (!isValidate) {
    alert("Số kết nối và số kênh cao cấp bạn nhập phải lớn hơn hoặc bằng 0!");
    return;
  }

  if (type) {
    total = 4.5 + 20.5 + 7.5 * numberOfPermiumChannel;
  } else {
    total = 15 + 75 + numberOfConnection * 5 + 50 * numberOfPermiumChannel;
  }

  let result = `
  <p>Hóa đơn của khách hàng ${customerCode} loại ${customerType}</p>
  <p>Tổng số tiền phải thanh toán là: ${total}$</p>
  `;
  document.getElementById("divInform").innerHTML = result;
}
