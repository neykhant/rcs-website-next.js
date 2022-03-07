import { Fragment } from "react";
import ClientSuccess from "../share-components/ClientSuccess";
import OurClient from "../share-components/OurClient";
import SoftwaresWeDevelop from "../share-components/SoftwaresWeDevelop";
import TechnologiesWeUse from "../share-components/TechnologiesWeUse";

function Information({ items }) {
  return (
    <Fragment>
      <SoftwaresWeDevelop />
      {/* <ClientSuccess items={items} /> */}
      <TechnologiesWeUse />
      <OurClient/>
    </Fragment>
  );
}

export default Information;
