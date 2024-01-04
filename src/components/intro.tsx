"use client";

import Image from 'next/image';
import React from 'react';
import profilePhoto from "@/../public/images/profile-photo.svg";
import { motion } from 'framer-motion';

export default function Intro() {
    return (
      <section>
        <div className='flex items-center justify-center'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.25,
            }}
          >
            <Image 
              src={profilePhoto}
              alt="Amit | profile photo" 
              width={192} 
              height={192} 
              priority={true}
              className='h-48 w-48 object-cover rounded-full border-[0.35rem] border-white shadow-xl'
            />
          </motion.div>
        </div>
      </section>
    )
  }