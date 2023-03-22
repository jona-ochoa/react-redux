import axios from 'axios'

function getRepos(dispatch, query){
    fetch(`https://api.github.com/search/repositories?q=${query}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log('do we have data?', data)
            dispatch({ type: "SET_REPOS", repos: data.items })
        })
}

function getReposAxios(dispatch, query){
     axios.get(`https://api.github.com/search/repositories?q=${query}`)
            .then(function (response) {
                // handle success
                console.log('axios', response);
                dispatch({ type: "SET_REPOS", repos: response.data.items })
            })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getRepos, 
    getReposAxios
    }
