import { Fragment, useState } from 'react';
import { GeoPosition, Dropdown, Button, Text } from '../../atoms';
import {
  MdShare,
  MdOutlinePlaylistA,
  MdOutlinePlaylistAddCheck,
  MdOutlineMap,
} from 'react-icons/md';

const BranchFilter = ({ onClickHandlerViewMap, isMapView }) => {
  const [location, setLocation] = useState('Jakarta Pusat');

  const handleChangeLocation = (e) => {
    setLocation(e);
  };

  return (
    <section className="flex flex-col items-center relative justify-between md:flex-row">
      <GeoPosition
        value={location}
        options={['Jakarta Pusat', 'Bandung', 'Yogyakarta', 'Nanggroe Aceh Darussalam']}
        onChange={handleChangeLocation}
        classNameContainer="bg-reliableBlack3 border-b border-b-reliableBlack30 w-full md:w-1/3"
      />
      {/* Desktop Resolution */}
      <div className="bg-reliableBlack3 hidden md:flex items-center justify-between px-4 gap-6 py-4 lg:flex items-center justify-between px-4 gap-6 py-4">
        <div className="flex gap-2">
          <Text.Headline4 className="lg:text-base">6</Text.Headline4>
          <Text.Headline4>Dealer</Text.Headline4>
        </div>
        <div className="flex gap-2 cursor-pointer" onClick={() => {}}>
          <Text.Headline4 className="lg:text-base">ATUR RELEVANSI</Text.Headline4>
          <MdOutlinePlaylistAddCheck size={24} color="black" />
        </div>
        <div className="flex gap-2 cursor-pointer" onClick={() => onClickHandlerViewMap()}>
          <Text.Headline4 className="lg:text-base">
            {!isMapView ? 'MAP VIEW' : 'LIST VIEW'}
          </Text.Headline4>
          <MdOutlineMap size={24} color="black" />
        </div>
      </div>

      {/* Mobile Resolution */}
      <div className="bg-reliableBlack3 flex items-center justify-between px-4 gap-6 py-4 w-full md:hidden lg:hidden">
        <div className="flex gap-2">
          <Text.Headline4 className="lg:text-base">6</Text.Headline4>
          <Text.Headline4>Dealer</Text.Headline4>
        </div>
        <div className="flex gap-2 cursor-pointer" onClick={() => {}}>
          <Text.Headline4 className="lg:text-base">ATUR RELEVANSI</Text.Headline4>
          <MdOutlinePlaylistAddCheck size={24} color="black" />
        </div>
        <div className="flex gap-2 cursor-pointer" onClick={() => onClickHandlerViewMap()}>
          <Text.Headline4 className="lg:text-base">MAP</Text.Headline4>
          <MdOutlineMap size={24} color="black" />
        </div>
      </div>
    </section>
  );
};

export default BranchFilter;
