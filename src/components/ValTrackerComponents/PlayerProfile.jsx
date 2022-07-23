// import {useEffect, useState} from 'react'
import MatchDisplay from './MatchDisplay'
import Chart from 'react-apexcharts'
import moment from 'moment'
import './PlayerProfile.css'


const PlayerProfile = ({playerInfo, playerMMR, playerMMRHistory, matchHistory}) => {

	let winRate;
	let headshotRate;
	let kd;
	let kda;
	let graphInfo;
	// let matches = [];

	if (playerInfo && playerMMR && playerMMRHistory && matchHistory) {
		let winCount = 0;

		let headshots = 0;
		let totalshots = 0;

		let kills = 0;
		let deaths = 0;
		let assists = 0;

		//Iterates through all (5) matches of player's match history
		for (const match of matchHistory.data) {
			//Focuses on the selected player within the match
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
		//Assigns calculated values to display as aggregate data for the last 5 matches
		winRate = `${winCount / 5 * 100}%`
		headshotRate = `${(headshots / totalshots * 100).toFixed(0)}%`
		kd = `${(kills / deaths).toFixed(2)}`
		kda = `${((kills + assists) / deaths).toFixed(2)}`

		//Extract data for the MMR line graph
		let mmrArr = []
		let dateArr = []
		for (const mmrNode of playerMMRHistory.data) {
			mmrArr.unshift(mmrNode.elo)
			dateArr.unshift(moment(mmrNode.date_raw * 1000).format('MMM DD HH:mm'))
		}
		graphInfo = {
			series: [{
				name: "elo",
				data: mmrArr
			}],
			options: {
				chart: {
					height: 350,
					type: 'line',
					zoom: {
						enabled: false
					}
				},
				dataLabels: {
					enabled: false
				},
				stroke: {
					curve: 'straight'
				},
				title: {
					text: 'RR History',
					align: 'left'
				},
				grid: {
					row: {
						colors: ['transparent']
					}
				},
				xaxis: {
					categories: dateArr
				},
				yaxis: {
					labels: {
						formatter: function (value) {
							let rankNum = Math.floor(value / 100)
							let rr = value % 100
							if (value >= 2500)
								rr = value - 2500
							let rank;
							switch (rankNum) {
								case 0:
									rank = 'Iron 1'
									break;
								case 1:
									rank = 'Iron 2'
									break;
								case 2:
									rank = 'Iron 3'
									break;
								case 3:
									rank = 'Bronze 1'
									break;
								case 4:
									rank = 'Bronze 2'
									break;
								case 5:
									rank = 'Bronze 3'
									break;
								case 6:
									rank = 'Silver 1'
									break;
								case 7:
									rank = 'Silver 2'
									break;
								case 8:
									rank = 'Silver 3'
									break;
								case 9:
									rank = 'Gold 1'
									break;
								case 10:
									rank = 'Gold 2'
									break;
								case 11:
									rank = 'Gold 3'
									break;
								case 12:
									rank = 'Platinum 1'
									break;
								case 13:
									rank = 'Platinum 2'
									break;
								case 14:
									rank = 'Platinum 3'
									break;
								case 15:
									rank = 'Diamond 1'
									break;
								case 16:
									rank = 'Diamond 2'
									break;
								case 17:
									rank = 'Diamond 3'
									break;
								case 18:
									rank = 'Ascendant 1'
									break;
								case 19:
									rank = 'Ascendant 2'
									break;
								case 20:
									rank = 'Ascendant 3'
									break;
								case 21:
									rank = 'Immortal 1'
									break;
								case 22:
									rank = 'Immortal 2'
									break;
								case 23:
									rank = 'Immortal 3'
									break;
								case 24:
									rank = 'Radiant'
									break;
								default:
									rank = 'Radiant'
									break;
								
							}
							return `${rank}, ${rr} RR`;
						}
					},
				}
				
			}
		}

	}

	return playerInfo && playerMMR && playerMMRHistory && matchHistory ?
		<div className="playerWrapper">
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
				<div className="mmrChart">
					<Chart options={graphInfo.options} series={graphInfo.series} type="line" height={640} width={640} />
				</div>
			</div>
			<div className="matchHistory">
				{matchHistory.data.map(match => (
					<MatchDisplay key={match.metadata.matchid} match={match} playerName={playerInfo.data.name} playerTag={playerInfo.data.tag}/>
				))}
			</div>
		</div>
		:
		<h3>Loading...</h3>
	
}
export default PlayerProfile