queryServiceUrl = "https:/willighagen-2021.wikibase.cloud/query/";
wikiUrl = "https://willighagen-2021.wikibase.cloud",
namespace = "Willighagen:Synia:",

endpoint = queryServiceUrl + "/sparql",
templateApiUrl = wikiUrl + "/w/api.php",
templateBaseUrl = wikiUrl + '/wiki/' + namespace,

window.configuration = {
    queryServiceUrl: queryServiceUrl,
    wikiUrl: wikiUrl,
    namespace: namespace,

    endpoint: endpoint,
    templateApiUrl: templateApiUrl,
    templateBaseUrl: templateBaseUrl,
}
