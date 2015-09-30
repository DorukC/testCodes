function CreateWebClient() {
    this.createWebClient_GET = function (url, BlogWebClient_SyndicationSuccess) {
        var BlogWebClient = new SMF.Net.WebClient({
                URL : url,
                httpMethod : "GET",
                requestHeaders : ["Content-Type:application/json; charset=utf-8"],
                onSyndicationSuccess : BlogWebClient_SyndicationSuccess,
                onServerError : function (e) {
                    alert("Server Error");
                },
                responseHandling : SMF.Net.ResponseHandling.forceText,
                timeoutInterval : 120
            });
        return BlogWebClient;
    }
    
    this.createWebClient_POST = function (url, BlogWebClient_SyndicationSuccess) {
        var BlogWebClient = new SMF.Net.WebClient({
                URL : url,
                httpMethod : "POST",
                requestHeaders : ["Content-Type:application/json; charset=utf-8"],
                onSyndicationSuccess : BlogWebClient_SyndicationSuccess,
                onServerError : function (e) {
                    alert("Server Error");
                },
                responseHandling : SMF.Net.ResponseHandling.forceText,
                timeoutInterval : 120
            });
        return BlogWebClient;
    }

    this.createWebClient_GET = function (url, BlogWebClient_SyndicationSuccess, _headerParam) {
        var BlogWebClient = new SMF.Net.WebClient({
                URL : url,
                httpMethod : "GET",
                requestHeaders : ["Content-Type:application/json; charset=utf-8", _headerParam],
                onSyndicationSuccess : BlogWebClient_SyndicationSuccess,
                onServerError : function (e) {
                    alert("Server Error");
                },
                responseHandling : SMF.Net.ResponseHandling.forceText,
                timeoutInterval : 120
            });
        return BlogWebClient;
    }

}