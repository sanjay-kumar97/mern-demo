import { Link } from "react-router-dom";
import { CreateIcon, DeleteIcon, ReadIcon, UpdateIcon } from "../lib/icons";

const Home = () => {
  const data = [
    {
      title: "Add User",
      href: "/add-user",
      icon: <CreateIcon />,
    },
    {
      title: "View Users",
      href: "/view-users",
      icon: <ReadIcon />,
    },
    {
      title: "Modify User",
      href: "/modify-user",
      icon: <UpdateIcon />,
    },
    {
      title: "Remove User",
      href: "/remove-user",
      icon: <DeleteIcon />,
    },
  ];

  const styles = {
    container: "grid place-items-center min-h-main",
    wrapper: "flex justify-center flex-wrap gap-6 md:gap-10",
    cardBase:
      "flex flex-col gap-2 items-center p-3 rounded min-w-[140px] group",
    cardShadow:
      "shadow-[rgba(0,0,0,0.05)_0px_6px_24px_0px,rgba(0,0,0,0.08)_0px_0px_0px_1px]",
    cardHover:
      "lg:hover:scale-125 lg:transition-transform lg:duration-[400ms] lg:delay-75",
    iconWrapper:
      "lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500",
    textWrapper:
      "lg:scale-0 lg:group-hover:scale-100 transition-transform delay-75 duration-500",
  };

  return (
    <section className={styles["container"]}>
      <div className={styles["wrapper"]}>
        {data.map((item, index) => (
          <Link key={`card-${index + 1}`} to={item.href}>
            <div
              className={`${styles["cardBase"]} ${styles["cardShadow"]} ${styles["cardHover"]}`}
            >
              <i className={styles["iconWrapper"]}>{item.icon}</i>
              <p className={styles["textWrapper"]}>{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home;
