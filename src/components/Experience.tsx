import React, { useState, useCallback } from 'react';
import { IconCircleFilled, IconCalendar, IconMapPin } from '@tabler/icons-react';

interface Experience {
    POSITION: string;
    DESCRIPTION: string;
    TIMEFRAME: string;
    COMPANY: string;
    COMPANY_URL?: string;
    LOCATION: string;
}

const ExperienceSection = ({ dataExperience }: { dataExperience: Experience[] }) => {
    const [currentJob, setCurrentJob] = useState<Experience | undefined>(dataExperience[0]);

    const changeInfo = useCallback(
        (index: number) => {
            setCurrentJob(dataExperience[index]);
        },
        [dataExperience]
    );

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleOpen = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const mapsUrl = 'https://www.google.com/maps/place/';

    return (
        <>
            <div id="experience-laptop" className="hidden md:grid md:grid-cols-3 md:gap-4 lg:grid lg:grid-cols-3 lg:gap-4 ">
                <div className="md:col-span-1 rounded-lg p-2">
                    {dataExperience.map((job, index) => (
                        <button
                            key={job.COMPANY}
                            onClick={() => changeInfo(index)}
                            className={`w-full text-left py-2 px-3 transition-colors duration-150 ${
                                dataExperience[index] === currentJob ? 'bg-yellow-200/30 font-bold text-sm' : 'text-sm hover:bg-white/10'
                            } rounded-md flex flex-col items-start justify-start`}
                        >
                            <span className={`${dataExperience[index] === currentJob ? 'text-white' : 'text-white'}`}>{job.POSITION}</span>
                            <span className={`mt-1 ${dataExperience[index] === currentJob ? 'text-yellow-400' : 'text-yellow-200 text-xs'}`}>{job.COMPANY}</span>
                        </button>
                    ))}
                </div>
                <div className="md:col-span-2 bg-white/10 text-white p-4 rounded-lg shadow">
                    <h3 className="text-lg md:text-xl font-bold">
                        {`${currentJob?.POSITION} at `}
                        <a href={currentJob?.COMPANY_URL} className="text-yellow-400 hover:underline" target="_blank" rel="noopener noreferrer">
                            {currentJob?.COMPANY}
                        </a>
                    </h3>
                    <div className="flex items-center text-sm text-yellow-300">
                        <IconCalendar width={16} className="mr-1" />
                        <span>{currentJob?.TIMEFRAME}</span> <IconMapPin width={16} className="ml-2 mr-1" />
                        <span>
                            <a href={mapsUrl + currentJob?.LOCATION} className="hover:underline" target="_blank" rel="noopener noreferrer">
                                {currentJob?.LOCATION}
                            </a>
                        </span>
                    </div>
                    <p className="mt-2 text-sm">{currentJob?.DESCRIPTION}</p>
                </div>
            </div>
            <div id="experience-responsive" className="flex flex-col gap-4 p-4 md:hidden">
                {dataExperience.map((job, index) => (
                    <div key={job.COMPANY} className="bg-white/10 text-white rounded-lg overflow-hidden shadow">
                        <button
                            className={`w-full py-2 px-3 text-left transition-colors duration-150 ${
                                openIndex === index ? 'bg-yellow-200 text-yellow-800 font-bold' : 'hover:bg-yellow-200/30'
                            }`}
                            onClick={() => toggleOpen(index)}
                        >
                            <div className="flex justify-between items-center">
                                <span>{job.POSITION}</span>
                                {openIndex === index ? (
                                    <span className="text-yellow-600 text-xs">{job.COMPANY}</span>
                                ) : (
                                    <span className="text-yellow-400 text-xs">{job.COMPANY}</span>
                                )}
                            </div>
                        </button>
                        {openIndex === index && (
                            <div className="p-3 text-sm">
                                <h3 className="font-bold">
                                    {`${job.POSITION} at `}
                                    <a href={job.COMPANY_URL} className="text-yellow-400 hover:underline" target="_blank" rel="noopener noreferrer">
                                        {job.COMPANY}
                                    </a>
                                </h3>
                                <div className="flex items-center text-yellow-400">
                                    <IconCalendar width={16} className="mr-1" />
                                    <span>{currentJob?.TIMEFRAME}</span> <IconMapPin width={16} className="ml-2 mr-1" />
                                    <span>
                                        <a href={mapsUrl + currentJob?.LOCATION} className="hover:underline" target="_blank" rel="noopener noreferrer">
                                            {currentJob?.LOCATION}
                                        </a>
                                    </span>
                                </div>
                                <p>{job.DESCRIPTION}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default ExperienceSection;
