import Scene from "../Scene/Scene";
import { TypeAnimation } from "react-type-animation";
import "./App.css";

const App = () => {
  return (
    <section className="w-full">
      <h1 className="text-4xl my-6 h-3/5">
        Hey i&apos;m David ! < br/>
        <TypeAnimation
          sequence={[
            "Web",
            1000,
            "front-end",
            2000,
            "back-end",
            2000,
            "FULLSTACK",
            2000,
            () => {
              console.log("Sequence completed"); // Place optional callbacks anywhere in the array
            },
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          speed={{ type: "keyStrokeDelayInMs", value: 100 }}
          deletionSpeed={{ type: "keyStrokeDelayInMs", value: 100 }}
          style={{ display: "block" }}
          className="text-4xl my-6 h-3/5"
        />
        Web Developper
      </h1>
      <div className="ma-scene mx-auto p-10 h-2/5">
        <Scene />
      </div>
    </section>
  );
};

export default App;
