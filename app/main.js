
const socialList = document.getElementById("social-list");
const worksArticle = document.getElementById("works-list");
const education = document.getElementById("study-list");
const projects = document.getElementById("project-list");

const renderSocialLinks = () => {
  const socialIcons = [
    {
      icon: "<i class='bx bx-envelope'></i>", 
      url: "mailto: gisellaaballaybonilla@gmail.com"
    },
    {
      icon: "<i class='bx bx-phone'></i>", 
      url: "tel: +5492612513540"
    }, 
    {
      icon: "<i class='bx bxl-linkedin'></i>", 
      url: ""
    }, 
    {
      icon: "<i class='bx bxl-github'></i>", 
      url: "https://github.com/GisellaAballay"
    }
  ]
  
  socialIcons.forEach((icon) => {
    socialList.innerHTML += `
    <li>
      <a href="${icon.url}" target="_blank">${icon.icon}</a>
    </li>`
  });
}

const renderWorks = () => {
  const worksList = [
    {
      name:"Test",
      yearStart:"2000",
      yearEnd:"0",
      role:"desarrollador",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa eveniet quo ab excepturi possimus animi consequatur molestiae, ea reiciendis?"
    },
    {
      name:"Test",
      yearStart:"2000",
      yearEnd:"0",
      role:"desarrollador",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa eveniet quo ab excepturi possimus animi consequatur molestiae, ea reiciendis?"
    },
    {
      name:"Test",
      yearStart:"2000",
      yearEnd:"0",
      role:"desarrollador",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa eveniet quo ab excepturi possimus animi consequatur molestiae, ea reiciendis?"
    },
    {
      name:"Test",
      yearStart:"2000",
      yearEnd:"0",
      role:"desarrollador",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa eveniet quo ab excepturi possimus animi consequatur molestiae, ea reiciendis?"
    }
  ]

  worksList.forEach((work) => {
    worksArticle.innerHTML += `
    <div>
      <div class= "cont-name-work">
        <h3><a href="">${work.name}</a></h3>
        <h4>${work.yearStart} - ${work.yearEnd != 0 ? work.yearEnd : "Actualidad"}</h4>
      </div>
      <h4>${work.role}</h4>
      <p>${work.description}</p>
    </div>`
  });
}

const renderStudy = () => {
  const studyList = [
    {
      name:"Universidad Tecnológica Nacional",
      yearStart:"2023",
      yearEnd:"0",
      role:"Fullstack developer",
      description:"Fundamentos de programación y algoritmos, HTML, CSS y JavaScript. Librerías Frontend y lenguaje de backend. Construcción de APIs y servicios web"
    }
  ]

  studyList.forEach((studies) => {
    education.innerHTML += `
    <div>
      <div class= "cont-name-study">
        <h3><a href="">${studies.name}</a></h3>
        <h4>${studies.yearStart} - ${studies.yearEnd != 0 ? studies.yearEnd : "Actualidad"}</h4>
      </div>
      <h4>${studies.role}</h4>
      <p>${studies.description}</p>
    </div>`
  });
}

const renderProjects = () => {
  
  const projectsList = [
    {
      title: "Proyecto 1",
      status: 1,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, impedit.",
      tags: ["Lorem ipsum dolor", "En desarrollo"]
    },
    {
      title: "Proyecto 2",
      status: 0,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, impedit.",
      tags: ["Lorem ipsum dolor", "En desarrollo"]
    }
  ]

  projectsList.forEach((project) => {
    projects.innerHTML += `
      <div class="project">
        <div class="project-header">
          <h3><a href="https://google.com" target="_blank">${project.title}</a></h3>
          <span class="${project.status === 1 ? 'production' : ''}"></span>
        </div>
        <p>${project.description}</p>
        <ul>${project.tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>
      </div>`
  });
}

renderSocialLinks()
renderWorks()
renderStudy()
renderProjects()
