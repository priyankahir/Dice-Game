const Startgame = ({ toggle }) => {
    return <>
        <div className="hero-container">
            <div className="heroimage">
                <img src="/Images/hero.jpg" alt="" className="heroimg" />
            </div>
            <div className="content">
                <h1>dice game</h1>
                <button className="playbtn" onClick={toggle}>play now</button>
            </div>
        </div>
    </>
}
export default Startgame;