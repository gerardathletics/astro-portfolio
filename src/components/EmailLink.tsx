import { IconMail } from '@tabler/icons-react';

const EmailLink = ({ email = 'gerardporras@gmail.com', name = 'Gerard' }) => {
    return (
        <a href={`mailto:${email}`} title={`Send an email to ${name} - ${email}`} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <span className="rounded-s-md border border-e-0 border-yellow-200 bg-yellow-500/10 ps-2.5 pe-2 py-0.5 text-sm text-yellow-200">{email}</span>
            <IconMail className="inline-block h-full rounded-e-md border border-s-0 border-yellow-200 bg-yellow-500/10 px-1.5 text-yellow-200 transition hover:bg-yellow-500/20" />
        </a>
    );
};

export default EmailLink;
