// import { useDispatch, useSelector } from "react-redux";

// import { increment, decrement } from "~/store/slices/appSlice";
// import Button from "~/components/ui/Button";

// import styles from "./Home.module.scss";
// import { RootState } from "../../store/store";

// img
import bg from "~/assets/img/bg.jpg";
const HomePage = () => {
  // const dispatch = useDispatch();
  // const count = useSelector((state: RootState) => state.app.count);

  return (
    // <div className={styles.wrapper}>
    // 	<div className={styles.content}>
    // 		<Button onClick={() => dispatch(increment())}>+</Button>
    // 		<span>{count}</span>
    // 		<Button onClick={() => dispatch(decrement())}>-</Button>
    // 	</div>
    // </div>

    <section
      id="home"
      className="bg-gradient-to-r from-[#f5f7fa] to-[#e4ecf7] py-20"
    >
      <div className="max-w-[1200px] mx-auto px-5 flex flex-wrap justify-between items-center gap-10">
        {/* Text content */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">
            Hello, I’m <span className="text-[#6c3bff]">Jang Wonyoung</span>
          </h1>
          <p className="text-lg mb-4">I’m a Frontend Developer.</p>
          <p className="text-lg mb-6">
            Outside of coding, I enjoy graphic design, playing video games, and
            reading tech blogs.
          </p>
          <button className="bg-[#6c3bff] hover:bg-[#5432cc] text-white px-6 py-3 rounded-md font-medium transition-all">
            Say Hello!
          </button>

          {/* Skills */}
          <div className="pt-12">
            <h2 className="text-2xl font-semibold text-center text-[#333] mb-6">
              My Skills
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "HTML5",
                "CSS3",
                "JavaScript",
                "Responsive Design",
                "Figma",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-[#6c3bff] text-white px-6 py-3 rounded-full font-medium hover:bg-[#5432cc] transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="max-w-sm mx-auto">
          <img
            src={bg}
            alt="Profile"
            className="rounded-2xl shadow-md w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
