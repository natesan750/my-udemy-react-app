function Navbar() {
    return (
        <>
            <div className="navbar">

                <div className="navbar__s1__title">
                    <h1>Udemy</h1>
                </div>

                <div class="navbar__s2">
                    <i className="search-icon fas fa-search"></i>
                    <input type="text" placeholder="Search for anything here. Tech, business,..." />
                </div>


                <div className="navbar__s3">
                    <p>Courses</p>
                    <div className="mylearning">
                        <p>My learning</p>

                        <div className="mylearning__popup">
                            <p>You have not purchased anything yet</p>
                        </div>

                    </div>
                    <i className="fas fa-shopping-cart"></i>
                    <i className="fas fa-bell"></i>
                    <i className="fas fa-user"></i>
                </div>

                <div className="navbar__s4">
                    <i className="fa-solid fa-bars"></i>
                </div>

            </div>
        </>
    )
}

export default Navbar