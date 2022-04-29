import logo from '../logo.svg';


export default function Home(props) {
    return (
        <div style={{
            height: "100vh",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>

            <div style={{
                height: "500px",
                display: "grid",
                gridTemplateRows: "1fr auto 1fr",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <div />
                <img src={logo} style={{
                    width: "min(500px, 100%)"
                }} />

                <div style={{
                    textAlign: "center"
                }}>
                    <p>{props.restaurantName}</p>
                    <p>Mesa {props.nTable}</p>
                    <button onClick={() => {props.handleSelectedView("menu")}} >Menu</button>
                    <button onClick={() => {props.handleSelectedView("cuenta")}} >Cuenta</button>
                </div>
            </div>
        </div>
    );
}