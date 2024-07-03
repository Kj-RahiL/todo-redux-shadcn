import { ReactNode } from "react";

type TChildrenProps = {
    children: ReactNode
}

const Container = ({children}: TChildrenProps) => {
    return (
        <div className="h-screen w-full max-w-7xl mx-auto bg-red-400">
            {children}
        </div>
    );
};

export default Container;