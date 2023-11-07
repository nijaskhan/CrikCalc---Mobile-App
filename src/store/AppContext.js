const { createContext, useState } = require("react");

export const AppContext = createContext(null);

export default function CreateAppContext({ children }) {
    const [customScore, onChangeScore] = useState('');

    const [currentOver, changeOver] = useState(0);
    const [currentBall, changeBall] = useState(0);

    const handleOver = () => {
        if (currentBall < 6) {
            changeBall(currentBall + 1);
        } else {
            changeOver(currentOver + 1);
        }
    }

    return (
        <AppContext.Provider
            value={{
                currentBall,
                changeBall,
                currentOver,
                changeOver,
                customScore,
                onChangeScore,
                handleOver
            }}
        >
            {children}
        </AppContext.Provider>
    )
}