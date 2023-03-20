import React, {FC} from 'react';
import Header from './Header/Header';

interface ILayout {
    children: React.ReactNode;
}

const Layout: FC<ILayout> = ({children}) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default Layout;