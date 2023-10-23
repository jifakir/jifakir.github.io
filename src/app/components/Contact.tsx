import React from 'react';
import Title from './Title';
import { Button } from '.';
import { Location, Mobile, Sms, Whatsapp } from 'iconsax-react';

const Contact = () => {
  return (
    <>
      <Title title="Get in Touch" />
      <div className="mt-20 flex items-center gap-10">
        <div className="w-2/3 space-y-5">
          <div className="flex items-center gap-5 bg-white/5 px-5 py-3 rounded-lg">
            <div className="w-20 h-20 rounded-lg border-primary/40 text-primary text-4xl border shadow-sm shadow-primary bg-white/5 backdrop-blur-xl flex justify-center items-center">
              <Mobile />
            </div>
            <div className="text-secondary">
              <h2 className="font-bold">Phone</h2>
              <div className="flex-1 text-xs font-medium">
                <a href="tel:+8801758681702">
                  01758681702 (
                  <Whatsapp className="text-green-500 inline-block" size={18} />
                  )
                </a>
              </div>
              <div className="text-xs font-medium">
                <a href="tel:+8801936445525">01936445525</a>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5 bg-white/5 px-5 py-3 rounded-lg">
            <div className="w-20 h-20 rounded-lg border-primary/40 text-primary text-4xl border shadow-sm shadow-primary bg-white/5 backdrop-blur-xl flex justify-center items-center">
              <Sms />
            </div>
            <div className="flex-1 text-secondary">
              <h2 className="font-bold">Email</h2>
              <div className="text-xs font-medium">
                <a href="mailto:chat@jifakir.xyz">chat@jifakir.xyz</a>
              </div>
              <div className="text-xs font-medium">
                <a href="mailto:jifakir@outlook.com">jifakir02@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5 bg-white/5 px-5 py-3 rounded-lg">
            <div className="w-20 h-20 rounded-lg border-primary/40 text-primary text-4xl border shadow-sm shadow-primary bg-white/5 backdrop-blur-xl flex justify-center items-center">
              <Location />
            </div>
            <div className="flex-1 text-secondary">
              <h2 className="font-bold">Address</h2>
              <div className="text-xs font-medium">
                <a
                  href="https://maps.app.goo.gl/1k4ND2tpLhP7xF889"
                  target="_blank"
                >
                  West Rajoir, Rayenda, Sharankhola, Bagerhat-9330
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full ">
          <h2 className="text-lg font-bold text-white mb-2">Get In Touch</h2>
          <form className="space-y-5">
            <div className="relative">
              <input
                type="number"
                className="peer w-full text-white/70 bg-transparent text-sm font-medium border border-secondary/50 focus:border-primary focus:outline-none px-3 py-3"
              />
              <label
                htmlFor=""
                className="absolute text-xs left-2 top-1/2 -translate-y-1/2 peer-focus:top-0 text-white/70 font-medium bg-dark px-1.5 transition-all duration-200"
              >
                *Label
              </label>
            </div>
            <div className="relative">
              <input
                type="number"
                className="peer w-full text-white/70 bg-transparent text-sm font-medium border border-secondary/50 focus:border-primary focus:outline-none px-3 py-3"
              />
              <label
                htmlFor=""
                className="absolute text-xs left-2 top-1/2 -translate-y-1/2 peer-focus:top-0 text-white/70 font-medium bg-dark px-1.5 transition-all duration-200"
              >
                *Label
              </label>
            </div>
            <div className="relative">
              <input
                type="number"
                className="peer w-full text-white/70 bg-transparent text-sm font-medium border border-secondary/50 focus:border-primary focus:outline-none px-3 py-3"
              />
              <label
                htmlFor=""
                className="absolute text-xs left-2 top-1/2 -translate-y-1/2 peer-focus:top-0 text-white/70 font-medium bg-dark px-1.5 transition-all duration-200"
              >
                *Label
              </label>
            </div>
            <div className="relative">
              <textarea className="peer h-24 w-full text-white/70 bg-transparent text-sm font-medium border border-secondary/50 focus:border-primary focus:outline-none px-3 py-3" />
              <label
                htmlFor=""
                className="absolute text-xs left-2 top-4 -translate-y-1/2 peer-focus:top-0 text-white/70 font-medium bg-dark px-1.5 transition-all duration-200"
              >
                *Label
              </label>
            </div>
            <Button>Send</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
