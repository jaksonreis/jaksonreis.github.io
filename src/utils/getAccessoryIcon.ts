const SpeedSvg = 'src/assets/speed.svg';
const AccelerationSvg = 'src/assets/acceleration.svg';
const ForceSvg = 'src/assets/force.svg';
const GasolineSvg = 'src/assets/gasoline.svg';
const EnergySvg = 'src/assets/energy.svg';
const HybridSvg = 'src/assets/hybrid.svg';
const ExchangeSvg = 'src/assets/exchange.svg';
const PeopleSvg = 'src/assets/people.svg';
const CarSvg = 'src/assets/car.svg';

export function getAccessoryIcon(type: string){
  switch (type) {
    case 'speed':      
      return SpeedSvg;
    case 'acceleration':      
      return AccelerationSvg;
    case 'turning_diameter':      
      return ForceSvg;
    case 'gasoline_motor':      
      return GasolineSvg;
    case 'electric_motor':      
      return EnergySvg;
    case 'hybrid_motor':      
      return HybridSvg;
    case 'exchange':      
      return ExchangeSvg;
    case 'seats':      
      return PeopleSvg;    
    default:
      return CarSvg;
  }
}