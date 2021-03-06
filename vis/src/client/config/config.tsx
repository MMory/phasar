const BASE_URL = '';
const CLIENT_ENDPOINT = '/api/client'
const GET_GRAPH = BASE_URL + CLIENT_ENDPOINT + '/getGraph'
const GET_GRAPH_IDS = BASE_URL + CLIENT_ENDPOINT + '/getGraphIds'
const RESULT_URL = BASE_URL + CLIENT_ENDPOINT + '/result/';
const GET_METHOD_URL = BASE_URL + CLIENT_ENDPOINT + '/method/';
const GET_DFF_URL = BASE_URL + CLIENT_ENDPOINT + '/dataflowFacts/';
const START_PROCESS = BASE_URL + CLIENT_ENDPOINT + "/startProcess"
const SEARCH_STRING = CLIENT_ENDPOINT + '/searchInstruction/'
const SEARCH_STRING_DF = CLIENT_ENDPOINT + '/searchDf/'
const GET_ALL_METHOD_IDS = CLIENT_ENDPOINT + '/method/all/'
const GET_ALL_METHODS = CLIENT_ENDPOINT + '/method/get/all/'
const GET_NEW_BASE_METHOD = CLIENT_ENDPOINT + '/baseMethod/'
export { SEARCH_STRING_DF, GET_GRAPH_IDS, GET_ALL_METHOD_IDS, GET_ALL_METHODS, GET_GRAPH, RESULT_URL, GET_METHOD_URL, START_PROCESS, GET_DFF_URL, SEARCH_STRING, GET_NEW_BASE_METHOD }
