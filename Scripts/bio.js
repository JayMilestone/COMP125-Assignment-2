let bio;
(function (bio)
{
    //Biography Function
    function Bio()
    {      
        var biography = document.getElementById("bio");

        biography.setAttribute('style', 'white-space: pre;');
        // strings using textContext
        biography.textContent = "My name is Jaden Hakim Mullings Wiafe. \r\n\nI am a 6'4, darkskinned male. \r\n\nI am from Canada but my Mom is from Grenada, and my Dad is from Ghana. \r\n\nExplain's the darkness right?";
        biography.textContent += "\r\n\nI enjoy listening to music and watching anime. \r\n\nI also I love coding more than anything else.\r\n\nMy goal is to become The World's Leading Inventor. \r\n\nBefore coming to Centennial College, I lived in Jane and Finch.";
        biography.textContent += "\r\n\nI started coding in November of 2017 and since then made a book and 2 apps.\r\n\nMy book is called ";

        // Strings using innerHtml for urls
        var bioinnerHTML1 = " and my apps are called ";
        var bioinnerHTML2 = " and ";
        var bioinnerHTML3 = "<br><br>Well I made another game called ";
        var bioinnerHTML4 = " but you do not want to play that. <br><br>That's all about me."
        // Links to the books and apps
        var book = "Life and Everything in Between";
        var bookLink = book.link("https://books.google.ca/books/about/Life_and_Everything_in_Between.html?id=-VhHDwAAQBAJ&redir_esc=y");
        var match = "Match";
        var matchLink = match.link("https://jadenm25.itch.io/jays-match");
        var switchGame = "SWITCH!";
        var switchLink = switchGame.link("https://jadenm25.itch.io/switch");        
        var trumpVsKanye = "Trump vs Kanye";
        var trumpVsKanyeLink = trumpVsKanye.link("https://jadenm25.itch.io/kanye-vs-trump");
        biography.innerHTML += bookLink + " and my apps are called ";
        biography.innerHTML += matchLink + " and " + switchLink + bioinnerHTML3 + trumpVsKanyeLink + bioinnerHTML4;
    }
    bio.Bio = Bio;
})(bio || (bio = {}));