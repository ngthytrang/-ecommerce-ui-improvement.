# Nhật ký sử dụng AI — Buổi 2

**Sinh viên:** Nguyễn Linh Thùy Trang — **MSSV:** 31241026274  
**Môn học:** Phát triển ứng dụng WEB/TMĐT

## 1. Công cụ và mục đích sử dụng

- **Công cụ:** ChatGPT.
- **Phạm vi:** hỗ trợ rà soát HTML/CSS, giải thích thuộc tính, đề xuất sửa đổi, hướng dẫn kiểm tra giao diện và hoàn thiện tài liệu Buổi 2.
- **Vai trò của em:** chọn phạm vi cải tiến, sửa mã trong VS Code, thử các thông số, đối chiếu trên trình duyệt và ghi nhận kết quả.

Nhật ký này chỉ trình bày Buổi 2. Nội dung Buổi 1 được lưu trong lịch sử commit của repository.

## 2. Prompt tiêu biểu và kết quả ở Buổi 2

Các prompt dưới đây là **bản tóm tắt nội dung trao đổi**, không phải bản chép nguyên văn toàn bộ cuộc trò chuyện. Khi cần minh chứng nguyên văn, đối chiếu lịch sử chat hoặc ảnh chụp đã lưu. Mã HTML/CSS được gửi kèm trong quá trình hỏi AI; không lặp lại toàn bộ mã trong nhật ký này.

### 2.1. Rà soát giao diện và HTML

**Nội dung prompt:**

> Dựa trên HTML hiện tại, hãy kiểm tra cấu trúc HTML5, thứ bậc tiêu đề, hình ảnh và alt, liên kết, đóng thẻ và lồng thẻ. Phân biệt lỗi rõ ràng với đề xuất cải thiện. Chỉ đề xuất các sửa đổi cần thiết, giữ nguyên CSS và JavaScript.

**AI đề xuất:** sửa lựa chọn “Làm sạch” thiếu thẻ mở `option`; bổ sung tên cho từng `article` bằng `aria-labelledby`; giữ cấu trúc ngữ nghĩa và thứ bậc tiêu đề đang phù hợp.

**Em thực hiện:** sửa `option`, thêm ID cho bốn `h3` và tham chiếu tương ứng trên `article`; giữ nguyên class và dữ liệu phục vụ bộ lọc. Kiểm tra lựa chọn “Làm sạch” xuất hiện và thử lọc nhóm này.

### 2.2. CSS cơ bản và font chữ

**Nội dung prompt:**

> Kiểm tra liên kết CSS, font, màu, nền, margin của body và kích thước ảnh. Em muốn đổi font chữ của trang sang Montserrat; hãy chỉ rõ phần HTML và CSS cần sửa.

**AI đề xuất:** CSS cơ bản đã có; muốn đổi font thì thêm liên kết Google Fonts và sửa font-family của body.

**Em thực hiện:** chủ động chọn Montserrat, thêm liên kết font, giữ liên kết CSS nội bộ một lần và thay font-family. Không thay thêm màu nền hoặc margin khi chưa cần.

### 2.3. Selector và Box Model

**Nội dung prompt:**

> Hướng dẫn điều chỉnh khoảng cách, đường viền, tên, giá và phần “Xem thông tin” của thẻ sản phẩm bằng các class hiện có. Giải thích selector, margin, padding và border-box; chỉ rõ phạm vi ảnh hưởng.

**AI đề xuất:** chỉnh `.card`, `.card-body`, `.card h3`, `.price`, `.card .small`, `.card summary` và phần mô tả mở rộng.

**Em thực hiện:** áp dụng cho cả bốn sản phẩm dùng chung class, không chỉ riêng sữa rửa mặt. Chọn padding nội dung 20 px, trên màn hình nhỏ 14 px; điều chỉnh viền, bo góc và cách trình bày tên/giá. So sánh tại cùng chiều rộng màn hình.

### 2.4. Flexbox

**Nội dung prompt:**

> Hướng dẫn thực hành Flexbox tại `.list-top`: xác định phần tử cha và con trực tiếp, thử justify-content, align-items và gap; giải thích cách quan sát kết quả.

**AI đề xuất:** thử flex-start, center, space-between; thử căn đầu hoặc giữa và đổi gap.

**Em thực hiện:** thử các giá trị rồi chọn `justify-content: space-between`, `align-items: flex-start`, `gap: 16px`, `flex-wrap: wrap`. Khi thử gap, dùng flex-start để dễ quan sát thay đổi khoảng cách.

### 2.5. CSS Grid và hình ảnh

**Nội dung prompt:**

