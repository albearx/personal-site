// import {useEffect, useState} from 'react'
import './PlayerProfile.css'

const PlayerProfile = ({playerInfo, playerMMR, playerMMRHistory, matchHistory}) => {
	// const username = playerInfo.data.name
	// const tag = playerInfo.data.tag

	let winRate;
	let headshotRate;
	let kd;
	let kda;

	if (playerInfo && playerMMR && playerMMRHistory && matchHistory) {
		let winCount = 0;

		let headshots = 0;
		let totalshots = 0;

		let kills = 0;
		let deaths = 0;
		let assists = 0;

		for (const match of matchHistory.data) {
			const playerInGame = match.players.all_players.find(player => (player.name === playerInfo.data.name && player.tag === playerInfo.data.tag))

			//Increments win counter if the player won this match
			let winner;
			if (match.teams.blue.has_won)
				winner = 'Blue'
			else
				winner = 'Red'
			if (playerInGame.team === winner) 
				winCount++
			
			//Increments total shots and headshots for headshot % calculation
			totalshots += (playerInGame.stats.headshots + playerInGame.stats.bodyshots + playerInGame.stats.legshots)
			headshots += playerInGame.stats.headshots

			//Increments total kills and deaths for k/d calculation
			kills += playerInGame.stats.kills
			deaths += playerInGame.stats.deaths
			assists += playerInGame.stats.assists
		}
		winRate = `${winCount / 5 * 100}%`
		headshotRate = `${(headshots / totalshots * 100).toFixed(0)}%`
		kd = `${(kills / deaths).toFixed(2)}`
		kda = `${((kills + assists) / deaths).toFixed(2)}`
	}
	return playerInfo && playerMMR && playerMMRHistory && matchHistory ?
	
		<div className="playerProfile">
			<div className="playerBanner">
				<img alt="playerCard" src={playerInfo.data.card.large} />
			</div>

			<div className="playerOverview">
				<div className="playerTitle">
					<div className="playerName">
						<h3>{playerInfo.data.name}#{playerInfo.data.tag}</h3>
					</div>
					<div className="playerRankIcon">
						<img alt="playerRankIcon" src={`/rank-icons/${playerMMR.data.currenttierpatched.split(' ').join('_')}_Rank.png`}/>
					</div>
				</div>
				
				<p><small>Last updated {playerInfo.data.last_update}</small></p>
				<p>
					<font size="+1"><b>Account Level: </b>{playerInfo.data.account_level}</font><br />
					<font size="+1"><b>Rank: </b>{`${playerMMR.data.currenttierpatched}, ${playerMMR.data.ranking_in_tier} RR`}</font>
				</p>

				<p><small><i>Displaying stats from player's most recent five matches</i></small></p>
				<p>
					<font size="+1"><b>Win Rate: </b>{winRate}</font><br />
					<font size="+1"><b>Headshots: </b>{headshotRate}</font><br />
					<font size="+1"><b>K/D: </b>{kd}</font><br />
					<font size="+1"><b>KDA: </b>{kda}</font><br />
				</p>
			</div>
		</div>
		:
		<h3>Loading...</h3>
	
}
export default PlayerProfile