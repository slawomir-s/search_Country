$(function () {
    var url = 'https://restcountries.eu/rest/v2/name/',
        countriesList = $('#countries');
    $('#search').click(searchCountries);

    function searchCountries() {
        var countryName = $('#country-name').val();
        if(!countryName.length) countryName = 'Poland';
        $.ajax({ 
            url: url + countryName, 
            method: 'GET', 
            success: showCountriesList,
            error:  onError, 
        });
    }
    
    function onError(resp) {
        alert('Error! Sorry, but we receive server error ('+ resp.status + '). Please try again, later');
    }
    
    function showCountriesList(resp) {
        countriesList.empty();
        resp.forEach(function (item) {
            $('#countries').html("<div class='flag'><img src='" + item.flag + "'></div>").appendTo(countriesList);
            $('<li class="name">').html('<h3>' + item.name + '</h3>').appendTo(countriesList);
            $('<li class="info">').text('Background Information:').appendTo(countriesList);
            $('<li>').html("<span>" + 'Capital: ' + "</span>" + "<span>" + item.capital + "</span>").appendTo(countriesList);
            $('<li>').html("<span>" + 'Land area: ' + "</span>" + "<span>" + item.area + ' km sq.' + "</span>").appendTo(countriesList);
            $('<li>').html("<span>" + 'Population: ' + "</span>" + "<span>" + item.population + "</span>").appendTo(countriesList);
            $('<li>').html("<span>" + 'Native Name: ' + "</span>" + "<span>" + item.nativeName + "</span>").appendTo(countriesList);
            $('<li>').html("<span>" + 'Region: ' + "</span>" + "<span>" + item.region + "</span>").appendTo(countriesList);
            $('<li>').html("<span>" + 'Subregion: ' + "</span>" + "<span>" + item.subregion + "</span>").appendTo(countriesList);
            $('<li>').html("<span>" + 'Calling Code: ' + "</span>" + "<span>" + item.callingCodes[0] + "</span>").appendTo(countriesList);
            $('<li>').html("<span>" + 'Currencies: ' + "</span>" + "<span>" + item.currencies[0].symbol + "</span>").appendTo(countriesList);
            $('<li>').html("<span>" + 'Languages: ' + "</span>" + "<span>" + item.languages[0].nativeName + "</span>").appendTo(countriesList);
        });
    }
})