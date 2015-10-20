function MyViewModel() {
    var self = this;

    self.movies = ko.observableArray();
    self.searchTerm = ko.observable();
    
    self.error = ko.observable(false);
    self.errorMessage = ko.observable();

    self.searchForMovies = function () {
        $.getJSON("http://omdbapi.com/?s=" + self.searchTerm(), {
            api_key: '7a5035cca9022ea67734112eb921d5d33680a63d'
        }).done(function (data) {
            self.error(false);
            self.errorMessage('');
            
            if(data.Search) {
                ko.mapping.fromJS(data.Search, {}, self.movies);   
            } else {
                self.error(true);
                self.errorMessage(data.Error);
            }
        });
    };
};

ko.applyBindings(new MyViewModel());