import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

// === Animation Presets ===
const fadeIn = (delay = 0, y = 20) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.25 },
})

// === Reusable Components ===
const SectionWrapper = ({ id, children, className = "" }) => (
  <motion.section
    id={id}
    {...fadeIn(0.15)}
    className={`max-w-5xl w-full mx-auto rounded-2xl backdrop-blur-sm p-8 md:p-10 leading-relaxed text-[#3c2f25] border border-yellow-900/10 bg-white/80 shadow-[0_0_20px_rgba(0,0,0,0.05)] ${className}`}
  >
    {children}
  </motion.section>
)

const Divider = () => (
  <div className="my-20 w-2/3 mx-auto h-px bg-gradient-to-r from-transparent via-yellow-900/40 to-transparent" />
)

const AnimatedImage = ({ src, alt, delay = 0, className = "" }) => (
  <motion.img
    src={src}
    alt={alt}
    {...fadeIn(delay)}
    className={`w-full h-[380px] object-cover rounded-xl shadow-md ${className}`}
  />
)

/* ================= Scrollspy Hook using IntersectionObserver ================= */
const useScrollSpy = (
  sectionIds,
  options = { root: null, rootMargin: "-35% 0px -45% 0px", threshold: 0 }
) => {
  const [activeId, setActiveId] = useState(sectionIds[0] || null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

      if (visible.length > 0) {
        setActiveId(visible[0].target.id)
      }
    }, options)

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds.join(","), JSON.stringify(options)])

  return activeId
}

