import { Fragment } from "react";
import ClientSuccess from "../share-components/ClientSuccess";
import SoftwaresWeDevelop from "../share-components/SoftwaresWeDevelop";
import TechnologiesWeUse from "../share-components/TechnologiesWeUse";

function Information({ items }) {
  return (
    <Fragment>
      <SoftwaresWeDevelop />
      {/* <ClientSuccess items={items} /> */}
      <TechnologiesWeUse />
    </Fragment>
  );
}

export default Information;
