
import React from 'react';

// Dữ liệu danh sách Mentor (Bạn có thể thêm bớt tùy ý tại đây)
const mentors = [
  {
    id: 1,
    name: "Ông Nguyễn Tiến Dũng",
    expertise: "AI & Big Data Expert",
    company: "FPT Software",
    image: "/images/mentors/mentor-1.jpg",
    linkedin: "https://linkedin.com",
    supportFields: "Cố vấn phát triển sản phẩm AI, tối ưu thuật toán và kiến trúc hệ thống."
  },
  {
    id: 2,
    name: "Bà Nguyễn Mai Anh",
    expertise: "Marketing & Growth Hacking",
    company: "VNG Corporation",
    image: "/images/mentors/mentor-2.jpg",
    linkedin: "https://linkedin.com",
    supportFields: "Xây dựng chiến lược tiếp cận thị trường (GTM), định vị thương hiệu và chuyển đổi số."
  },
  {
    id: 3,
    name: "Ông Phạm Hoàng Nam",
    expertise: "UI/UX & Product Design",
    company: "VinGroup",
    image: "/images/mentors/mentor-3.jpg",
    linkedin: "https://linkedin.com",
    supportFields: "Tối ưu hóa trải nghiệm người dùng, thiết kế giao diện ứng dụng di động và web."
  },
  {
    id: 4,
    name: "Bà Lê Hoàng Yến",
    expertise: "Financial & Pitching Coach",
    company: "NextTech Group",
    image: "/images/mentors/mentor-4.jpg",
    linkedin: "https://linkedin.com",
    supportFields: "Hướng dẫn gọi vốn, lập kế hoạch tài chính và kỹ năng thuyết trình trước quỹ đầu tư."
  },
  {
    id: 5,
    name: "Ông Trần Đức Kiên",
    expertise: "Cloud Computing & DevOps",
    company: "Viettel AI",
    image: "/images/mentors/mentor-5.jpg",
    linkedin: "https://linkedin.com",
    supportFields: "Hạ tầng đám mây, bảo mật hệ thống và quy trình triển khai phần mềm (CI/CD)."
  }
];

export default function MentorPage() {
  return (
    <main className="py-12 bg-white min-h-screen">
      <div className="container mx-auto max-w-6xl px-4">
        
        {/* Tiêu đề trang */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight uppercase">
            Đội Ngũ Mentor (Cố Vấn Chuyên Môn)
          </h1>
          <div className="h-1 w-20 bg-[#10b981] mx-auto rounded-full mb-6"></div> {/* Dùng màu xanh lá tươi mới cho Mentor */}
          <p className="text-gray-600 max-w-2xl mx-auto text-justify sm:text-center">
            Những người anh, người chị đi trước từ các tập đoàn công nghệ lớn, sẵn sàng đồng hành, 
            "chắp cánh" và hoàn thiện các mảnh ghép còn thiếu cho dự án của bạn.
          </p>
        </div>

        {/* Danh sách Mentor (Grid 3 cột cho nổi bật) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mentors.map((mentor) => (
            <div 
              key={mentor.id} 
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center space-x-4 mb-4">
                {/* Ảnh Mentor tròn */}
                <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden flex-shrink-0 border-2 border-white shadow-md">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/150?text=Mentor";
                    }}
                  />
                </div>
                {/* Tên và Công ty */}
                <div>
                  <h3 className="font-bold text-lg text-gray-900 leading-tight">
                    {mentor.name}
                  </h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mt-0.5">
                    {mentor.company}
                  </p>
                </div>
              </div>

              {/* Chuyên môn chính */}
              <div className="mb-3">
                <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-md">
                  {mentor.expertise}
                </span>
              </div>

              {/* Lĩnh vực hỗ trợ */}
              <p className="text-gray-600 text-sm line-clamp-3 text-justify flex-1 pt-2 border-t border-gray-200/60">
                <strong className="text-gray-700 font-medium">Lĩnh vực hỗ trợ:</strong> {mentor.supportFields}
              </p>

              {/* Nút LinkedIn kết nối */}
              <div className="mt-4 pt-3 flex justify-end">
                <a
                  href={mentor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#007aff] transition-colors flex items-center space-x-1 text-xs font-medium"
                >
                  <span>Kết nối LinkedIn</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Nút Đăng ký làm Mentor */}
        <div className="bg-emerald-50 rounded-2xl p-8 text-center max-w-3xl mx-auto border border-emerald-100">
          <h3 className="text-xl font-bold text-emerald-900 mb-2">
            Bạn muốn trở thành Mentor của VietFuture?
          </h3>
          <p className="text-emerald-700 text-sm mb-6 max-w-xl mx-auto">
            Hãy chia sẻ kinh nghiệm và tri thức của bạn để giúp thế hệ trẻ Việt Nam hiện thực hóa những dự án công nghệ đột phá.
          </p>
          <a
            href="https://vietfuture.vinasa.org.vn/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#10b981] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#059669] transition-colors shadow-lg shadow-emerald-500/20"
          >
            ĐĂNG KÝ TRỞ THÀNH MENTOR
          </a>
        </div>

      </div>
    </main>
  );
}
