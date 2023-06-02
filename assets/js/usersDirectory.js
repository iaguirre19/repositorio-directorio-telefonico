function fillProfileData(users) {
    
    const container = document.getElementById('profiles-container');
  
    let i = 1;
  
    users.forEach(function(user) {
      const profile = document.createElement('a');
      profile.className = 'card_profile';
      profile.href = '#';
  

      const checkbox = document.createElement('input');
      checkbox.className = 'check-box-directory';
      checkbox.type = 'checkbox';
      checkbox.id = `check${i}`;
      profile.appendChild(checkbox);
  
      const profileContent = document.createElement('div');
      profileContent.className = 'card_content-profile';
      profile.appendChild(profileContent);
  
      const profileImg = document.createElement('img');
      profileImg.src = user.imgSrc;
      profileImg.alt = 'img profile';
      profileImg.width = '20px';
      profileContent.appendChild(profileImg);
  
      const profileData = document.createElement('div');
      profileData.className = 'card_content-data';
  
      const profileName = document.createElement('h4');
      profileName.textContent = user.name;
      profileData.appendChild(profileName);
  
      const profileEmail = document.createElement('p');
      profileEmail.textContent = user.email;
      profileData.appendChild(profileEmail);
  
      profileContent.appendChild(profileData);
  

      const chevron = document.createElement('span');
      chevron.innerHTML = '<i class="bx bx-chevron-right"></i>';
      profile.appendChild(chevron);
  

      container.appendChild(profile);
      
      i = i + 1
    });
  }
  
  var users = [
    {
      imgSrc: 'https://cdn-1.motorsport.com/images/mgl/0mb95oa2/s400/lewis-hamilton-mercedes-1.webp',
      name: 'Lewis Hamilton',
      email: 'lewis.hamilton@mercedes.com'
    },
    {
      imgSrc: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/verstappen.jpg.img.1024.medium.jpg',
      name: 'Max Verstappen',
      email: 'verstappen@redbullracing.com'
    },
    {
      imgSrc: 'https://cdn.racingnews365.com/Riders/Bottas/_570x570_crop_center-center_none/f1_2023_vb_alf_lg.png?v=1677515876',
      name: 'Valtteri Bottas',
      email: 'valtteri.bottas@mercedes.com'
    },
    {
      imgSrc: 'https://cdn-4.motorsport.com/images/mgl/Yv854VL0/s800/charles-leclerc-ferrari-1.jpg',
      name: 'Charles Leclerc',
      email: 'charles.leclerc@ferrari.com'
    },
    {
      imgSrc: 'https://cdn.racingnews365.com/Riders/Norris/_570x570_crop_center-center_none/f1_2023_ln_mcl_lg.png?v=1677515203',
      name: 'Lando Norris',
      email: 'lando.norris@mclaren.com'
    },
    {
        imgSrc: 'https://cdn-1.motorsport.com/images/mgl/0mb95oa2/s400/lewis-hamilton-mercedes-1.webp',
        name: 'Lewis Hamilton',
        email: 'lewis.hamilton@mercedes.com'
      },
      {
        imgSrc: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/verstappen.jpg.img.1024.medium.jpg',
        name: 'Max Verstappen',
        email: 'verstappen@redbullracing.com'
      },
      {
        imgSrc: 'https://cdn.racingnews365.com/Riders/Bottas/_570x570_crop_center-center_none/f1_2023_vb_alf_lg.png?v=1677515876',
        name: 'Valtteri Bottas',
        email: 'valtteri.bottas@mercedes.com'
      },
      {
        imgSrc: 'https://cdn-4.motorsport.com/images/mgl/Yv854VL0/s800/charles-leclerc-ferrari-1.jpg',
        name: 'Charles Leclerc',
        email: 'charles.leclerc@ferrari.com'
      },
      {
        imgSrc: 'https://cdn-4.motorsport.com/images/mgl/Yv854VL0/s800/charles-leclerc-ferrari-1.jpg',
        name: 'Charles Leclerc',
        email: 'charles.leclerc@ferrari.com'
      },
      {
        imgSrc: 'https://cdn-4.motorsport.com/images/mgl/Yv854VL0/s800/charles-leclerc-ferrari-1.jpg',
        name: 'Charles Leclerc',
        email: 'charles.leclerc@ferrari.com'
      },
      {
        imgSrc: 'https://cdn-4.motorsport.com/images/mgl/Yv854VL0/s800/charles-leclerc-ferrari-1.jpg',
        name: 'Charles Leclerc',
        email: 'charles.leclerc@ferrari.com'
      },
      {
        imgSrc: 'https://cdn.racingnews365.com/Riders/Norris/_570x570_crop_center-center_none/f1_2023_ln_mcl_lg.png?v=1677515203',
        name: 'Lando Norris',
        email: 'lando.norris@mclaren.com'
      }
  ];
  
  // Ejemplo de uso de la función fillProfileData
  fillProfileData(users);

  
  