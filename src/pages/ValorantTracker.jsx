import {useState, useEffect} from 'react'
import {Row, Col, Form, Button, Dropdown, DropdownButton} from 'react-bootstrap'
import axios from 'axios'
import PlayerProfile from '../components/ValTrackerComponents/PlayerProfile.jsx'

import './ValorantTracker.css'

const ValorantTracker = () => {
  const [player, setPlayer] = useState({username: 'AACommander', tag: '6432'})
	const [filter, setFilter] = useState('competitive')

  const [loading, setLoading] = useState('Loading...')

	const [playerInfo, setPlayerInfo] = useState()
	const [playerMMR, setPlayerMMR] = useState()
	const [playerMMRHistory, setPlayerMMRHistory] = useState()
	const [matchHistory, setMatchHistory] = useState()

	// useEffect(() => {
	// 	axios.get(`https://api.henrikdev.xyz/valorant/v1/account/${player.username}/${player.tag}`).then(
	// 		res => {
	// 			let fetchedRecord = res.data
	// 			console.log('player info', fetchedRecord)
	// 			setPlayerInfo(fetchedRecord)
	// 		}
	// 	)
		
	// 	axios.get(`https://api.henrikdev.xyz/valorant/v1/mmr/na/${player.username}/${player.tag}`).then(
	// 		res => {
	// 			let fetchedRecord = res.data
	// 			console.log('player\'s mmr', fetchedRecord)
	// 			setPlayerMMR(fetchedRecord)
	// 		}
	// 	)

	// 	axios.get(`https://api.henrikdev.xyz/valorant/v1/mmr-history/na/${player.username}/${player.tag}`).then(
	// 		res => {
	// 			let fetchedRecord = res.data
	// 			console.log('player\'s mmr history', fetchedRecord)
	// 			setPlayerMMRHistory(fetchedRecord)
	// 		}
	// 	)
	// }, [player])

	// useEffect(() => {
	// 	axios.get(`https://api.henrikdev.xyz/valorant/v3/matches/na/${player.username}/${player.tag}?filter=${filter}`).then(
	// 		res => {
	// 			let fetchedRecord = res.data
	// 			console.log('match history (5 games)', fetchedRecord)
	// 			setMatchHistory(fetchedRecord)
	// 		}
	// 	)
	// }, [player, filter])
	
  useEffect(() => {
    const profileRequest = axios.get(`https://api.henrikdev.xyz/valorant/v1/account/${player.username}/${player.tag}`)
    const mmrRequest = axios.get(`https://api.henrikdev.xyz/valorant/v1/mmr/na/${player.username}/${player.tag}`)
    const mmrHistoryRequest = axios.get(`https://api.henrikdev.xyz/valorant/v1/mmr-history/na/${player.username}/${player.tag}`)
    const matchHistoryRequest = axios.get(`https://api.henrikdev.xyz/valorant/v3/matches/na/${player.username}/${player.tag}?filter=${filter}`)

    axios.all([profileRequest, mmrRequest, mmrHistoryRequest, matchHistoryRequest]).then(axios.spread((...responses) => {
      setPlayerInfo(responses[0].data)
      console.log('player info:', responses[0].data)
      setPlayerMMR(responses[1].data)
      console.log('player mmr:', responses[1].data)
      setPlayerMMRHistory(responses[2].data)
      console.log('player mmr history:', responses[2].data)
      setMatchHistory(responses[3].data)
      console.log('match history:', responses[3].data)
      setLoading('')
    }))
  }, [player, filter])
	
	const onFormSubmit = (e) => {
		e.preventDefault()
    const formData = new FormData(e.target),
    formDataObj = Object.fromEntries(formData.entries())		
		let playerInfo = formDataObj.searchInput.split('#')
		setPlayer({username: playerInfo[0], tag: playerInfo[1]})

		// console.log('username', player.username)
		// console.log('tag', player.tag)
    setLoading('Loading...')
	}


	return (
		<div className="valTrackerWrapper">
			<h1>Valorant Tracker</h1>
			<Row>
				<Col>
					<Form onSubmit={onFormSubmit}>
						<Row>
							<Col><Form.Control type="text" name="searchInput" defaultValue="AACommander#6432"/></Col>
							<Col><Button variant="outline-success" type="submit">Submit</Button></Col>
						</Row>
					</Form>
				</Col>
				<Col>
					<DropdownButton id="gamemode-filter" title="Gamemode" variant="secondary">
						<Dropdown.Item as="button" onClick={() => setFilter('competitive')}>Competitive</Dropdown.Item>
						<Dropdown.Item as="button" onClick={() => setFilter('unrated')}>Unrated</Dropdown.Item>
					</DropdownButton>
				</Col>
			</Row>

      <div className="playerProfileWrapper">
        <p>{loading}<br /></p>
        <PlayerProfile playerInfo={playerInfo} playerMMR={playerMMR} playerMMRHistory={playerMMRHistory} matchHistory={matchHistory}/>
      </div>
      
			
		</div>
	)
}
export default ValorantTracker