import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import SingleCharacter from './single-character';
import {getCharactersById} from '../redux/actions/characters.action';

const SingleEpisodeCharactersList = ({episodeReducer, charactersReducer, getCharactersById, history}) => {
    const {episode} = episodeReducer;
    const {characters} = charactersReducer;

    const takeCharactersId = (chars) => chars.map(character => character.split('character/')[1]);

    useEffect(() => {
        getCharactersById(takeCharactersId(episode.characters));
    }, [getCharactersById, episode.characters]);

    return episode && <div>
        <div style={{width: '100% !important'}}>
            {characters && characters.map(character => <SingleCharacter
                key={character.id} character={character} history={history}/>)}</div>
    </div>;
};

SingleEpisodeCharactersList.propTypes = {
    history: PropTypes.object.isRequired,
    episodeReducer: PropTypes.object.isRequired,
    charactersReducer: PropTypes.object.isRequired,
    getCharactersById: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    charactersReducer: state.charactersReducer,
    episodeReducer: state.episodeReducer,
});

const mapDispatchToProps = (dispatch) => ({
    getCharactersById: (ids) => {
        dispatch(getCharactersById(ids));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleEpisodeCharactersList);
