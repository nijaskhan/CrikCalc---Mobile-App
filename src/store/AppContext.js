const { createContext, useState } = require("react");

export const AppContext = createContext(null);

export default function CreateAppContext({children}) {
    const [score, onChangeScore] = useState('');

    const [currentOver, changeOver] = useState(0);
    const [currentBall, changeBall] = useState(0);

    return (
        <AppContext.Provider
            value={{
                currentBall,
                changeBall,
                currentOver,
                changeOver,
                score,
                onChangeScore
            }}
        >
            {children}
        </AppContext.Provider>
    )
}