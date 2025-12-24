import React from 'react'
import dayjs from 'dayjs';
import Image from 'next/image';
import { getRandomInterviewCover } from '@/lib/utils';
import Link from 'next/link';
import { DisplayTechIcons } from './DisplayTechIcons';

const InterviewCard = ({ interviewId, userId, type, techstack, createdAt, role }: InterviewCardProps) => {


    const feedback = null as Feedback | null;
    const normalizedType = /mix/gi.test(type) ? 'mixed' : type;
    const formatedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D , YYY');



    return (
        <div className='card-border w-[360px] max-sm:w-full min-h-96'>
            <div className='card-interview'>
                <div>
                    <div className='absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600'>
                        <p className='badge-text'>{normalizedType}</p>

                    </div>
                    <Image src={getRandomInterviewCover()} alt='cover' width={90} height={90}
                        className='rounded-full object-fit siz-[90px]' />
                    <h3 className='mt-5 capitalize'>
                        {role} Interview
                    </h3>
                    <div className='flex flex-row mt-3 gap-5'>
                        <div className='flex flex-row gap-2'>
                            <Image src='/calendar.svg' alt='calander' width={22} height={22} />
                            <p>{formatedDate}</p>
                            <div className='flex flex-row gap-2 items-center'>
                                <Image src={"/star.svg"} alt='star' width={22} height={22} />
                                <p>{feedback?.totalScore || '---'}/100</p>
                            </div>
                        </div>
                       
                    </div>
                             <p className='line-clamp-2 mt-5'>{feedback?.finalAssessment || "you havent't taken the interview yet . Take it now to improve your Skills"}</p>

                    <div className='flex flex-row justify-between mt-5'>
                        <DisplayTechIcons techStack={techstack} />
                        <button className='btn-primary'>
                            <Link href={feedback ? `/interview/${interviewId}/feedback` :
                         `/interview/${interviewId}`}>
                            {feedback ? 'Check feedback' : 'view Interview'}
                         </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InterviewCard