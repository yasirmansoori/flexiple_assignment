const Image = ({ pic }) => {
  return (
    <div className="my-3">
      <img src={pic} className="img-fluid w-100" draggable={false} alt="" />
    </div>
  );
};

export default Image;
