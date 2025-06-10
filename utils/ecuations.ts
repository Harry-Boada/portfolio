import { dataYear, dataPopulation } from '@/utils/data'

export const getModel = (year1:number, year2:number) => {
    const c = dataPopulation[dataYear.indexOf(year1)]

    const  dfference_years = ( year2 - year1  ) 

    const k = Math.log( dataPopulation[dataYear.indexOf(year2)] / c) / dfference_years 
    return { c, k }
}

export const exponential = (c:number, k:number, yearDiference:number) => {
    
    console.log('Años 2020', yearDiference)
    return c * Math.exp(k * yearDiference)
}




export const getLogisticModel = (year1:number, year2:number, PMax:number, yearDiference:number) => {
    const P0 = dataPopulation[dataYear.indexOf(year1)]
    const P1 = dataPopulation[dataYear.indexOf(year2)]

    const kc =  P0 / (PMax - P0)

    const PMaxNew = PMax / 1000000; 
    const P0New = P0 / 1000000; 
    const P1New = P1 / 1000000; 

    console.log({ PMaxNew, P0New, P1New, yearDiference })

    const k_num = Math.log(
        ((PMaxNew * P0New) - 
        (P0New * P1New))
        /
        (P1New * (PMaxNew - P0New))
    ); 
    const k_den = -(PMaxNew * yearDiference); 

    console.log({
        k_num,
        k_den
    })

    const k = k_num / k_den;

    const r = k * PMaxNew

    console.log({ kc, k, r, PMax })

    return { kc, k, r, PMax }
}

export const logisticPopulation = (kc:number, r:number, yearDiference:number, PMax:number) => {
    return (PMax * kc) / (Math.exp(-r * yearDiference) + kc)
}

export const getLaplaceSolution = (c: number, k: number) => {
  // 1) formateo dinámico: fixed(5) pero luego eliminamos ceros innecesarios
    const formattedC = Math.round(c).toLocaleString();
    const formattedK = k.toFixed(5);

  return [
    `Ecuación diferencial: dP/dt = ${formattedK}P`,
    `Transformada de Laplace: sP(s) - ${formattedC} = ${formattedK}P(s)`,
    `Factor común: P(s)(s - ${formattedK}) = ${formattedC}`,
    `Solución en S: P(s) = ${formattedC}/(s - ${formattedK})`,
    `Transformada inversa: P(t) = ${formattedC} e^{${formattedK}t}`
  ];
};
