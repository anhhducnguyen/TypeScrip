let firstName: string = "nguyen";
let lastName: string = "anh";

let fullName: string;

// Kiểm tra xem chuỗi có tồn tại và có ít nhất 1 ký tự
if (firstName.length > 0 && lastName.length > 0) {
    // Chuyển ký tự đầu thành chữ hoa và nối với phần còn lại
    firstName = firstName[0].toLocaleUpperCase() + firstName.slice(1);
    lastName = lastName[0].toLocaleUpperCase() + lastName.slice(1);

    // Ghép thành họ và tên đầy đủ
    fullName = firstName + " " + lastName;
    console.log(fullName); // Output: Nguyen Anh
}
