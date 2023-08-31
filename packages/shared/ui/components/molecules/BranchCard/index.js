import {
  ArrowSplit,
  Build,
  Button,
  DirectionsCar,
  Garage,
  GarageHome,
  Mail,
  PhoneInTalk,
} from '../../atoms';
import Card from '../../atoms/Card/Card';
import { whatsapp } from '../../../assets/images';

const BranchCard = () => {
  const buttonContentClass = 'flex gap-1 items-center min-w-[80px] justify-center text-xs';

  return (
    <Card className="border-b-[5px] border-reliableBlack5 md:border-none">
      <img
        src="https://tsoimageprod.azureedge.net/sys-master-hybrismedia/h6f/h81/8804318478366"
        alt=""
        className="hidden md:block aspect-video w-full object-cover"
      />
      <div className="pt-[10px] px-5 pb-7">
        <h5 className="text-sm font-bold lg:text-lg mb-1 md:mb-2">AUTO2000 GARUDA</h5>
        <p className="text-reliableBlack90 text-xs md:text-sm mb-1">
          Jl. Letjen. Suprapto, 63, Jakarta Pusat, 10520
        </p>
        <div className="flex items-center">
          <ArrowSplit />
          <a href="#" className="text-xs text-hyperLink">
            Petunjuk Arah <span className="text-reliableBlack">(0,5 Km)</span>
          </a>
        </div>
        <div className="flex items-center md:border-b border-reliableBlack310 text-xs lg:text-sm mt-4 md:mt-6 pb-[10px] md:mb-[10px]">
          <h6 className="font-semibold">Layanan</h6>
          <div className="w-2 h-2 bg-[#58A942] rounded ml-3 mr-[5px]"></div>
          <p>Buka (08:00 - 17:00)</p>
        </div>
        <ul className="flex flex-wrap gap-x-7 gap-y-1 text-xs mb-[10px] md:mb-6">
          <li className="flex gap-2 items-center">
            <div>
              <Garage />
            </div>
            <p>Showroom</p>
          </li>
          <li className="flex gap-2 items-center">
            <div>
              <GarageHome />
            </div>
            <p>Bengkel</p>
          </li>
          <li className="flex gap-2 items-center">
            <div>
              <Build />
            </div>
            <p>Suku Cadang</p>
          </li>
        </ul>
        <div className="flex gap-2 flex-wrap">
          <Button variant="bg-reliableBlack3" className="hidden md:block font-semibold flex-1">
            <span className={buttonContentClass}>
              EMAIL
              <Mail />
            </span>
          </Button>
          <Button variant="bg-reliableBlack3" className="md:hidden font-semibold flex-1">
            <span className={buttonContentClass}>
              CALL
              <PhoneInTalk />
            </span>
          </Button>
          <Button variant="bg-reliableBlack3" className="font-semibold flex-1">
            <span className={buttonContentClass}>
              WHATSAPP
              <img src={whatsapp.src} className="w-5 h-5" alt="whatsapp" />
            </span>
          </Button>
          <Button variant="bg-reliableBlack3" className="font-semibold flex-1">
            <span className={buttonContentClass}>
              TEST DRIVE
              <DirectionsCar />
            </span>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default BranchCard;
