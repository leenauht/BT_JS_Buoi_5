/**
 * Đầu vào:
 *      Điểm chuẩn: n
 *      Điểm 3 môn thi: x, y, z (giả sử điểm từ 0 - 10)
 *      Điểm khu vực: A - 2đ, B - 1đ, C - 0.5đ, X - 0đ
 *      Điểm đối tượng: 0 - 0đ, 1 - 2.5đ, 2 - 1.5đ, 3 - 1đ
 *
 * Xứ lý: Điểm tổng kết = x + y + z + điểm khu vực + điểm đối tượng
 *      if (x > 0 && y > 0 && z > 0 && điểm tổng kết >= điểm chuẩn)
 *             true => Thí sinh đậu
 *      if (x === 0 || y === 0 || z === 0)
 *             true => Thí sinh rớt do có môn 0 điểm
 *      if (điểm tổng kết < điểm chuẩn)
 *             true => Thí sinh rớt
 * Đầu ra:
 *      Xuất ra màn hình thí sinh đậu hoặc rớt và tổng điểm thi
 */

function getArea() {
  const area = document.getElementById("area").value;
  console.log(area);

  let pointArea = 0;
  if (area === "A") {
    pointArea = 2;
  } else if (area === "B") {
    pointArea = 1;
  } else if (area === "C") {
    pointArea = 0.5;
  } else if (area === "X") {
    pointArea = 0;
  }
  return pointArea;
}

function getObject() {
  const object = document.getElementById("object").value * 1;
  console.log(object);

  let pointObject = 0;
  if (object === 0) {
    pointObject = 0;
  } else if (object === 1) {
    pointObject = 2.5;
  } else if (object === 2) {
    pointObject = 1.5;
  } else if (object === 3) {
    pointObject = 1;
  }
  return pointObject;
}

function checkInputInvalid(passingScore, point_1, point_2, point_3) {
  if (
    point_1 < 0 ||
    point_1 > 10 ||
    point_2 < 0 ||
    point_2 > 10 ||
    point_3 < 0 ||
    point_3 > 10 ||
    passingScore <= 0
  ) {
    return false;
  }
  return true;
}

function hanldeCaculateExamScore() {
  const passingScore = document.getElementById("passingScore").value * 1;
  const point_1 = document.getElementById("point_1").value * 1;
  const point_2 = document.getElementById("point_2").value * 1;
  const point_3 = document.getElementById("point_3").value * 1;
  const isValidate = checkInputInvalid(passingScore, point_1, point_2, point_3);

  const pointArea = getArea();
  const pointObject = getObject();
  let total = 0;

  if (!isValidate) {
    alert("Điểm không hợp lệ! Điểm 3 môn thi từ 0 - 10");
    return;
  }

  total = point_1 + point_2 + point_3 + pointArea + pointObject;
  if (total >= passingScore && point_1 > 0 && point_2 > 0 && point_3 > 0) {
    document.getElementById(
      "divResult"
    ).innerHTML = `<p>Thí sinh đã đậu và tổng điểm của bạn là: ${total}</p>`;
  } else if (point_1 === 0 || point_2 === 0 || point_3 === 0) {
    document.getElementById(
      "divResult"
    ).innerHTML = `<p>Thí sinh đã rớt do có môn 0 điểm và tổng điểm của bạn là: ${total}</p>`;
  } else {
    document.getElementById(
      "divResult"
    ).innerHTML = `<p>Thí sinh đã rớt và tổng điểm của bạn là: ${total}</p>`;
  }
}
