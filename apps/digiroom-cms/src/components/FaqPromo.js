import { Label, TextInput, Textarea } from 'flowbite-react';
import React from 'react';
import { Button, Input } from 'ui';

const FaqPromo = () => {
  return (
    <>
      <div className="px-4 md:px-12 py-4 md:py-8 m-4 md:m-12 border rounded-lg">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-5xl font-bold md:mb-4">Promo FAQ</h2>
          <div className="block -mb-3">
            <Label htmlFor="faqtitle" className="font-semibold text-reliableBlack60">
              FAQ Title
            </Label>
          </div>
          <TextInput
            class="bg-reliableBlack5 w-full rounded-none border-b-2 border-reliableBlack30 focus:border focus:ring-1 focus:ring-reliableBlack30 focus:border-reliableBlack30"
            id="faqtitle"
            type="text"
          />
          <div className="block -mb-3">
            <Label htmlFor="desc" className="font-semibold text-reliableBlack60">
              FAQ Description
            </Label>
          </div>
          <Textarea
            className="bg-reliableBlack5 rounded-none border-b-2 border-reliableBlack30 focus:border focus:ring-1 focus:ring-reliableBlack30 focus:border-reliableBlack30"
            id="desc"
            sizing="lg"
            type="textarea"
            rows={5}
          />
        </div>
        <div className="flex items-center mt-4">
          <Button type="button" className="w-full text-white">
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default FaqPromo;
