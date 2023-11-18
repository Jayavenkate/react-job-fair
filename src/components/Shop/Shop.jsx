/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
const Shop = ({ electronics, addToCart }) => {

    return (
        <div style={{ display: "flex", flexDirection: "row", width: "100%", flexWrap: "wrap", gap: "40px", alignItems: "center", justifyContent: "space-around" }}>
            {electronics.map((item, index) => (
                <div key={index} >
                    <img src={item.img} alt="image" style={{ width: "250px", height: "250px", border: "1px solid" }} />
                    <p style={{ textAlign: "center" }}>{item.name}</p>
                    <p style={{ textAlign: "center" }}>Rs {item.amt}</p>
                    <Button sx={{ display: "flex", margin: "0 auto" }} variant="contained" onClick={() => addToCart(item)}>Book</Button>
                </div>
            ))}
        </div>
    )
}
export default Shop