const FastGoodCheap = ({ title, color, isActivated }) => {
	return (
		<>
			<div className="button-container">
				<div className="button" style={isActivated ? { backgroundColor: color.button } : { backgroundColor: '#8F8F8F' }}>
					<div style={isActivated ? { backgroundColor: color.circle } : { backgroundColor: '#D2D1D1' }} className={`button-circle ${isActivated && 'activated-button'}`}></div>
				</div>
				<div className="title">{title}</div>
			</div>
		</>
	);
};

export default FastGoodCheap;
