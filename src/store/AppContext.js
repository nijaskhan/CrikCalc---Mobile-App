const { createContext, useState } = require("react");

export const AppContext = createContext(null);

export default function CreateAppContext({ children }) {
    const [customScore, onChangeScore] = useState('');
    const [runs, changeRuns] = useState(0);

    const [currentOver, changeOver] = useState(0);
    const [currentBall, changeBall] = useState(0);

    const [ballLimit, changeBallLimit] = useState(5);

    const handleOver = (runsObj) => {
        console.log(runsObj);
        if (currentBall < ballLimit) {
            if (runsObj.name === 'wide_ball') {
                // console.log('logic worked');
                changeBallLimit(ballLimit+1);
            }
            changeRuns(runs + runsObj.score);
            changeBall(currentBall + 1);
        } else {
            if (runsObj.name === 'wide_ball') {
                // console.log('2nd logic worked');
                changeRuns(runs + runsObj.score);
                changeBallLimit(ballLimit+1);
            }else{
                changeRuns(runs + runsObj.score);
                changeOver(currentOver + 1);
                changeBall(0);
                changeBallLimit(5);
            }
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
                handleOver,
                runs,
                changeRuns
            }}
        >
            {children}
        </AppContext.Provider>
    )
}