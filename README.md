# Food-Inspection
Prince George’s County Food Safety

# Project Description
We have realized that the community in Prince George's County is faced with daily risks of food borne illness all due to the fact of the unknown conditions where the community’s food supply is outsourced. To solve this problem, we have decided to create an application, accessible to the public, that allows individuals to search various outlets including official inspections of source facilities to ensure that what is being consumed by the community is outsourced from a clean and safe place. Users will have access to essential information including, type of food service, health inspection date, health inspection results, city, zip code, address, and inspection type. With this information being made available to the Prince George's County community through our application, we believe that a new standard of food safety will be set and the community can finally enjoy a piece of mind when consuming food from local outlets due to the significant reduction of the risk factor of consuming food from unknown sources. 
# Link to Netlify
  https://festive-morse-8e3349.netlify.com/

# Target browsers 
Our Targeted browsers are desktop-based web browsers. Run properly in Chrome, IE, Safari and other browsers. iOS due to the simple fact that the majority of the community uses iOS smart phones and devices, but our application will be available on both iOS and Android platforms. 

# Developer Manual
Recommendations:

-	Use GitHub Desktop for easy transfer of files
-	Open index.html in Visual Studio Code with extension Live Server by Ritwick Dey installed
-	Allows users to access the app without having to run server through Terminal/Command Prompt

How to run server (if VSCode does not work):
-	Install any version of Python 3.x (Macs/Linux will have this installed already)
-	Open Command Prompt (Windows) or Terminal (Mac)
-	Type Python –v to confirm that Python is installed
-	Navigate to the director where you have the application installed
-	Type python –m simplehttpserver in the Terminal/Command Line window
-	Server will run at port 8000 by default
-	To access the main page, type localhost:8000 in your web browser once the server is running
Tests:
-	None written yet

API Used in Server Application

-	API Link: 
-	https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json

-	List of functions:

makeRequest()
  -Sends request to HTTP server and creates XMLHTTP instance
getResult()
  -Uses obtained XMLHTTP request data and parses the request using JSON, logging the results of this to the console. It then pulls out the data by name, category, and zip code and converts these to uppercase, iterating through the entire file
Search(s)
  -Searches the document for names, categories, and zip codes by their element ID, then places these elements in a table presented in block display. It then clears the last results to prevent confusion.
Bugs/Roadmap:
  -Make layout more dynamic, better for mobile versions. Works great on PC/Mac, but there is always room for improvement.
  -Increase the scope of the project, including more restaurants within Prince George’s Country and potentially outside it
  -Add even more filters so that users can further refine their searches

