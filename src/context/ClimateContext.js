// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

import { createContext, useContext, useEffect, useState } from "react";

export const ClimateContext = createContext();

export const useClimate = () => useContext(ClimateContext);

export const ClimateProvider = (props) => {
    const [temperature, setTemperature] = useState(50);
    const [hygrometer, setHygrometer] = useState(40);
    const [desiredTemperature, setDesiredTemperature] = useState(temperature);
    const [desiredHygrometer, setDesiredHygrometer] = useState(hygrometer);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (desiredTemperature > temperature) {
                setTemperature(temperature + 1);
            } else if (desiredTemperature < temperature) {
                setTemperature(temperature - 1);
            };
        }, 1000);
        return () => clearTimeout(timer);
    }, [temperature, desiredTemperature]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (desiredHygrometer > hygrometer) {
                const nextValue = hygrometer + hygrometer * 0.02;
                nextValue > desiredHygrometer ? 
                setHygrometer(desiredHygrometer) :
                setHygrometer(nextValue);
            } else if (desiredHygrometer < hygrometer) { 
                const nextValue = hygrometer - hygrometer * 0.02;
                nextValue < desiredHygrometer ? 
                setHygrometer(desiredHygrometer) :
                setHygrometer(nextValue);
            };
        }, 1000);
        return () => clearTimeout(timer);
    }, [hygrometer, desiredHygrometer]);

    return (
        <ClimateContext.Provider value={{
            temperature,
            setTemperature,
            hygrometer,
            setHygrometer,
            desiredTemperature,
            setDesiredTemperature,
            desiredHygrometer,
            setDesiredHygrometer
        }}>
            {props.children}
        </ClimateContext.Provider>
    )
};
