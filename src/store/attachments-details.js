import { IoMusicalNotesOutline } from 'react-icons/io5';
import { LuVideo } from 'react-icons/lu';
import { MdOutlinePhotoSizeSelectActual } from 'react-icons/md';
import { IoCameraOutline } from 'react-icons/io5';

export const attachDetails = [
    {
        name: 'Music',
        icon: <IoMusicalNotesOutline className="posterIcon" />,
    },
    {
        name: 'Movies',
        icon: <LuVideo className="posterIcon" />,
    },
    {
        name: 'Gallery',
        icon: <MdOutlinePhotoSizeSelectActual className="posterIcon" />,
    },
    {
        name: 'Photo',
        icon: <IoCameraOutline className="posterIcon" />,
    },
];
