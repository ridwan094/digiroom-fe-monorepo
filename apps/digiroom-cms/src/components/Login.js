import React, { useState } from 'react';
import { Label, TextInput } from 'flowbite-react';
import Image from 'next/image';
import { Button, Input } from 'ui';

const Login = ({ onLogin }) => {
  return (
    <form>
      <div className="flex justify-center items-center h-screen mx-6">
        <div className="bg-white shadow-md border rounded-lg p-5 md:p-8 mb-4 w-full md:w-1/3">
          <Image src="/auto2000.webp" alt="logo" className="mb-7" width={200} height={200} />
          <div className="mb-4">
            <div className="block mb-1">
              <Label htmlFor="title" className="font-semibold text-reliableBlack60">
                FAQ Title
              </Label>
            </div>
            <TextInput
              class="bg-reliableBlack5 w-full rounded-none border-b-2 border-reliableBlack30 focus:border focus:ring-1 focus:ring-reliableBlack30 focus:border-reliableBlack30"
              id="title"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-7">
            <div className="block mb-1">
              <Label htmlFor="desc" className="font-semibold text-reliableBlack60">
                FAQ Description
              </Label>
            </div>
            <TextInput
              class="bg-reliableBlack5 w-full rounded-none border-b-2 border-reliableBlack30 focus:border focus:ring-1 focus:ring-reliableBlack30 focus:border-reliableBlack30"
              id="desc"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center">
            <Button onClick={onLogin} type="button" className="w-full text-white">
              Login
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
