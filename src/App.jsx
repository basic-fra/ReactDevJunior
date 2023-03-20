import "./App.css";
import { useState } from "react";

import Prikaz from "./components/Prikaz";
import Tipka from "./components/Tipka";
import Datum from "./components/Datum";
import Logo_fcb from "./components/logoBarca";
import Logo_rm from "./components/logoReal";
import Ime from "./components/imeKluba";


function App() {

 const [rez1, postaviRez1] = useState(0);
 const [rez2, postaviRez2] = useState(0);

 const umanjiRez1 = () => {
    if(rez1 > 0){
  postaviRez1(rez1 - 1);
    }
 }
 const uvecajRez1 = () => {
  postaviRez1(rez1 + 1);
 }
 const umanjiRez2 = () => {
    if(rez2 > 0){
        postaviRez2(rez2 - 1);
          }
 }
 const uvecajRez2 = () => {
  postaviRez2(rez2 + 1);
 }
 return (
 <div className="pozadina">
    <Datum />
<br />
 <div className="clubs">
    <div className="left-div">
    <Logo_fcb />
    </div>
    <div className="rezultat">
    <Prikaz rez1={rez1} />
    <p>:</p>
    <Prikaz rez2={rez2} />
    </div>
    <div className="right-div">
    <Logo_rm />
    </div>
 </div>
 {/* className="left-div" 
 </div>
 <div className="right-div"> 
 <div className="margin-right">*/
 }
    <div className="names">
 <div className="margin-right"> 
 <Ime naslov='Barcelona' />
</div>
<div className="margin-left"> 
 <Ime naslov='Real Madrid' />
 </div>
 </div>

 <div className="display_buttons">
 <Tipka natpis='+' akcija={uvecajRez1} />
 <Tipka natpis='-' akcija={umanjiRez1} />
 
 <Tipka natpis='+' akcija={uvecajRez2} />
 <Tipka natpis='-' akcija={umanjiRez2} />
 </div>
 </div>
 );
}

export default App;
