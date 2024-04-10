import React, { useState, useCallback } from 'react';
import { IconCircleFilled, IconCalendar } from '@tabler/icons-react';

interface Experience {
    POSITION: string;
    DESCRIPTION: string;
    TIMEFRAME: string;
    COMPANY?: string;
    COMPANY_URL?: string;
}

const ExperienceSection = ({ dataExperience }: { dataExperience: Experience[] }) => {
    const [currentJob, setCurrentJob] = useState<Experience | undefined>(dataExperience[0]);

    const changeInfo = useCallback(
        (index: number) => {
            setCurrentJob(dataExperience[index]);
        },
        [dataExperience]
    );

    return (
        <div id="work" className="grid grid-cols-1 md:grid-cols-3 gap-4 p-0">
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
                        <span className={`mt-1 ${dataExperience[index] === currentJob ? 'text-yellow-200' : 'text-yellow-200 text-xs'}`}>{job.COMPANY}</span>
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
                    <IconCalendar width={20} className="mr-2" />
                    <span>{currentJob?.TIMEFRAME}</span>
                </div>
                <p className="mt-2 text-sm">{currentJob?.DESCRIPTION}</p>
            </div>
        </div>
    );
};

export default ExperienceSection;
