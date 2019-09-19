var scraper = require('./tools').scraper;
//scraper = function(url,parseFcn,filename)
//scrapes a URL, parses it with parseFcn, and archives the data in a JSON file called filename.


/* start of parse fcn code

scraping marvel

*/



var parse = function($, data)
{
    var parent = $(".az-list");
    var child = parent.find("li");
    
    
   
    
    
    
    
    
    child.toArray().forEach(function(item,index)
    {
        data.push($(item).text());
        
        
        
    })
   
 
    
}


scraper("https://www.marvel.com/comics/characters", parse, "text.txt");