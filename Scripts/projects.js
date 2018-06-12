let projects;
(function (projects){

    //Project's Page function
    function ProjectsPage()
    {
        // Getting element by id
        var projectsPageString = document.getElementById("bookDescription");

        projectsPageString.setAttribute('style', 'white-space: pre;');
        // strings using textContext
        projectsPageString.textContent = "Hi, My name is Jaden Mullings - Wiafe. I made a book containing my life and all the things that have happened.";
        projectsPageString.textContent += "\r\nReading this alone, it probably just seems like it will be some simple relationships, and family deaths, right?";
        projectsPageString.textContent += "\r\nWell, my book has, for one, my alcoholic mom, two her abusive boyfriend, and yeah, a lot of cheating females. \r\nOh yeah, the ongoing death of friends and family (animals too).";

        projectsPageString.textContent += "\r\nIf you ever feel like reading something, I say you give it a try, you might find it interesting.";
        // Getting element by id
        var matchDescription = document.getElementById("matchDescription"); 
        matchDescription.setAttribute('style', 'white-space: pre;');
        // strings using textContext
        matchDescription.textContent = "Match was the fastest game I have made and I think my best.";
        matchDescription.textContent += "\r\nIt is simple, fun, but the graphics are boring, so that is my new goal for it.";
        matchDescription.textContent += "\r\nPersonally, I think this game has the capacity to become one of the top, but you will need to see it to believe me";
        // Getting element by id
        var switchDescription = document.getElementById("switchDescription"); 
        switchDescription.setAttribute('style', 'white-space: pre;');
        // strings using textContext
        switchDescription.textContent = "SWITCH! was the game I took the most time in.";
        switchDescription.textContent += "\r\nI basically just considered it a practice app in all, but it was fun to make and I learned a lot.";
        switchDescription.textContent += "\r\nIt is simple, hard, and challenging, but with no effects, it looked dull.";
        switchDescription.textContent += "\r\nI can say for sure that this can became very good with a little bit more effort.";
    }
    // Declaring projects page as the constructor for projects --  I think it is about the same since we are turning it into the main object of projects --
    projects.ProjectsPage = ProjectsPage;
})(projects || (projects = {}));