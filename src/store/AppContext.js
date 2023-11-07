const { createContext, useState } = require("react");

export const AppContext = createContext(null);

export default function CreateAppContext({ children }) {
    const [customScore, onChangeScore] = useState('');
    const [runs, changeRuns] = useState(0);

    const [currentOver, changeOver] = useState(0);
    const [currentBall, changeBall] = useState(0);

    const [ballLimit, changeBallLimit] = useState(5);

    const [wickets, changeWicket] = useState(0);

    const handleOver = (runsObj) => {
        console.log(runsObj);
        if(runsObj.name==='wicket'){
            changeWicket(wickets+1);
        }
        if (currentBall < ballLimit) {
            if (runsObj.name === 'wide_ball') {
                changeBallLimit(ballLimit+1);
            }
            changeRuns(runs + runsObj.score);
            changeBall(currentBall + 1);
        } else {
            if (runsObj.name === 'wide_ball') {
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
                changeRuns,
                changeWicket,
                wickets
            }}
        >
            {children}
        </AppContext.Provider>
    )
}