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
            const newRunsObj = { ...runsObj }
            newRunsObj.isNoBallExtras = true;
            changeCurrentOverRunsView([...currentOverRunsView, newRunsObj]);
            setNoBallStatus(false);
            return;
        }
        // till here - NoBall Logic
        if (currentBall < ballLimit) {
            if (runsObj.name === 'wide_ball') {
                changeRuns(runs + runsObj.score);
                changeCurrentOverRunsView([...currentOverRunsView, runsObj]);
                return;
            }
            changeRuns(runs + runsObj.score);
            changeCurrentOverRunsView([...currentOverRunsView, runsObj]);
            changeBall(currentBall + 1);
        } else {
            if (runsObj.name === 'wide_ball') {
                changeRuns(runs + runsObj.score);
                changeCurrentOverRunsView([...currentOverRunsView, runsObj]);
                return;
            } else {
                changeRuns(runs + runsObj.score);
                const updatedOverRunsView = [...currentOverRunsView, runsObj];
                changeCurrentOversView([...oversView, updatedOverRunsView]);
                changeOver(currentOver + 1);
                changeBall(0);
                changeBallLimit(5);
                // overs_reading
                changeCurrentOverRunsView([]);
            }
        }
    }

    const handleUndoBtn = () => {
        // if its `last ball`
        if (currentBall === 0) {
            if (currentOver === 0) {
                if (noBallStatus) {
                    setNoBallStatus(false);
                    changeRuns(runs - 1);
                    return;
                }
                const lastRunBtn = currentOverRunsView[currentOverRunsView.length - 1];
                if (lastRunBtn?.isNoBallExtras) {
                    currentOverRunsView.pop();
                    changeRuns(runs - (lastRunBtn.score + 1));
                } else if (lastRunBtn) {
                    currentOverRunsView.pop();
                    changeRuns(runs - lastRunBtn.score);
                } else {
                    console.log('go away !!!');
                    return;
                }
            } else {
                if (noBallStatus) {
                    changeRuns(runs - 1);
                    setNoBallStatus(false);
                    return;
                }
                const currentLastBallObj = currentOverRunsView[currentOverRunsView.length - 1];
                if (currentLastBallObj?.isNoBallExtras) {
                    changeRuns(runs - currentLastBallObj.score - 1);
                    currentOverRunsView.pop();
                    return;
                }else if(currentLastBallObj?.name === 'wide_ball') {
                    changeRuns(runs - currentLastBallObj.score);
                    currentOverRunsView.pop();
                    return;
                }

                const lastOverIndex = oversView.length - 1;
                const lastOver = oversView[lastOverIndex];
                const lastRunBtn = lastOver.pop();

                oversView.pop();
                if (lastRunBtn.name === 'wicket') {
                    changeWicket(wickets - 1);
                }
                changeOver(currentOver - 1);
                changeBall(5);
                changeRuns(runs - lastRunBtn.score);
                changeCurrentOverRunsView(lastOver);
            }
        } else {
            // check if its `noBall`clg
            if (noBallStatus) {
                changeRuns(runs - 1);
                setNoBallStatus(false);
                return;
            }
            const lastRunBtn = currentOverRunsView.pop();
            if (lastRunBtn?.isNoBallExtras === true) {
                changeRuns(runs - (lastRunBtn.score + 1));
                return;
            }
            // check if its `wide` or `normal_ball` or `wicket_ball`
            if (lastRunBtn.name === 'wicket') {
                changeWicket(wickets - 1);
            }
            changeBall(currentBall - 1);
            changeRuns(runs - lastRunBtn.score);
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
                noBallStatus,
                setNoBallStatus,
                handleUndoBtn
            }}
        >
            {children}
        </AppContext.Provider>
    )
}