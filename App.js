
import Sample from "./components/first/Sample.js"
import Second from "./components/second/Second.js";
import Third from "./components/third/Third.js";
import Fourth from "./components/fourth/Fourth.js";
import Fifth from "./components/fifth/Fifth.js";
import Sixth from "./components/sixth/Sixth.js";
import Seventh from "./components/seventh/Seventh.js";
import Eigth from "./components/eight/Eigth.js";
import Nine from "./components/nine/Nine.js";
import Ten from "./components/ten/Ten.js";
import { View } from "react-native";
import Eleven from "./components/eleven/Eleven.js";


export default function App(){
  return <View style={{padding: 60, flex: 1}}>
    {/* <Sample></Sample> */}
{/* <Second></Second> */}
{/* <Third></Third> */}
{/* <Fourth></Fourth> */}
{/* <Fifth></Fifth> */}
{/* <Sixth></Sixth> */}
{/* <Seventh></Seventh> */}
{/* <Eigth></Eigth> */}
{/* <Nine></Nine> */}
{/* <Ten></Ten> */}
<Eleven name="Batman!"></Eleven>
<Eleven name="Superman!"></Eleven>
  </View>
}