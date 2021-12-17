import React, {FormEvent, useState} from 'react';
import stl from './Search.module.css';
import {ImSearch} from 'react-icons/im';
import {useHistory} from 'react-router-dom';

export const Search:React.FC = () => {
	const [searchText,setSearchText] = useState('');
	const history = useHistory();

	function handleSubmit(ev:FormEvent):void {
		ev.preventDefault();
		history.push('/?search='+searchText);
	}

	return(
		<form className={stl.searchContainer} onSubmit={handleSubmit}>
			<div className={stl.searchBox}>
				<input className={stl.searchInput}
							 value={searchText}
							 onChange={ev => setSearchText(ev.target.value)}/>
				<button className={stl.searchButton} type='submit'>
					<ImSearch size={20}/>
				</button>
			</div>
		</form>
		)
}