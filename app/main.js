const socialList = document.getElementById("social-list");



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

renderSocialLinks()

