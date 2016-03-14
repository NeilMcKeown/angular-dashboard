'use strict';
/* global JSONEditor*/


/**
 * @ngdoc function
 * @name angularAssetApp.controller:JSONEditorCtrl
 * @description
 * # JSONEditorCtrl
 * Controller of the angularAssetApp
 */
angular.module('angularAssetApp')
  .controller('JSONEditorCtrl', ['$scope','$http', function() {

    console.log('JSONEditorCtrl initiated.');

    // Configure the UI settings for the editor.
    JSONEditor.defaults.options.theme = 'bootstrap3';
    JSONEditor.defaults.options.iconlib = "bootstrap3";

    var jsonLoaded = false;

    // Initialize the editor with a JSON schema
    var editor = new JSONEditor(document.getElementById('editor_holder'),{
      // Enable fetching schemas via ajax
      ajax: true,

      show_errors: true,

      schema: {
        $schema: "http://json-schema.org/draft-04/schema#",
        "id": "http://jsonschema.net",
        "type": "object",
        "title": "User Details",
        "properties": {
          "id": {
            "id": "http://jsonschema.net/id",
            "type": "integer",
            "minimum": 0,
            "exclusiveMinimum": true  // Required for mandatory integers.
          },
          "Name": {
            "type": "string",
            "minLength": 4
          },
          "Username": {
            "id": "http://jsonschema.net/username",
            "type": "string",
            "minLength": 4
          },
          "Email": {
            "id": "http://jsonschema.net/email",
            "type": "string",
            "minLength": 1
          },
          "Address": {
            "id": "http://jsonschema.net/address",
            "type": "object",
            "properties": {
              "Street": {
                "id": "http://jsonschema.net/address/street",
                "type": "string",
                "minLength": 1
              },
              "Suit": {
                "id": "http://jsonschema.net/address/suite",
                "type": "string"
              },
              "City": {
                "id": "http://jsonschema.net/address/city",
                "type": "string",
                "minLength": 1
              },
              "zipcode": {
                "id": "http://jsonschema.net/address/zipcode",
                "type": "string"
              },
              "Geo": {
                "id": "http://jsonschema.net/address/geo",
                "type": "object",
                "properties": {
                  "Latitude": {
                    "id": "http://jsonschema.net/address/geo/lat",
                    "type": "string"
                  },
                  "Longitude": {
                    "id": "http://jsonschema.net/address/geo/lng",
                    "type": "string"
                  }
                }
              }
            }
          },
          "Phone": {
            "id": "http://jsonschema.net/phone",
            "type": "string"
          },
          "Website": {
            "id": "http://jsonschema.net/website",
            "type": "string"
          },
          "Company": {
            "id": "http://jsonschema.net/company",
            "type": "object",
            "properties": {
              "Name": {
                "id": "http://jsonschema.net/company/name",
                "type": "string",
                "minLength": 1
              },
              "CatchPhrase": {
                "id": "http://jsonschema.net/company/catchPhrase",
                "type": "string"
              }
            }
          }
        },
        "required": [
          "id",
          "Name",
          "Username",
          "Email",
          "Address",
          "Phone",
          //"website",
          "Company"
        ]
      },

      // Disable additional properties
      no_additional_properties: false,

      // Require all properties by default
      required_by_default: false
    });

    // Consume a RESTful API and assign the response to a value.
    //$http.get('http://jsonplaceholder.typicode.com/users/4').
    //    success(function(data) {
    //        console.log('rest api call successful.');
    //        $scope.user = data;
    //
    //        jsonLoaded = true;
    //
    //        // Populate the editor with the JSON we got.
    //        editor.setValue(data);
    //    });

    // When we load our external RESTful API call, validate it.
    //editor.on('ready',function() {
      // Now the api methods will be available
      //editor.validate();
    //});

    // Hook up the validation indicator to update its status whenever the editor
    // changes.
    editor.on('change',function() {

      // If we have loaded the JSON, then validate any changes.
      // This avoids a flash of 'Failed' while the json is being populated.
      if (jsonLoaded) {
         // Get an array of errors from the validator
         var errors = editor.validate();

         console.log(jsonLoaded + " : " + errors);

         var indicator = document.getElementById('valid_indicator');

         // Not valid
         if(errors.length) {
           //indicator.style.color = 'red';
           indicator.className = "alert alert-danger";
           indicator.innerHTML = "<i class='fa fa-times-circle'></i> <strong>Failure!</strong> This does not validate against the schema.";
         }
         // Valid
         else {
           //indicator.style.color = 'green';
           indicator.className = "alert alert-success";
           indicator.innerHTML = "<i class='fa fa-check-circle'></i> <strong>Success!</strong> This validates against the schema.";
         }
       }
     });

    // Hook up the submit button to log to the console
    document.getElementById('submit').addEventListener('click',function() {
      // Get the value from the editor
      console.log(editor.getValue());

      // Write to the page output also.
      document.getElementById('output').value = JSON.stringify(editor.getValue());
    });

  }]);
