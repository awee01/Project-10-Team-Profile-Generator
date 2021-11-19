

function generatemanagerblock(team)
{
    console.log(team)

    return  `    
    <div class="card" style="width: 18rem;">

    <div class="card-header">
    ${team[0].name}
    </div>

    <div>
    ID: ${team[0].id}
    <br>
    Email: ${team[0].email}
    <br>
    Office: ${team[0].office}
    </div>    
    
    </div>
    `

}

function generateTeam(team) {

const generateIntern = intern =>

{
    return  `    
    <div class="card" style="width: 18rem;">

    <div class="card-header">
    ${intern.name}
    </div>

    <div>
    ID: ${intern.id}
    <br>
    Email: ${intern.email}
    <br>
    School: ${intern.school}
    </div>    
    
    </div>
    `
}


const generateEngineer = engineer =>

{
    return  `    
    <div class="card" style="width: 18rem;">

    <div class="card-header">
    ${engineer.name}
    </div>

    <div>
    ID: ${engineer.id}
    <br>
    Email: ${engineer.email}
    <br>
    Github: ${engineer.github}
    </div>    
    
    </div>
    `

}

for (i = 0; i < team.length; i++){


    
}



}





module.exports = team=> {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            <link rel="stylesheet" href="../style.css" />
            <title>Team Profile</title>
        </head>
        <body>
            <header>
            <h1>My Team</h1>
            </header>

            ${generatemanagerblock(team)}

            ${generateteam(team)}




            
        </body>
        </html>    
        `
  }
  