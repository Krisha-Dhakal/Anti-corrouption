import React from "react";
import Api from "../../utils/Api";
import "./style.css";

function Home() {
  const [Notices, setNotices] = React.useState([]);
  const [Publication, setPublication] = React.useState([]);
    /**
   * Loading staate for both fetch
   */
    const [nLoading, setNLoading] = React.useState(true)
    const [pLoading, setPLoading] = React.useState(true)

  React.useEffect(() => {
    Api.get("/scrap/get-notices").then((res) => setNotices(res.data));
    Api.get("/scrap/get-publication").then((res) => setPublication(res.data));
  }, []);

  return (
    <div className="landing__hero">
      <header className="masthead">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h1 className="my-large">WELCOME TO <b style={{color: "rgb(156, 181, 224)", fontSize: "50px"}}>BRIBEBANE</b></h1>
              <p className="lead">Here you can find the latest updates</p>
            </div>
            <div className="col-12 text-center">
              <iframe
                title="online-complaint"
                className="customIframe"
                height={600} // Reduced height for better visibility
                width={1200} // Reduced width for better visibility
                src="https://ciaa.gov.np/online-complaint"
              ></iframe>
              <hr className="underline" /> {/* Added underline */}
            </div>
          </div>
          <div className="Container-foot">
          <div className="row mt-5">
    <div className="col-lg-6">
        <h2>Recent Notices</h2>
        <p>Source: CIAA, Transparency org. </p>
        {Publication.map((data, key) => (
            <div className="my-2" key={key}>
                <div className="notice-card">
                    <h3>{key + 1}. {data.title}</h3>
                    <p>{data.description}</p>
                    <a href={data.link}>Read More</a>
                </div>
            </div>
        ))}
    </div>
    <div className="col-lg-6">
        <h2>Recent Publications</h2>
        <p>Source: CIAA, Transparency org. </p>
        {Notices.map((data, key) => (
            <div className="my-2" key={key}>
                <div className="publication-card">
                    <h3>{key + 1}. {data.title}</h3>
                    <p>{data.description}</p>
                    <a href={data.link}>Read More</a>
                </div>
            </div>
            
        ))}
    </div>
</div>


          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
 