var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSeasonCareer = new Schema(
    {
        "MIN": Number,
        "TOV": Number,
        "REB": Number,
        "TEAM_ID": Number,
        "PLAYER_ID": Number,
        "FG3A": Number,
        "PLAYER_AGE": Number,
        "LEAGUE_ID": String,
        "TEAM_ABBREVIATION": String,
        "FG3M": Number,
        "OREB": Number,
        "FGM": Number,
        "PF": Number,
        "PTS": Number,
        "FGA": Number,
        "GS": Number,
        "GP": Number,
        "STL": Number,
        "FTA": Number,
        "BLK": Number,
        "DREB": Number,
        "FTM": Number,
        "FT_PCT": Number,
        "SEASON_ID": String,
        "FG_PCT": Number,
        "AST": Number,
        "FG3_PCT": Number
    }
);

var teamGameStats = new Schema({
    "MIN": Number,
    "WL": String,
    "TOV": Number,
    "REB": Number,
    "FG3A": Number,
    "DREB": Number,
    "AST": Number,
    "FG3M": Number,
    "OREB": Number,
    "FGM": Number,
    "PF": Number,
    "Game_ID": String,
    "PTS": Number,
    "FGA": Number,
    "STL": Number,
    "FTA": Number,
    "BLK": Number,
    "MATCHUP": String,
    "FTM": Number,
    "FT_PCT": Number,
    "FG_PCT": Number,
    "Team_ID": Number,
    "FG3_PCT": Number,
    "GAME_DATE": String
});

var playerGameStats = new Schema({
    "MIN": Number,
    "WL": String,
    "TOV": Number,
    "REB": Number,
    "FG3A": Number,
    "MATCHUP": String,
    "AST": Number,
    "FG3M": Number,
    "OREB": Number,
    "FGM": Number,
    "PF": Number,
    "Game_ID": String,
    "PTS": Number,
    "FGA": Number,
    "PLUS_MINUS": Number,
    "STL": Number,
    "FTA": Number,
    "Player_ID": Number,
    "BLK": Number,
    "DREB": Number,
    "FTM": Number,
    "FT_PCT": Number,
    "SEASON_ID": String,
    "FG_PCT": Number,
    "FG3_PCT": Number,
    "GAME_DATE": String
});

var playercareerstats = new Schema(
    {
        "PLAYER_ID": Number,
        "STATS": [playerSeasonCareer]
    }
);

var teamSeasonGameLog = new Schema(
    {
        "Team_ID": Number,
        "STATS": [teamGameStats]
    }
);
var playergamestats = new Schema(
    {
        "PLAYER_ID": Number,
        "STATS": [ playerGameStats ]
    }
);

var playerinfo = new Schema({
        "FIRST_NAME": String,
        "LAST_NAME": String,
        "COUNTRY": String,
        "BIRTHDATE": String,
        "TEAM_ID": Number,
        "TEAM_NAME": String,
        "ROSTERSTATUS": String,
        "TEAM_ABBREVIATION": String,
        "DISPLAY_FI_LAST": String,
        "PLAYERCODE": String,
        "DLEAGUE_FLAG": String,
        "POSITION": String,
        "FROM_YEAR": String,
        "WEIGHT": String,
        "DISPLAY_FIRST_LAST": String,
        "HEIGHT": String,
        "TO_YEAR": String,
        "DISPLAY_LAST_COMMA_FIRST": String,
        "TEAM_CODE": String,
        "SCHOOL": String,
        "JERSEY": String,
        "PERSON_ID": Number,
        "SEASON_EXP": Number,
        "LAST_AFFILIATION": String,
        "TEAM_CITY": String
    });

var players = new Schema({
        "SCHOOL": String,
        "WEIGHT": String,
        "SEASON": String,
        "AGE": Number,
        "BIRTH_DATE": String,
        "HEIGHT": String,
        "PLAYER": String,
        "TeamID": Number,
        "NUM": String,
        "EXP": String,
        "LeagueID": String,
        "POSITION": String,
        "PLAYER_ID": Number
    });

var teaminfo = new Schema({
    "TEAM_DIVISION": String,
    "CONF_RANK": Number,
    "TEAM_ABBREVIATION": String,
    "SEASON_YEAR": String,
    "PCT": Number,
    "L": Number,
    "MIN_YEAR": String,
    "TEAM_ID": Number,
    "TEAM_CONFERENCE": String,
    "DIV_RANK": Number,
    "W": Number,
    "TEAM_NAME": String,
    "TEAM_CODE": String,
    "MAX_YEAR": String,
    "TEAM_CITY": String
});

var teams = new Schema({
        "simpleName": String,
        "teamId": Number,
        "location": String,
        "teamName": String
    });

/*

var nbaSchema = new Schema({
    playercareerstats: ,
    :
,
    :,
    playerinfo: ,
    players: ,
    teaminfo:{

    },
    teams:
});
 */

var playerCareer = mongoose.model('playerCareer', playercareerstats, 'nbaplayercareerstats');
var teamSeason = mongoose.model('teamSeason', teamSeasonGameLog, 'nbateamgamestats');
var playerGame = mongoose.model('playerGame', playergamestats, 'nbaplayergamestats');
var playerInfo = mongoose.model('nbaplayerinfo', playerinfo, 'nbaplayerinfo');
var playersDB = mongoose.model('nbaplayers', players, 'nbaplayers');
var teamInfo = mongoose.model('nbateamInfo', teaminfo, 'nbateaminfo');
var teamsDB = mongoose.model('nbateams', teams, 'nbateams');

module.exports = {
    playerCareer: playerCareer,
    teamSeason: teamSeason,
    playerGame: playerGame,
    playerInfo: playerInfo,
    players: playersDB,
    teamInfo: teamInfo,
    teams: teamsDB
};
