import placeholderVideo from "../assests/pointing_pink.mp4";
import profile from "../assests/michael-dam-mEZ3PoFGs_k-unsplash.jpg";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <h2>About Jane Doe</h2>
      <div className={styles.aboutSectionGridWrapper}>
        <div className={styles.profileImageWrapper}>
          <img src={profile} alt="This is a personal trainer"></img>
          <h3>Jane Doe, NASM</h3>
        </div>
        <div className={styles.aboutSectionContentWrapper}>
          <p>
            <strong>Lorem ipsum dolor</strong> sit amet consectetur adipisicing elit. Impedit
            odit ab numquam modi earum aspernatur velit consequuntur libero
            animi facere, quod sunt. Delectus quia voluptate mollitia totam
            optio omnis natus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Impedit odit ab numquam modi earum aspernatur
            velit consequuntur libero animi facere, quod sunt. Delectus quia
            voluptate mollitia totam optio omnis natus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            odit ab numquam modi earum aspernatur velit consequuntur libero
            animi facere, quod sunt. Delectus quia voluptate mollitia totam
            optio omnis natus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Impedit odit ab numquam modi earum aspernatur
            velit consequuntur libero animi facere, quod sunt. Delectus quia
            voluptate mollitia totam optio omnis natus.
          </p>
          <div>
            <video height="280" width="360" controls>
              <source src={placeholderVideo} type="video/mp4" />
            </video>
            <legend>Video intro of Jane Doe</legend>
          </div>
          <p>
            <strong>Lorem ipsum dolor</strong> sit amet consectetur adipisicing
            elit. Impedit odit ab numquam modi earum aspernatur velit
            consequuntur libero animi facere, quod sunt. Delectus quia voluptate
            mollitia totam optio omnis natus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Impedit odit ab numquam modi earum
            aspernatur velit consequuntur libero animi facere, quod sunt.
            Delectus quia voluptate mollitia totam optio omnis natus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            odit ab numquam modi earum aspernatur velit consequuntur libero
            animi facere, quod sunt. Delectus quia voluptate mollitia totam
            optio omnis natus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Impedit odit ab numquam modi earum aspernatur
            velit consequuntur libero animi facere, quod sunt. Delectus quia
            voluptate mollitia totam optio omnis natus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
