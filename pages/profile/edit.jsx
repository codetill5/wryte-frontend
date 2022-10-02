import React, { useState, useEffect } from "react";

import { getUserData } from "../../helper";
import EditForm from "../../components/Form/EditForm";

const Edit = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const data = getUserData();
    setUserData(JSON.parse(data));
  }, []);

  return (
    <div className="axil-post-list-area axil-section-gap bg-color-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-xl-8">
            <div className="axil-about-us">
              <EditForm userdata={userData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
