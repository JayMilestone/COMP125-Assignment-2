/* Custom JS goes here */
let app;
(function(app)
{
    function Start()
    {
        // Title variable for each <title>
        var title = document.title;

        console.log("Application Started");
        console.info("----------------------");
        //console.warn("Title: " + title);
        try{
            // Calling to the <title> on start
            switch(title)
            {
                case "Biography":
                    bio.Bio();
                    break;
                case "Project's Page":
                    projects.ProjectsPage();
                    break;
                case "Contact":
                    contact.ContactContent();
                    break;
                default:
                    console.log("Title is not defined");
                    break;
            }
        }
        catch
        {
            //console.warn("Something went wrong!");
        }
    }

    //On Page / window loaded
    window.onload = Start;
})(app || (app = {}));