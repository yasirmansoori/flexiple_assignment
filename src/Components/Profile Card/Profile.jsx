import profilePic from "../../Images/Photo.jpg";

const Profile = () => {
  return (
    <div
      className="container p-4 my-2 rounded d-flex"
      style={{
        backgroundColor: "#1A1A1A",
      }}
    >
      <div className="d-flex align-items-baseline">
        <img
          src={profilePic}
          className="img-fluid rounded-circle object-fit-cover"
          width={150}
          alt=""
        />
      </div>
      <div className="ms-3">
        <h3 className="text-light">Yasir Mansoori</h3>
        <p className="text-light">
          MERN Developer || Full Stack Developer Enthusiast || Software
          Developer Enthusiast || CS undergrad at SRM University || Lead
          @GFG-SRMIST
        </p>
        <em>Last Updated - January 15</em>
      </div>
    </div>
  );
};

export default Profile;
