import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';

export default function Skills() {
  return (
    <section className='max-w-[53rem] scroll-mt-28 text-center'>
        <SectionHeading>My skills</SectionHeading>
        <ul className='flex flex-wrap justify-center gap-3 text-l text-slate-800'>
            {
                skillsData.map((skill, index) => (
                    <li className='bg-slate-100 border border-slate-300 rounded-xl px-5 py-3' key={index}>{skill}</li>
                ))
            }
        </ul>
    </section>
  )
}
