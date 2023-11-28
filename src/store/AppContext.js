import { mergeData, storeData } from "../asyncStorage/apiCalls";

const { createContext, useState } = require("react");

export const AppContext = createContext(null);

export default function CreateAppContext({ children }) {
    const [matchId, changeMatchId] = useState('');
    const [customScore, onChangeScore] = useState('');
    const [runs, changeRuns] = useState(0);

    const [currentOver, changeOver] = useState(0);
    const [currentBall, changeBall] = useState(0);

    const [ballLimit, changeBallLimit] = useState(5);

    const [wickets, changeWicket] = useState(0);

    const [currentOverRunsView, changeCurrentOverRunsView] = useState([]);
    const [oversView, changeCurrentOversView] = useState([]);

    const [noBallStatus, setNoBallStatus] = useState(false);

    // new changes to keep a track of bowlers

    const [bowlers, changeBowlers] = useState([
        'nijas khan',
        'achu',
        'rahul Raju',
        'rahul B',
        'Anil',
        'Varghese',
        'abhi',
        'Raj',
        'sreeni'
    ]);
    const [currentBowler, changeCurrentBowler] = useState('');

    // for match-summary page
    const [totalOvers, changeTotalOvers] = useState(2);
    const [teams, changeTeams] = useState(['Team1', 'Team2']);
    const [currentTeam, changeCurrentTeam] = useState('Team1');

    const [isSecondBatting, changeIsSecondBatting] = useState(false);

    const [isMatchFinished, changeIsMatchFinished] = useState(false);

    const handleReset = () => {
        changeBall(0);
        changeOver(0);
        changeRuns(0);
        changeWicket(0);
        changeCurrentOverRunsView([]);
        changeCurrentOversView([]);
        changeCurrentBowler('');
    }

    const handleOver = (runsObj) => {
        // console.log(runsObj);
        // console.log('current over: ', currentOver);
        // console.log('current ball: ', currentBall);
        // console.log('isMatchFinished status ', isMatchFinished);

        if (isMatchFinished) {
            return;
        }

        runsObj.id = `item_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
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

                // console.log('updated over runs view: ', updatedOverRunsView);
                const completeOverWithBowler = {
                    bowler: currentBowler,
                    over: updatedOverRunsView
                }
                // console.log('complete over runs view: ', completeOverWithBowler);

                changeCurrentOversView([...oversView, completeOverWithBowler]);
                // console.log('oversView : ', oversView);
                changeOver(currentOver + 1);
                changeBall(0);
                changeBallLimit(5);
                // overs_reading
                changeCurrentOverRunsView([]);
                // clearing the bowler after the over
                changeCurrentBowler('');
            }
        }
        if (currentBall >= 5 && currentOver >= totalOvers - 1) {
            changeIsMatchFinished(true);
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
                } else if (currentLastBallObj?.name === 'wide_ball') {
                    changeRuns(runs - currentLastBallObj.score);
                    currentOverRunsView.pop();
                    return;
                }

                // bug workaround
                // console.log('overView : ', oversView);

                const lastOverIndex = oversView.length - 1;
                // console.log('oversviewlenght', lastOverIndex);

                const lastOver = oversView[lastOverIndex];
                // console.log('lastOver', lastOver);

                const lastRunBtn = lastOver.over.pop();
                // console.log('lastRunBtn', lastRunBtn);

                // console.log('oversview 2 :', oversView);

                oversView.pop();
                if (lastRunBtn.name === 'wicket') {
                    changeWicket(wickets - 1);
                }
                changeOver(currentOver - 1);
                changeBall(5);
                changeRuns(runs - lastRunBtn.score);
                changeCurrentBowler(lastOver?.bowler);
                changeCurrentOverRunsView(lastOver?.over);

                // Till here...
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


    const saveMatch = async () => {
        if (!isSecondBatting) {
            const generatedMatchId = generateUniqueID();
            changeMatchId(generatedMatchId);
            const matchObject = {
                matchId: generatedMatchId,
                totalOvers: totalOvers,
                team1: {
                    teamName: currentTeam,
                    totalPlayers: bowlers.length,
                    bowlers: bowlers,
                    totalRuns: runs,
                    overs: `${currentOver}.${currentBall}`,
                    wickets: wickets,
                    totalOverView: oversView
                }
            }
            await storeData(matchObject);
            // console.log('first team match saved successfully');
            // changing the status of second batting
            changeIsSecondBatting(true);
        }else{
            const team2 = {
                team2: {
                    teamName: currentTeam,
                    totalPlayers: bowlers.length,
                    bowlers: bowlers,
                    totalRuns: runs,
                    overs: `${currentOver}.${currentBall}`,
                    wickets: wickets,
                    totalOverView: oversView
                }
            }
            await mergeData(matchId, team2);
        }
    }

    function generateUniqueID() {
        const timestamp = new Date().getTime().toString(36);
        const randomPart = Math.random().toString(36).substr(2, 5);

        return timestamp + randomPart;
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
                handleUndoBtn,
                // new changes to keep track of bowlers
                bowlers,
                changeBowlers,
                currentBowler,
                changeCurrentBowler,
                // match-summaryPage modification
                isMatchFinished,
                changeIsMatchFinished,
                currentTeam,
                changeCurrentTeam,
                handleReset,
                teams,
                saveMatch
            }}
        >
            {children}
        </AppContext.Provider>
    )
}