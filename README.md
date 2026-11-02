# E-commerce UI Improvement — Bài tập cá nhân Buổi 1 và Buổi 2

- **Sinh viên:** Nguyễn Linh Thùy Trang
- **MSSV:** 31241026274
- **Môn học:** Phát triển ứng dụng WEB/TMĐT
- **Giảng viên:** TS. Nguyễn Mạnh Tuấn

## 1. Giới thiệu bài tập

Dự án cải tiến giao diện danh mục sản phẩm chăm sóc da mặt, tiếp tục phát triển từ bài Buổi 1. Buổi 2 tập trung thực hành HTML5, CSS selector, Box Model, Flexbox, CSS Grid và trạng thái tương tác.

Đây là thiết kế độc lập phục vụ học tập, không phải website bán hàng chính thức của Guardian. Ảnh SVG, tên, giá và thời điểm sử dụng của bốn sản phẩm đều là dữ liệu minh họa.

## 2. Website tham khảo và khu vực cải tiến

- **Website tham khảo:** [Guardian Việt Nam](https://www.guardian.com.vn/).
- **Khu vực cải tiến:** danh mục chăm sóc da mặt, bộ lọc và danh sách sản phẩm.
- **Định hướng:** giúp người xem nhận biết nhóm sản phẩm, thu hẹp lựa chọn và đọc thông tin sản phẩm rõ hơn.

Buổi 1 đã xây dựng bốn thẻ sản phẩm, lựa chọn danh mục, bộ lọc thời điểm và giá, sắp xếp giá, số kết quả và trạng thái không có kết quả. JavaScript trong `filter.js` phục vụ các chức năng lọc và sắp xếp đã có; trọng tâm Buổi 2 là HTML và CSS.

## 3. Kỹ thuật HTML5 và CSS3 đã thực hành

| Kỹ thuật | Áp dụng trong bài |
| --- | --- |
| HTML ngữ nghĩa | `header`, `nav`, `main`, `section`, `aside`, `article`, `footer` phân chia các khu vực. |
| Tiêu đề và hình ảnh | `h1`, `h2`, `h3` tổ chức nội dung; `img` có `alt` mô tả ảnh. |
| Biểu mẫu | `label`, `select`, `option`, `input`, `fieldset`, `legend` tạo các điều khiển lọc. |
| Nội dung mở rộng | `details` và `summary` đóng/mở thông tin sản phẩm. |
| Selector | Selector theo thẻ, class và phần tử nằm bên trong, như `.card`, `.price`, `.card h3`. |
| Box Model | Điều chỉnh margin, padding, border, border-radius; sử dụng `box-sizing: border-box`. |
| Flexbox | `.list-top` căn nhóm tiêu đề và nhóm sắp xếp; thực hành `justify-content`, `align-items`, `gap`, `flex-wrap`. |
| CSS Grid | `.grid` chia danh sách thành các cột; thử hai và ba cột, thay đổi khoảng cách. |
| Hình ảnh | `.photo img` dùng `width: 100%`, `height: auto`, `object-fit: contain`. |
| Tương tác | Hover và transition cho `.card summary`; giữ focus-visible để nhận biết vị trí điều hướng bằng bàn phím. |
| Media query | Điều chỉnh số cột theo chiều rộng cửa sổ. |

## 4. Hướng dẫn chạy website

1. Tải toàn bộ repository bằng **Code → Download ZIP** và giải nén, hoặc clone repository.
2. Giữ nguyên cấu trúc: `index.html` ở thư mục gốc, `style.css` trong `css/`, các ảnh trong `images/`, và `filter.js` ở thư mục gốc.
3. Mở `index.html` bằng trình duyệt hoặc dùng Live Server trong VS Code.
4. Bật JavaScript để sử dụng bộ lọc và sắp xếp. Font Montserrat được tải từ Google Fonts; khi không tải được, trình duyệt dùng font dự phòng sans-serif.
5. Thử chọn nhóm “Làm sạch”, đổi mức giá, sắp xếp và mở/đóng “Xem thông tin”.

Dự án không yêu cầu backend, cơ sở dữ liệu, Bootstrap hoặc Tailwind CSS.

## 5. Những thay đổi trong Buổi 2

- Sửa lựa chọn “Làm sạch” bị thiếu thẻ mở `option`; khai báo giá trị các nhóm rõ ràng.
- Bổ sung `aria-labelledby` cho từng `article`, liên kết với ID duy nhất của tiêu đề sản phẩm.
- Đổi font mặc định từ Arial sang Montserrat.
- Điều chỉnh viền, bo góc, padding, khoảng cách, tên và giá bằng các class chung của cả bốn thẻ sản phẩm.
- Thử các cách căn Flexbox trong `.list-top`; chọn `space-between`, `flex-start`, `gap: 16px` và cho phép xuống dòng.
- Thử Grid hai cột, ba cột và các khoảng cách; chọn cấu hình chính ba cột với `gap: 18px`.
- Thêm hiệu ứng đổi màu khi hover và transition 0,2 giây cho “Xem thông tin”; giữ quy tắc focus-visible hiện có.
- Chuyển ngưỡng một cột từ 359 px sang 420 px để dành thêm chiều rộng cho nội dung thẻ trên điện thoại nhỏ.

### Kiểm tra và minh chứng

Quá trình thực hành, ảnh trước–sau, ảnh giao diện hoàn thiện, bảng kiểm thử và bảy câu trả lời kiến thức được trình bày trong báo cáo Word nộp kèm. Nội dung cần kiểm tra gồm tải HTML/CSS, ảnh, liên kết, lọc/sắp xếp, mở/đóng thông tin, hover/focus và bố cục màn hình nhỏ.

Sau khi cập nhật mã lên GitHub, cần mở lại bản triển khai để đối chiếu với bản chạy trên máy; việc có commit mới không thay thế cho kiểm tra giao diện.

## 6. Sử dụng AI và cách kiểm tra kết quả

Em sử dụng AI để hỗ trợ phân tích giao diện, giải thích mã và đề xuất các thay đổi nhỏ. Em tự chọn phạm vi, chỉnh sửa tệp trong VS Code, thử các thông số và đối chiếu trên trình duyệt.

Ví dụ, em đối chiếu lỗi thiếu thẻ mở `option` trong mã trước khi sửa. Khi AI nhận xét CSS cơ bản đã đáp ứng yêu cầu, em vẫn chọn đổi sang Montserrat theo mong muốn trình bày. Với Flexbox và Grid, em thử nhiều giá trị trước khi chọn cấu hình cuối.

Nhật ký, prompt tiêu biểu và phần điều chỉnh được ghi trong [AI_USAGE.md](AI_USAGE.md). Các đề xuất như dùng Flexbox dọc trong thẻ hoặc chuẩn hóa khung ảnh bằng aspect-ratio không được ghi là đã thực hiện nếu chưa áp dụng trong mã cuối.

## 7. Đường dẫn dự án

- **Repository:** https://github.com/ngthytrang/-ecommerce-ui-improvement.
- **Website:** https://ngthytrang.github.io/-ecommerce-ui-improvement./

Repository tiếp tục được sử dụng từ Buổi 1; lịch sử commit lưu các phiên bản mã nguồn trước đó.
