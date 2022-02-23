import Link from "next/link";
// import Image from "next/image";
import styles from "./ContactMap.module.css";


function ContactMap() {
  return (
    <div className={styles.container}>
      <div className={styles.mapcontainer}>
        <Link href="https://www.google.com/maps/place/Real+Code+Solutions+Co.,+Ltd/@21.9886343,96.0728067,20z/data=!4m5!3m4!1s0x30cb6d3ab199e2b9:0xdaf9c027b676286e!8m2!3d21.988684!4d96.0728436">
          <a target="_blank">
            <img
              src="/images/contact-us/map.png"
              alt="Map"
              width={1200}
              height={663.73}
            />
          </a>
        </Link>

        <Link href="https://www.google.com/maps/place/Real+Code+Solutions+Co.,+Ltd/@21.9886343,96.0728067,20z/data=!4m5!3m4!1s0x30cb6d3ab199e2b9:0xdaf9c027b676286e!8m2!3d21.988684!4d96.0728436">
          <a className={styles.largermap} target="_blank">
            view larger map
          </a>
        </Link>
      </div>
    </div>
  );
}

export default ContactMap;

// import { useState } from "react";
// import {
//   GoogleMap,
//   LoadScript,
//   Marker,
//   InfoWindow,
// } from "@react-google-maps/api";
// import styles from "./ContactMap.module.css";

// const containerStyle = {
//   width: "100%",
//   height: "600px",
// };

// const center = {
//   lat: 21.988700477487406,
//   lng: 96.07282232883517,
// };

// const position = {
//   lat: 21.988700477487406,
//   lng: 96.07282232883517,
// };

// const divStyle = {
//   background: `white`,
// };

// function ContactMap() {
//   const [info, setInfo] = useState(false);

//   return (
//     <div className={styles.container}>
//       <div className={styles.mapcontainer}>
//         <LoadScript googleMapsApiKey="AIzaSyDBbCDRY0C4sD0lfZn2NjVCarfilEMxPXY">
//           <GoogleMap
//             mapContainerStyle={containerStyle}
//             center={center}
//             zoom={10}
//           >
//             <Marker position={position} onClick={() => setInfo(true)} />

//             {info && (
//               <InfoWindow
//                 position={position}
//                 onCloseClick={() => setInfo(false)}
//               >
//                 <div style={divStyle}>
//                   <h3>Real Code Solution</h3>
//                   <p>
//                     No.24, 1st Floor, Kant Kaw Street, Between 22nd x 23rd
//                     Streets, Between 88th x 89th Streets, Aung Myay Thar Zan
//                     Township, Mandalay
//                   </p>
//                 </div>
//               </InfoWindow>
//             )}
//           </GoogleMap>
//         </LoadScript>
//       </div>
//     </div>
//   );
// }

// export default ContactMap;
