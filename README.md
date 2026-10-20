# E-commerce UI Improvement

Sinh viên: Nguyễn Linh Thùy Trang  
MSSV: 31241026274  
Môn học: Phát triển ứng dụng Web/TMĐT

## 1. Giới thiệu
Dự án đề xuất cải tiến giao diện danh mục sản phẩm chăm sóc da mặt, tham khảo website Guardian Việt Nam. Nội dung tập trung vào phân nhóm trực quan và thu hẹp danh sách theo nhóm sản phẩm, thời điểm sử dụng và mức giá.

Đây là thiết kế độc lập phục vụ học tập. Hình ảnh, tên, giá và phân loại thời điểm là dữ liệu minh họa, không đại diện thông tin bán hàng hoặc hướng dẫn sử dụng sản phẩm Guardian.

## 2. Website tham khảo
- Tên website: Guardian Việt Nam.
- URL: https://www.guardian.com.vn/
- Khu vực khảo sát: trang chủ, danh mục, chi tiết sản phẩm, tìm kiếm và giỏ hàng.
- Khu vực cải tiến: danh mục sản phẩm chăm sóc da mặt.

## 3. Chức năng
- Hiển thị 4 sản phẩm mẫu có hình ảnh, tên, giá và nút xem thông tin.
- Đóng/mở mô tả bằng details/summary.
- Lọc theo nhóm làm sạch, dưỡng da, chống nắng.
- Lọc thời điểm: tất cả, ban ngày, ban đêm.
- Chọn giá tối đa bằng thanh kéo và kết hợp các điều kiện lọc.
- Sắp xếp giá tăng dần hoặc giảm dần.
- Cập nhật số kết quả, hiển thị trạng thái không có kết quả và đặt lại bộ lọc.
- Thích ứng bố cục theo chiều rộng màn hình.

## 4. Công nghệ
- HTML5: cấu trúc và nội dung.
- CSS3: định dạng và responsive.
- JavaScript thuần: phần mở rộng để bộ lọc hoạt động tại trình duyệt.
- Không thư viện ngoài, backend hoặc cơ sở dữ liệu.

## 5. Cách chạy
1. Tải toàn bộ dự án và giải nén nếu cần.
2. Giữ index.html, style.css, filter.js và images/ trong cùng thư mục dự án.
3. Mở index.html bằng Chrome hoặc trình duyệt tương đương.
4. Bật JavaScript để sử dụng bộ lọc; không cần cài đặt thêm.

## 6. Cải tiến đã thực hiện
Ảnh khảo sát thể hiện menu chăm sóc da mặt với nhiều nhóm liên kết bằng chữ. Trong báo cáo, sinh viên lựa chọn vấn đề danh mục lớn, nhiều cấp để đề xuất cách truy cập đơn giản hơn; đây là nhận xét khảo sát cá nhân, chưa có đo lường thời gian tìm kiếm.

Bản thiết kế mới:
- Dùng các ô lựa chọn làm sạch, dưỡng da và chống nắng.
- Thêm bộ lọc nhanh ban ngày/ban đêm và thanh giá tối đa.
- Trình bày thống nhất ảnh, tên, giá và phần xem thông tin.
- Bổ sung sắp xếp, số kết quả và thông báo khi không có sản phẩm phù hợp.
- Điều chỉnh số cột theo màn hình.

### Kết quả đối chiếu phân tích AI
Theo các nhận xét sinh viên ghi trong báo cáo:
- Trang chủ đã có lối tắt đến danh mục, nên không giữ đề xuất bổ sung như thể tính năng này đang thiếu.
- Sản phẩm tương tự được nhóm trong danh mục và giá đã hiển thị rõ.
- Trang chi tiết được ghi nhận là trực quan và đầy đủ.
- Tìm kiếm đã có sản phẩm liên quan và lịch sử tìm kiếm.
- Sinh viên ghi nhận giỏ hàng đã có các chức năng được đề xuất; báo cáo chưa mô tả từng kịch bản kiểm tra.

### Tình trạng kiểm tra giao diện mới
Báo cáo được cung cấp chưa ghi kết quả chạy thử giao diện mới hoặc một thay đổi mã do sinh viên tự thực hiện. Phần này cần cập nhật sau khi thực hành, trước khi nộp; không xác nhận đã kiểm thử chỉ từ phần đề xuất thiết kế.

## 7. Hỗ trợ từ AI
ChatGPT hỗ trợ phân tích, đề xuất bố cục, tạo HTML/CSS, bổ sung JavaScript, ảnh SVG minh họa và hướng dẫn chạy.

Sinh viên bổ sung ảnh menu tham khảo, chọn phạm vi danh mục chăm sóc da mặt và ghi nhận xét đối chiếu kết quả AI trong báo cáo. Các nhận xét về tính năng đã có được dùng để điều chỉnh đề xuất, tránh coi tất cả dự đoán AI là lỗi thực tế. Nhật ký chi tiết nằm trong AI_USAGE.md.
