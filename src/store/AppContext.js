import Toast from "react-native-toast-message";
import { mergeData, resetData, storeData } from "../asyncStorage/apiCalls";
import { Vibration } from "react-native";
import { saveMatchServerDb, updateMatchServerDb } from "../mongoDb/apiCalls";

const { createContext, useState } = require("react");

export const AppContext = createContext(null);

export default function CreateAppContext({ children }) {
    const [matchId, changeMatchId] = useState('');
    const [customScore, onChangeScore] = useState('');
    const [runs, changeRuns] = useState(0);

    const [isLoading, setIsLoading] = useState(false);

    const [currentOver, changeOver] = useState(0);
    const [currentBall, changeBall] = useState(0);

    const [ballLimit, changeBallLimit] = useState(5);

    const [wickets, changeWicket] = useState(0);

    const [currentOverRunsView, changeCurrentOverRunsView] = useState([]);
    const [oversView, changeCurrentOversView] = useState([]);

    const [noBallStatus, setNoBallStatus] = useState(false);

    // new changes to keep a track of bowlers

    const [bowlers, changeBowlers] = useState([]);
    const [currentBowler, changeCurrentBowler] = useState('');

    // for match-summary page
    const [totalOvers, changeTotalOvers] = useState('');
    const [teams, changeTeams] = useState([]);
    const [currentTeam, changeCurrentTeam] = useState('');

    const [isSecondBatting, changeIsSecondBatting] = useState(false);

    const [isMatchFinished, changeIsMatchFinished] = useState(false);

    const [matchData, setMatchData] = useState(null);

    const [team1BowlerStats, setTeam1BowlerStats] = useState([]);
    const [team2BowlerStats, setTeam2BowlerStats] = useState([]);

    const [firstMatchScore, setFirstMatchScore] = useState({});
    const [secondMatchScore, setSecondMatchScore] = useState({});
    const [wonTeam, setWonTeam] = useState('');
    const [fullMatchFinished, setFullMatchFinished] = useState(false);
    const [runsDifference, setRunsDifference] = useState('');

    const handleReset = () => {
        changeBall(0);
        changeOver(0);
        changeRuns(0);
        changeWicket(0);
        changeCurrentOverRunsView([]);
        changeCurrentOversView([]);
        changeCurrentBowler('');
        // new...
        changeTotalOvers('');
        changeTeams([]);
        changeCurrentTeam('');
        changeIsSecondBatting(false);
        changeIsMatchFinished(false);
        setMatchData(null);
        setTeam1BowlerStats([]);
        setTeam2BowlerStats([]);
        setFirstMatchScore({});
        setSecondMatchScore({});
        setWonTeam('');
        setFullMatchFinished(false);
        setRunsDifference('');
        changeMatchId('');
        onChangeScore('');
        changeWicket(0);
        // resetting the current match with matchId
        // resetData(matchId);
        // changeCurrentTeam('team1');
    }

    const secondmatchReset = () => {
        changeBall(0);
        changeOver(0);
        changeRuns(0);
        changeWicket(0);
        changeCurrentOverRunsView([]);
        changeCurrentOversView([]);
        changeCurrentBowler('');
    }

    const handleOver = (runsObj) => {

        if (isMatchFinished) {
            return;
        }
        if (currentOver >= totalOvers) {
            changeIsMatchFinished(true);
            return;
        }

        runsObj.id = `item_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
        if (runsObj.name === 'wicket') {
            changeWicket(wickets + 1);
        }
        // NoBall Logic
        if (runsObj.name === 'noBall') {
            setNoBallStatus(true);
            Vibration.vibrate();
            Toast.show({
                type: 'info',
                text1: 'No Ball',
                text2: 'No Ball Extras added',
                visibilityTime: 2000
            });
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
                    // console.log('go away !!!');
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

    // saveLastOver
    const saveLastOver = () => {
        // const updatedOverRunsView = [...currentOverRunsView, runsObj];

        // console.log('updated over runs view: ', updatedOverRunsView);
        const completeOverWithBowler = {
            bowler: currentBowler,
            over: currentOverRunsView
        }
        // console.log('complete over runs view: ', completeOverWithBowler);

        changeCurrentOversView([...oversView, completeOverWithBowler]);

        // console.log("oversview : ", oversView)
        return;
    }

    // endMatch-btn
    const endMatch = async () => {
        if (!isSecondBatting) {
            // saving the match
            // await saveMatch();

            // const activeTeam = teams.find(team => team !== currentTeam);
            changeIsMatchFinished(true);
            // changeCurrentTeam(activeTeam);

            // secondmatchReset();
        } else {
            // saving the match
            // await saveMatch();
            changeIsMatchFinished(true);
        }
    }

    const saveMatch = async () => {
        if (!isSecondBatting) {
            const generatedMatchId = generateUniqueID();
            changeMatchId(generatedMatchId);
            const updatedValue = {
                teamName: currentTeam,
                totalRuns: runs
            };
            setFirstMatchScore(updatedValue);
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
                },
                createdAt: Date.now(),
            }
            // await storeData(matchObject);
            await saveMatchServerDb(matchObject);
            changeIsSecondBatting(true);
        } else {
            const updatedValue = {
                teamName: currentTeam,
                totalRuns: runs
            }
            setSecondMatchScore(updatedValue);
            const team2 = {
                matchId: matchId,
                team2: {
                    teamName: currentTeam,
                    totalPlayers: bowlers.length,
                    bowlers: bowlers,
                    totalRuns: runs,
                    overs: `${currentOver}.${currentBall}`,
                    wickets: wickets,
                    totalOverView: oversView
                },
                wonTeam: wonTeam,
                runsDifference: runsDifference
            }
            // await mergeData(matchId, team2);
            await updateMatchServerDb(team2);
        }
    }

    function generateUniqueID() {
        const timestamp = new Date().getTime().toString(36);
        const randomPart = Math.random().toString(36).substr(2, 5);

        return timestamp + randomPart;
    }

    function convertDateFormatWithTime(inputDate) {
        let originalDate = new Date(inputDate);

        originalDate = originalDate.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    
        return originalDate;
    }


    // function to calculate bowler stats
    function getbowlerStatistics(totalOverViews) {
        const arrayObjects = [];
        let bowlerName = '';

        totalOverViews.forEach(stats => {
            bowlerName = stats.bowler;
            let overCount = 0;
            let totalScore = 0;
            let wicketStats = 0;

            totalOverViews.forEach(overView => {
                if (bowlerName === overView.bowler) {
                    // overCount += 1;
                    // modifies the oversCount to show balls with overcount
                    if (overView.over.length >= 6) {
                        overCount += 1;
                    } else {
                        const balls = overView.over.length;
                        overCount += balls / 10;
                    }

                    totalScore += overView.over.reduce((accumulator, currentScore) => {
                        return accumulator + currentScore.score;
                    }, 0);

                    wicketStats += overView.over.filter(score => score.name === 'wicket').length;
                }
            });

            arrayObjects.push({
                bowlerName: bowlerName,
                oversCount: overCount,
                totalScore: totalScore,
                wickets: wicketStats
            });
        });

        // console.log(arrayObjects);
        return arrayObjects;
    }

    function changeLoadingState(status) {
        if (status === true) setIsLoading(true);
        else setIsLoading(false);
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
                saveMatch,
                matchId,
                matchData,
                setMatchData,
                getbowlerStatistics,
                setTeam1BowlerStats,
                team1BowlerStats,
                setTeam2BowlerStats,
                team2BowlerStats,
                totalOvers,
                changeTotalOvers,
                changeTeams,
                isSecondBatting,
                secondmatchReset,
                firstMatchScore,
                secondMatchScore,
                wonTeam,
                fullMatchFinished,
                setFullMatchFinished,
                setRunsDifference,
                runsDifference,
                setRunsDifference,
                setWonTeam,
                saveLastOver,
                endMatch,
                isLoading,
                changeLoadingState,
                convertDateFormatWithTime
            }}
        >
            {children}
        </AppContext.Provider>
    )
}