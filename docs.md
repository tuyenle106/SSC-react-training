# Hướng Dẫn Đào Tạo Thực Tập Sinh Frontend

## Tổng Quan

Tài liệu này phác thảo chương trình đào tạo một tuần dành cho thực tập sinh frontend. Chương trình bao gồm các công nghệ và thực hành frontend thiết yếu, từ HTML/CSS/JavaScript cơ bản đến các framework frontend hiện đại và quản lý trạng thái.

## Lịch Trình Hàng Ngày

### Ngày 1: Nền Tảng Git & Cơ Bản Về Web

#### Buổi Sáng: Giới Thiệu Git

-   Thiết lập Git và tài khoản GitHub
-   Tìm hiểu các lệnh Git cơ bản:
    -   `git init`, `git clone`, `git add`, `git commit`, `git push`
    -   `git pull`, `git branch`, `git checkout`, `git merge`
-   Thực hành: Tạo một repository và thực hiện commit

#### Buổi Chiều: Cơ Bản Về HTML, CSS, JavaScript

-   Bài tập HTML: Tạo một trang web có cấu trúc với các phần tử semantic
-   Bài tập CSS: Trang trí trang web với các nguyên tắc thiết kế responsive
-   Bài tập JavaScript: Thêm tính tương tác vào trang web
    -   Kiểm tra form
    -   Thao tác DOM
    -   Xử lý sự kiện

#### Bài Tập Ngày 1

Tạo một trang portfolio cá nhân sử dụng HTML, CSS và JavaScript có tính responsive và bao gồm:

-   Menu điều hướng
-   Phần giới thiệu bản thân
-   Phần kỹ năng
-   Form liên hệ có kiểm tra hợp lệ
-   Đẩy code lên GitHub

### Ngày 2: Cơ Bản Về React & Thư Viện UI

#### Buổi Sáng: Giới Thiệu React

-   Các khái niệm cốt lõi của React:
    -   Components và JSX
    -   Props và state
    -   Vòng đời component
-   Thiết lập một dự án React sử dụng Create React App
-   Chuyển đổi portfolio Ngày 1 thành các component React

#### Buổi Chiều: Thư Viện UI

-   Giới thiệu các thư viện UI:
    -   Bootstrap
    -   Tailwind CSS
-   Tích hợp với React
-   Bài tập: Xây dựng lại portfolio của bạn sử dụng React và Bootstrap hoặc Tailwind

#### Bài Tập Ngày 2

Tạo một ứng dụng React đa trang với điều hướng sử dụng React Router và trang trí bằng Bootstrap hoặc Tailwind CSS.

### Ngày 3: React Hooks & Dự Án Todo List

#### Buổi Sáng: React Hooks

-   Giới thiệu về hooks:
    -   useState
    -   useEffect
    -   useContext
    -   useRef
    -   useReducer
-   Custom hooks

#### Buổi Chiều: Dự Án Todo List

-   Lập kế hoạch cấu trúc ứng dụng
-   Triển khai các component:
    -   Form nhập todo
    -   Danh sách todo
    -   Item todo
    -   Tùy chọn lọc
-   Sử dụng hooks để quản lý trạng thái

#### Bài Tập Ngày 3

Hoàn thành một ứng dụng Todo List hoạt động đầy đủ sử dụng React hooks với các tính năng:

-   Thêm các mục todo
-   Đánh dấu hoàn thành/chưa hoàn thành
-   Xóa các mục todo
-   Lọc todos (Tất cả, Đang hoạt động, Đã hoàn thành)
-   Lưu trữ todos trong localStorage

### Ngày 4: Quản Lý Trạng Thái Với Redux

#### Buổi Sáng: Cơ Bản Về Redux

-   Các khái niệm cốt lõi của Redux:
    -   Store
    -   Actions
    -   Reducers
    -   Middleware
-   Thiết lập Redux trong React

#### Buổi Chiều: Redux Nâng Cao & Nâng Cấp Todo List

-   So sánh các cách tiếp cận Redux khác nhau:
    -   Redux với Redux Thunk
    -   Redux với Redux Saga
    -   Redux Toolkit (RTK)
-   Tái cấu trúc Todo List để sử dụng Redux cho quản lý trạng thái

#### Bài Tập Ngày 4

Nâng cấp ứng dụng Todo List bằng cách:

-   Triển khai Redux (chọn một: Redux Thunk, Redux Saga, hoặc Redux Toolkit)
-   Thêm danh mục cho todos
-   Thêm mức độ ưu tiên (Cao, Trung bình, Thấp)
-   Triển khai chức năng hoàn tác/làm lại

### Ngày 5-7: Dự Án Tích Hợp API

#### Ngày 5: Thiết Lập Dự Án & Giới Thiệu API

-   Giới thiệu về RESTful API
-   Làm việc với JSONPlaceholder API:
    -   https://jsonplaceholder.typicode.com/users
    -   https://jsonplaceholder.typicode.com/posts
-   Lập kế hoạch cho ứng dụng blog
-   Thiết lập cấu trúc dự án
-   Triển khai lớp dịch vụ API

#### Ngày 6: Triển Khai Tính Năng Cốt Lõi

-   Triển khai các tính năng chính:
    -   Trang danh sách bài viết
    -   Xem chi tiết bài viết
    -   Hồ sơ người dùng
    -   Phần bình luận
-   Thêm trạng thái tải và xử lý lỗi
-   Triển khai thiết kế responsive

#### Ngày 7: Nâng Cao & Hoàn Thiện

-   Thêm các tính năng nâng cao:
    -   Chức năng tìm kiếm
    -   Lọc theo người dùng
    -   Phân trang
    -   Form tạo bài viết mới (giả lập các cuộc gọi API)
-   Tối ưu hóa hiệu suất
-   Tái cấu trúc và kiểm thử code
-   Chuẩn bị trình bày dự án

#### Yêu Cầu Dự Án Cuối Cùng

Tạo một ứng dụng blog:

1. Hiển thị danh sách bài viết từ JSONPlaceholder API
2. Hiển thị chi tiết bài viết khi nhấp vào
3. Hiển thị thông tin tác giả
4. Hiển thị bình luận cho mỗi bài viết
5. Cho phép lọc bài viết theo người dùng
6. Có giao diện người dùng sạch, responsive sử dụng thư viện UI đã chọn
7. Triển khai quản lý trạng thái phù hợp
8. Xử lý trạng thái tải và lỗi một cách khéo léo

## Tài Nguyên

### Git

-   [Tài liệu Git](https://git-scm.com/doc)
-   [Hướng dẫn GitHub](https://guides.github.com/)

### HTML/CSS/JavaScript

-   [MDN Web Docs](https://developer.mozilla.org/en-US/)
-   [CSS Tricks](https://css-tricks.com/)
-   [JavaScript.info](https://javascript.info/)

### React

-   [Tài liệu React](https://reactjs.org/docs/getting-started.html)
-   [React Hooks](https://reactjs.org/docs/hooks-intro.html)

### Thư Viện UI

-   [Bootstrap](https://getbootstrap.com/docs/)
-   [Tailwind CSS](https://tailwindcss.com/docs)

### Redux

-   [Tài liệu Redux](https://redux.js.org/)
-   [Redux Toolkit](https://redux-toolkit.js.org/)
-   [Redux Saga](https://redux-saga.js.org/)
-   [Redux Thunk](https://github.com/reduxjs/redux-thunk)

### API

-   [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
-   [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
-   [Axios](https://axios-http.com/docs/intro)
