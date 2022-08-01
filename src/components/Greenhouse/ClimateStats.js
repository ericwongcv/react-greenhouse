import './ClimateStats.css';
import { useClimate } from '../../context/ClimateContext';

function ClimateStats() {
  const { temperature, hygrometer } = useClimate();

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {temperature}°F
      </div>
      <div className="humidity">
        Humidity {hygrometer.toFixed(1)}%
      </div>
    </div>
  )
}

export default ClimateStats;
