const express = require('express');
const { ROUTE_CONSTANTS } = require('./helpers/route_constants');
var bodyParser = require('body-parser');
const asyncRequest = require('async-request');
const app = express();
const port = 3000;
const countryListUrl = 'https://restcountries.eu/rest/v2/all';
const githubUsersUrl ='https://api.github.com/users';
/**
 * body parser intercepts request and process data and attach
 * to the request dody
 */

app.use(bodyParser.urlencoded({ extended: false }))
 
//parse application/json
app.use(bodyParser.json())

app.post(ROUTE_CONSTANTS.POST_REGISTER,(request,response)=>{
    console.log(request.body);
    response.send("Welcome to register page");
    
});

app.post(ROUTE_CONSTANTS.POST_LOGIN,(request,response)=>{
  console.log(request.body);
  response.send("Welcome to Login page");
  
});


// route , callback
app.get(ROUTE_CONSTANTS.DEFAULT,(request,response)=>{
    response.send("Hello Welcome ...! to express");
});

app.get(ROUTE_CONSTANTS.GET_LOGIN,(request,response)=>{
    response.sendFile(__dirname+"/pages/login.html");
});

app.get(ROUTE_CONSTANTS.GET_REGISTER,(request,response)=>{
    response.sendFile(__dirname+"/pages/register.html");
    
});

app.get(ROUTE_CONSTANTS.GET_FILE,(request,response)=>{
    response.sendFile(__dirname+"/files/demo.pdf");
    
});

