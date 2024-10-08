import DaysForecast from "@/components/cards/DaysForecast";
import HourlyForecast from "@/components/cards/HourlyForecast";
import MainCard from "@/components/cards/MainCard";
import UVindex from "@/components/cards/UVindex";
import WindCard from "@/components/cards/WindCard";
import Menu from "@/components/header/Menu";
import Search from "@/components/header/Search";


import "@/style/main/main.css";

export default function Home() {
  return (
    <div className="body">
      <div className="container">
        <header>
          <div className="logo">Atmosphere</div>
          <Search />
          <Menu />
        </header>
        <section>
          <MainCard />
          <div className="secondary-cards">
            <HourlyForecast />
            <DaysForecast />
            <div className="holder">
              <UVindex />
              <WindCard />
            </div>
          </div>
        </section>
        </div>
    </div>
  );
}