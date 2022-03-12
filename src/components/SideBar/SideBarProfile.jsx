import React from 'react'

function SideBarProfile({sideBarState}) {
    //get name and profile

    return (
    <div className="profile">
      <img src="./assets/image/profile.png" alt="profile-pict" />
      <h3 className="profile-name">{sideBarState ? "Danu Tryas Pristowo" : "DANU"}</h3>
      <button>SIGN OUT</button>
    </div>
  );
}

export default SideBarProfile