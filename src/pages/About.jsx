import placeholderVideo from "../assests/pointing_pink.mp4";
import profile from "../assests/michael-dam-mEZ3PoFGs_k-unsplash.jpg";

const About = () => {
  return (
    <section>
      <div>
        <img src={profile} alt="This is a personal trainer"></img>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odit
          ab numquam modi earum aspernatur velit consequuntur libero animi
          facere, quod sunt. Delectus quia voluptate mollitia totam optio omnis
          natus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Impedit odit ab numquam modi earum aspernatur velit consequuntur
          libero animi facere, quod sunt. Delectus quia voluptate mollitia totam
          optio omnis natus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odit
          ab numquam modi earum aspernatur velit consequuntur libero animi
          facere, quod sunt. Delectus quia voluptate mollitia totam optio omnis
          natus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Impedit odit ab numquam modi earum aspernatur velit consequuntur
          libero animi facere, quod sunt. Delectus quia voluptate mollitia totam
          optio omnis natus.
        </p>
        <video height="360" width="280">
          <source src={placeholderVideo} type="video/mp4" />
        </video>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odit
          ab numquam modi earum aspernatur velit consequuntur libero animi
          facere, quod sunt. Delectus quia voluptate mollitia totam optio omnis
          natus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Impedit odit ab numquam modi earum aspernatur velit consequuntur
          libero animi facere, quod sunt. Delectus quia voluptate mollitia totam
          optio omnis natus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odit
          ab numquam modi earum aspernatur velit consequuntur libero animi
          facere, quod sunt. Delectus quia voluptate mollitia totam optio omnis
          natus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Impedit odit ab numquam modi earum aspernatur velit consequuntur
          libero animi facere, quod sunt. Delectus quia voluptate mollitia totam
          optio omnis natus.
        </p>
      </div>
    </section>
  );
};

export default About;
