const { createContext, useState } = require("react");

export const AppContext = createContext(null);

export default function CreateAppContext({ children }) {
    const [customScore, onChangeScore] = useState('');
    const [runs, changeRuns] = useState(0);

    const [currentOver, changeOver] = useState(0);
    const [currentBall, changeBall] = useState(0);

    const [ballLimit, changeBallLimit] = useState(5);

    const [wickets, changeWicket] = useState(0);

    const [currentOverRunsView, changeCurrentOverRunsView] = useState([]);
    const [oversView, changeCurrentOversView] = useState([]);

    const [noBallStatus, setNoBallStatus] = useState(false);

    const handleOver = (runsObj) => {
        runsObj.id = `item_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
        // console.log(runsObj);
        if (runsObj.name === 'wicket') {
            changeWicket(wickets + 1);
        }
        // NoBall Logic
        if (runsObj.name === 'noBall') {
            setNoBallStatus(true);
            changeRuns(runs + runsObj.score);
            return;
        } else if (noBallStatus === true) {
            changeRuns(runs + runsObj.score);
            const newRunsObj = {...runsObj}
            newRunsObj.isNoBallExtras = true;
            changeCurrentOverRunsView([...currentOverRunsView, newRunsObj]);
            setNoBallStatus(false);
            // runsObj.isNoBallExtras = false;
            return;
        }
        // till here - NoBall Logic
        if (currentBall < ballLimit) {
            if (runsObj.name === 'wide_ball') {
                changeRuns(runs + runsObj.score);
                changeCurrentOverRunsView([...currentOverRunsView, runsObj]);
                // changeBallLimit(ballLimit + 1);
                // changeBall(currentBall - 1);
                return;
            }
            changeRuns(runs + runsObj.score);
            changeCurrentOverRunsView([...currentOverRunsView, runsObj]);
            changeBall(currentBall + 1);
        } else {
            if (runsObj.name === 'wide_ball') {
                changeRuns(runs + runsObj.score);
                changeCurrentOverRunsView([...currentOverRunsView, runsObj]);
                // changeBallLimit(ballLimit + 1);
                // changeBall(currentBall - 1);
                return;
            } else {
                changeRuns(runs + runsObj.score);
                // console.log('last ball: ' + runsObj.name);
                // changeCurrentOverRunsView([...currentOverRunsView, runsObj]);
                const updatedOverRunsView = [...currentOverRunsView, runsObj];
                // console.log(currentOverRunsView, 'current over runs view', runsObj);
                changeCurrentOversView([...oversView, updatedOverRunsView]);
                changeOver(currentOver + 1);
                changeBall(0);
                changeBallLimit(5);
                // overs_reading
                changeCurrentOverRunsView([]);
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
                wickets,
                currentOverRunsView,
                oversView,
                changeCurrentOverRunsView,
                changeCurrentOversView,
                noBallStatus
            }}
        >
            {children}
        </AppContext.Provider>
    )
}