import Content from '@/app/Profile/components';
import Core from '@/app/Profile/core';

const Page = (props) => (
    <Core
        Content={Content}
        {...props}
    />
);

export default Page;