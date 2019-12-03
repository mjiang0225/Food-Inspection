        // api for search foods

        //Get the results
        var resultDiv = document.getElementById("result");

        var httpRequest;

        function makeRequest(url) {

            httpRequest = new XMLHttpRequest();

            if (!httpRequest) {
                alert('Giving up :( Cannot create an XMLHTTP instance');
                return false;
            }
            httpRequest.onreadystatechange = getResult;
            
            httpRequest.open('GET', url);
           
            httpRequest.send();
        }

        function getResult() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {

                    var result = JSON.parse(httpRequest.responseText);

                    console.log(result);

                    //pull out the data 
                    var str = '';
                    var name = document.getElementById('name').value;
                    var category = document.getElementById('category').value;
                    var zip = document.getElementById('zip').value;
                    var arr = [];
                    for (var i = 0, len = result.length; i < len; i++) {
                            if(name != '') {
                                if(name == result[i].name || category == result[i].category || zip == result[i].zip) {
                                    str += '<tr><td>'+ result[i].name +'</td><td>'+ result[i].category +'</td><td>'+ result[i].inspection_date +'</td><td>'+ result[i].inspection_results +'</td><td>'+ result[i].city +'</td><td>'+ result[i].zip +'</td><td>'+ result[i].address_line_1 +'</td><td>'+ result[i].address_line_2 +'</td><td>'+ result[i].inspection_type +'</td></tr>';
                                }
                            }
                            else if (category != '') {
                                if(name == result[i].name || category == result[i].category || zip == result[i].zip) {
                                    str += '<tr><td>'+ result[i].name +'</td><td>'+ result[i].category +'</td><td>'+ result[i].inspection_date +'</td><td>'+ result[i].inspection_results +'</td><td>'+ result[i].city +'</td><td>'+ result[i].zip +'</td><td>'+ result[i].address_line_1 +'</td><td>'+ result[i].address_line_2 +'</td><td>'+ result[i].inspection_type +'</td></tr>';
                                }
                            }
                            else if (zip != '') {
                                if(name == result[i].name || category == result[i].category || zip == result[i].zip) {
                                    str += '<tr><td>'+ result[i].name +'</td><td>'+ result[i].category +'</td><td>'+ result[i].inspection_date +'</td><td>'+ result[i].inspection_results +'</td><td>'+ result[i].city +'</td><td>'+ result[i].zip +'</td><td>'+ result[i].address_line_1 +'</td><td>'+ result[i].address_line_2 +'</td><td>'+ result[i].inspection_type +'</td></tr>';
                                }
                            } 
                            /**else {
                                str += '<tr><td>'+ result[i].name +'</td><td>'+ result[i].category +'</td><td>'+ result[i].inspection_date +'</td><td>'+ result[i].inspection_results +'</td><td>'+ result[i].city +'</td><td>'+ result[i].zip +'</td><td>'+ result[i].address_line_1 +'</td><td>'+ result[i].address_line_2 +'</td><td>'+ result[i].inspection_type +'</td></tr>';
                            } **/ 
                            
                         
                         
                        
                    }
                    document.getElementById('result').innerHTML = str;


                } else {
                    alert('There was a problem with the request.');
                }
            }
        }

        function search(s) {
            if(s != 0) {
                var name = document.getElementById('name').value;
                var category = document.getElementById('category').value;
                var zip = document.getElementById('zip').value;
               
            }
            document.getElementById('table').style.display = 'block';
            //clear the last results
            resultDiv.innerHTML = "";
            makeRequest('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');

        }
        //search(0);
       