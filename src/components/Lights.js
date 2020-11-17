import React from 'react'; 

function Lights() {
    const [isOn, setLight] = React.useState(true);
    const luminosity = isOn ? "light" : "dark";
   
    return (
       <div className={`Lights ${luminosity}`}>
          The lights of this page are set to {isOn ? 'Day' : 'Night'} mode
          <br />
          <button onClick={() => setLight(!isOn)}>You can change it here</button>
      </div>
    );
   }

   export default Lights