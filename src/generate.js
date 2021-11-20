

function generate(employee)
{

 var field = "";

 if(employee.getRole()==="Manager"){
     field = `Office Number: ${employee.office}` 
} else if (employee.getRole()==="Intern"){
    field = `School: ${employee.school}` 
} else if (employee.getRole()==="Engineer"){
    field = `Github: ${employee.github}` 
}


 return`
 <div class="card" style="width: 18rem;">
 <ul class="list-group list-group-flush">
 <h3 class="card-title">${employee.name}</h3>
 <h4>${employee.getRole()}</h4>
   <li class="list-group-item">Id: ${employee.id}</li>
   <li class="list-group-item">Email: ${employee.email}</li>
   <li class="list-group-item">${field}</li>
 </ul>
</div>
 `

}




module.exports = team=> {

    var card = ""

    for (let i = 0; i < team.length; i++) 
    {
    
      if (team[i].getRole()==="Manager"){

        card = card+generate(team[i])
      }
      else if (team[i].getRole()==="Engineer"){

        card = card+generate(team[i])
      }
      else if (team[i].getRole()==="Intern"){

        card = card+generate(team[i])
      }
      
      
      
        
    }
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            <link rel="stylesheet" href="../src/style.css" />
            <title>Team Profile</title>
        </head>
        <body>
            <header>
            <h1>My Team</h1>
            </header>

           
            <main>

            ${card}

            </main>


            
        </body>
        </html>    
        `
  }
  