> Với danh sách sản phẩm hiện có, hướng dẫn thử hai và ba cột, điều chỉnh gap, giữ ảnh đúng tỷ lệ. Giải thích display: grid, grid-template-columns, repeat, gap và object-fit: cover. Không dùng Bootstrap hoặc Tailwind CSS.

**AI đề xuất:** sửa số cột trong `.grid`, thử khoảng cách và giữ ảnh theo tỷ lệ tự nhiên.

**Em thực hiện:** thử hai và ba cột cùng các giá trị gap; cấu hình chính cuối là `repeat(3, minmax(0, 1fr))` và `gap: 18px`. Giữ `width: 100%`, `height: auto`, `object-fit: contain` vì muốn thấy trọn ảnh sản phẩm. Không đổi sang cover chỉ để có thay đổi hình thức.

### 2.6. Hover và focus

**Nội dung prompt:**

> Hướng dẫn thêm hover nhẹ và transition cho “Xem thông tin”; kiểm tra focus-visible hiện có, giữ chức năng mở/đóng và giải thích cách thử bằng chuột, bàn phím.

**AI đề xuất:** thêm `.card summary:hover`, transition màu nền và màu chữ trong 0,2 giây; giữ quy tắc focus-visible hiện có.

**Em thực hiện:** thêm hover/transition cho cả bốn thẻ, không thêm lại quy tắc focus trùng. Kiểm tra trạng thái thường, hover, Tab và mở/đóng bằng Enter hoặc Space.

### 2.7. Kiểm tra màn hình nhỏ

**Nội dung prompt:**

> Kiểm tra HTML/CSS hiện tại, phân biệt nguyên nhân xác định được với giả thuyết. Đề xuất cách sửa ít thay đổi và cách kiểm tra lại nếu thẻ sản phẩm quá chật trên màn hình nhỏ.

**AI đề xuất:** ở 390 px, quy tắc cũ vẫn cho hai cột; có thể đổi ngưỡng một cột từ 359 px sang 420 px.

**Em thực hiện:** đối chiếu ảnh giao diện hai cột trên màn hình nhỏ, chỉnh breakpoint trong CSS và kiểm tra lại. Đây là điều chỉnh dựa trên gợi ý của AI; em tự sửa mã và lựa chọn cấu hình. Không mô tả nó là ý tưởng hoàn toàn độc lập với AI.

### 2.8. Hoàn thiện tài liệu

**Yêu cầu gửi ChatGPT:**

> Soạn lại file README và file AI_USAGE dựa trên repository và những nội dung đã làm.

**AI hỗ trợ:** soạn README tổng hợp và tổ chức lại nhật ký sử dụng AI; theo yêu cầu của em, nhật ký này chỉ giữ nội dung Buổi 2.

**Trách nhiệm của em:** đọc lại, đối chiếu với mã cuối và chỉ giữ các thao tác thực sự đã thực hiện trước khi commit.

## 3. Đề xuất không áp dụng hoặc cần phân biệt

- Không chuyển danh sách sang `ul/li` khi chưa cần thay cấu trúc và xem lại JavaScript.
- Không thêm liên kết `href="#"` giả cho sản phẩm chưa có trang chi tiết.
- Không ghi việc dùng Flexbox dọc trong thẻ, margin-top auto hoặc aspect-ratio là đã hoàn thành khi chưa áp dụng.
- CSS cũ hợp lệ không đồng nghĩa phải thay mọi thuộc tính; nhiều chỉnh sửa là lựa chọn trình bày.
- Thẻ hẹp trên điện thoại là vấn đề dễ đọc cần quan sát, không tự động là lỗi cú pháp hoặc lỗi chồng nội dung.

## 4. Cách kiểm tra và minh chứng

- Đối chiếu đề xuất với HTML/CSS trước khi chỉnh sửa.
- Lưu tệp, tải lại trình duyệt và so sánh ở cùng chiều rộng, mức zoom.
- Kiểm tra bộ lọc “Làm sạch”, mức giá và sắp xếp.
- Kiểm tra ảnh không méo, tên/giá không bị che và nội dung không tràn nghiêm trọng.
- Kiểm tra hover, Tab, viền focus và mở/đóng thông tin.
- Kiểm tra bố cục màn hình lớn và màn hình nhỏ sau khi đổi breakpoint.

Ảnh minh chứng, bảng kiểm thử và trả lời kiến thức được trình bày trong báo cáo Word nộp kèm. Sau khi tải mã lên GitHub, cần kiểm tra lại website triển khai; nhật ký này không tự xác nhận kết quả của lần triển khai mới.