/* ================= Main Page ================= */
const Content = () => {
  // Updated sections array for the new content
  const sections = [
    { id: "overview-xii", title: "1. Khái quát Đại hội XII (2016)" },
    { id: "content-xii", title: "2. Nội dung trọng tâm XII" },
    { id: "resolutions-xii", title: "3. Nghị quyết tiêu biểu XII" },
    { id: "meaning-xii", title: "4. Ý nghĩa Đại hội XII" },
    { id: "overview-xiii", title: "5. Giới thiệu Đại hội XIII (2021)" },
    { id: "goals-xiii", title: "6. Mục tiêu & Quan điểm XIII" },
    { id: "tasks-xiii", title: "7. Nhiệm vụ trọng tâm XIII" },
    { id: "meaning-xiii", title: "8. Ý nghĩa Đại hội XIII" },
  ]

  const activeId = useScrollSpy(sections.map((s) => s.id))

  const handleNav = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    const offset = 120
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({ top, behavior: "smooth" })
  }

  return (
    <main
      className="relative flex flex-col items-center min-h-screen 
                 pt-20 pb-12 px-6 md:px-12 text-[#2b2119] 
                 bg-[#f9f4e6] lg:pl-[17rem] overflow-hidden"
    >
      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_#fffbe6_0%,_#f7f1df_100%)] opacity-90"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-7 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"
      />

      {/* === Gradient Borders === */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-700 via-yellow-500 to-red-700" />
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-700 via-yellow-500 to-red-700" />

      {/* === Floating TOC === */}
      <aside className="hidden lg:block fixed left-8 top-24 z-40">
        <nav className="w-56 bg-white/95 backdrop-blur-sm border border-yellow-900/10 rounded-xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
          <h4 className="text-sm font-semibold text-red-700 mb-3 uppercase tracking-wide">
            Mục lục
          </h4>

          <ul className="space-y-1 text-[15px]">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => handleNav(s.id)}
                  className={`w-full text-left px-3 py-2 rounded-md transition-all duration-200 ${
                    activeId === s.id
                      ? "bg-red-700/10 text-red-700 font-semibold"
                      : "text-[#3c2f25]/80 hover:bg-yellow-50 hover:text-red-700"
                  }`}
                >
                  {s.title}
                </button>
              </li>
            ))}
            
            {/* You can keep or remove this link as needed */}
            <li className="border-t border-yellow-900/10 mt-3 pt-2">
              <a
                href="/ai-usage"
                className="block text-xs text-[#3c2f25]/70 hover:text-red-700"
              >
                📎 Phụ lục: AI Usage (xem chi tiết)
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="w-full max-w-5xl mx-auto">
        {/* HERO - Updated */}
        <section className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mb-16">
          <motion.img
            src="https://i.guim.co.uk/img/media/419ec73563a575817aa5c2edac3ebaac51826ccd/0_339_5300_3180/master/5300.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=9880f527dc3922890f3c71f578473af6"
            alt="Toàn cảnh một phiên họp Đại hội Đảng"
            {...fadeIn(0)}
            className="w-full h-[380px] object-cover rounded-2xl shadow-[0_0_25px_rgba(226,183,20,0.25)]"
          />

          <div className="text-left space-y-4 max-w-xl">
            <motion.p
              {...fadeIn(0.2, -20)}
              className="text-lg text-red-800 font-medium"
            >
              Nhóm 8
            </motion.p>

            <motion.h1
              {...fadeIn(0.3, -30)}
              className="text-3xl md:text-4xl font-bold text-red-700 leading-snug"
            >
              Tổng quan Đại hội XII (2016) và Đại hội XIII (2021)
            </motion.h1>

            <motion.h2
              {...fadeIn(0.45)}
              className="text-lg md:text-xl text-yellow-800"
            >
              Phân tích nội dung, nhiệm vụ trọng tâm và ý nghĩa qua các kỳ Đại hội.
            </motion.h2>
          </div>
        </section>

        <Divider />

        {/* ================= SECTION: Overview XII ================= */}
        <SectionWrapper id="overview-xii" className="mb-14">
          <h2 className="text-3xl text-red-700 mb-6 border-l-4 border-yellow-600 pl-4">
            1. Khái quát về Đại hội XII của Đảng (2016)
          </h2>

          <p className="mb-4">
            <strong>Thời gian – Địa điểm:</strong> Từ ngày 20 – 28/1/2016, tại Hà Nội.
          </p>
          <p className="mb-4">
            <strong>Tổng Bí thư:</strong> Đồng chí Nguyễn Phú Trọng tiếp tục được bầu giữ chức Tổng Bí thư.
          </p>

          <h3 className="text-xl text-red-700 mb-2 font-semibold">Chủ đề Đại hội:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Tăng cường xây dựng Đảng trong sạch, vững mạnh;</li>
            <li>Phát huy sức mạnh toàn dân tộc và dân chủ XHCN;</li>
            <li>Đẩy mạnh toàn diện, đồng bộ công cuộc đổi mới;</li>
            <li>Bảo vệ vững chắc Tổ quốc, giữ môi trường hòa bình, ổn định;</li>
            <li>Phấn đấu sớm đưa nước ta trở thành nước công nghiệp theo hướng hiện đại.</li>
          </ul>
        </SectionWrapper>

        <Divider />

        {/* ================= SECTION: Content XII ================= */}
        <SectionWrapper id="content-xii" className="mb-14">
          <h2 className="text-3xl text-red-700 mb-6 border-l-4 border-yellow-600 pl-4">
            2. Nội dung trọng tâm của Đại hội XII
          </h2>

          <h3 className="text-xl text-red-700 mb-3 font-semibold">a. Quan điểm, phương châm lãnh đạo</h3>
          <p className="mb-3">
            Nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật.
          </p>
          <p className="mb-3">
            Bám sát thực tiễn trong nước và quốc tế, kết hợp chặt chẽ giữa:
            phát triển kinh tế – xây dựng Đảng – phát triển văn hóa – quốc phòng, an ninh.
          </p>
          <p className="mb-3">
            Kiên trì các mục tiêu lâu dài, đồng thời tập trung giải quyết các vấn đề cấp bách trước mắt.
          </p>
          <p className="mb-6">
            Chủ động, tích cực hội nhập quốc tế trên cơ sở giữ vững độc lập, tự chủ và lợi ích quốc gia – dân tộc.
          </p>

          <h3 className="text-xl text-red-700 mb-3 font-semibold">b. Sáu nhiệm vụ trọng tâm</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Tăng cường xây dựng, chỉnh đốn Đảng; ngăn chặn, đẩy lùi suy thoái tư tưởng chính trị, đạo đức, lối sống.</li>
            <li>Nâng cao chất lượng tăng trưởng, năng suất lao động và năng lực cạnh tranh của nền kinh tế.</li>
            <li>Phát huy nguồn lực, sức sáng tạo của nhân dân, tăng cường khối đại đoàn kết toàn dân tộc.</li>
            <li>Đẩy mạnh phòng, chống tham nhũng, lãng phí, quan liêu.</li>
            <li>Bảo vệ vững chắc Tổ quốc, giữ môi trường hòa bình, ổn định để phát triển.</li>
            <li>Phát huy nhân tố con người trong mọi lĩnh vực của đời sống xã hội.</li>
          </ul>
        </SectionWrapper>

        <Divider />

        {/* ================= SECTION: Resolutions XII ================= */}
        <SectionWrapper id="resolutions-xii" className="mb-14">
          <h2 className="text-3xl text-red-700 mb-6 border-l-4 border-yellow-600 pl-4">
            3. Các Nghị quyết Trung ương tiêu biểu (ĐH XII)
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse mt-4">
              <thead>
                <tr>
                  <th className="bg-yellow-100/50 p-3 border-b border-yellow-900/20 font-semibold text-red-800">Hội nghị TW</th>
                  <th className="bg-yellow-100/50 p-3 border-b border-yellow-900/20 font-semibold text-red-800">Nghị quyết</th>
                  <th className="bg-yellow-100/50 p-3 border-b border-yellow-900/20 font-semibold text-red-800">Nội dung trọng tâm</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-b border-yellow-800/10 align-top">TW4 (10/2016)</td>
                  <td className="p-3 border-b border-yellow-800/10 align-top">Nghị quyết 04-NQ/TW</td>
                  <td className="p-3 border-b border-yellow-800/10 align-top">Xây dựng, chỉnh đốn Đảng; ngăn chặn “tự diễn biến”, “tự chuyển hóa”.</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-yellow-800/10 align-top">TW5 (6/2017)</td>
                  <td className="p-3 border-b border-yellow-800/10 align-top">Nghị quyết 10-NQ/TW</td>
                  <td className="p-3 border-b border-yellow-800/10 align-top">Phát triển kinh tế tư nhân trở thành một động lực quan trọng của nền kinh tế.</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-yellow-800/10 align-top">TW5 (6/2017)</td>
                  <td className="p-3 border-b border-yellow-800/10 align-top">Nghị quyết 12-NQ/TW</td>
                  <td className="p-3 border-b border-yellow-800/10 align-top">Tiếp tục cơ cấu lại, đổi mới và nâng cao hiệu quả doanh nghiệp nhà nước.</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-yellow-800/10 align-top">TW6 (11/2016)</td>
                  <td className="p-3 border-b border-yellow-800/10 align-top">Nghị quyết 05-NQ/TW</td>
                  <td className="p-3 border-b border-yellow-800/10 align-top">Hoàn thiện thể chế kinh tế thị trường định hướng XHCN, cải thiện môi trường đầu tư, thúc đẩy đổi mới mô hình tăng trưởng.</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-yellow-800/10 align-top">TW6 (10/2017)</td>
                  <td className="p-3 border-b border-yellow-800/10 align-top">Nghị quyết 20–21-NQ/TW</td>
                  <td className="p-3 border-b border-yellow-800/10 align-top">Về chăm sóc sức khỏe, công tác dân số trong tình hình mới.</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-yellow-800/10 align-top">TW7 (5/2018)</td>
                  <td className="p-3 border-b border-yellow-800/10 align-top">Nghị quyết 27–28-NQ/TW</td>
                  <td className="p-3 border-b border-yellow-800/10 align-top">Cải cách tiền lương và bảo hiểm xã hội, nâng cao đời sống người lao động.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </SectionWrapper>

        <Divider />

        {/* ================= SECTION: Meaning XII ================= */}
        <SectionWrapper id="meaning-xii" className="mb-14">
          <h2 className="text-3xl text-red-700 mb-6 border-l-4 border-yellow-600 pl-4">
            4. Ý nghĩa của Đại hội XII
          </h2>
          
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Đánh dấu 30 năm công cuộc đổi mới với nhiều thành tựu to lớn, có ý nghĩa lịch sử.</li>
            <li>Củng cố niềm tin của nhân dân vào sự lãnh đạo của Đảng.</li>
            <li>Đặt nền tảng quan trọng để chuẩn bị cho Đại hội XIII, hướng tới mục tiêu phát triển nhanh, bền vững, hội nhập sâu rộng vào thế giới.</li>
          </ul>

          <blockquote className="bg-[#fffaf0] p-4 rounded-md border border-yellow-200 text-base italic">
            <strong>Kết luận:</strong> Đại hội XII (2016) là bước ngoặt tiếp tục công cuộc đổi mới toàn diện, khẳng định quyết tâm xây dựng Đảng trong sạch, phát triển kinh tế – xã hội bền vững, hội nhập quốc tế chủ động, giữ vững độc lập dân tộc và định hướng xã hội chủ nghĩa.
          </blockquote>
        </SectionWrapper>

        <Divider />

        {/* ================= SECTION: Overview XIII ================= */}
        <SectionWrapper id="overview-xiii" className="mb-14">
          <h2 className="text-3xl text-red-700 mb-6 border-l-4 border-yellow-600 pl-4">
            5. Giới thiệu chung Đại hội XIII (2021)
          </h2>

          <p className="mb-4">
            Đại hội đại biểu toàn quốc lần thứ XIII của Đảng diễn ra từ ngày 25/1 đến 1/2/2021 tại Hà Nội, trong bối cảnh đất nước đã trải qua 35 năm đổi mới, đạt được nhiều thành tựu to lớn, có ý nghĩa lịch sử, đồng thời đối mặt với những thách thức mới như biến đổi khí hậu, dịch bệnh toàn cầu Covid-19, và yêu cầu cấp thiết của chuyển đổi mô hình tăng trưởng, chuyển đổi số và hội nhập quốc tế sâu rộng.
          </p>
          <p className="mb-4">
            Đồng chí Nguyễn Phú Trọng tiếp tục được bầu giữ chức Tổng Bí thư Ban Chấp hành Trung ương Đảng, thể hiện sự thống nhất, kế thừa và bản lĩnh chính trị vững vàng trong lãnh đạo của Đảng.
          </p>
          <p className="mb-6">
            Việc phân tích Đại hội XIII giúp hiểu sâu sắc quá trình Đảng lãnh đạo đất nước quá độ lên chủ nghĩa xã hội, vừa kế thừa kinh nghiệm từ các giai đoạn trước, vừa mở ra tư duy phát triển mới trong thời đại công nghiệp 4.0.
          </p>

          <h3 className="text-xl text-red-700 mb-3 font-semibold">Chủ đề Đại hội</h3>
          <blockquote className="bg-[#fffaf0] p-4 rounded-md border border-yellow-200 text-base italic mb-4">
            “Tăng cường xây dựng, chỉnh đốn Đảng và hệ thống chính trị trong sạch, vững mạnh; khơi dậy khát vọng phát triển đất nước phồn vinh, hạnh phúc; phát huy ý chí, sức mạnh đại đoàn kết toàn dân tộc kết hợp với sức mạnh thời đại; tiếp tục đẩy mạnh toàn diện, đồng bộ công cuộc đổi mới; bảo vệ vững chắc Tổ quốc, giữ vững môi trường hòa bình, ổn định; phấn đấu đến giữa thế kỷ XXI nước ta trở thành nước phát triển theo định hướng xã hội chủ nghĩa.”
          </blockquote>
          <p>
            Chủ đề thể hiện tầm nhìn chiến lược và khát vọng phát triển mạnh mẽ của dân tộc Việt Nam trong giai đoạn mới. Nó kết hợp giữa lý tưởng xã hội chủ nghĩa và yêu cầu thực tiễn, giữa tinh thần độc lập tự chủ và xu thế hội nhập quốc tế. Việc nghiên cứu chủ đề này không chỉ giúp củng cố nhận thức về đường lối chính trị, mà còn khơi dậy tinh thần sáng tạo, ý chí vươn lên trong học tập, lao động và nghiên cứu khoa học.
          </p>
        </SectionWrapper>

        <Divider />

        {/* ================= SECTION: Goals XIII ================= */}
        <SectionWrapper id="goals-xiii" className="mb-14">
          <h2 className="text-3xl text-red-700 mb-6 border-l-4 border-yellow-600 pl-4">
            6. Mục tiêu phát triển & Quan điểm chỉ đạo (ĐH XIII)
          </h2>

          <h3 className="text-xl text-red-700 mb-3 font-semibold">a. Mục tiêu phát triển</h3>
          <p className="mb-3">Đại hội XIII đề ra ba cột mốc quan trọng:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>
              <strong>Đến năm 2025:</strong> Việt Nam trở thành nước đang phát triển có công nghiệp theo hướng hiện đại, vượt qua mức thu nhập trung bình thấp.
            </li>
            <li>
              <strong>Đến năm 2030:</strong> Là nước đang phát triển có công nghiệp hiện đại, thu nhập trung bình cao, kỷ niệm 100 năm thành lập Đảng.
            </li>
            <li>
              <strong>Đến năm 2045:</strong> Trở thành nước phát triển, thu nhập cao, kỷ niệm 100 năm Quốc khánh 2/9.
            </li>
          </ul>
          <p className="mb-6">
            Ba mốc này không chỉ thể hiện tầm nhìn dài hạn mà còn phản ánh sự chủ động của Đảng trong quy hoạch chiến lược quốc gia, gắn liền với xu thế phát triển bền vững và hội nhập toàn cầu. Đây cũng là cơ sở định hướng cho tư duy khoa học, giúp người học hiểu rõ mối quan hệ giữa mục tiêu kinh tế và tiến trình chính trị – xã hội của đất nước.
          </p>

          <h3 className="text-xl text-red-700 mb-3 font-semibold">b. Quan điểm chỉ đạo</h3>
          <p className="mb-3">Đại hội XIII nhấn mạnh:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Kiên định, vận dụng và phát triển sáng tạo Chủ nghĩa Mác – Lênin, tư tưởng Hồ Chí Minh.</li>
            <li>Bảo đảm lợi ích quốc gia – dân tộc là mục tiêu tối thượng trong mọi đường lối.</li>
            <li>Khơi dậy mạnh mẽ tinh thần yêu nước, ý chí tự cường, phát huy sức mạnh đại đoàn kết toàn dân tộc, kết hợp với sức mạnh của thời đại mới.</li>
            <li>Tiếp tục xây dựng, chỉnh đốn Đảng; nâng cao năng lực lãnh đạo, cầm quyền.</li>
            <li>Phát huy dân chủ xã hội chủ nghĩa, xây dựng Nhà nước tinh gọn, hiệu lực, hiệu quả.</li>
            <li>Chủ động, tích cực hội nhập quốc tế trên cơ sở Hiến chương Liên Hợp Quốc, luật pháp quốc tế, bình đẳng, cùng có lợi.</li>
          </ul>
           <p>
            Những quan điểm này thể hiện tư duy khoa học và bản lĩnh chính trị của Đảng trong việc xử lý mối quan hệ giữa đổi mới và ổn định, giữa độc lập dân tộc và hội nhập quốc tế, giữa mục tiêu kinh tế và định hướng xã hội chủ nghĩa.
          </p>
        </SectionWrapper>
        
        <Divider />

        {/* ================= SECTION: Tasks XIII ================= */}
        <SectionWrapper id="tasks-xiii" className="mb-14">
          <h2 className="text-3xl text-red-700 mb-6 border-l-4 border-yellow-600 pl-4">
            7. Sáu nhiệm vụ trọng tâm (ĐH XIII)
          </h2>

          <ul className="list-disc list-inside space-y-3 mb-4">
            <li>Tiếp tục xây dựng, chỉnh đốn Đảng, Nhà nước, hệ thống chính trị trong sạch, vững mạnh; phòng chống tham nhũng, lãng phí, tiêu cực; xây dựng đội ngũ cán bộ đủ phẩm chất, năng lực, uy tín.</li>
            <li>Phục hồi và phát triển kinh tế – xã hội hậu Covid-19, đẩy mạnh chuyển đổi số quốc gia, phát triển kinh tế số, xã hội số, tăng cường liên kết vùng và ngành.</li>
            <li>Giữ vững độc lập, tự chủ; nâng cao năng lực quốc phòng – an ninh; bảo vệ chủ quyền, toàn vẹn lãnh thổ; kiên trì đường lối hòa bình, hợp tác, ổn định.</li>
            <li>Khơi dậy khát vọng phát triển phồn vinh, hạnh phúc; phát huy giá trị văn hóa và con người Việt Nam; đảm bảo an sinh xã hội, nâng cao chất lượng cuộc sống.</li>
            <li>Hoàn thiện hệ thống pháp luật, cơ chế, chính sách; phát huy dân chủ xã hội chủ nghĩa, bảo đảm kỷ cương, thượng tôn pháp luật.</li>
            <li>Quản lý, sử dụng hiệu quả tài nguyên, bảo vệ môi trường, chủ động ứng phó với biến đổi khí hậu.</li>
          </ul>
          
          <p>
            Sáu nhiệm vụ này phản ánh tầm bao quát của Đảng: không chỉ chú trọng đến phát triển kinh tế, mà còn nhấn mạnh yếu tố con người, văn hóa, môi trường và thể chế. Qua đó, có thể thấy rõ năng lực lãnh đạo khoa học và toàn diện – một bài học quý giá trong tư duy quản lý và nghiên cứu phát triển quốc gia hiện nay.
          </p>
        </SectionWrapper>
        
        <Divider />

        {/* ================= SECTION: Meaning XIII ================= */}
        <SectionWrapper id="meaning-xiii" className="mb-14">
          <h2 className="text-3xl text-red-700 mb-6 border-l-4 border-yellow-600 pl-4">
            8. Ý nghĩa của Đại hội XIII
          </h2>
          
          <p className="mb-4">
            Đại hội XIII là bước ngoặt lịch sử mở ra giai đoạn phát triển mới của đất nước – từ đổi mới sang phát triển bền vững, hội nhập sâu rộng, đặt con người là trung tâm của chiến lược phát triển.
          </p>
          <p className="mb-4">
            Đại hội đã khẳng định bản lĩnh, trí tuệ và khát vọng của dân tộc Việt Nam trong thời đại mới, đồng thời thể hiện khả năng vận dụng sáng tạo lý luận vào thực tiễn, kiên định con đường độc lập dân tộc gắn liền với chủ nghĩa xã hội.
          </p>
          <p>
            Việc tìm hiểu Đại hội XIII không chỉ giúp củng cố hiểu biết lịch sử, mà còn gợi mở tư duy phản biện, khả năng tổng hợp và trình bày các vấn đề chính trị – xã hội một cách khoa học, có chiều sâu và nhân văn.
          </p>
        </SectionWrapper>
        
      </div>
    </main>
  )
}

export default Content