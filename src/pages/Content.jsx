import React from "react"
import { motion } from "framer-motion"

const Content = () => {
  return (
    <div className="relative min-h-screen py-20 px-6 md:px-20 text-gray-200">
      {/* Background gradient + mystical aura */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-zinc-950 via-black to-zinc-900" />
      <div className="absolute top-1/3 left-1/4 w-[900px] h-[900px] bg-yellow-800/10 blur-3xl rounded-full -z-10" />

      {/* Hero Image */}
      <motion.img
        src="https://i.guim.co.uk/img/media/419ec73563a575817aa5c2edac3ebaac51826ccd/0_339_5300_3180/master/5300.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=9880f527dc3922890f3c71f578473af6"
        alt="Modern skyline of Ho Chi Minh City"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-5xl mx-auto rounded-lg shadow-lg mb-12"
      />

      {/* Group and Chapter Info */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xl text-gray-400 mb-4"
      >
        Nhóm 8
      </motion.p>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-serif text-yellow-400 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)] mb-4"
      >
        Chương 3: Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội và tiến hành công cuộc đổi mới (1975 - 2018)
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-3xl font-serif text-yellow-300 mb-6"
      >
        II. Lãnh đạo công cuộc đổi mới, đẩy mạnh công nghiệp hóa, hiện đại hóa và hội nhập quốc tế (từ năm 1986 đến nay)
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-2xl italic text-gray-400 mb-10 max-w-5xl"
      >
        2. Tiếp tục công cuộc đổi mới, đẩy mạnh công nghiệp hoá, hiện đại hoá và hội nhập quốc tế (từ năm 1996 đến nay) (Phần 5)
      </motion.h3>

      {/* Section 1: Introduction to the Period */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="max-w-5xl bg-zinc-800 p-6 rounded-lg shadow-lg leading-relaxed text-gray-300 space-y-5 mb-12"
      >
        <p>
          Giai đoạn từ năm 1996 đến nay đánh dấu một bước ngoặt quan trọng trong tiến trình phát triển của Việt Nam. Sau 10 năm đổi mới, đất nước ta đã đạt được những thành tựu to lớn về kinh tế, xã hội, chính trị — tạo nền tảng để bước vào thời kỳ đẩy mạnh công nghiệp hoá, hiện đại hoá và hội nhập quốc tế toàn diện.
        </p>

        <p>
          Đại hội VIII của Đảng (1996) đã xác định mục tiêu: “Đưa nước ta cơ bản trở thành nước công nghiệp theo hướng hiện đại vào năm 2020”. Từ đó, nhiều chiến lược, chương trình và chính sách cụ thể được ban hành nhằm thúc đẩy tăng trưởng bền vững, mở rộng đối ngoại và phát triển khoa học – công nghệ.
        </p>
      </motion.section>

      {/* Divider */}
      <div className="my-12 border-t border-yellow-700/50 w-2/3 mx-auto" />

      {/* Section 2: Key Transformations */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="max-w-5xl bg-zinc-800 p-6 rounded-lg shadow-lg space-y-6 mb-12"
      >
        <h2 className="text-3xl text-yellow-400 font-serif mb-3">
          ⚙️ Những Chuyển Biến Lớn Trong Thời Kỳ Đổi Mới
        </h2>

        <p>
          Công nghiệp hoá và hiện đại hoá được triển khai với trọng tâm là chuyển đổi cơ cấu kinh tế, phát triển các ngành công nghiệp mũi nhọn như điện tử, công nghệ thông tin, chế biến nông sản, năng lượng tái tạo...
        </p>

        {/* Image: Solar Farm */}
        <motion.img
          src="https://pidg.org/wp-content/uploads/Ninh-Tuan-Solar-Power-1200x759.jpg"
          alt="Renewable energy solar farm in Vietnam"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
        />

        <p>
          Song song với đó, Việt Nam từng bước mở rộng hội nhập quốc tế: gia nhập ASEAN (1995), WTO (2007), ký kết hàng loạt hiệp định thương mại tự do thế hệ mới (CPTPP, EVFTA, RCEP). Hội nhập giúp Việt Nam tiếp cận thị trường toàn cầu, thu hút đầu tư nước ngoài và chuyển giao công nghệ, đồng thời tạo động lực cải cách thể chế, nâng cao năng lực cạnh tranh quốc gia.
        </p>

        {/* Image: WTO Joining */}
        <motion.img
          src="https://www.wto.org/images/img_dg_pl/pl_qx_vietnam.jpg"
          alt="Vietnam joining WTO in 2007"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
        />

        <p>
          Ở lĩnh vực xã hội, quá trình đổi mới đã mang lại những chuyển biến tích cực: tỷ lệ hộ nghèo giảm mạnh, đời sống nhân dân được cải thiện, giáo dục và y tế có bước tiến rõ rệt. Đặc biệt, tinh thần sáng tạo, khởi nghiệp và ứng dụng công nghệ trong mọi lĩnh vực được khuyến khích mạnh mẽ.
        </p>
      </motion.section>

      {/* Divider */}
      <div className="my-12 border-t border-yellow-700/50 w-2/3 mx-auto" />

      {/* Section 3: Modern Reflection with Current Context */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="max-w-5xl bg-zinc-800 p-6 rounded-lg shadow-lg space-y-6"
      >
        <h2 className="text-3xl text-yellow-400 font-serif mb-4">
          🌍 Liên Hệ Với Bối Cảnh Hiện Nay
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Trong thời đại cách mạng công nghiệp 4.0 và chuyển đổi số, Việt Nam tiếp tục kiên định đường lối đổi mới, đẩy mạnh công nghiệp hoá và hiện đại hoá gắn liền với phát triển kinh tế tri thức, kinh tế xanh và chuyển đổi số. Những định hướng này thể hiện rõ trong các nghị quyết mới của Đảng, chẳng hạn như Nghị quyết Đại hội XIII (2021) nhấn mạnh việc xây dựng nền kinh tế số, xã hội số và chính phủ số.
        </p>

        {/* Image: GDP Chart */}
        <motion.img
          src="https://www.worldeconomics.com/Images/Blogs/Vietnam1.png"
          alt="Vietnam GDP growth chart from 1996"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.8 }}
          className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
        />

        <p className="text-gray-300 leading-relaxed mb-4">
          Từ năm 2020 đến nay, Việt Nam đã đạt được những thành tựu đáng kể trong bối cảnh toàn cầu hóa và đại dịch COVID-19. Kinh tế tăng trưởng ổn định với tăng trưởng GDP đạt 7.09% năm 2024 và 7.52% trong nửa đầu năm 2025, GDP bình quân đầu người tăng từ khoảng 2.800 USD năm 2018 lên hơn 4.500 USD năm 2025. Thu hút đầu tư nước ngoài (FDI) đạt kỷ lục với giải ngân 25.35 tỷ USD năm 2024. Các ngành công nghệ cao như sản xuất chip bán dẫn và phần mềm đang phát triển mạnh mẽ, với sự tham gia của các tập đoàn lớn như Samsung và Intel.
        </p>

        {/* Image: GDP Bar Chart */}
        <motion.img
          src="https://media.licdn.com/dms/image/v2/D5622AQE9QMrKmFLz7Q/feedshare-shrink_800/B56Zb_JXh2GsAg-/0/1748037370152?e=2147483647&v=beta&t=R3zbY743Uk7lkldldHIYzdt2lkzsI8t6bDJ8dde1Mng"
          alt="Vietnam GDP comparison in ASEAN"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
        />

        <p className="text-gray-300 leading-relaxed mb-4">
          Về xã hội, chương trình chuyển đổi số quốc gia đã giúp cải thiện giáo dục và y tế, với hơn 70% dân số sử dụng internet và các nền tảng số như Zalo, VNeID hỗ trợ quản lý hành chính. Tỷ lệ hộ nghèo giảm xuống khoảng 1.93% vào năm 2024, phản ánh hiệu quả của các chính sách xã hội. Ngoài ra, Việt Nam đang dẫn đầu khu vực trong phát triển năng lượng tái tạo, với công suất điện mặt trời và gió đạt hơn 21 GW vào năm 2023, và dự kiến đạt 112 GW vào năm 2035, góp phần vào mục tiêu trung hòa carbon vào năm 2050 theo cam kết tại COP26.
        </p>

        <p className="text-gray-300 leading-relaxed">
          Qua đó, có thể thấy tư duy đổi mới mà Đảng ta khởi xướng từ 1986 không chỉ là một giai đoạn lịch sử, mà là một dòng chảy tư tưởng liên tục, định hướng sự phát triển của đất nước trong mọi thời kỳ. Đó là minh chứng cho tầm nhìn chiến lược, bản lĩnh kiên định và khả năng thích ứng linh hoạt của Đảng Cộng sản Việt Nam trong kỷ nguyên hội nhập, đặc biệt trong bối cảnh kinh tế - chính trị hiện nay với thách thức từ biến đổi khí hậu, cạnh tranh địa chính trị và cách mạng công nghệ AI.
        </p>
      </motion.section>
    </div>
  )
}

export default Content