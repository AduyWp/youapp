import Content from '@/app/Interests/components';
import Core from '@/app/Interests/core';

const Page = (props) => (
    <Core
        Content={Content}
        {...props}
    />
);

export default Page;