const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card">
						<div src="" className="shimmer-img"></div>
						<div className="shimmer-title"></div>
						<div className="shimmer-cuisines"></div>
						<div className="shimmer-distance"></div>
					</div>
        ))}
    </div>
  );
};

export default Shimmer;
