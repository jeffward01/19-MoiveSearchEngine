function MyViewModel() {
    var self = this;

    self.movies = ko.observableArray();
    self.searchTerm = ko.observable();

    self.searchForMovies = function () {
        $.getJSON("http://omdbapi.com/?s=" + self.searchTerm(), {
            api_key: '7a5035cca9022ea67734112eb921d5d33680a63d'
        }).done(function (data) {
            ko.mapping.fromJS(data.Search, {}, self.movies);
        });
    };
};

ko.applyBindings(new MyViewModel());