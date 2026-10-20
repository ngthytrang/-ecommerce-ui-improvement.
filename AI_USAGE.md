# AI Usage Log

## 1. Công cụ AI
- Tên công cụ: ChatGPT.

## 2. Mục đích sử dụng
- Hỗ trợ phân tích giao diện và chức năng của website Guardian.
- Đề xuất cải tiến danh mục sản phẩm chăm sóc da mặt.
- Hỗ trợ tạo và giải thích mã HTML5, CSS3.
- Bổ sung JavaScript thuần để xử lý bộ lọc và sắp xếp.
- Hướng dẫn chạy thử, kiểm tra giao diện và đưa mã lên GitHub.

## 3. Prompt đã sử dụng

### Prompt 1: Đề xuất phương án thiết kế
“Tôi đang thực hiện bài tập phát triển giao diện website thương mại điện tử bằng HTML5 và CSS3.
Tôi muốn cải tiến khu vực: danh mục sản phẩm.
Đối tượng sử dụng: khách hàng mua sắm trực tuyến tại Việt Nam.
Hãy đề xuất:
1. Bố cục giao diện.
2. Các thành phần HTML cần sử dụng.
3. Cách tổ chức CSS.
4. Cách hiển thị trên máy tính và điện thoại.
5. Những điểm cần kiểm tra về khả năng sử dụng.
Trước tiên, hãy giải thích phương án thiết kế.
Chưa tạo toàn bộ mã nguồn cho đến khi tôi yêu cầu.”

### Prompt 2: Tạo mã nguồn
“Dựa trên phương án đã thống nhất, hãy tạo một trang giao diện thương mại điện tử bằng HTML5 và CSS3.
Yêu cầu:
- Giao diện có tiêu đề và khu vực sản phẩm.
- Có tối thiểu 4 sản phẩm mẫu.
- Mỗi sản phẩm có hình ảnh, tên, giá và nút thao tác.
- Bố cục phù hợp với màn hình máy tính và điện thoại.
- Mã HTML có cấu trúc rõ ràng.
- CSS được tách thành file riêng.
- Không sử dụng backend hoặc cơ sở dữ liệu.
- Không đưa thư viện hoặc thành phần không cần thiết vào dự án.
Giải thích cách chạy trang web và những phần tôi cần kiểm tra.”

### Prompt 3: Điều chỉnh theo ảnh tham khảo
“Đây là trang danh mục sản phẩm chăm sóc da mặt, tạo cho nó trực quan hơn và có bộ lọc nhanh như sản phẩm ban ngày, ban đêm, thanh giá.”

Tôi gửi kèm ảnh menu danh mục chăm sóc da mặt của Guardian để AI có căn cứ đề xuất giao diện.

## 4. Kết quả AI đề xuất
- Phân tích năm khu vực: trang chủ, danh mục, chi tiết sản phẩm, tìm kiếm và giỏ hàng.
- Thiết kế danh mục gồm các nhóm làm sạch, dưỡng da và chống nắng.
- Tạo bốn sản phẩm mẫu có ảnh, tên, giá và phần xem thông tin.
- Bổ sung lọc nhanh ban ngày/ban đêm và thanh chọn giá tối đa.
- Bổ sung sắp xếp giá, số kết quả và nút đặt lại bộ lọc.
- Điều chỉnh bố cục theo kích thước màn hình bằng CSS.
- Tách mã thành index.html, style.css và filter.js.

Hình ảnh, giá và phân loại thời điểm sử dụng là dữ liệu minh họa, không phải thông tin sản phẩm thực tế của Guardian.

## 5. Kiểm tra và điều chỉnh

### Đối chiếu nhận xét AI với website
Trong báo cáo, tôi đã bổ sung các nhận xét:
- Trang chủ đã có lối tắt đến danh mục, nên không giữ đề xuất bổ sung lối tắt như một chức năng đang thiếu.
- Các sản phẩm tương tự đã được nhóm trong danh mục và hiển thị rõ mức giá.
- Trang chi tiết sản phẩm đã trực quan và đầy đủ.
- Tìm kiếm đã có sản phẩm liên quan và lịch sử tìm kiếm.
- Giỏ hàng đã có các chức năng được đề cập trong nhận xét.

Các nhận xét này giúp điều chỉnh đề xuất AI, tránh xem những vấn đề AI dự đoán là lỗi đã được xác nhận.

### Điều chỉnh yêu cầu thiết kế
Tôi lựa chọn danh mục chăm sóc da mặt làm phạm vi cải tiến, cung cấp ảnh tham khảo và yêu cầu bổ sung bộ lọc theo thời điểm sử dụng cùng thanh giá. AI hỗ trợ tạo phiên bản mới theo yêu cầu.

## 6. Phần tôi hiểu và có thể giải thích
Các thành phần mã nguồn quan trọng cần nắm gồm:
- HTML: tổ chức tiêu đề, bộ lọc và danh sách sản phẩm.
- article: chứa nội dung của từng sản phẩm.
- img và alt: hiển thị ảnh và cung cấp mô tả thay thế.
- label, input và select: tạo các điều khiển lọc, sắp xếp.
- details và summary: đóng/mở thông tin sản phẩm.
- CSS Grid: chia danh sách sản phẩm thành các cột.
- Media queries: thay đổi bố cục theo chiều rộng màn hình.
- data-price, data-time và data-category: lưu dữ liệu mẫu
  phục vụ việc lọc sản phẩm.
- Hàm applyFilters(): kết hợp điều kiện lọc, ẩn/hiện sản phẩm
  và cập nhật số kết quả.
- Array.sort(): sắp xếp sản phẩm theo giá.