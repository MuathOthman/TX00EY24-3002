import "./NotFoundStyle.css";
const notFoundImage = require("../Assets/404.png");

export const NotFound = () => {
  return (
    <div className="not-found">
      <img className="not-found-image" src={notFoundImage} alt="" />
    </div>
  );
};
