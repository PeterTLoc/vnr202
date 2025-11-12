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
  const sections = [
    { id: "overview", title: "Bối cảnh 1996–2000" },
    { id: "achievements", title: "Thành tựu (2001–2010)" },
    { id: "integration", title: "Hội nhập & đổi mới (2011–nay)" },
    { id: "challenges", title: "Thách thức & định hướng" },
    { id: "reflection", title: "Liên hệ LO7" },
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
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mb-16">
          <motion.img
            src="https://i.guim.co.uk/img/media/419ec73563a575817aa5c2edac3ebaac51826ccd/0_339_5300_3180/master/5300.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=9880f527dc3922890f3c71f578473af6"
            alt="Modern skyline of Ho Chi Minh City"
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
              Chương 3 — Đảng lãnh đạo quá độ lên CNXH và tiến hành công cuộc
              đổi mới (1975–2018)
            </motion.h1>

            <motion.h2
              {...fadeIn(0.45)}
              className="text-lg md:text-xl text-yellow-800"
            >
              II. Lãnh đạo công cuộc đổi mới, đẩy mạnh công nghiệp hoá, hiện đại
              hoá và hội nhập quốc tế
            </motion.h2>

            <motion.h3
              {...fadeIn(0.55)}
              className="text-sm md:text-base italic text-[#3c2f25]/80"
            >
              Phần 5: Tiếp tục công cuộc đổi mới — nhấn mạnh giai đoạn từ 1996
              đến nay (chính sách, kết quả, thách thức và liên hệ thực tiễn).
            </motion.h3>
          </div>
        </section>

        <Divider />

        {/* ================= SECTION: Overview 1996–2000 ================= */}
        <SectionWrapper id="overview" className="mb-14">
          <h2 className="text-3xl text-red-700 mb-6 border-l-4 border-yellow-600 pl-4">
            Bối cảnh 1996–2000 — Mục tiêu và bước đầu
          </h2>

          <p className="mb-4">
            Sau Đại hội VIII (1996), Đảng xác định mục tiêu đưa Việt Nam trở
            thành nước công nghiệp theo hướng hiện đại vào năm 2020. Giai đoạn
            1996–2000 là thời kỳ củng cố chính sách kinh tế thị trường định
            hướng XHCN, tập trung cải cách doanh nghiệp nhà nước, khuyến khích
            khu vực tư nhân và thu hút đầu tư trực tiếp nước ngoài (FDI).
          </p>

          <p className="mb-4">
            Về mặt tổ chức, đây là giai đoạn tăng cường hoàn thiện khung pháp
            luật, chuẩn hoá quản trị kinh tế và hình thành các chương trình phát
            triển công nghiệp mũi nhọn. Về xã hội, nền kinh tế ổn định hơn,
            nhưng vẫn còn nhiều thách thức về năng lực sản xuất, cơ sở hạ tầng
            và phân bố thu nhập.
          </p>

          <p>
            <strong>Ý nghĩa:</strong> Giai đoạn này đặt nền tảng thể chế và
            chính sách cho hai thập niên đổi mới tiếp theo — từ cải cách đến hội
            nhập quốc tế.
          </p>
        </SectionWrapper>

        <Divider />

        {/* ================= SECTION: Achievements 2001–2010 ================= */}
        <SectionWrapper id="achievements" className="mb-14">
          <h2 className="text-3xl text-red-700 mb-6 border-l-4 border-yellow-600 pl-4">
            Thành tựu nổi bật (2001–2010)
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="mb-3">
                Trong giai đoạn đầu thế kỷ 21, Việt Nam đạt chuyển biến ở nhiều
                mặt: tăng trưởng GDP ổn định, giảm nghèo nhanh chóng, và mở rộng
                xuất khẩu. Những thay đổi này dựa trên chính sách mở cửa, khuyến
                khích FDI, cải thiện môi trường kinh doanh và phát triển khu vực
                tư nhân.
              </p>

              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>
                  <strong>Kinh tế:</strong> Tăng trưởng xuất khẩu, phát triển
                  các khu chế xuất và chuỗi cung ứng.
                </li>
                <li>
                  <strong>Xã hội:</strong> Giảm tỷ lệ nghèo, cải thiện tiếp cận
                  y tế và giáo dục cơ bản.
                </li>
                <li>
                  <strong>Hạ tầng:</strong> Đầu tư vào điện, giao thông và công
                  nghiệp hỗ trợ.
                </li>
              </ul>

              <p className="mb-2">
                Những thành tựu này không chỉ là con số tăng trưởng mà còn là
                bằng chứng về hiệu quả chính sách dài hạn khi kết hợp ổn định vĩ
                mô và đổi mới thể chế.
              </p>
            </div>

            <div className="space-y-4">
              <AnimatedImage
                src="https://www.worldeconomics.com/Images/Blogs/Vietnam1.png"
                alt="GDP growth illustration"
                className="h-[300px]"
                delay={0.2}
              />
              <p className="text-sm text-[#3c2f25]/80">
                (Hình minh hoạ: tăng trưởng GDP và chuyển dịch cơ cấu. Khi dùng
                cho thuyết trình, nhớ dẫn nguồn thống kê chính thức.)
              </p>
            </div>
          </div>
        </SectionWrapper>

        <Divider />

        {/* ================= SECTION: Integration & Innovation 2011–nay ================= */}
        <SectionWrapper id="integration" className="mb-14">
          <h2 className="text-3xl text-red-700 mb-6 border-l-4 border-yellow-600 pl-4">
            Hội nhập quốc tế & chuyển đổi công nghiệp hoá (2011–nay)
          </h2>

          <p className="mb-4">
            Từ 2010s đến nay, hội nhập quốc tế được đẩy mạnh: Việt Nam chủ động
            ký và thực thi các hiệp định thương mại (WTO, CPTPP, EVFTA, RCEP),
            tăng cường liên kết khu vực và tham gia chuỗi giá trị toàn cầu. Điều
            này thúc đẩy nâng cấp ngành công nghiệp, tăng xuất khẩu giá trị cao
            hơn, và tạo áp lực cải thiện tiêu chuẩn, quản trị doanh nghiệp.
          </p>

          <p className="mb-4">
            Đồng thời, chuyển đổi số và tiến trình Công nghiệp 4.0 (tự động hoá,
            dữ liệu lớn, AI) tạo cơ hội lớn cho tăng năng suất và dịch chuyển cơ
            cấu sang ngành có giá trị gia tăng cao. Tuy nhiên, điều này đòi hỏi
            đầu tư lớn vào giáo dục, cơ sở hạ tầng số và khung pháp lý cho công
            nghệ mới.
          </p>

          <div className="mt-4">
            <h3 className="text-xl text-red-700 mb-2">Ví dụ cụ thể</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Gia tăng doanh nghiệp vừa và nhỏ tham gia chuỗi cung ứng toàn
                cầu thông qua FDI và liên doanh.
              </li>
              <li>
                Phát triển ngành công nghệ thông tin, sản xuất điện tử, và chế
                biến nông sản xuất khẩu.
              </li>
              <li>
                Đầu tư vào năng lượng tái tạo và hạ tầng xanh như một phần của
                công nghiệp hoá bền vững.
              </li>
            </ul>
          </div>
        </SectionWrapper>

        <Divider />

        {/* ================= SECTION: Challenges & Direction ================= */}
        <SectionWrapper id="challenges" className="mb-14">
          <h2 className="text-3xl text-red-700 mb-6 border-l-4 border-yellow-600 pl-4">
            Thách thức & định hướng tương lai
          </h2>

          <p className="mb-4">
            Dù có nhiều thành tựu, Việt Nam vẫn đối mặt với thách thức: năng
            suất lao động còn khoảng cách so với các nước phát triển, chất lượng
            nguồn nhân lực chưa đồng đều, và rủi ro môi trường, biến đổi khí
            hậu. Hội nhập sâu rộng cũng có thể gây áp lực cạnh tranh lên ngành
            nội địa nếu không được lộ trình hóa hợp lý.
          </p>

          <p className="mb-4">Định hướng tương lai cần bao gồm:</p>

          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Đầu tư giáo dục kỹ năng cao, đặc biệt STEM và kỹ năng số;</li>
            <li>Phát triển công nghiệp xanh và tận dụng kinh tế tuần hoàn;</li>
            <li>
              Xây dựng chính sách bảo vệ chuỗi cung ứng nội địa trong giai đoạn
              chuyển đổi;
            </li>
            <li>Hoàn thiện thể chế về dữ liệu, an ninh mạng và đạo đức AI.</li>
          </ul>

          <p>
            Việc vừa bảo đảm phát triển kinh tế, vừa cân bằng xã hội và bền vững
            môi trường là bài toán lãnh đạo quan trọng trong giai đoạn tới.
          </p>
        </SectionWrapper>

        <Divider />

        {/* ================= SECTION: Reflection — LO7 short tie-in ================= */}
        <SectionWrapper id="reflection" className="mb-14">
          <h2 className="text-3xl text-red-700 mb-6 border-l-4 border-yellow-600 pl-4">
            Liên hệ phương pháp & Learning Outcome 7 (tóm tắt)
          </h2>

          <p className="mb-3">
            <strong>Mục tiêu LO7:</strong> Xây dựng tư duy khoa học về lịch sử;
            rèn kỹ năng chọn và tổng hợp tài liệu; phát triển kỹ năng làm việc
            cá nhân và nhóm; sử dụng công nghệ (AI) một cách có đạo đức để hỗ
            trợ nghiên cứu; và nâng cao kỹ năng trình bày.
          </p>

          <p className="mb-3">
            Trên trang này đã áp dụng LO7 bằng cách: (1) tách rõ bối cảnh — kết
            quả — thách thức; (2) nêu dẫn chứng thực tiễn; (3) đề xuất phương
            pháp nghiên cứu: đặt câu hỏi nghiên cứu, đối chiếu nguồn chính thống
            (văn bản Đảng, nghị quyết, dữ liệu thống kê) và phân định rõ phần
            nguồn AI nếu sử dụng.
          </p>

          <div className="bg-[#fffaf0] p-4 rounded-md border border-yellow-200 text-sm">
            <p className="mb-2">
              <strong>Gợi ý áp dụng LO7 trong bài thuyết trình:</strong>
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Phân công nhóm: 1 người chịu trách nhiệm nguồn chính thống, 1
                người biên tập nội dung, 1 người thiết kế trực quan.
              </li>
              <li>
                Chuẩn bị phần tương tác: timeline, quiz ngắn cho khán giả, và sơ
                đồ tóm tắt chính sách.
              </li>
              <li>
                Ghi rõ phụ lục "AI Usage" (liên kết hoặc trang riêng) để minh
                bạch công cụ và prompt đã dùng.
              </li>
            </ol>
          </div>

          <p className="mt-4 text-sm text-[#3c2f25]/80">
            (Ghi chú: bạn có trang riêng cho "AI Usage" — hãy liên kết trong
            slide/phụ lục để đáp ứng tiêu chí minh bạch.)
          </p>
        </SectionWrapper>

        {/* end content. No footer here per your layout component */}
      </div>
    </main>
  )
}

export default Content
