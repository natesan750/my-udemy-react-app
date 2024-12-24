function Recommended() {
    return (
        <>
            <div className="recommended">
                <h1 className="recommended__title">Recommended for you</h1>
                <p className="recommended__title__p">pick the fit</p>

                <div className="recommended__container">

                    <div className="course-card">
                        <img src="./c1.jpg" alt="image"/>
                            <h3>Full stack developing masterclass</h3>
                            <p>col steel</p>
                            <p>4.9⭐⭐⭐⭐</p>
                            <p>449 <del>999</del></p>
                    </div>

                    <div className="course-card">
                        <img src="./c2.jpg" alt="image"/>
                            <h3>Data anaylist and data scientist</h3>
                            <p>col steel</p>
                            <p>4.9⭐⭐⭐⭐</p>
                            <p>449 <del>999</del></p>
                    </div>

                    <div className="course-card">
                        <img src="./c3.jpg" alt="image"/>
                            <h3>AI deep learning</h3>
                            <p>col steel</p>
                            <p>3.9⭐⭐⭐</p>
                            <p>449 <del>999</del></p>
                    </div>

                    <div className="course-card">
                        <img src="./c4.jpg" alt="image"/>
                            <h3>UI/UX designer</h3>
                            <p>col steel</p>
                            <p>4.9⭐⭐⭐⭐</p>
                            <p>449 <del>999</del></p>
                    </div>

                </div>

            </div>
        </>
    )
}


export default Recommended