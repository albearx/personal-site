import {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import './MatchDisplay.css'
import AgentIcons from './AgentIcons.jsx'

const MatchDisplay = ({ match, playerName, playerTag, filter}) => {
	function millisConversion(millis) {
		var minutes = Math.floor(millis / 60000);
		var seconds = ((millis % 60000) / 1000).toFixed(0);
		return minutes + " minutes " + seconds + " seconds";
	}
	const matchStartTime = (new Date(match.metadata.game_start * 1000)).toLocaleString()
	const gameDuration = millisConversion(match.metadata.game_length)
	const filterName = filter.charAt(0).toUpperCase() + filter.slice(1)
	const matchOverviewStr = `${filterName} game on ${matchStartTime} \nthat lasted ${gameDuration}`

	console.log(match)
	console.log(matchStartTime, gameDuration, filterName)

	//If modal should show or not
	const [show, setShow] = useState(false)

	const playerInGame = match.players.all_players.find(player => (player.name === playerName && player.tag === playerTag))
	const agentIcon = playerInGame.assets.agent.small
	const playerTeam = playerInGame.team;
	const cleanAgentName = playerInGame.character.split('/').join('').toLowerCase()
	
	
	let winningTeam;

	let leftScore;
	let rightScore;
	let result;

	if (match.teams.blue.has_won)
		winningTeam = "blue"
	else
		winningTeam = "red"
	
	// winnerRounds = Math.max(match.teams.blue.rounds_lost, match.teams.blue.rounds_won)
	// loserRounds = Math.min(match.teams.blue.rounds_lost, match.teams.blue.rounds_won)

	if (playerTeam.toLowerCase() === winningTeam) {
		result = 'Victory'
		// leftScore = winnerRounds
		// rightScore = loserRounds
	} else {
		result = 'Defeat'
		// leftScore = loserRounds
		// rightScore = winnerRounds
	}

	leftScore = match.teams[playerTeam.toLowerCase()].rounds_won
	rightScore = match.teams[playerTeam.toLowerCase()].rounds_lost

	// console.log('match', match.metadata.map, playerInGame)
	return(
		<>
			<div className={match.metadata.map} onClick={() => setShow(true)}>
				<img alt={playerInGame.character} src={agentIcon} />
				<div className="score">
					<font size="+4"><b>{leftScore}-{rightScore}</b></font>
					{/* {leftScore}-{rightScore} */}
				</div>
			</div>

			<Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="matchModal"
        // aria-labelledby="example-custom-modal-styling-title"
				contentClassName="matchModalHeight"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Match Info
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
						<img className="agentFull" height="400" alt="agent-fullbody" src={AgentIcons[cleanAgentName].full} />
						<div className="matchInfo">
							<p>
								<small><i>{matchOverviewStr}</i></small><br />
								<b>Map: </b>{match.metadata.map}<br />
								<b>Agent: </b>{playerInGame.character}<br />
								<b>Result: </b>{result}<br />
								<b>Score: </b>{leftScore}-{rightScore}<br />
								<b>K/D: </b>{(playerInGame.stats.kills / playerInGame.stats.deaths).toFixed(2)}<br />
								<b>K/DA: </b>{((playerInGame.stats.kills + playerInGame.stats.assists) / playerInGame.stats.deaths).toFixed(2)}<br />
								<b>Headshots: </b>{(playerInGame.stats.headshots / (playerInGame.stats.bodyshots + playerInGame.stats.headshots + playerInGame.stats.legshots) * 100).toFixed(0)}%<br />
								<b>Avg. Dmg Per Round: </b>{(playerInGame.damage_made / match.metadata.rounds_played).toFixed(1)}<br />
								<b>Avg. Combat Score (ACS): </b>{(playerInGame.stats.score / match.metadata.rounds_played).toFixed(0)}<br />
							</p>
						</div>
						<div className="abilityCasts">
							<div className="ability">
								<img height="40" className="abilityIcon" alt="ability icon" src={AgentIcons[cleanAgentName].q} />
								<div className="castCounts">
									<p>
										<small><b>Total Casts: </b>{playerInGame.ability_casts.q_cast}</small><br />
										<small><b>Avg. Casts per Round: </b>{(playerInGame.ability_casts.q_cast / match.metadata.rounds_played).toFixed(2)}</small>
									</p>
								</div>
							</div>
							<div className="ability">
								<img height="40" className="abilityIcon" alt="ability icon" src={AgentIcons[cleanAgentName].e} />
								<div className="castCounts">
									<p>
										<small><b>Total Casts: </b>{playerInGame.ability_casts.e_cast}</small><br />
										<small><b>Avg. Casts per Round: </b>{(playerInGame.ability_casts.e_cast / match.metadata.rounds_played).toFixed(2)}</small>
									</p>
								</div>
							</div>
							<div className="ability">
								<img height="40" className="abilityIcon" alt="ability icon" src={AgentIcons[cleanAgentName].c} />
								<div className="castCounts">
									<p>
										<small><b>Total Casts: </b>{playerInGame.ability_casts.c_cast}</small><br />
										<small><b>Avg. Casts per Round: </b>{(playerInGame.ability_casts.c_cast / match.metadata.rounds_played).toFixed(2)}</small>
									</p>
								</div>
							</div>
							<div className="ability">
								<img height="40" className="abilityIcon" alt="ability icon" src={AgentIcons[cleanAgentName].x} />
								<div className="castCounts">
									<p>
										<small><b>Total Casts: </b>{playerInGame.ability_casts.x_cast}</small><br />
										<small><b>Avg. Casts per Round: </b>{(playerInGame.ability_casts.x_cast / match.metadata.rounds_played).toFixed(2)}</small>
									</p>
								</div>
							</div>
						</div>
					</div>
					
        </Modal.Body>
      </Modal>
		</>
			
	)
}
export default MatchDisplay