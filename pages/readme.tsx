import { NextPage } from "next";

import { useMarksy } from '@utils/hooks';
import { Markdown } from '@components/common';
import README from 'README.md'

const Readme: NextPage = () => {
    const { markdown } = useMarksy(README);

    return <Markdown>{markdown.tree}</Markdown>
}

export default Readme;