app.get(ROUTE_CONSTANTS.GET_PRODUCTS,(request,response)=>{
    const products = [
        {
          "_id": "5f5860d6d3b00d10a8863758",
          "index": 0,
          "guid": "4275ea5a-220b-47b4-b6d5-947e866c2c7a",
          "isActive": true,
          "balance": "$2,912.42",
          "picture": "http://placehold.it/32x32",
          "age": 30,
          "eyeColor": "blue",
          "name": "Myrtle Strong",
          "gender": "female",
          "company": "COMVEYOR",
          "email": "myrtlestrong@comveyor.com",
          "phone": "+1 (910) 587-2084",
          "address": "561 Lincoln Avenue, Bangor, Guam, 4308",
          "about": "Incididunt laborum occaecat voluptate non laboris. Ex excepteur occaecat ullamco et Lorem culpa voluptate. Cupidatat irure est minim consectetur. Do cillum mollit excepteur occaecat. Aliqua excepteur ad nisi consequat officia sit pariatur. Est non occaecat cillum tempor labore sunt elit.\r\n",
          "registered": "2018-06-27T06:48:04 -06:-30",
          "latitude": 55.214264,
          "longitude": 70.539816,
          "tags": [
            "ad",
            "aute",
            "enim",
            "proident",
            "sit",
            "exercitation",
            "nostrud"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Dena Gordon"
            },
            {
              "id": 1,
              "name": "Eileen Sheppard"
            },
            {
              "id": 2,
              "name": "Maritza Guerra"
            }
          ],
          "greeting": "Hello, Myrtle Strong! You have 9 unread messages.",
          "favoriteFruit": "strawberry"
        },
        {
          "_id": "5f5860d61f72adee0da2391a",
          "index": 1,
          "guid": "41f0d448-ee92-4c2e-9c0c-30ebe1d0b270",
          "isActive": false,
          "balance": "$2,142.38",
          "picture": "http://placehold.it/32x32",
          "age": 30,
          "eyeColor": "green",
          "name": "Imogene Hernandez",
          "gender": "female",
          "company": "CYCLONICA",
          "email": "imogenehernandez@cyclonica.com",
          "phone": "+1 (992) 600-2540",
          "address": "208 Halsey Street, Durham, Oklahoma, 7345",
          "about": "Commodo aute minim qui sint Lorem. Irure laborum elit tempor laborum non et dolor reprehenderit id cillum exercitation cupidatat aliqua aute. Ex culpa cupidatat magna Lorem qui duis. Exercitation id deserunt magna pariatur mollit ut ad cillum in exercitation. Pariatur mollit consectetur adipisicing sint duis adipisicing enim et qui magna cupidatat. Est dolor eu cillum ad. Dolore sint elit officia sit deserunt ullamco ut magna incididunt.\r\n",
          "registered": "2016-03-07T04:00:30 -06:-30",
          "latitude": -59.911925,
          "longitude": -70.07238,
          "tags": [
            "eiusmod",
            "adipisicing",
            "commodo",
            "eu",
            "occaecat",
            "Lorem",
            "incididunt"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Mabel Holcomb"
            },
            {
              "id": 1,
              "name": "Carrillo Solis"
            },
            {
              "id": 2,
              "name": "Thomas Wilkinson"
            }
          ],
          "greeting": "Hello, Imogene Hernandez! You have 2 unread messages.",
          "favoriteFruit": "strawberry"
        },
        {
          "_id": "5f5860d685c31c25c212c12c",
          "index": 2,
          "guid": "bc98194f-deef-4b2a-b008-728420dbeb4e",
          "isActive": false,
          "balance": "$1,566.54",
          "picture": "http://placehold.it/32x32",
          "age": 36,
          "eyeColor": "green",
          "name": "Mccarthy Alford",
          "gender": "male",
          "company": "HAWKSTER",
          "email": "mccarthyalford@hawkster.com",
          "phone": "+1 (979) 510-3945",
          "address": "243 Ocean Parkway, Onton, Indiana, 1341",
          "about": "Est commodo quis enim consectetur veniam voluptate ad. Aliquip ipsum labore deserunt sint veniam. Eiusmod ea proident occaecat consequat nulla anim enim.\r\n",
          "registered": "2014-11-15T02:51:19 -06:-30",
          "latitude": -23.651824,
          "longitude": 102.034824,
          "tags": [
            "officia",
            "ipsum",
            "commodo",
            "in",
            "incididunt",
            "aute",
            "Lorem"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Rocha Warren"
            },
            {
              "id": 1,
              "name": "Cohen Chang"
            },
            {
              "id": 2,
              "name": "Corine Slater"
            }
          ],
          "greeting": "Hello, Mccarthy Alford! You have 3 unread messages.",
          "favoriteFruit": "banana"
        },
        {
          "_id": "5f5860d654cb3bd25ca3380c",
          "index": 3,
          "guid": "e9d8d34f-be7d-45b4-9623-fe03a893a10b",
          "isActive": false,
          "balance": "$2,247.38",
          "picture": "http://placehold.it/32x32",
          "age": 30,
          "eyeColor": "green",
          "name": "Wynn Lowe",
          "gender": "male",
          "company": "SURETECH",
          "email": "wynnlowe@suretech.com",
          "phone": "+1 (957) 510-3966",
          "address": "571 Barbey Street, Caroline, Hawaii, 7631",
          "about": "Labore eu minim tempor laboris anim in dolore. Voluptate in excepteur non id adipisicing in sit aliquip veniam ex do sint nisi. Proident veniam eiusmod enim nostrud do sint voluptate cillum.\r\n",
          "registered": "2015-08-31T03:21:54 -06:-30",
          "latitude": -83.059129,
          "longitude": 120.319214,
          "tags": [
            "et",
            "nostrud",
            "culpa",
            "et",
            "adipisicing",
            "cupidatat",
            "ullamco"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Jasmine Frost"
            },
            {
              "id": 1,
              "name": "Selma Guy"
            },
            {
              "id": 2,
              "name": "Shannon Terrell"
            }
          ],
          "greeting": "Hello, Wynn Lowe! You have 2 unread messages.",
          "favoriteFruit": "strawberry"
        },
        {
          "_id": "5f5860d698e4078d21041da4",
          "index": 4,
          "guid": "497f466f-4c5e-45b3-b4bc-f39dd02212ba",
          "isActive": true,
          "balance": "$1,704.82",
          "picture": "http://placehold.it/32x32",
          "age": 31,
          "eyeColor": "green",
          "name": "Socorro May",
          "gender": "female",
          "company": "GYNK",
          "email": "socorromay@gynk.com",
          "phone": "+1 (803) 553-2575",
          "address": "828 Kane Place, Ruckersville, South Carolina, 9649",
          "about": "Ullamco qui qui anim laboris ea veniam esse nisi adipisicing id sint in anim. Minim exercitation incididunt in consequat eiusmod quis sint occaecat consequat do qui enim voluptate et. Et proident velit duis amet exercitation. Ex dolore esse deserunt quis esse fugiat. Voluptate voluptate qui laborum sint ex dolore irure ut occaecat. Sit esse ex sit est ullamco amet.\r\n",
          "registered": "2020-09-04T11:49:11 -06:-30",
          "latitude": 59.015771,
          "longitude": -83.66894,
          "tags": [
            "excepteur",
            "deserunt",
            "mollit",
            "excepteur",
            "incididunt",
            "sint",
            "tempor"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Adriana Buchanan"
            },
            {
              "id": 1,
              "name": "Oneill Carter"
            },
            {
              "id": 2,
              "name": "Cantu Elliott"
            }
          ],
          "greeting": "Hello, Socorro May! You have 8 unread messages.",
          "favoriteFruit": "strawberry"
        }
      ]
    response.send(products);
});

app.get(ROUTE_CONSTANTS.GET_COUNTRIES,async function(req,res){
  const response = await asyncRequest(countryListUrl);
  res.json(response);
});

app.get('/gitUsers',async function(req,res){
  const response = await asyncRequest(githubUsersUrl);
  res.json(response);
});

app.listen(3000);


