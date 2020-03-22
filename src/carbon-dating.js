const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const RATE = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {

  let sampleActivityPars = parseFloat(sampleActivity);

  if (
    (typeof sampleActivity != 'string') ||
    sampleActivityPars <= 0 || 
    sampleActivityPars > MODERN_ACTIVITY ||
    !isFinite(sampleActivityPars)) 
    
    return false;

     return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityPars) / (RATE));
};
