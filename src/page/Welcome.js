
export default () => {
    const welcomeStyle = {
        height: '100%',
        backgroundColor: '#232323',
        padding: '24px 16px 0',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
    return (
        <div style={welcomeStyle}>
            <h1 style={{ fontSize: '70px', color: 'white' }}>Hey I am Ryoko</h1>
            <p style={{ fontSize: "20px", fontStyle: "italic", color: "#db7093", fontFamily: "Courier New,Courier,monospace" }}>Welcome to my channel :D</p>
        </div>
    )
}