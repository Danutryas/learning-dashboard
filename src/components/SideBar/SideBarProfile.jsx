import React from "react";

function SideBarProfile({ fullDashboard }) {

  return (
    <div className="profile">
      <div className="identity">
        <img src="./assets/image/profile.png" alt="profile-pict" />
        <h3 className="identity-name">
          {fullDashboard ? "Danu Tryas" : "DANU"}
        </h3>
      </div>

      <button>SIGN OUT</button>
    </div>
  );
}

export default SideBarProfile;
