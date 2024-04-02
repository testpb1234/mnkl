import { createBoard } from '@wixc3/react-board';
import { Mkln } from '../../../components/mkln/mkln';

export default createBoard({
    name: 'Mkln',
    Board: () => <Mkln />,
    isSnippet: true,
});