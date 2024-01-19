import Content from '@/app/Register/components';
import Core from '@/app/Register/core';

const Page = (props) => (
    <Core
        Content={Content}
        {...props}
    />
);

export default Page;