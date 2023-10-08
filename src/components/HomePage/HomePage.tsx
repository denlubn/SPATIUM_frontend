import './HomePage.scss';

export const HomePage: React.FC = () => {
  return (
    <>
      <div className="home__container">
        <img src="https://assets.spaceappschallenge.org/media/images/KSC-2012-2647medium.2e16d0ba.fill-300x250.jpg" alt="A Marketplace for Open Science Projects" />
        <div>
          <div className="home__hackathon_name">A Marketplace for Open Science Projects</div>
          <div className="home__creators">Created by Denys Pidlubniy and Ivan Karpov for SPACE APPS 2023</div>
          <a href="https://spatiumwebapp.azurewebsites.net/swagger/index.html">Link to API</a>
        </div>
      </div>
    </>
  );
};