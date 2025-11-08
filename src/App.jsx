import DataImage from "./data";
import { listProyek, skillCategories, listExperience } from "./data";

function App() {
  return (
    <>
      {/* ================= GLOBAL WRAPPER ================= */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        {/* ================= HERO SECTION ================= */}
        <div
          className="hero grid md:grid-cols-2 items-center justify-between 
  pt-28 sm:pt-36 md:pt-40 lg:pt-44 xl:pt-48 2xl:pt-52 gap-6 xl:gap-0 grid-cols-1"
        >
          {/* Kolom kiri - teks */}
          <div className="flex flex-col justify-center animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl shadow-lg">
              <img
                src={DataImage.HeroImage}
                alt="Hero Image"
                className="w-10 h-10 object-cover rounded-md animate__animated animate__fadeInUp animate__delay-3s"
                loading="lazy"
              />
              <q className="text-gray-300 italic">
                Clean code. Clear insights. Meaningful impact.🧠
              </q>
            </div>

            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Carmenita Lamba
            </h1>

            <p className="text-base leading-relaxed mb-6 text-gray-400">
              I’m passionate about how Machine Learning and AI can turn data
              into meaningful insights and real solutions. I love exploring how
              technology can understand patterns, solve complex problems, and
              make an impact that truly matters.
            </p>

            <div className="flex items-center sm:gap-4 gap-2">
              <a
                href="https://www.linkedin.com/in/carmenita-lamba-6a7555220/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-linkedin-fill ri-3x"></i>
              </a>
              <a
                href="https://github.com/carmenitarosalinee"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-github-fill ri-3x"></i>
              </a>
            </div>
          </div>

          {/* Kolom kanan - foto */}
          <div className="flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-2xl border-4 border-zinc-700 animate__animated animate__fadeInUp animate__delay-4s">
              <img
                src={DataImage.HeroImage}
                alt="Hero Image"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* ================= ABOUT SECTION ================= */}
        <div className="about mt-32 py-10" id="About">
          <h1 className="text-center text-4xl font-bold mb-2">About</h1>
          <div
            className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md mb-10 sm:hidden"
              loading="lazy"
            />
            <p className="text-base/loose mb-10">
              Passionate and driven Data and Machine Learning Engineer with a
              deep interest in leveraging data to build intelligent and
              impactful solutions. With a strong foundation in data analysis,
              model development, and AI implementation, I enjoy transforming
              complex problems into clear, data-driven insights.
            </p>
            <p className="text-base/loose mb-10">
              Having recently completed a degree in Informatics Engineering, I’m
              eager to apply my knowledge and hands-on project experience to
              real-world challenges. I thrive in dynamic environments where I
              can continuously learn, collaborate, and contribute to innovative,
              data-powered solutions.
            </p>
            <div className="flex items-center justify-between">
              <img
                src={DataImage.HeroImage}
                alt="Image"
                className="w-12 rounded-md sm:block hidden"
                loading="lazy"
              />
              <div className="flex items-center gap-6">
                <div>
                  <h1 className="text-4xl mb-1">
                    10 <span className="text-violet-500">+</span>
                  </h1>
                  <h1>Projects Completed</h1>
                </div>
                <div>
                  <h1 className="text-4xl mb-1">
                    1,5 <span className="text-violet-500">+</span>
                  </h1>
                  <p>Years Experienced</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SKILLS SECTION ================= */}
        <div className="skills mt-32" id="Skills">
          <h1
            className="text-center text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            🧠 Skills & Technologies
          </h1>
          <p
            className="text-center mx-auto xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Tools and technologies I work with
          </p>

          <div className="mt-14 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            {skillCategories.map((group) => (
              <div
                key={group.kategori}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={group.dad}
                data-aos-once="true"
                className="bg-zinc-800 p-6 rounded-2xl border border-zinc-700 shadow-lg"
              >
                <h2 className="text-xl font-semibold mb-6 text-violet-400 text-center md:text-left">
                  {group.kategori}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {group.items.map((item) => (
                    <div
                      key={item.nama}
                      className="flex flex-col items-center justify-center bg-zinc-900 rounded-lg p-3 border border-zinc-700 hover:bg-zinc-950 transition"
                    >
                      {item.gambar && (
                        <img
                          src={item.gambar}
                          alt={item.nama}
                          className="w-10 h-10 mx-auto mb-2 object-contain"
                          loading="lazy"
                        />
                      )}
                      <p className="text-center text-sm font-medium">
                        {item.nama}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= EXPERIENCE SECTION ================= */}
        <div className="experience mt-32 py-10" id="Experience">
          <h1
            className="text-center text-4xl font-bold mb-2"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            💼 Experience
          </h1>
          <p
            className="text-base/loose text-center opacity-50 mb-12"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Professional journey and achievements
          </p>

          <div className="relative mx-auto w-full lg:w-3/4">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-zinc-700"></div>

            {listExperience.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`mb-16 flex ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                  data-aos={isLeft ? "fade-right" : "fade-left"}
                  data-aos-duration="1000"
                >
                  <div
                    className={`w-full lg:w-1/2 relative ${
                      isLeft ? "pr-8" : "pl-8"
                    } group`}
                  >
                    <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 shadow-lg relative overflow-hidden transition duration-300 group-hover:border-violet-700">
                      <h2 className="text-xl font-bold text-violet-400">
                        {exp.title}
                      </h2>
                      <p className="text-gray-400 font-medium mb-2">
                        {exp.position} | {exp.date}
                      </p>

                      {exp.organization && (
                        <div className="bg-violet-900/30 border border-violet-700 text-sm text-center px-3 py-1 rounded-md w-fit mb-4">
                          {exp.organization}
                        </div>
                      )}

                      <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300 text-sm">
                        {exp.highlights.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>

                      <div className="absolute inset-0 bg-zinc-900/90 flex flex-wrap items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                        {exp.certificate && (
                          <a
                            href={exp.certificate}
                            target="_blank"
                            className="flex items-center gap-2 bg-violet-700 hover:bg-violet-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                          >
                            <i className="ri-award-fill text-white"></i>
                            Certificate
                          </a>
                        )}

                        {exp.linkedin && (
                          <a
                            href={exp.linkedin}
                            target="_blank"
                            className="flex items-center gap-2 bg-violet-700 hover:bg-violet-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                          >
                            <i className="ri-linkedin-box-fill text-white"></i>
                            Details
                          </a>
                        )}

                        {exp.instagram && (
                          <a
                            href={exp.instagram}
                            target="_blank"
                            className="flex items-center gap-2 bg-violet-700 hover:bg-violet-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                          >
                            <i className="ri-instagram-fill text-white"></i>
                            Instagram
                          </a>
                        )}
                      </div>
                    </div>

                    <span
                      className={`absolute top-6 w-6 h-6 bg-violet-700 rounded-full ring-8 ring-zinc-900 ${
                        isLeft ? "right-[-14px]" : "left-[-14px]"
                      }`}
                    ></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= PROJECTS SECTION ================= */}
        <div className="projects mt-32 py-10" id="Projects">
          <h1
            className="text-center text-4xl font-bold mb-2"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            💻 Projects
          </h1>
          <p
            className="text-base text-center opacity-60"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Selected Projects I've Worked On
          </p>

          <div className="projects-box mt-14 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {listProyek.map((projects) => (
              <div
                key={projects.id}
                className="relative group bg-zinc-800 border border-zinc-700 rounded-2xl overflow-hidden flex flex-col transition duration-300 hover:border-violet-700"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={projects.dad}
                data-aos-once="true"
              >
                <img
                  src={projects.gambar}
                  alt={projects.nama}
                  className="rounded-t-2xl w-full h-56 sm:h-52 object-cover object-center bg-zinc-900"
                  loading="lazy"
                />

                <div className="flex flex-col flex-grow p-5">
                  <h1 className="text-lg sm:text-xl font-bold mb-3 leading-snug">
                    {projects.nama}
                  </h1>

                  {(projects.highlight1 ||
                    projects.highlight2 ||
                    projects.highlight3) && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {projects.highlight1 && (
                        <span className="flex items-center gap-1 bg-zinc-700 px-2 py-1 rounded-full text-xs sm:text-sm">
                          <i className="ri-briefcase-4-fill text-violet-400"></i>
                          {projects.highlight1}
                        </span>
                      )}
                      {projects.highlight2 && (
                        <span className="flex items-center gap-1 bg-zinc-700 px-2 py-1 rounded-full text-xs sm:text-sm">
                          <i className="ri-team-fill text-green-400"></i>
                          {projects.highlight2}
                        </span>
                      )}
                      {projects.highlight3 && (
                        <span className="flex items-center gap-1 bg-zinc-700 px-2 py-1 rounded-full text-xs sm:text-sm">
                          <i className="ri-user-fill text-green-400"></i>
                          {projects.highlight3}
                        </span>
                      )}
                    </div>
                  )}

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                    {projects.desk}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {projects.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="py-1 px-3 border-zinc-600 bg-zinc-700 rounded-md font-medium text-xs sm:text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0 bg-zinc-900/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                  {projects.github && (
                    <a
                      href={projects.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-violet-700 hover:bg-violet-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                    >
                      <i className="ri-github-fill"></i>
                      Project Details
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CONTACT SECTION ================= */}
        <div className="contact mt-32 sm:p-10 p-0" id="Contact">
          <h1
            className="text-4xl mb-2 font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            📞Contact
          </h1>
          <p
            className="text-base/loose text-center mb-10 opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Let's Connect With Me
          </p>
          <form
            action="https://formsubmit.co/carmenitalamba@gmail.com"
            method="POST"
            className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
            autoComplete="off"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-once="true"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Name</label>
                <input
                  type="text"
                  name="Name"
                  placeholder="Enter Your Name..."
                  className="border border-zinc-500 p-2 rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Email</label>
                <input
                  type="email"
                  name="Email"
                  placeholder="Enter Your Email..."
                  className="border border-zinc-500 p-2 rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-semibold">
                  Your Message
                </label>
                <textarea
                  name="Message"
                  id="message"
                  cols="45"
                  rows="7"
                  placeholder="Message..."
                  className="border border-zinc-500 p-2 rounded-md"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* =============== END GLOBAL WRAPPER =============== */}
    </>
  );
}

export default App;
