import React from 'react';
import { BranchServiceCard } from '../../molecules';

const BranchServiceSection = ({ data }) => {
  return (
    <section className="my-8 container">
      <div>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-base font-bold uppercase text-reliableBlack mb-2 lg:text-2xl">
              PRODUK PURNA JUAL TOYOTA AUTO2000 CEMPAKA PUTIH
            </h2>
            <p className="text-xs font-medium leading-relaxed text-reliableBlack mb-5 lg:text-base">
              Cari Kebutuhan Anda disini di Auto2000 Cempaka Putih
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:gap-6">
          {data.map((items, index) => {
            return (
              <BranchServiceCard
                key={index}
                title={items.title}
                subTitle={items.subTitle}
                icons={items.image}
                textButton={items.btnText}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BranchServiceSection;
