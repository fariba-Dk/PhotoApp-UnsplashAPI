/*
Location
The API is available at https://api.unsplash.com/. Responses are sent as JSON.

You can also pass this value using a client_id query parameter:

https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
https://unsplash.com/collections/-ycDqcrZIKY/mytopten%F0%9F%8C%B4beaches

Access Keys: 69RhlTsIPly46Ocw41PWNOPm0e985DT4Y1WulpEZaUE -> We use this for API Access

Secret Key: 0-uOLLTfecWQ2KW_b1r2H1sdFOO7luGrf8q-UzP8sIY
Redirect URI: urn:ietf:wg:oauth:2.0:oob

~~~~~~ ROUTES

GET ROUTE - GET /users/:username/photos PASTE THIS TO THE ADDRESS AFTER .COM
List a user’s photos : Get a list of photos uploaded by a user.

GET /collections/:id


jQuery.getJSON( url [, data ] [, success ] ) url we use to connect: relative or remote server using http link to file

$.ajax({
  dataType: "json",
  url: url,
  data: data,
  success: success
});
$.getJSON( "ajax/test.json", function( data ) { // this call back funciton will take our data and put it in console
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });

  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});
'https://api.unsplash.com/users/faribadadko/photos/?client_id=69RhlTsIPly46Ocw41PWNOPm0e985DT4Y1WulpEZaUE'
new access key wBvqt6L2eaL56Dg3iOpe_vpS8-KGHWq0fm9sMij4T9I

photos that user likes /users/:username/likes
photos that user based on collections /users/:username/collections
*/

$.getJSON(
  'https://api.unsplash.com/users/faribadadko/likes/?client_id=69RhlTsIPly46Ocw41PWNOPm0e985DT4Y1WulpEZaUE',
  function (data) {
    console.log(data);

    $.each(data, function (index, value) {
      //console.log(value);
      let name = value.user.name;
      //console.log(name)
      let bio = 'By: ' + value.user.name + ' 🏖 🌴 🛶 🌊 🏝';
      //console.log(bio)
      let imageURL = value.urls.small;
      // console.log(imageURL)

      //To output every single value we need to target output DIV and use .ppend() will append the value
      //So copy your html and add bellow

      $('.output').append(
        '<h1 class="name">' +
          name +
          '</h1><h2 class="bio">' +
          bio +
          '</h2><h3 class="userName"><div class="image"><img src="' +
          imageURL +
          '"/></div>'
      );
    });
  }
);
console.log('fariba');
