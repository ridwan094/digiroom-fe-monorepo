import { Fragment, useState } from 'react';
import { GeoPosition, Dropdown, Button, Text } from '../../atoms';
import {
  MdShare,
  MdOutlinePlaylistA,
  MdOutlinePlaylistAddCheck,
  MdOutlineMap,
} from 'react-icons/md';

const BranchFilter = () => {
  const [location, setLocation] = useState('Jakarta Pusat');

  const handleChangeLocation = (e) => {
    setLocation(e);
  };

  return (
    <section className="flex items-center justify-between px-4">
      <GeoPosition
        value={location}
        options={['Jakarta Pusat', 'Bandung', 'Yogyakarta', 'Nanggroe Aceh Darussalam']}
        onChange={handleChangeLocation}
        classNameContainer="bg-reliableBlack3 border-b border-b-reliableBlack30 w-1/3"
      />
      <div className="bg-reliableBlack3 flex items-center justify-between px-4 gap-6 py-4">
        <div className="flex gap-2">
          <Text.Headline4>6</Text.Headline4>
          <Text.Headline4>Dealer</Text.Headline4>
        </div>
        <div className="flex gap-2 cursor-pointer" onClick={() => {}}>
          <Text.Headline4>ATUR RELEVANSI</Text.Headline4>
          <MdOutlinePlaylistAddCheck size={24} color="black" />
        </div>
        <div className="flex gap-2 cursor-pointer" onClick={() => {}}>
          <Text.Headline4>MAP VIEW</Text.Headline4>
          <MdOutlineMap size={24} color="black" />
        </div>
      </div>
    </section>
  );
};

export default BranchFilter;
