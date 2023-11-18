import "./Home.css"
const Home = () => {

    const image = [{
        id: 1,
        img: "https://www.moongoddesscouture.com/wp-content/uploads/2023/05/DSC02116-570x570.jpg",
        title: "New arrivals-Slit Top"
    },
    {
        id: 2,
        img: "https://www.moongoddesscouture.com/wp-content/uploads/2023/05/DSC08583-570x570.jpg"
    },
    {
        id: 3,
        img: "https://www.moongoddesscouture.com/wp-content/uploads/2023/05/DSC06453-570x570.jpg"
    },
    {
        id: 4,
        img: "	https://www.moongoddesscouture.com/wp-content/uploads/2023/03/DSC09329-270x350.jpg"
    }]
    return (
        <div>
            <img src="https://img.freepik.com/premium-photo/top-view-online-shopping-concept-with-credit-card-smart-phone-computer-isolated-office-yellow-table-background_315337-3591.jpg" alt="image" style={{ width: "100%" }} />
            <h2 style={{ textAlign: "center", marginTop: "40px" }}>Best Selling Categories</h2>
            <div className="image-div">
                {image.map((pic) => (
                    <div key={pic.id} >

                        <img src={pic.img} className="image-home" />
                    </div>


                ))}
            </div>

        </div>
    )
}
export default Home